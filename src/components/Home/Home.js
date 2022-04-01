import React from 'react';
import Header from '../Header/Header';
import backgroundVideo from './assets/img/home_bg.mp4';
import './styles/style.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='landing-page'>
        <div className='video-section'>
          <video autoPlay loop id='video'>
            <source src={backgroundVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>

          <div className='welcome-area'>
            <h3>Welcome to our store</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos hic
              quaerat rem quasi rerum nam. Consequatur aliquam voluptate dolorem
              modi omnis, sint amet dignissimos expedita nisi asperiores saepe
              perspiciatis a.
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className='content'></div>
    </div>
  );
};

export default Home;
