// src/components/menuLink/MenuLink.js
import PropTypes from "prop-types"
import React from 'react';
import FoodCard from '../../shared/foodcards/FoodCard';

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
            foodDescription={item.foodDescription}
            onAddToCart={handleAddToCart}
            onLike={handleLike}
            width="260px"
            height="220px"
            borderRadius="12px"
            foodPrice={item.foodPrice}
          />
        </div>
      ))}
    </div>
  );
};

MenuLink.propTypes = {
  handleAddToCart: PropTypes.any,
  handleLike: PropTypes.any
}

export default MenuLink;
