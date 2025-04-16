import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecycleNow.css';

// Recyclable rates data from rates.html
const recyclableRates = {
  generalItems: [
    { name: 'Paper', rate: 16 },
    { name: 'Cardboard', rate: 7 },
    { name: 'Plastic', rate: 10 },
    { name: 'Iron', rate: 27 },
    { name: 'Glass', rate: 'TBA' },
    { name: 'Aluminium', rate: 105 },
    { name: 'Steel', rate: 37 },
    { name: 'Copper', rate: 425 }
  ],
  medicalWaste: [
    { name: 'Blister packs', rate: 'TBA' },
    { name: 'Plastic bottle', rate: 10 },
    { name: 'Glass Bottle', rate: 'TBA' },
    { name: 'Hospital Equipments', rate: 'TBA' }
  ],
  appliances: [
    { name: 'Air Conditioner', rate: 4000 },
    { name: 'Washing Machine', rate: 600 },
    { name: 'Geyser', rate: 50 },
    { name: 'Refrigerator', rate: 1000 },
    { name: 'Cooler', rate: 20 },
    { name: 'Television', rate: 150 },
    { name: 'Microwave', rate: 200 },
    { name: 'Other Electronics', rate: 'Negotiable' }
  ],
  automobile: [
    { name: 'Car', rate: 2000 },
    { name: 'Bike', rate: 2100 }
  ]
};

const RecycleNow = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
    address: '',
    pincode: '',
    materialType: 'General Items',
    weight: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [showRates, setShowRates] = useState(false);
  const [selectedRateCategory, setSelectedRateCategory] = useState('generalItems');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    console.log('Form submission started');

    // Client-side validation for required fields
    const requiredFields = ['name', 'contact', 'date', 'time', 'address', 'pincode'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setSubmitMessage({
        type: 'error',
        text: `Please fill in all required fields: ${missingFields.join(', ')}`
      });
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Sending form data to server:', formData);
      
      // Send data to the server as JSON
      let response;
      try {
        response = await fetch('http://localhost:5000/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (fetchError) {
        console.error('Network error:', fetchError);
        throw new Error('Could not connect to the server. Please check your internet connection and try again.');
      }
      
      // Check if response is ok
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error:', response.status, errorData);
        throw new Error(`Server error (${response.status}): ${JSON.stringify(errorData) || 'Unknown error'}`);
      }
      
      const result = await response.json();
      console.log('Server response:', result);
      
      if (result.success) {
        console.log('Form submission successful, preparing to redirect to Thanks page');
        setSubmitMessage({
          type: 'success',
          text: 'Your pickup request has been submitted successfully!'
        });
        
        // Reset form on success
        setFormData({
          name: '',
          contact: '',
          date: '',
          time: '',
          address: '',
          pincode: '',
          materialType: 'General Items',
          weight: '',
        });
        
        // Wait a moment before redirecting to thanks page
        console.log('Redirecting to Thanks page in 1.5 seconds...');
        setTimeout(() => {
          console.log('Navigating to /thanks');
          navigate('/thanks');
        }, 1500);
      } else {
        throw new Error(result.message || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to submit. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate price details
  const getBaseRate = () => {
    // Default rate if no specific rate is found
    return 50;
  };

  const basePrice = parseFloat(formData.weight) * getBaseRate() || 0;
  const deliveryCharge = 40;
  const packagingFee = 20;
  const total = basePrice + deliveryCharge + packagingFee;

  // Toggle rates display
  const toggleRates = () => {
    setShowRates(!showRates);
  };

  // Handle rate category change
  const handleRateCategoryChange = (category) => {
    setSelectedRateCategory(category);
  };

  return (
    <div className="recycle-container">
      <div className="recycle-content">
        <div className="recycle-main">
          {/* Main Form Section */}
          <div className="recycle-form-container">
            <h1 className="recycle-title">Pickup Request Form</h1>
            
            <form onSubmit={handleSubmit} className="recycle-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="icon name-icon"></span>Enter Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact">
                    <span className="icon phone-icon"></span>Enter Contact No:
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    id="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">
                    <span className="icon date-icon"></span>Enter Date:
                  </label>
                  <div className="input-with-icon">
                    <span className="input-icon date-icon"></span>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="time">
                    <span className="icon time-icon"></span>Enter Time:
                  </label>
                  <div className="input-with-icon">
                    <span className="input-icon time-icon"></span>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="address">
                    <span className="icon address-icon"></span>Enter Address:
                  </label>
                  <div className="input-with-icon">
                    <span className="input-icon address-icon"></span>
                    <textarea
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="pincode">
                    <span className="icon pincode-icon"></span>Enter Pincode:
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    id="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    pattern="[0-9]{6}"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="materialType">
                    <span className="icon material-icon"></span>Type of Material:
                  </label>
                  <div className="input-with-icon">
                    <span className="input-icon material-icon"></span>
                    <select
                      name="materialType"
                      id="materialType"
                      value={formData.materialType}
                      onChange={handleChange}
                    >
                      <option value="General Items">General Items</option>
                      <option value="Medical Items">Medical Items</option>
                      <option value="Appliances">Appliances</option>
                      <option value="Automobiles">Automobiles</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="weight">
                    <span className="icon weight-icon"></span>Estimated Weight (in Kg):
                  </label>
                  <div className="input-with-icon">
                    <span className="input-icon weight-icon"></span>
                    <input
                      type="number"
                      name="weight"
                      id="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      min="0"
                      step="0.1"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-actions">
                {submitMessage && (
                  <div className={`message ${submitMessage.type}`}>
                    {submitMessage.text}
                  </div>
                )}
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>

          {/* Price Details Section */}
          <div className="price-details">
            <div className="price-card">
              <h2 className="price-title">PRICE DETAILS</h2>
              <div className="price-items">
                <div className="price-item">
                  <span>Base Price (₹{getBaseRate()}/kg)</span>
                  <span>₹{basePrice.toFixed(2)}</span>
                </div>
                <div className="price-item">
                  <span>Delivery Charge</span>
                  <span className="green-text">₹{deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="price-item">
                  <span>Packaging Fee</span>
                  <span>₹{packagingFee.toFixed(2)}</span>
                </div>
                <div className="price-total">
                  <span>Total Amount</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="price-savings">
                  You will save ₹{(basePrice * 0.1).toFixed(2)} on this order
                </div>
              </div>
            </div>

            {/* Recyclable Rates Section */}
            <div className="rates-section">
              <button 
                className="rates-toggle-button" 
                onClick={toggleRates}
              >
                {showRates ? 'Hide Recyclable Rates' : 'Show Recyclable Rates'}
              </button>
              
              {showRates && (
                <div className="rates-container">
                  <h3 className="rates-title">Recyclable Rates</h3>
                  
                  <div className="rates-tabs">
                    <button 
                      className={selectedRateCategory === 'generalItems' ? 'active' : ''}
                      onClick={() => handleRateCategoryChange('generalItems')}
                    >
                      General Items
                    </button>
                    <button 
                      className={selectedRateCategory === 'medicalWaste' ? 'active' : ''}
                      onClick={() => handleRateCategoryChange('medicalWaste')}
                    >
                      Medical Waste
                    </button>
                    <button 
                      className={selectedRateCategory === 'appliances' ? 'active' : ''}
                      onClick={() => handleRateCategoryChange('appliances')}
                    >
                      Appliances
                    </button>
                    <button 
                      className={selectedRateCategory === 'automobile' ? 'active' : ''}
                      onClick={() => handleRateCategoryChange('automobile')}
                    >
                      Automobile
                    </button>
                  </div>
                  
                  <div className="rates-grid">
                    {recyclableRates[selectedRateCategory].map((item, index) => (
                      <div key={index} className="rate-item">
                        <div className="rate-name">{item.name}</div>
                        <div className="rate-value">₹{item.rate}/kg</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecycleNow;
