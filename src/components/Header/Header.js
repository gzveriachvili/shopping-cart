import { useState, useEffect } from 'react';
import './styles/style.css';
import logoDark from './assets/img/logo_dark.svg';
import logoLight from './assets/img/logo_light.svg';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const logoArr = [logoDark, logoLight];

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      const left = document.querySelector('.store-name');
      const title = document.querySelector('.title');

      const right = document.querySelectorAll('.nav.right button');

      if (window.scrollY > 0) {
        header.classList.add('solid');
        left.classList.add('light');

        title.classList.remove('light-border');
        title.classList.add('dark-border');

        right.forEach((button) => {
          button.classList.remove('dark');
          button.classList.add('light');
        });

        setImgIndex(1);
      } else {
        header.classList.remove('solid');
        left.classList.remove('light');

        title.classList.remove('dark-border');
        title.classList.add('light-border');

        right.forEach((button) => {
          button.classList.add('dark');
          button.classList.remove('light');
        });
        setImgIndex(0);
      }
    });
  }, []);

  return (
    <div>
      <header className='sticky'>
        <nav>
          <div className='nav left'>
            <img id='logo' src={logoArr[imgIndex]} alt='Top navbar logo' />
            <div className='store-name'>
              <h4 className='title light-border'>Kalibre</h4>
              <p>Watches</p>
            </div>
          </div>

          <div className='nav right '>
            <button className='dark'>Shop</button>
            <button className='dark'>
              <AiOutlineSearch />
            </button>
            <button className='dark'>
              {' '}
              <AiOutlineShoppingCart />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
