import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogCards = [
    {
      title: "Reduce, Reuse, Recycle",
      content: "Contribute to a healthier planet by adopting the 3 Rs in your daily life. Reduce waste, reuse items, and recycle materials to minimize your environmental impact."
    },
    {
      title: "Plant Trees",
      content: "Help combat deforestation and climate change by participating in tree-planting initiatives. Trees absorb carbon dioxide and provide essential oxygen for a sustainable environment."
    },
    {
      title: "Conserve Water",
      content: "Be mindful of your water usage. Simple actions like fixing leaks and using water-efficient appliances can contribute to water conservation and the preservation of aquatic ecosystems."
    },
    {
      title: "Sustainable Energy",
      content: "Support and use renewable energy sources such as solar and wind power to reduce reliance on fossil fuels and decrease your carbon footprint."
    },
    {
      title: "Eco-Friendly Transportation",
      content: "Opt for eco-friendly transportation methods like biking, walking, or using electric vehicles to reduce air pollution and promote a greener environment."
    },
    {
      title: "Waste Reduction",
      content: "Minimize waste by choosing products with minimal packaging and practicing responsible disposal methods, such as composting and proper recycling."
    },
    {
      title: "Renewable Resources",
      content: "Support industries that prioritize the use of renewable resources, such as bamboo, hemp, and recycled materials, to reduce the environmental impact of production."
    },
    {
      title: "Community Cleanups",
      content: "Participate in local community cleanups to help keep public spaces, parks, and natural habitats free from litter and pollution."
    },
    {
      title: "Educate and Advocate",
      content: "Spread awareness about environmental issues and advocate for sustainable practices in your community. Education is key to creating positive change."
    }
  ];

  return (
    <div className="blog-container">
      <header>
        <h1>Sustainify Nature</h1>
      </header>

      <div className="card-container">
        {blogCards.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
