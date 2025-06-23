import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: '♻️',
      title: 'Smart Recycling',
      description: 'AI-powered analysis to maximize your recyclable value',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive rates for all types of recyclable materials',
      gradient: 'from-yellow-400 to-orange-600'
    },
    {
      icon: '🚚',
      title: 'Free Pickup',
      description: 'Convenient doorstep collection at no extra cost',
      gradient: 'from-blue-400 to-cyan-600'
    },
    {
      icon: '🌱',
      title: 'Eco Impact',
      description: 'Track your environmental contribution in real-time',
      gradient: 'from-purple-400 to-pink-600'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '1M+', label: 'Kg Recycled' },
    { number: '₹10Cr+', label: 'Paid to Users' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  const steps = [
    {
      step: '01',
      title: 'Schedule Pickup',
      description: 'Book a convenient time slot through our platform',
      icon: '📅'
    },
    {
      step: '02',
      title: 'We Collect',
      description: 'Our team arrives and weighs your recyclables',
      icon: '⚖️'
    },
    {
      step: '03',
      title: 'Get Paid',
      description: 'Receive instant payment via your preferred method',
      icon: '💳'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-6xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Recycle.</span>
              <br />
              <span className="text-white">Earn.</span>
              <br />
              <span className="gradient-text">Sustain.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your waste into wealth with India's most advanced recycling platform. 
              Get the best prices, instant payments, and make a real environmental impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/recycle" className="btn btn-primary text-lg px-8 py-4">
                Start Recycling Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to="/rates" className="btn btn-secondary text-lg px-8 py-4">
                Check Rates
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-black/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Sustainify</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of recycling with our cutting-edge platform designed for maximum convenience and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover-lift group">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get started in three simple steps and start earning from your recyclables today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 z-0"></div>
                )}
                
                <div className="card text-center relative z-10 hover-lift">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="text-sm font-bold text-indigo-400 mb-2">STEP {step.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/recycle" className="btn btn-primary text-lg px-8 py-4">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Make a <span className="gradient-text">Difference</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already earning money while helping the environment. 
            Start your recycling journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/recycle" className="btn btn-primary text-lg px-8 py-4">
              Book Your First Pickup
            </Link>
            <Link to="/blog" className="btn btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold gradient-text">Sustainify</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                India's leading recycling platform that connects users with the best prices for their recyclable materials while promoting environmental sustainability.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-gray-400">📧</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-gray-400">📱</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-gray-400">🐦</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/recycle" className="text-gray-400 hover:text-white transition-colors">Sell Scrap</Link></li>
                <li><Link to="/rates" className="text-gray-400 hover:text-white transition-colors">Current Rates</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Sustainify. All rights reserved. Made with 💚 for a sustainable future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;