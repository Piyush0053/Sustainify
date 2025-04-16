import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecycleOptionsPopup.css';

const RecycleOptionsPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleRecycleItemClick = () => {
    navigate('/recycle-analysis');
    onClose();
  };

  const handleSellClick = () => {
    navigate('/recycle');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="popup-header">
          <h2>What would you like to do?</h2>
        </div>
        <div className="popup-content">
          <p>Choose an option below to proceed with your recyclable items:</p>
          
          <div className="options-container">
            <div className="option-card">
              <div className="option-icon sell-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Continue to Sell</h3>
              <p>Sell your recyclable items and earn money</p>
              <button 
                className="option-button sell-button" 
                onClick={handleSellClick}
              >
                Continue to Sell
              </button>
            </div>
            
            <div className="option-card">
              <div className="option-icon recycle-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 19L12 14L17 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 9L12.5 5L16.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 5V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 7.5L15 3.5L11 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3.5H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Recycle Item</h3>
              <p>Get ideas on how to recycle your items at home</p>
              <button 
                className="option-button recycle-button" 
                onClick={handleRecycleItemClick}
              >
                Recycle Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecycleOptionsPopup;
