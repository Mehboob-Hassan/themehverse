import React from 'react';
import MainLayout from '../layouts/MainLayouts';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Reviews from './Reviews';
import Partners from './Partners';

const Home = () => {
  return (
    <MainLayout>
      <section className="home-page">
        <div className="slogan-div">
          <h1 className="slogan-title">Innovate. Market. Dominate.</h1>
          <p className="slogan-subtitle">The Spark You Need.</p>
          <div className="slogan-buttons">
            <button className="general-button primary-button">Geek Out with Us</button>
            <button className="general-button secondary-button">Learn More</button>
          </div>
        </div>
      </section>
      <section>
        <About />
        <Services />
        <Portfolio />
        <Partners />
        <Reviews />
        <Contact />
      </section>
    </MainLayout>
  );
};

export default Home;
