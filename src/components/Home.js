import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Services offered
  const services = [
    { name: 'Paper', icon: '📄', description: 'Newspapers, magazines, books, office paper' },
    { name: 'Plastic', icon: '🥤', description: 'PET bottles, containers, plastic packaging' },
    { name: 'Metal', icon: '🔧', description: 'Iron, steel, aluminum, copper, brass' },
    { name: 'Electronics', icon: '📱', description: 'E-waste, old appliances, computers' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="banner relative">
        <div className="hero-content animate-fadeIn">
          {/* <h1 className="text-6xl font-bold text-white mb-4">India's #1 Scrap Collection Service</h1> */}
          <p className="hero-subtitle">Sell your scrap at the best prices and contribute to a cleaner environment</p>
          <div className="hero-cta">
            <Link to="/recycle" className="btn btn-primary text-white">BOOK A PICKUP</Link>
            <Link to="/rates" className="btn btn-secondary">CHECK SCRAP RATES</Link>
          </div>
        </div>
      </div>

      <main>
        {/* Services Section */}
        <section className="features-section">
          <div className="page-container">
            <h2 className="text-3xl font-bold text-center mb-12">We Buy All Types of Scrap</h2>
            <div className="grid-container grid-container-4">
              {services.map((service, index) => (
                <div key={index} className="feature-card card animate-fadeIn" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                  <div className="card-icon">{service.icon}</div>
                  <h3 className="card-title">{service.name}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/recycle" className="btn btn-outline">Sell Your Scrap</Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="steps-section py-16">
          <div className="page-container">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid-container grid-container-3">
              <div className="card animate-fadeIn" style={{animationDelay: '0.1s'}}>
                <div className="step-number">1</div>
                <h3 className="card-title">Schedule Pickup</h3>
                <p className="text-neutral-600">Book a pickup online or call our customer service. Choose a time that's convenient for you.</p>
                <img src={require('../assets/images/1.png')} alt="Schedule Pickup" className="w-full h-48 object-none p-4 mt-4" />
              </div>
              <div className="card animate-fadeIn" style={{animationDelay: '0.2s'}}>
                <div className="step-number">2</div>
                <h3 className="card-title">We Collect & Weigh</h3>
                <p className="text-neutral-600">Our team arrives at your location, collects and weighs your scrap using calibrated scales.</p>
                <img src={require('../assets/images/2.png')} alt="Collect and Weigh" className="w-full h-48 object-none p-4 mt-4" />
              </div>
              <div className="card animate-fadeIn" style={{animationDelay: '0.3s'}}>
                <div className="step-number">3</div>
                <h3 className="card-title">Get Instant Payment</h3>
                <p className="text-neutral-600">Receive immediate payment via cash, bank transfer, or digital wallets based on current rates.</p>
                <img src={require('../assets/images/3.png')} alt="Get Paid" className="w-full h-48 object-none p-4 mt-4" />
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/recycle" className="btn btn-primary">Book Now</Link>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="bg-neutral-50 py-16">
          <div className="page-container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Sustainify</h2>
            <div className="grid-container grid-container-2">
              <div className="card animate-fadeIn" style={{animationDelay: '0.1s'}}>
                <div className="card-icon">⭐</div>
                <h3 className="card-title">Best Market Rates</h3>
                <p className="text-neutral-600">We offer competitive prices for all types of scrap materials, ensuring you get the best value.</p>
              </div>
              <div className="card animate-fadeIn" style={{animationDelay: '0.2s'}}>
                <div className="card-icon">🚚</div>
                <h3 className="card-title">Free Doorstep Pickup</h3>
                <p className="text-neutral-600">Our team comes to your location, saving you time and the hassle of transporting materials.</p>
              </div>
              <div className="card animate-fadeIn" style={{animationDelay: '0.3s'}}>
                <div className="card-icon">⚖️</div>
                <h3 className="card-title">Accurate Weighing</h3>
                <p className="text-neutral-600">We use certified digital scales for precise measurement, ensuring transparency.</p>
              </div>
              <div className="card animate-fadeIn" style={{animationDelay: '0.4s'}}>
                <div className="card-icon">🌱</div>
                <h3 className="card-title">Environmentally Responsible</h3>
                <p className="text-neutral-600">Your scrap is recycled properly, reducing landfill waste and conserving natural resources.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-700 text-white py-16">
          <div className="page-container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to sell your scrap?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who have chosen Sustainify for their scrap collection needs.</p>
            <Link to="/recycle" className="btn btn-accent text-lg py-3 px-8">Book a Pickup Now</Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="about" className="bg-neutral-900 text-white py-16">
        <div className="page-container">
          <div className="max-w-6xl mx-auto">
            {/* Logo and Description */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
              <div className="mb-8 md:mb-0 md:w-1/3">
                <img 
                  src={require('../assets/images/logo.png')} 
                  alt="Sustainify Logo" 
                  className="h-12 mb-4"
                />
                <p className="text-neutral-400">
                  Sustainify is India's leading scrap collection service dedicated to making recycling easy, efficient, and rewarding.
                </p>
              </div>
              
              {/* Navigation Links */}
              <div className="flex flex-col md:flex-row gap-12 md:w-2/3 md:justify-end">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-medium mb-4">Legal</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/terms" className="text-neutral-400 hover:text-white transition-colors">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/refund" className="text-neutral-400 hover:text-white transition-colors">
                        Refund Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-medium mb-4">Pages</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/support" className="text-neutral-400 hover:text-white transition-colors">
                        Contact Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/recycle" className="text-neutral-400 hover:text-white transition-colors">
                        Book Pickup
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-neutral-400 hover:text-white transition-colors">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-neutral-800 pt-8 text-center md:text-left">
              <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} Sustainify. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
