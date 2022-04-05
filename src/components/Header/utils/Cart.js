import './cart.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Cart = (props) => {
  return (
    <div>
      <div id='mySidebar' class='sidebar'>
        <div className='left-cart'></div>
        <div className='right-cart'>
          <AiOutlineCloseCircle id='close-cart' />
          <div className='cart-content'>
            <h5>Your shopping cart</h5>
            <p>{props.productName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
