import React from 'react';
import MainLayout from '../layouts/MainLayouts';;

const Home = () => {
  return (
    <MainLayout>
      <section className='home-page'>

        <div className='slogan-div'>
          <h1>Innovate. Market. Dominate </h1>
          <p>The Spark You Need.</p>
          <div>
            <button className='general-button'>Geek out with us</button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
