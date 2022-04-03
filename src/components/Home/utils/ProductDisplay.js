import './product.css';
import { Link } from 'react-router-dom';
import mensWatches from './assets/img/mens_watches.png';
import ladiesWatches from './assets/img/ladies_watches.png';
import sunglasses from './assets/img/sunglasses.png';
import handbags from './assets/img/handbags.png';
import luxuryPens from './assets/img/luxury_pens.png';
import beauty from './assets/img/beauty.png';
import sale from './assets/img/sale.png';
import jewelry from './assets/img/jewelry.png';
import accessories from './assets/img/accessories.png';
import outerwear from './assets/img/outerwear.png';
import shoes from './assets/img/shoes.png';
import preownedWatches from './assets/img/preowned_watches.png';

const ProductDisplay = (props) => {
  return (
    <div className='products'>
      <div className='products-title-section'>
        <h2>{props.title}</h2>
        <Link to='/Shop'>
          <button>Shop all products</button>
        </Link>

        <div className='decor-tri'></div>
      </div>
      <div className='wrapper'>
        <div className='category-item one'>
          <img src={mensWatches} alt="Men's watches" />
          <h6>Men's Watches</h6>
        </div>

        <div className='category-item two'>
          <img src={ladiesWatches} alt='Ladies watches' />
          <h6>Ladies Watches</h6>
        </div>

        <div className='category-item three'>
          <img src={sunglasses} alt='Sunglasses' />
          <h6>Sunglasses</h6>
        </div>

        <div className='category-item four'>
          <img src={handbags} alt='Handbags' />
          <h6>Handbags</h6>
        </div>

        <div className='category-item five'>
          <img src={luxuryPens} alt='Luxury Pens' />
          <h6>Luxury Pens</h6>
        </div>

        <div className='category-item six'>
          <img src={beauty} alt='Beauty products' />
          <h6>Beauty</h6>
        </div>

        <div className='category-item seven'>
          <img src={sale} alt='Sale' />
          <h6>Sale</h6>
        </div>

        <div className='category-item eight'>
          <img src={jewelry} alt='Jewelry' />
          <h6>Jewelry</h6>
        </div>

        <div className='category-item nine'>
          <img src={accessories} alt='Accessories' />
          <h6>Accessories</h6>
        </div>

        <div className='category-item ten'>
          <img src={outerwear} alt='Outerwear' />
          <h6>Outerwear</h6>
        </div>

        <div className='category-item eleven'>
          <img src={shoes} alt='Shoes' />
          <h6>Shoes</h6>
        </div>

        <div className='category-item twelve'>
          <img src={preownedWatches} alt='Pre-owned watches' />
          <h6>Pre-owned Watches</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
