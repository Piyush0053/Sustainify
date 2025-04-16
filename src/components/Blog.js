import React, { useState } from 'react';
import './Blog.css';

const icons = [
  '♻️', // Recycle
  '🌳', // Tree
  '💧', // Droplet
  '☀️', // Sun
  '🚴', // Bike
  '🗑️', // Trash2
  '🍃', // Leaf
  '🧹', // Broom
  '📖', // BookOpen
  '🌍'  // Globe
];

const blogCards = [
  {
    title: "Reduce, Reuse, Recycle",
    content: "Contribute to a healthier planet by adopting the 3 Rs in your daily life. Reduce waste, reuse items, and recycle materials to minimize your environmental impact.",
    icon: icons[0]
  },
  {
    title: "Plant Trees",
    content: "Help combat deforestation and climate change by participating in tree-planting initiatives. Trees absorb carbon dioxide and provide essential oxygen for a sustainable environment.",
    icon: icons[1]
  },
  {
    title: "Conserve Water",
    content: "Be mindful of your water usage. Simple actions like fixing leaks and using water-efficient appliances can contribute to water conservation and the preservation of aquatic ecosystems.",
    icon: icons[2]
  },
  {
    title: "Sustainable Energy",
    content: "Support and use renewable energy sources such as solar and wind power to reduce reliance on fossil fuels and decrease your carbon footprint.",
    icon: icons[3]
  },
  {
    title: "Eco-Friendly Transportation",
    content: "Opt for eco-friendly transportation methods like biking, walking, or using electric vehicles to reduce air pollution and promote a greener environment.",
    icon: icons[4]
  },
  {
    title: "Waste Reduction",
    content: "Minimize waste by choosing products with minimal packaging and practicing responsible disposal methods, such as composting and proper recycling.",
    icon: icons[5]
  },
  {
    title: "Renewable Resources",
    content: "Support industries that prioritize the use of renewable resources, such as bamboo, hemp, and recycled materials, to reduce the environmental impact of production.",
    icon: icons[6]
  },
  {
    title: "Community Cleanups",
    content: "Participate in local community cleanups to help keep public spaces, parks, and natural habitats free from litter and pollution.",
    icon: icons[7]
  },
  {
    title: "Educate and Advocate",
    content: "Spread awareness about environmental issues and advocate for sustainable practices in your community. Education is key to creating positive change.",
    icon: icons[8]
  }
];

const Blog = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="blog-container">
      <header>
        <h1>Sustainify Nature</h1>
      </header>
      <div className="card-container">
        {blogCards.map((card, index) => (
          <div
            className={`card${hovered === index ? ' card-hovered' : ''}`}
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ transition: 'transform 0.3s, box-shadow 0.3s', transform: hovered === index ? 'scale(1.05)' : 'scale(1)' }}
          >
            <div className="card-icon" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{card.icon}</div>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
