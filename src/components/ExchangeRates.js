import React, { useState } from 'react';

const ExchangeRates = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const categories = {
    general: {
      title: 'General Items',
      icon: '♻️',
      color: 'from-green-400 to-emerald-600',
      items: [
        { name: 'Paper (Newspaper)', rate: 16, unit: 'kg', trend: 'up' },
        { name: 'Paper (Books/Magazines)', rate: 12, unit: 'kg', trend: 'stable' },
        { name: 'Cardboard / Cartons', rate: 7, unit: 'kg', trend: 'up' },
        { name: 'Plastic (PET Bottles)', rate: 10, unit: 'kg', trend: 'down' },
        { name: 'Plastic (Hard Plastic)', rate: 8, unit: 'kg', trend: 'stable' },
        { name: 'Iron', rate: 27, unit: 'kg', trend: 'up' },
        { name: 'Aluminium', rate: 105, unit: 'kg', trend: 'up' },
        { name: 'Steel', rate: 37, unit: 'kg', trend: 'stable' },
        { name: 'Copper', rate: 425, unit: 'kg', trend: 'up' },
        { name: 'Brass', rate: 300, unit: 'kg', trend: 'stable' }
      ]
    },
    electronics: {
      title: 'Electronics & Appliances',
      icon: '📱',
      color: 'from-blue-400 to-cyan-600',
      items: [
        { name: 'Air Conditioner (1 Ton)', rate: 4000, unit: 'piece', trend: 'up' },
        { name: 'Washing Machine', rate: 600, unit: 'piece', trend: 'stable' },
        { name: 'Refrigerator', rate: 1000, unit: 'piece', trend: 'up' },
        { name: 'Television (LCD/LED)', rate: 200, unit: 'piece', trend: 'down' },
        { name: 'Computer (CPU)', rate: 250, unit: 'piece', trend: 'stable' },
        { name: 'Laptop', rate: 300, unit: 'piece', trend: 'up' },
        { name: 'Mobile Phone', rate: 10, unit: 'piece', trend: 'stable' },
        { name: 'Microwave', rate: 200, unit: 'piece', trend: 'stable' }
      ]
    },
    medical: {
      title: 'Medical Waste',
      icon: '💊',
      color: 'from-red-400 to-pink-600',
      items: [
        { name: 'Blister Packs', rate: 'TBA', unit: 'kg', trend: 'stable' },
        { name: 'Plastic Bottles (Medicine)', rate: 10, unit: 'kg', trend: 'stable' },
        { name: 'Glass Bottles', rate: 'TBA', unit: 'kg', trend: 'stable' },
        { name: 'X-Ray Films', rate: 20, unit: 'kg', trend: 'up' },
        { name: 'Hospital Equipment', rate: 'Negotiable', unit: 'piece', trend: 'stable' }
      ]
    },
    automotive: {
      title: 'Automotive',
      icon: '🚗',
      color: 'from-purple-400 to-indigo-600',
      items: [
        { name: 'Car (Small)', rate: 20000, unit: 'piece', trend: 'up' },
        { name: 'Car (Medium)', rate: 25000, unit: 'piece', trend: 'up' },
        { name: 'Car (Large)', rate: 30000, unit: 'piece', trend: 'stable' },
        { name: 'Bike/Scooter', rate: 2100, unit: 'piece', trend: 'up' },
        { name: 'Car Tyre', rate: 5, unit: 'piece', trend: 'stable' },
        { name: 'Bike Tyre', rate: 3, unit: 'piece', trend: 'stable' }
      ]
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <span className="text-green-400">↗️</span>;
      case 'down':
        return <span className="text-red-400">↘️</span>;
      default:
        return <span className="text-gray-400">➡️</span>;
    }
  };

  const formatRate = (rate) => {
    if (typeof rate === 'string') return rate;
    return `₹${rate.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Current <span className="gradient-text">Recycling Rates</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with real-time pricing for all types of recyclable materials. 
            Our rates are competitive and updated daily based on market conditions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all ${
                selectedCategory === key
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Rates Grid */}
        <div className="max-w-6xl mx-auto">
          <div className={`bg-gradient-to-r ${categories[selectedCategory].color} p-1 rounded-xl mb-8`}>
            <div className="bg-black rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">{categories[selectedCategory].icon}</span>
                <h2 className="text-2xl font-bold text-white">{categories[selectedCategory].title}</h2>
                <div className="flex items-center space-x-2 ml-auto">
                  <span className="status-dot status-online"></span>
                  <span className="text-sm text-gray-400">Live Rates</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories[selectedCategory].items.map((item, index) => (
                  <div key={index} className="card hover-lift">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white text-sm leading-tight">{item.name}</h3>
                      {getTrendIcon(item.trend)}
                    </div>
                    
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-2xl font-bold gradient-text">
                          {formatRate(item.rate)}
                        </div>
                        <div className="text-xs text-gray-400">per {item.unit}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xs text-gray-400">Market Trend</div>
                        <div className={`text-xs font-medium ${
                          item.trend === 'up' ? 'text-green-400' : 
                          item.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                        }`}>
                          {item.trend === 'up' ? 'Rising' : 
                           item.trend === 'down' ? 'Falling' : 'Stable'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 text-xl">📈</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Market High</h3>
                  <p className="text-sm text-gray-400">Best performing material</p>
                </div>
              </div>
              <div className="text-2xl font-bold gradient-text">Copper</div>
              <div className="text-sm text-gray-400">₹425/kg (+5.2%)</div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 text-xl">⚖️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Most Traded</h3>
                  <p className="text-sm text-gray-400">Highest volume today</p>
                </div>
              </div>
              <div className="text-2xl font-bold gradient-text">Paper</div>
              <div className="text-sm text-gray-400">2,450 kg processed</div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Trending Up</h3>
                  <p className="text-sm text-gray-400">Rising demand</p>
                </div>
              </div>
              <div className="text-2xl font-bold gradient-text">Electronics</div>
              <div className="text-sm text-gray-400">+12% this week</div>
            </div>
          </div>

          {/* Rate Update Info */}
          <div className="card bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-indigo-400 text-xl">ℹ️</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Rate Update Information</h3>
                <p className="text-gray-300 mb-4">
                  Our rates are updated daily based on market conditions, material quality, and demand. 
                  Final prices may vary depending on the actual condition and quantity of materials.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="status-dot status-online"></span>
                    <span className="text-gray-400">Last updated: Today, 9:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="status-dot status-warning"></span>
                    <span className="text-gray-400">Next update: Tomorrow, 9:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRates;