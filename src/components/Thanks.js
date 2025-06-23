import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSteps = [
    {
      icon: '📧',
      title: 'Confirmation Email',
      description: 'You\'ll receive a detailed confirmation email within 24 hours',
      time: 'Within 24 hours'
    },
    {
      icon: '📞',
      title: 'Team Contact',
      description: 'Our team will call to confirm pickup details and timing',
      time: 'Next business day'
    },
    {
      icon: '🚚',
      title: 'Pickup & Payment',
      description: 'We\'ll collect your items and process instant payment',
      time: 'Scheduled time'
    }
  ];

  const benefits = [
    { icon: '🌱', title: 'Environmental Impact', value: '2.5 kg CO₂', description: 'Carbon footprint reduced' },
    { icon: '💰', title: 'Earnings', value: '₹150+', description: 'Average per pickup' },
    { icon: '♻️', title: 'Materials Recycled', value: '95%', description: 'Recycling efficiency' }
  ];

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
              <span className="gradient-text">Success!</span> 🎉
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 animate-fadeIn">
              Your pickup request has been submitted successfully
            </p>

            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 animate-fadeIn">
              <span className="status-dot status-online"></span>
              <span className="text-green-400 font-medium">Request ID: #SP{Date.now().toString().slice(-6)}</span>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                  <div className="text-xs text-indigo-400 font-medium">{step.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <div className="text-2xl font-bold gradient-text mb-1">{benefit.value}</div>
                <div className="text-white font-medium mb-1">{benefit.title}</div>
                <div className="text-gray-400 text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/" className="btn btn-primary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return to Home
            </Link>
            <Link to="/recycle" className="btn btn-secondary">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8l-8-8-8 8" />
              </svg>
              Schedule Another Pickup
            </Link>
          </div>

          {/* Support Information */}
          <div className="card bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-gray-300 mb-6">
              Our support team is available 24/7 to assist you with any questions about your pickup request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+911800123456" className="btn btn-outline">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Support
              </a>
              <a href="mailto:support@sustainify.com" className="btn btn-outline">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;