import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';
import logoDark from './assets/img/logo_dark.svg';
import logoLight from './assets/img/logo_light.svg';
import logoColored from './assets/img/logo_colored.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Search from './utils/Search';

const Header = () => {
  const [count, setCount] = useState(0);

  const logoArr = [logoDark, logoLight, logoColored];

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
      } else {
        header.classList.remove('solid');
        left.classList.remove('light');

        title.classList.remove('dark-border');
        title.classList.add('light-border');

        right.forEach((button) => {
          button.classList.add('dark');
          button.classList.remove('light');
        });
      }
    });
  }, []);

  return (
    <div>
      <header className='sticky'>
        <nav>
          <div className='nav left'>
            <Link to='/'>
              <img id='logo' src={logoArr[2]} alt='Top navbar logo' />
            </Link>

            <div className='store-name'>
              <h4 className='title light-border'>Kalibre</h4>
              <p>Watches</p>
            </div>
          </div>

          <div className='nav right '>
            <Link to='/Shop'>
              <button className='dark text-btn'>Shop</button>
            </Link>

            <button className='dark'>
              <Search />
            </button>
            <div className='cart'>
              <div className='circle'>{count}</div>
              <button className='dark'>
                {' '}
                <AiOutlineShoppingCart />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
