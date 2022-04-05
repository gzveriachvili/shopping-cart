import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';
import logoDark from './assets/img/logo_dark.svg';
import logoLight from './assets/img/logo_light.svg';
import logoColored from './assets/img/logo_colored.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Search from './utils/Search';
import { Cart } from './utils/Cart';
import uniqid from 'uniqid';

const Header = () => {
  const [count, setCount] = useState(0);

  const [productArr, setProductArr] = useState([]);

  const [priceArr, setPriceArr] = useState([]);

  const logoArr = [logoDark, logoLight, logoColored];

  const openNav = () => {
    document.getElementById('mySidebar').style.width = '100vw';
  };

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

    document.addEventListener('click', (e) => {
      if (e.path[2].childNodes[2].textContent === 'Add to cart') {
        let productName = e.path[2].childNodes[1].childNodes[0].textContent;
        let productPrice = e.path[2].childNodes[1].childNodes[1].textContent;

        let item = {
          product: {
            text: productName,
            price: productPrice,
            id: uniqid(),
          },
        };

        let price1 = item.product.price;
        let price2 = price1.substring(1);

        setProductArr((productArr) => productArr.concat(item.product));
        setPriceArr((priceArr) => priceArr.concat(price2));
      }
    });
  }, []);

  useEffect(() => {
    const leftCart = document.querySelector('.left-cart');
    const closeCart = document.querySelector('#close-cart');

    leftCart.addEventListener('click', () => {
      document.getElementById('mySidebar').style.width = '0';
    });

    closeCart.addEventListener('click', () => {
      document.getElementById('mySidebar').style.width = '0';
    });
  });

  useEffect(() => {
    setCount(productArr.length);
  }, [productArr]);

  return (
    <div>
      <Cart products={productArr} prices={priceArr} />
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
              <button id='open' className='dark' onClick={openNav}>
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
