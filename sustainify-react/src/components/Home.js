import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="content">
          <h1>Sell your recyclables<br /> online with Sustainify!</h1>
          <p>Be a part of the solution Not part of the Pollution.</p>
          <div className="row">
            <Link to="/recycle">SELL YOUR RECYCLABLES</Link>
            <a href="#contact">CONTACT US</a>
          </div>
        </div>
      </div>

      <main>
        <section id="about">
          <p>HOW IT WORKS</p>
          <div className="about-container">
            <div className="about">
              <img src={require('../assets/images/1.png')} alt="Step 1" />
            </div>
            <div className="about">
              <img src={require('../assets/images/2.png')} alt="Step 2" />
            </div>
            <div className="about">
              <img src={require('../assets/images/3.png')} alt="Step 3" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <h2>About</h2>
        <p>
          Welcome to <b>SUSTAINIFY</b>, where recycling intertwines with a focus on well-being. Our innovative practices
          transcend traditional recycling, addressing environmental concerns while actively promoting a healthier world.
          By transforming waste into valuable resources, we strive to minimize ecological impact, fostering cleaner air,
          water, and soil. At the core of our mission lies the belief that a sustainable planet and personal health are
          interconnected. Join us on this transformative journey, as we pioneer initiatives that harmonize environmental
          sustainability with a health-conscious lifestyle, shaping a future where recycling becomes a catalyst for a
          vibrant and resilient world.
        </p>
      </footer>
    </div>
  );
};

export default Home;
