import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './RecycleAnalysis.css';
import { analyzeImageWithGemini } from '../utils/geminiApi';

const RecycleAnalysis = () => {
  const [images, setImages] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  // Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Validate files (only images allowed)
    const validFiles = selectedFiles.filter(file => 
      file.type.startsWith('image/')
    );
    
    if (validFiles.length !== selectedFiles.length) {
      setError('Please upload only image files.');
      return;
    }
    
    // Create preview URLs for the images
    const newImages = validFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    
    setImages(prevImages => [...prevImages, ...newImages]);
    setError(null);
  };

  // Function to handle drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    
    // Validate files (only images allowed)
    const validFiles = droppedFiles.filter(file => 
      file.type.startsWith('image/')
    );
    
    if (validFiles.length !== droppedFiles.length) {
      setError('Please upload only image files.');
      return;
    }
    
    // Create preview URLs for the images
    const newImages = validFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    
    setImages(prevImages => [...prevImages, ...newImages]);
    setError(null);
  };

  // Prevent default behavior for drag events
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Function to remove an image
  const removeImage = (index) => {
    setImages(prevImages => {
      const updatedImages = [...prevImages];
      // Revoke the object URL to avoid memory leaks
      URL.revokeObjectURL(updatedImages[index].preview);
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  // Function to trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Function to analyze images
  const analyzeImages = async () => {
    if (images.length === 0) {
      setError('Please upload at least one image to analyze.');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      // Process each image with the Gemini API
      const analysisPromises = images.map(async (image, index) => {
        try {
          const result = await analyzeImageWithGemini(image.file);
          
          return {
            id: index,
            name: image.file.name.split('.')[0], // Extract filename without extension
            type: result.itemType || 'Recyclable item',
            suggestions: result.suggestions || [
              'Check local recycling guidelines for proper disposal',
              'Consider repurposing for creative DIY projects',
              'Clean thoroughly before recycling',
              'Separate different materials if applicable'
            ],
            imagePreview: image.preview
          };
        } catch (error) {
          console.error(`Error analyzing image ${index}:`, error);
          
          // Return a fallback result if analysis fails
          return {
            id: index,
            name: image.file.name.split('.')[0],
            type: 'Recyclable item',
            suggestions: [
              'Could not analyze this item. Please try again.',
              'Check local recycling guidelines for proper disposal',
              'Consider repurposing for creative DIY projects',
              'Clean thoroughly before recycling'
            ],
            imagePreview: image.preview,
            error: true
          };
        }
      });
      
      // Wait for all analyses to complete
      const results = await Promise.all(analysisPromises);
      
      setAnalysisResults({
        items: results
      });
    } catch (error) {
      console.error('Error during analysis:', error);
      setError(`Analysis failed: ${error.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Clean up object URLs when component unmounts
  React.useEffect(() => {
    return () => {
      images.forEach(image => {
        URL.revokeObjectURL(image.preview);
      });
    };
  }, [images]);

  return (
    <div className="recycle-analysis-container">
      <div className="recycle-analysis-header">
        <h1>Recycle Analysis</h1>
        <p>Upload images of items you want to recycle at home and get personalized suggestions</p>
      </div>

      {!analysisResults ? (
        <div className="upload-section">
          <div 
            className="drop-zone" 
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={handleUploadClick}
          >
            <div className="drop-zone-content">
              <div className="upload-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Drag & Drop Images Here</h3>
              <p>or click to browse files</p>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple
                style={{ display: 'none' }}
              />
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          {images.length > 0 && (
            <div className="preview-section">
              <h3>Selected Images ({images.length})</h3>
              <div className="image-previews">
                {images.map((image, index) => (
                  <div key={index} className="image-preview-item">
                    <img src={image.preview} alt={`Preview ${index}`} />
                    <button 
                      className="remove-image-btn"
                      onClick={() => removeImage(index)}
                    >
                      ×
                    </button>
                    <div className="image-name">{image.file.name}</div>
                  </div>
                ))}
              </div>
              <button 
                className="analyze-button"
                onClick={analyzeImages}
                disabled={isAnalyzing}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Images'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="results-section">
          <div className="results-header">
            <h2>Recycling Suggestions</h2>
            <p>Based on your uploaded images, here are some ways to recycle these items at home:</p>
          </div>

          <div className="results-grid">
            {analysisResults.items.map((item) => (
              <div key={item.id} className={`result-card ${item.error ? 'error-card' : ''}`}>
                <div className="result-image">
                  <img src={item.imagePreview} alt={item.name} />
                </div>
                <div className="result-content">
                  <h3>{item.type}</h3>
                  <p className="item-name">{item.name}</p>
                  <h4>Recycling Ideas:</h4>
                  <ul className="suggestions-list">
                    {item.suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="results-actions">
            <button 
              className="new-analysis-button"
              onClick={() => {
                setImages([]);
                setAnalysisResults(null);
              }}
            >
              Start New Analysis
            </button>
            <Link to="/" className="home-button">
              Return to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecycleAnalysis;
