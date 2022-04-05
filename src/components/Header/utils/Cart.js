import './cart.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Cart = (props) => {
  const { products, prices } = props;
  return (
    <div>
      <div id='mySidebar' class='sidebar'>
        <div className='left-cart'></div>
        <div className='right-cart'>
          <AiOutlineCloseCircle id='close-cart' />
          <div className='cart-content'>
            <h5>Your shopping cart</h5>

            <div>
              <ul>
                {products.map((task) => {
                  return (
                    <li key={task.id}>
                      <div className='product-info'>
                        <p>{task.text}</p>

                        <div className='quantity-adjust'>
                          <p>{task.price}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className='total-price'>
                <p>
                  Total price: $
                  {prices.reduce(
                    (previousValue, currentValue) =>
                      parseInt(previousValue) + parseInt(currentValue),
                    0
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
