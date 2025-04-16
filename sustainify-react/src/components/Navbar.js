import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/"><img src={require('../assets/images/logo.png')} alt="Sustainify Logo" className="logo" /></Link>
      <ul>
        <li>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link to="/recycle">
            <h3>Recycle Now</h3>
          </Link>
        </li>
        <li>
          <Link to="/rates">
            <h3>Exchange Rates</h3>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <h3>Blog</h3>
          </Link>
        </li>
        <li>
          <a href="#about">
            <h3>About</h3>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
