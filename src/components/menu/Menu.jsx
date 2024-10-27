import { useState } from 'react';
import FoodCard from '../shared/foodcards/FoodCard';
import './Menu.css';
import SearchBar from '../shared/searchbar/SearchBar';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  const handleLike = () => {
    alert("Item liked!");
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Image sizes and srcSet for responsive loading
  const imageSrcSets = (url) => `
    ${url.replace('/upload/', '/upload/c_scale,w_300/')} 300w,
    ${url.replace('/upload/', '/upload/c_scale,w_600/')} 600w,
    ${url.replace('/upload/', '/upload/c_scale,w_800/')} 800w
  `;

  const menuItems = [
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

  const filteredItems = menuItems.filter(item =>
    item.foodDescription.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="menu-page">
      <div className="menu-navbar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="menu-cards">
        {filteredItems.map((item, index) => (
          <FoodCard
            key={index}
            foodImage={item.foodImage}
            foodImageSrcSet={imageSrcSets(item.foodImage)}
            foodImageSizes="(max-width: 600px) 300px, (max-width: 1024px) 600px, 800px"
            foodDescription={item.foodDescription}
            foodPrice={item.foodPrice}
            onAddToCart={handleAddToCart}
            onLike={handleLike}
            width="260px"
            height="220px"
            borderRadius="12px"
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
