/**
 * Utility functions for interacting with the Google Gemini API
 */

/**
 * Analyzes an image using Google Gemini API and returns recycling suggestions
 * @param {File} imageFile - The image file to analyze
 * @returns {Promise<Object>} - The analysis results
 */
export const analyzeImageWithGemini = async (imageFile) => {
  try {
    // Get the API key from environment variables
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    
    if (!apiKey || apiKey === 'AIzaSyCrycowPbBTlTSSgN5L9KxQgSqfOARSXTY') {
      throw new Error('Please set your Gemini API key in the .env file');
    }

    // Convert the image to base64
    const base64Image = await fileToBase64(imageFile);
    
    // Prepare the request to Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "Analyze this image and provide suggestions for how to recycle this item at home. Focus on practical, creative ways to reuse or repurpose the item. Format your response as a JSON object with the following structure: { itemType: 'string', suggestions: ['string', 'string', ...] }"
              },
              {
                inline_data: {
                  mime_type: imageFile.type,
                  data: base64Image.split(',')[1] // Remove the data URL prefix
                }
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          topK: 32,
          topP: 1,
          maxOutputTokens: 4096,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    
    // Extract the text response from Gemini
    const textResponse = data.candidates[0]?.content?.parts[0]?.text;
    
    if (!textResponse) {
      throw new Error('No response received from Gemini API');
    }
    
    // Parse the JSON response from the text
    // The response might not be perfectly formatted JSON, so we need to extract it
    try {
      // Try to find JSON in the response
      const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : null;
      
      if (jsonString) {
        return JSON.parse(jsonString);
      } else {
        // If no JSON found, create a structured response from the text
        return {
          itemType: 'Recyclable item',
          suggestions: textResponse.split('\n')
            .filter(line => line.trim().length > 0)
            .map(line => line.replace(/^[•\-*]\s*/, '').trim())
            .filter(line => line.length > 10 && !line.toLowerCase().includes('json'))
        };
      }
    } catch (parseError) {
      console.error('Error parsing Gemini response:', parseError);
      
      // Return a fallback structured response
      return {
        itemType: 'Recyclable item',
        suggestions: [
          'Clean and repurpose the item as a storage container',
          'Use in DIY craft projects',
          'Check local recycling guidelines for proper disposal',
          'Consider donating if the item is still in good condition'
        ]
      };
    }
  } catch (error) {
    console.error('Error analyzing image with Gemini:', error);
    throw error;
  }
};

/**
 * Converts a file to a base64 data URL
 * @param {File} file - The file to convert
 * @returns {Promise<string>} - A promise that resolves with the base64 data URL
 */
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
