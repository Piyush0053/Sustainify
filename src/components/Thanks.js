import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Thanks.css';

const Thanks = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="thanks-container">
      <div className="thanks-card">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L12 14.01L9 11.01" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1>Thank You!</h1>
        <div className="divider"></div>
        <h2>Your Request Has Been Successfully Submitted</h2>
        <p className="message">Our team has received your recycling request and is processing it now. You'll receive a confirmation email shortly with details about the scheduled pickup of your recyclables.</p>
        <div className="info-box">
          <div className="info-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8H12.01" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p>What happens next?</p>
          <ul>
            <li>You'll receive a confirmation email within 24 hours</li>
            <li>Our team will contact you to confirm pickup details</li>
            <li>Your recyclables will be collected at the scheduled time</li>
          </ul>
        </div>
        <div className="actions">
          <Link to="/" className="back-button">Return to Home</Link>
          <Link to="/contact" className="contact-button">Contact Support</Link>
        </div>
      </div>
      <div className="trust-badges">
        <div className="badge">
          <span>Trusted by</span>
          <span className="badge-number">10,000+</span>
          <span>customers</span>
        </div>
        <div className="badge">
          <span>Over</span>
          <span className="badge-number">500 tons</span>
          <span>recycled</span>
        </div>
        <div className="badge">
          <span>Certified</span>
          <span className="badge-number">Green</span>
          <span>business</span>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
