import React from 'react';
import Header from '../Header/Header';
import './styles/style.css';
import AnimatedPage from '../../AnimatedPage';

const Shop = () => {
  return (
    <AnimatedPage>
      <div>
        <Header />
        <h1>Welcome to the shop</h1>
        <div className='content'></div>
      </div>
    </AnimatedPage>
  );
};

export default Shop;
