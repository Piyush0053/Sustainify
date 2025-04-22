import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Import components for different pages
import Home from './components/Home';
import RecycleNow from './components/RecycleNow';
import ExchangeRates from './components/ExchangeRates';
import Blog from './components/Blog';
import Thanks from './components/Thanks';
import Navbar from './components/Navbar';
import RecycleAnalysis from './components/RecycleAnalysis';

// Wrapper component to conditionally render Navbar
const AppContent = () => {
  const location = useLocation();
  
  // List of paths where Navbar should appear
  const navbarPaths = ['/', '/recycle', '/rates', '/blog'];
  const showNavbar = navbarPaths.includes(location.pathname);
  
  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <div className={showNavbar ? (location.pathname === '/' ? '' : 'pt-16') : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recycle" element={<RecycleNow />} />
          <Route path="/rates" element={<ExchangeRates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/recycle-analysis" element={<RecycleAnalysis />} />
        </Routes>
      </div>
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
