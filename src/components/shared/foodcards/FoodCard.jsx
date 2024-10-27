import PropTypes from "prop-types";
import './FoodCard.css';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const FoodCard = ({ 
  foodImage, 
  foodImageSrcSet,  // New prop for responsive images
  foodImageSizes,    // New prop for responsive images
  foodDescription, 
  foodPrice,
  onAddToCart, 
  onLike, 
  width = '250px', 
  height = '250px', 
  borderRadius = '10px' 
}) => {
  return (
    <div className="food-card" style={{ width, height, borderRadius }}>
      <div className="food-card-image" style={{ borderRadius }}>
        <img 
          src={foodImage} 
          srcSet={foodImageSrcSet} 
          sizes={foodImageSizes} 
          alt="Food" 
          style={{ borderRadius }} 
          loading="lazy"
        />
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
          <p className="food-price">₦{foodPrice}</p>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  borderRadius: PropTypes.string,
  foodDescription: PropTypes.string.isRequired,
  foodImage: PropTypes.string.isRequired,
  foodImageSrcSet: PropTypes.string,
  foodImageSizes: PropTypes.string,
  foodPrice: PropTypes.string.isRequired,
  height: PropTypes.string,
  onAddToCart: PropTypes.func,
  onLike: PropTypes.func,
  width: PropTypes.string
};

export default FoodCard;
