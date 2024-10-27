import PropTypes from "prop-types";
import FoodCard from '../../shared/foodcards/FoodCard';

// Helper function to generate optimized image URLs
const optimizedImageUrl = (url, width) => 
  url.replace('/upload/', `/upload/c_scale,w_${width}/`);

const menuItems = [
  {
    foodImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1729973449/high-angle-delicious-brazilian-food-composition_nlhjln.jpg",
    foodDescription: "Refreshing smoothie with tropical fruits.",
    foodPrice: "200.00",
  },
  {
    foodImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1729973461/delicious-lobster-gourmet-seafood_zn5nq1.jpg",
    foodDescription: "Delicious pasta with fresh ingredients.",
    foodPrice: "200.00",
  },
  {
    foodImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1729973461/delicious-lobster-gourmet-seafood_zn5nq1.jpg",
    foodDescription: "Delicious pasta with fresh ingredients.",
    foodPrice: "200.00",
  },
  {
    foodImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1729973461/delicious-lobster-gourmet-seafood_zn5nq1.jpg",
    foodDescription: "Delicious pasta with fresh ingredients.",
    foodPrice: "200.00",
  },
  {
    foodImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1729973449/high-angle-delicious-brazilian-food-composition_nlhjln.jpg",
    foodDescription: "Refreshing smoothie with tropical fruits.",
    foodPrice: "200.00",
  },
  // Add more items here as needed
];

const MenuLink = ({ handleAddToCart, handleLike }) => {
  return (
    <div className="food-cards">
      {menuItems.map((item, index) => (
        <div key={index} className="food-card-container">
          <FoodCard
            foodImage={item.foodImage}
            foodImageSrcSet={`
              ${optimizedImageUrl(item.foodImage, 400)} 400w,
              ${optimizedImageUrl(item.foodImage, 800)} 800w,
              ${optimizedImageUrl(item.foodImage, 1200)} 1200w
            `}
            foodImageSizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            foodDescription={item.foodDescription}
            foodPrice={item.foodPrice}
            onAddToCart={handleAddToCart}
            onLike={handleLike}
            width="260px"
            height="220px"
            borderRadius="12px"
          />
        </div>
      ))}
    </div>
  );
};

MenuLink.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired
};

export default MenuLink;
