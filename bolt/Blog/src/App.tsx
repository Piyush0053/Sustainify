import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Droplet, Sun, Bike, Trash2, Trees as Tree, Chrome as Broom, BookOpen, Globe } from 'lucide-react';

interface Card {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Reduce, Reuse, Recycle",
    description: "Contribute to a healthier planet by adopting the 3 Rs in your daily life. Reduce waste, reuse items, and recycle materials to minimize your environmental impact.",
    icon: <Recycle className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 2,
    title: "Plant Trees",
    description: "Help combat deforestation and climate change by participating in tree-planting initiatives. Trees absorb carbon dioxide and provide essential oxygen for a sustainable environment.",
    icon: <Tree className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 3,
    title: "Conserve Water",
    description: "Be mindful of your water usage. Simple actions like fixing leaks and using water-efficient appliances can contribute to water conservation and the preservation of aquatic ecosystems.",
    icon: <Droplet className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 4,
    title: "Sustainable Energy",
    description: "Support and use renewable energy sources such as solar and wind power to reduce reliance on fossil fuels and decrease your carbon footprint.",
    icon: <Sun className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 5,
    title: "Eco-Friendly Transportation",
    description: "Opt for eco-friendly transportation methods like biking, walking, or using electric vehicles to reduce air pollution and promote a greener environment.",
    icon: <Bike className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 6,
    title: "Waste Reduction",
    description: "Minimize waste by choosing products with minimal packaging and practicing responsible disposal methods, such as composting and proper recycling.",
    icon: <Trash2 className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 7,
    title: "Renewable Resources",
    description: "Support industries that prioritize the use of renewable resources, such as bamboo, hemp, and recycled materials, to reduce the environmental impact of production.",
    icon: <Leaf className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 8,
    title: "Community Cleanups",
    description: "Participate in local community cleanups to help keep public spaces, parks, and natural habitats free from litter and pollution.",
    icon: <Broom className="w-8 h-8 text-emerald-600" />
  },
  {
    id: 9,
    title: "Educate and Advocate",
    description: "Spread awareness about environmental issues and advocate for sustainable practices in your community. Education is key to creating positive change.",
    icon: <BookOpen className="w-8 h-8 text-emerald-600" />
  }
];

const cardVariants = {
  offscreen: {
    y: 150,
    opacity: 0
  },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.1
    }
  })
};

function App() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <motion.header 
        className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white py-16 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2013&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(50%)'
          }} />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-6 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <Globe className="w-16 h-16 mx-auto text-emerald-100" />
          </motion.div>

          <motion.h1 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Sustainify Nature
          </motion.h1>

          <motion.p
            className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Join us in our mission to create a sustainable future. Every small action counts towards making our planet greener and healthier for generations to come.
          </motion.p>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`bg-white rounded-xl shadow-lg p-6`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              custom={index}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div 
                className="flex items-center justify-center mb-4"
                animate={{ 
                  rotate: hoveredCard === card.id ? 360 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {card.icon}
              </motion.div>
              <h2 className="text-xl font-semibold text-emerald-800 mb-3 text-center">
                {card.title}
              </h2>
              <p className="text-emerald-600 text-center">
                {card.description}
              </p>
              <motion.button
                className="mt-4 w-full bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;