import './cart.css';
import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

export const Cart = (props) => {
  const { products, prices, deleteItem, setProductArr, setPriceArr } = props;
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
                {products.map((product) => {
                  return (
                    <li key={product.id}>
                      <p className='brand-dec'>{product.text.split(' ')[0]}</p>
                      <img src={product.img} alt='' />
                      <div className='product-info'>
                        <p>{product.text}</p>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            const id = product.id;
                            setProductArr((productArr) =>
                              productArr.filter((product) => product.id !== id)
                            );

                            let price1 = product.price;
                            let price2 = price1.substring(1);

                            setPriceArr((priceArr) =>
                              priceArr.filter((price) => price !== price2)
                            );
                          }}
                        >
                          <AiFillDelete />
                        </motion.button>
                        <div className='quantity-adjust'>
                          <p>{product.price}</p>
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
