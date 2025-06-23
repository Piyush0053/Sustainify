import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Import components
import Home from './components/Home';
import RecycleNow from './components/RecycleNow';
import ExchangeRates from './components/ExchangeRates';
import Blog from './components/Blog';
import Thanks from './components/Thanks';
import Navbar from './components/Navbar';

// Wrapper component to conditionally render Navbar
const AppContent = () => {
  const location = useLocation();
  
  // Show navbar on all pages except thanks page
  const showNavbar = location.pathname !== '/thanks';
  
  return (
    <div className="min-h-screen bg-black text-white">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recycle" element={<RecycleNow />} />
        <Route path="/rates" element={<ExchangeRates />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>  
      <AppContent />
    </Router>
  );
}

export default App;