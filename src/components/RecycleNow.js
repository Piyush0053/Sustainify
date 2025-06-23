import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

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
      setTimeout(() => {
        navigate('/thanks');
      }, 1500);
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to process. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const materialTypes = [
    { value: 'General Items', icon: '📄', description: 'Paper, plastic, metal items' },
    { value: 'Electronics', icon: '📱', description: 'Phones, computers, appliances' },
    { value: 'Medical Items', icon: '💊', description: 'Medical waste and equipment' },
    { value: 'Automobiles', icon: '🚗', description: 'Car parts and vehicles' }
  ];

  const basePrice = parseFloat(formData.weight) * 50 || 0;
  const total = basePrice;

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your <span className="gradient-text">Pickup</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fill out the form below to schedule a convenient pickup time for your recyclable materials. 
              Get instant quotes and earn money while helping the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6 text-white">Pickup Details</h2>
                
                {showRecyclingOptions && (
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <p className="text-green-400 font-medium">Lightweight Item Detected!</p>
                        <p className="text-gray-300 text-sm">Your item weighs less than 10kg. Consider recycling it at home for maximum environmental impact.</p>
                      </div>
                    </div>
                    <button className="btn btn-outline mt-3 text-sm">
                      Explore Home Recycling Options
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Contact Number</label>
                      <input
                        type="tel"
                        name="contact"
                        className="form-input"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label">Pickup Date</label>
                      <input
                        type="date"
                        name="date"
                        className="form-input"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Preferred Time</label>
                      <input
                        type="time"
                        name="time"
                        className="form-input"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="form-group">
                    <label className="form-label">Pickup Address</label>
                    <textarea
                      name="address"
                      className="form-input"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete address"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      className="form-input"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter your area pincode"
                      pattern="[0-9]{6}"
                      required
                    />
                  </div>

                  {/* Material Type */}
                  <div className="form-group">
                    <label className="form-label">Material Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {materialTypes.map((type) => (
                        <label key={type.value} className="cursor-pointer">
                          <input
                            type="radio"
                            name="materialType"
                            value={type.value}
                            checked={formData.materialType === type.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`p-4 rounded-lg border-2 transition-all ${
                            formData.materialType === type.value
                              ? 'border-indigo-500 bg-indigo-500/10'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}>
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{type.icon}</span>
                              <div>
                                <div className="font-medium text-white">{type.value}</div>
                                <div className="text-sm text-gray-400">{type.description}</div>
                              </div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Weight */}
                  <div className="form-group">
                    <label className="form-label">Estimated Weight (kg)</label>
                    <input
                      type="number"
                      name="weight"
                      className="form-input"
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="Enter estimated weight"
                      min="0"
                      step="0.1"
                      required
                    />
                  </div>

                  {/* Submit Message */}
                  {submitMessage && (
                    <div className={`p-4 rounded-lg ${
                      submitMessage.type === 'success'
                        ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}>
                      {submitMessage.text}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-full text-lg py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="spinner"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      'Schedule Pickup'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Calculator */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-white">Price Estimate</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Base Rate (₹50/kg)</span>
                    <span className="text-white">₹{basePrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pickup Charge</span>
                    <span className="text-green-400">Free</span>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-white">Total Estimate</span>
                      <span className="gradient-text">₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-400 text-sm">
                    💡 Final price may vary based on actual weight and material quality
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <div>
                      <div className="text-white font-medium">Best Market Rates</div>
                      <div className="text-gray-400 text-sm">Competitive pricing for all materials</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <div>
                      <div className="text-white font-medium">Instant Payment</div>
                      <div className="text-gray-400 text-sm">Get paid immediately after pickup</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <div>
                      <div className="text-white font-medium">Eco-Friendly</div>
                      <div className="text-gray-400 text-sm">100% responsible recycling</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="card bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
                <h3 className="text-xl font-bold mb-4 text-white">Need Help?</h3>
                <p className="text-gray-300 mb-4">
                  Our support team is here to assist you with any questions about the pickup process.
                </p>
                <button className="btn btn-outline w-full">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecycleNow;