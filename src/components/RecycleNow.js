import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecycleNow.css';
import './RoutePage.css';
import RecycleOptionsPopup from './RecycleOptionsPopup';

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
  const [showPopup, setShowPopup] = useState(false);
  const [showRecyclingOptions, setShowRecyclingOptions] = useState(false);

  // Check if weight is less than 10kg to show recycling options
  useEffect(() => {
    const weight = parseFloat(formData.weight);
    if (!isNaN(weight) && weight > 0 && weight < 10) {
      setShowRecyclingOptions(true);
    } else {
      setShowRecyclingOptions(false);
    }
  }, [formData.weight]);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

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
      // Log form data to console but don't send to server
      console.log('Form data:', formData);
      
      // Show success message
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
    } catch (error) {
      console.error('Error processing form:', error);
      setSubmitMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to process. Please try again.'
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
  const deliveryCharge = 0;
  const packagingFee = 0;
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
    <div className="route-page bg-gray-50">
      <div className="route-page-container">
        <div className="route-page-header">
          <h1>Recycle Now</h1>
          <p>Schedule a pickup for your recyclable items and get paid for them.</p>
        </div>
        
        <div className="route-page-content">
          <div className="grid-container grid-container-2">
            <div className="route-section">
              <h2 className="route-section-title">Pickup Request Form</h2>
              
              {showRecyclingOptions && (
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mb-6">
                  <p className="text-emerald-800">Your item weighs less than 10kg! Did you know you could recycle it at home?</p>
                  <button 
                    onClick={openPopup} 
                    className="btn btn-primary mt-2 bg-emerald-600 hover:bg-emerald-700"
                  >
                    Explore Recycling Options
                  </button>
                </div>
              )}
              
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
                      className="form-control"
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
                      className="form-control"
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
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
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
                      className="form-control"
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
                        className="form-control"
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
                        className="form-control"
                        value={formData.weight}
                        onChange={handleChange}
                        min="0"
                        step="0.1"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {submitMessage && (
                  <div className={`message-box ${submitMessage.type}`}>
                    {submitMessage.text}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary bg-emerald-600 hover:bg-emerald-700" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
            
            <div className="route-section">
              <h2 className="route-section-title">Recycling Rates</h2>
              <p className="mb-4">Check the current rates for different types of recyclable materials.</p>
              
              <div className="rate-categories bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
                <button 
                  className={`btn ${selectedRateCategory === 'generalItems' ? 'btn-primary bg-emerald-600' : 'bg-gray-200 text-gray-700'} mr-2 mb-2`}
                  onClick={() => handleRateCategoryChange('generalItems')}
                >
                  General Items
                </button>
                <button 
                  className={`btn ${selectedRateCategory === 'medicalWaste' ? 'btn-primary bg-emerald-600' : 'bg-gray-200 text-gray-700'} mr-2 mb-2`}
                  onClick={() => handleRateCategoryChange('medicalWaste')}
                >
                  Medical Waste
                </button>
                <button 
                  className={`btn ${selectedRateCategory === 'appliances' ? 'btn-primary bg-emerald-600' : 'bg-gray-200 text-gray-700'} mr-2 mb-2`}
                  onClick={() => handleRateCategoryChange('appliances')}
                >
                  Appliances
                </button>
                <button 
                  className={`btn ${selectedRateCategory === 'automobile' ? 'btn-primary bg-emerald-600' : 'bg-gray-200 text-gray-700'} mr-2 mb-2`}
                  onClick={() => handleRateCategoryChange('automobile')}
                >
                  Automobile
                </button>
              </div>
              
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Rate (₹/kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recyclableRates[selectedRateCategory].map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="price-calculator card mt-6">
                <h3 className="text-lg font-semibold text-emerald-700 mb-3">Price Calculator</h3>
                <div className="price-details">
                  <div className="price-row">
                    <span>Base Price:</span>
                    <span>₹{basePrice.toFixed(2)}</span>
                  </div>
                  <div className="price-row">
                    <span>Pickup Charge:</span>
                    <span>₹{deliveryCharge.toFixed(2)}</span>
                  </div>
                  <div className="price-row">
                    <span>Handling Fee:</span>
                    <span>₹{packagingFee.toFixed(2)}</span>
                  </div>
                  <div className="price-row total">
                    <span>Total:</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showPopup && (
        <RecycleOptionsPopup onClose={closePopup} />
      )}
    </div>
  );
};

export default RecycleNow;
