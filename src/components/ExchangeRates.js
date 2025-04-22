import React, { useRef, useEffect, useState } from 'react';
import './ExchangeRates.css';

const categories = [
  {
    title: 'General Items',
    icon: '♻️',
    items: [
      { name: 'Paper (Newspaper)', rate: 16 },
      { name: 'Paper (Books/Magazines)', rate: 12 },
      { name: 'Cardboard / Cartons', rate: 7 },
      { name: 'Plastic (PET Bottles)', rate: 10 },
      { name: 'Plastic (Hard Plastic)', rate: 8 },
      { name: 'Plastic (Milk Covers)', rate: 2 },
      { name: 'Iron', rate: 27 },
      { name: 'Glass (Bottles - Mixed)', rate: 1 },
      { name: 'Aluminium (Cans/Utensils)', rate: 105 },
      { name: 'Aluminium (Wire/Sheet)', rate: 110 },
      { name: 'Steel', rate: 37 },
      { name: 'Copper (Wire)', rate: 425 },
      { name: 'Copper (Utensils)', rate: 400 },
      { name: 'Brass', rate: 300 },
      { name: 'Tin', rate: 15 },
    ]
  },
  {
    title: 'E-Waste & Appliances',
    icon: '🔌',
    items: [
      { name: 'Air Conditioner (1 Ton)', rate: 4000 },
      { name: 'Air Conditioner (1.5 Ton)', rate: 5000 },
      { name: 'Washing Machine (Top Load)', rate: 600 },
      { name: 'Washing Machine (Front Load)', rate: 800 },
      { name: 'Geyser', rate: 50 },
      { name: 'Refrigerator (Single Door)', rate: 1000 },
      { name: 'Refrigerator (Double Door)', rate: 1500 },
      { name: 'Cooler (Iron Body)', rate: 500 },
      { name: 'Cooler (Plastic Body)', rate: 200 },
      { name: 'Television (CRT)', rate: 150 },
      { name: 'Television (LCD/LED)', rate: 200 },
      { name: 'Microwave', rate: 200 },
      { name: 'Computer (CPU)', rate: 250 },
      { name: 'Computer (Monitor CRT)', rate: 100 },
      { name: 'Computer (Monitor LCD/LED)', rate: 150 },
      { name: 'Laptop', rate: 300 },
      { name: 'Printer/Scanner', rate: 50 },
      { name: 'Mobile Phone (Smartphone)', rate: 10 },
      { name: 'Mobile Phone (Feature)', rate: 5 },
      { name: 'Other Electronics', rate: 'Negotiable' }
    ]
  },
  {
    title: 'Batteries',
    icon: '🔋',
    items: [
      { name: 'Lead-Acid Battery (Inverter)', rate: 70 },
      { name: 'Lead-Acid Battery (Car/Bike)', rate: 65 },
      { name: 'Lithium-Ion Battery', rate: 'TBA' },
      { name: 'Dry Cell Battery', rate: 'TBA' },
    ]
  },
   {
    title: 'Tyres',
    icon: '⚫',
    items: [
      { name: 'Car Tyre', rate: '5 per piece' },
      { name: 'Bike Tyre', rate: '3 per piece' },
      { name: 'Truck Tyre', rate: '10 per piece' },
    ]
  },
  {
    title: 'Medical Items',
    icon: '💊',
    items: [
      { name: 'Blister packs', rate: 'TBA' },
      { name: 'Plastic bottle (Medicine)', rate: 10 },
      { name: 'Glass Bottle (Medicine)', rate: 'TBA' },
      { name: 'X-Ray Films', rate: 20 },
      { name: 'Hospital Equipments', rate: 'Negotiable' }
    ]
  },
  {
    title: 'Automobiles',
    icon: '🚗',
    items: [
      { name: 'Car (Small)', rate: 20000 },
      { name: 'Car (Medium)', rate: 25000 },
      { name: 'Car (Large)', rate: 30000 },
      { name: 'Bike/Scooter', rate: 2100 }
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
    
    const currentRef = categoryRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
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
