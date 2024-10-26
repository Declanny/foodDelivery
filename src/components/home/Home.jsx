// src/components/home/Home.js

import React from 'react'; // Ensure to import React
import Hero from '../hero/Hero';
import FoodCard from '../shared/foodcards/FoodCard';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css'; // Import the CSS for styling

const Home = () => {
  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  const handleLike = () => {
    alert("Item liked!");
  };

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
    // Add more items here
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
  ];

  return ( 
    <div className="home">
      <Hero />
      <div className="hot-features">
        <h2>Hot Features</h2>
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
        <Link to="/menu" className="view-more">View More</Link>
      </div>
    </div>
  );
};

export default Home;
