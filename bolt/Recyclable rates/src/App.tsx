import React, { useEffect, useRef, useState } from 'react';
import { Recycle, Syringe, Tv, Car } from 'lucide-react';

interface RateBoxProps {
  title: string;
  rate: string;
  delay?: number;
  isVisible?: boolean;
}

const RateBox: React.FC<RateBoxProps> = ({ title, rate, delay = 0, isVisible = false }) => (
  <div 
    className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-green-100 hover:border-green-300 ${isVisible ? 'animate-scaleIn' : ''}`}
    style={{ 
      animationDelay: `${delay}ms`,
      animationFillMode: 'forwards',
      opacity: isVisible ? 1 : 0
    }}
  >
    <div className="flex flex-col items-center space-y-3">
      <h3 className="text-lg font-semibold text-emerald-900">{title}</h3>
      <span className="text-emerald-600 font-bold bg-emerald-50 px-4 py-1 rounded-full">{rate}</span>
    </div>
  </div>
);

interface CategoryProps {
  title: string;
  icon: React.ReactNode;
  items: Array<{ title: string; rate: string }>;
}

const Category: React.FC<CategoryProps> = ({ title, icon, items }) => {
  const [isVisible, setIsVisible] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);

  return (
    <div ref={categoryRef} className="mb-16">
      <div className={`flex items-center space-x-4 mb-8 ${isVisible ? 'animate-slideIn' : ''}`}
           style={{ opacity: isVisible ? 1 : 0, animationFillMode: 'forwards' }}>
        <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
          {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 text-white" })}
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <RateBox
            key={item.title}
            title={item.title}
            rate={item.rate}
            delay={index * 100}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  const categories = [
    {
      title: "General Items",
      icon: <Recycle />,
      items: [
        { title: "Paper", rate: "Rs.16/kg" },
        { title: "Cardboard", rate: "Rs.7/kg" },
        { title: "Plastic", rate: "Rs.10/kg" },
        { title: "Iron", rate: "Rs.27/kg" },
        { title: "Glass", rate: "Rs.TBA/kg" },
        { title: "Aluminium", rate: "Rs.105/kg" },
        { title: "Steel", rate: "Rs.37/kg" },
        { title: "Copper", rate: "Rs.425/kg" }
      ]
    },
    {
      title: "Medical Waste",
      icon: <Syringe />,
      items: [
        { title: "Blister packs", rate: "Rs.TBA/kg" },
        { title: "Plastic bottle", rate: "Rs.10/kg" },
        { title: "Glass Bottle", rate: "Rs.TBA/kg" },
        { title: "Hospital Equipments", rate: "Rs.TBA/kg" }
      ]
    },
    {
      title: "Appliances",
      icon: <Tv />,
      items: [
        { title: "Air Conditioner", rate: "Rs.4000/kg" },
        { title: "Washing Machine", rate: "Rs.600/kg" },
        { title: "Geyser", rate: "Rs.50/kg" },
        { title: "Refrigerator", rate: "Rs.1000/kg" },
        { title: "Cooler", rate: "Rs.20/kg" },
        { title: "Television", rate: "Rs.150/kg" },
        { title: "Microwave", rate: "Rs.200/kg" },
        { title: "Other Electronics", rate: "Negotiable" }
      ]
    },
    {
      title: "Automobile",
      icon: <Car />,
      items: [
        { title: "Car", rate: "Rs.2000/kg" },
        { title: "Bike", rate: "Rs.2100/kg" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-5 mix-blend-overlay fixed"></div>
      
      <header className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 px-4">
        <div className="absolute inset-0 bg-grid-white/10 bg-[linear-gradient(to_right,#059669,#047857)] opacity-90"></div>
        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-5xl font-bold text-center mb-4 animate-fadeInUp">Recyclable Rates</h1>
          <p className="text-center text-lg text-emerald-100 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            Current market rates for recyclable materials
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 relative">
        {categories.map((category) => (
          <Category
            key={category.title}
            title={category.title}
            icon={category.icon}
            items={category.items}
          />
        ))}
      </main>
    </div>
  );
}

export default App;