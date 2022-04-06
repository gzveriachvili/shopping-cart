import './cart.css';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Cart = (props) => {
  const { products, prices } = props;
  return (
    <div>
      <div id='mySidebar' class='sidebar'>
        <div className='left-cart'></div>
        <div className='right-cart' id='rightCart'>
          <AiOutlineCloseCircle id='close-cart' />
          <div className='cart-content'>
            <h5>Your shopping cart</h5>

            <div>
              <ul>
                {products.map((task) => {
                  return (
                    <li key={task.id}>
                      <p className='brand-dec'>{task.text.split(' ')[0]}</p>
                      <img src={task.img} alt='' />
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
                  <strong>Total price:</strong> $
                  {prices.reduce(
                    (previousValue, currentValue) =>
                      parseInt(previousValue) + parseInt(currentValue),
                    0
                  )}
                </p>
              </div>
              <div className='checkout'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Checkout
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
