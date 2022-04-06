import './ShopCard.css';
import { motion } from 'framer-motion';

export const ShopCard = (props) => {
  return (
    <div className='shop-card'>
      <div class='card-zoom'>
        <img src={props.imgName} alt={props.cardTitle} />
      </div>
      <div className='shop-card-title-price' data-index={props.imgName}>
        <h6>{props.cardTitle}</h6>
        <p>${props.cardPrice}</p>
      </div>
      <div className='shop-card-button addButton'>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Add to cart
        </motion.button>
      </div>
    </div>
  );
};
