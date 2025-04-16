import React, { useRef, useEffect, useState } from 'react';
import './ExchangeRates.css';

const categories = [
  {
    title: 'General Items',
    icon: '♻️',
    items: [
      { name: 'Paper', rate: 16 },
      { name: 'Cardboard', rate: 7 },
      { name: 'Plastic', rate: 10 },
      { name: 'Iron', rate: 27 },
      { name: 'Glass', rate: 'TBA' },
      { name: 'Aluminium', rate: 105 },
      { name: 'Steel', rate: 37 },
      { name: 'Copper', rate: 425 }
    ]
  },
  {
    title: 'Medical Items',
    icon: '💊',
    items: [
      { name: 'Blister packs', rate: 'TBA' },
      { name: 'Plastic bottle', rate: 10 },
      { name: 'Glass Bottle', rate: 'TBA' },
      { name: 'Hospital Equipments', rate: 'TBA' }
    ]
  },
  {
    title: 'Appliances',
    icon: '🔌',
    items: [
      { name: 'Air Conditioner', rate: 4000 },
      { name: 'Washing Machine', rate: 600 },
      { name: 'Geyser', rate: 50 },
      { name: 'Refrigerator', rate: 1000 },
      { name: 'Cooler', rate: 20 },
      { name: 'Television', rate: 150 },
      { name: 'Microwave', rate: 200 },
      { name: 'Other Electronics', rate: 'Negotiable' }
    ]
  },
  {
    title: 'Automobiles',
    icon: '🚗',
    items: [
      { name: 'Car', rate: 2000 },
      { name: 'Bike', rate: 2100 }
    ]
  }
];

const RateBox = ({ title, rate, delay = 0, isVisible = false }) => (
  <div
    className={`box${isVisible ? ' box-animate' : ''}`}
    style={{
      transition: 'transform 0.3s, box-shadow 0.3s',
      transform: isVisible ? 'scale(1.05)' : 'scale(1)',
      animationDelay: `${delay}ms`,
      opacity: isVisible ? 1 : 0
    }}
  >
    <div className="box-text">{typeof rate === 'number' ? `(Rs.${rate}/kg)` : `(Rs.${rate})`}</div>
    <div className="box-text box-text1"><b>{title}</b></div>
  </div>
);

const Category = ({ title, icon, items }) => {
  const [isVisible, setIsVisible] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }
    return () => {
      if (categoryRef.current) observer.unobserve(categoryRef.current);
    };
  }, []);

  return (
    <div className="category" ref={categoryRef}>
      <h2>{icon} {title}</h2>
      <div className="category-items">
        {items.map((item, idx) => (
          <RateBox key={item.name} title={item.name} rate={item.rate} delay={idx * 100} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
};

const ExchangeRates = () => {
  return (
    <div className="rates-container">
      <div className="header">
        <h1>Recyclable Rates</h1>
      </div>
      <div className="content">
        <div className="scrolling-container">
          {categories.map((cat, idx) => (
            <Category key={cat.title} title={cat.title} icon={cat.icon} items={cat.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeRates;
