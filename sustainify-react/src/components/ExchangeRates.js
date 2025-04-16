import React from 'react';
import './ExchangeRates.css';

const ExchangeRates = () => {
  const generalItems = [
    { name: 'Paper', rate: 16 },
    { name: 'Cardboard', rate: 7 },
    { name: 'Plastic', rate: 10 },
    { name: 'Iron', rate: 27 },
    { name: 'Glass', rate: 'TBA' },
    { name: 'Aluminium', rate: 105 },
    { name: 'Steel', rate: 37 },
    { name: 'Copper', rate: 425 }
  ];

  const medicalItems = [
    { name: 'Blister packs', rate: 'TBA' },
    { name: 'Plastic bottle', rate: 10 },
    { name: 'Glass Bottle', rate: 'TBA' },
    { name: 'Hospital Equipments', rate: 'TBA' }
  ];

  const appliances = [
    { name: 'Air Conditioner', rate: 4000 },
    { name: 'Washing Machine', rate: 600 },
    { name: 'Geyser', rate: 50 },
    { name: 'Refrigerator', rate: 1000 },
    { name: 'Cooler', rate: 20 },
    { name: 'Television', rate: 150 },
    { name: 'Microwave', rate: 200 },
    { name: 'Other Electronics', rate: 'Negotiable' }
  ];

  const automobiles = [
    { name: 'Car', rate: 2000 },
    { name: 'Bike', rate: 2100 }
  ];

  const renderRateBox = (item) => {
    return (
      <div className="box" key={item.name}>
        <div className="box-text">{typeof item.rate === 'number' ? `(Rs.${item.rate}/kg)` : `(Rs.${item.rate})`}</div>
        <div className="box-text box-text1"><b>{item.name}</b></div>
      </div>
    );
  };

  return (
    <div className="rates-container">
      <div className="header">
        <h1>Recyclable Rates</h1>
      </div>

      <div className="content">
        <div className="scrolling-container">
          <div className="category">
            <h2>General Items</h2>
            {generalItems.map(item => renderRateBox(item))}
          </div>

          <div className="category">
            <h2>Medical Waste</h2>
            {medicalItems.map(item => renderRateBox(item))}
          </div>

          <div className="category">
            <h2>Appliances</h2>
            {appliances.map(item => renderRateBox(item))}
          </div>

          <div className="category">
            <h2>Automobile</h2>
            {automobiles.map(item => renderRateBox(item))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRates;
