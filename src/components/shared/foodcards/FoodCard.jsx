import PropTypes from "prop-types";
import './FoodCard.css';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const FoodCard = ({ 
  foodImage, 
  foodDescription, 
  foodPrice,  // New prop for price
  onAddToCart, 
  onLike, 
  width = '250px', 
  height = '250px', // Adjusted height for sleek look
  borderRadius = '10px' 
}) => {
  return (
    <div className="food-card" style={{ width, height, borderRadius }}>
      <div className="food-card-image" style={{ borderRadius }}>
        <img src={foodImage} alt="Food" style={{ borderRadius }} />
        <div className="food-card-overlay">
          <AiOutlineHeart 
            className="icon heart-icon" 
            onClick={onLike} 
            title="Like" 
          />
          <AiOutlineShoppingCart 
            className="icon cart-icon" 
            onClick={onAddToCart} 
            title="Add to Cart" 
          />
        </div>
      </div>
      <div className="food-card-content">
        <div className="food-info">
          <p className="food-description">{foodDescription}</p>
          <p className="food-price">₦{foodPrice}</p> {/* Display price with Naira symbol */}
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  borderRadius: PropTypes.string,
  foodDescription: PropTypes.any,
  foodImage: PropTypes.any,
  foodPrice: PropTypes.string, // Updated prop type
  height: PropTypes.string,
  onAddToCart: PropTypes.any,
  onLike: PropTypes.any,
  width: PropTypes.string
};

export default FoodCard;
