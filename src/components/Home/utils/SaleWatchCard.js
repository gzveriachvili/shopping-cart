import { Link } from 'react-router-dom';
import './saleCards.css';

export const SaleWatchCard = (props) => {
  return (
    <div className='item'>
      <img src={props.imgName} alt='' />
      <div className='sale-card'>
        <Link to='/Shop'>
          <h5 className='sale-title'>{props.watchName}</h5>
        </Link>
        <div className='sale-price'>
          <p>${props.watchPrice}</p>
          <p>{props.salePercentage}% off</p>
        </div>
      </div>
    </div>
  );
};
