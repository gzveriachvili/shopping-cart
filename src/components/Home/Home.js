import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import backgroundVideo from './assets/img/home_bg.mp4';
import './styles/style.css';
import AnimatedPage from '../../AnimatedPage';
import CookieConsent from 'react-cookie-consent';
import ProductDisplay from './utils/ProductDisplay';
import { SaleItems } from './utils/SaleItems';

const Home = () => {
  return (
    <AnimatedPage>
      <CookieConsent
        location='bottom'
        buttonText='Accept'
        cookieName='myFirstReactCookie'
        style={{ background: '#0069ed' }}
        buttonStyle={{ color: '#000', fontSize: '1rem' }}
        expires={150}
      >
        This website doesn't uses cookies to enhance the user experience.{' '}
        <span style={{ fontSize: '10px' }}>
          This banner is only here to practice.
        </span>
      </CookieConsent>
      <div className='home'>
        <Header />
        <div className='landing-section'>
          <div class='video-wrapper'>
            <video autoPlay loop muted>
              <source src={backgroundVideo} type='video/mp4' />
            </video>
          </div>
          <div className='welcome-area'>
            <h3>Welcome to our store</h3>
            <div className='text-and-button'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae, quia. Veritatis et, libero officiis voluptas
                placeat eligendi aspernatur ullam, quas eum labore earum
                tenetur? Earum magni aperiam sed itaque quidem? Veritatis et,
                libero officiis voluptas!
              </p>
              <Link to='/Shop'>
                <button className=''>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <ProductDisplay title='Featured categories' />
        </div>
        <div>
          <SaleItems title='Items on sale' />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
