import React from 'react';
import RestaurantCard from '../shared/restaurant/RestaurantCard';

const RestaurantPage = () => {
  return (
    <div className="restaurant-page">
      
      <div className="restaurant-scroll-container">
        <RestaurantCard
          image="https://res.cloudinary.com/dqbbm0guw/image/upload/v1729973467/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_nrkzd7.jpg"
          logo="https://res.cloudinary.com/dqbbm0guw/image/upload/v1731399064/ChickenRepublic_Logo_ar2bwm.svg"
          name="Chicken Republic"
          description="A delightful dining experience."
          link="https://restaurant1.com"
        />
        <RestaurantCard
          image="https://res.cloudinary.com/dqbbm0guw/image/upload/v1729973467/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_nrkzd7.jpg"
          logo="https://res.cloudinary.com/dqbbm0guw/image/upload/v1731399064/ChickenRepublic_Logo_ar2bwm.svg"
          name="Chicken Republic"
          description="A delightful dining experience."
          link="https://restaurant1.com"
        />
        <RestaurantCard
          image="https://res.cloudinary.com/dqbbm0guw/image/upload/v1729973467/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_nrkzd7.jpg"
          logo="https://res.cloudinary.com/dqbbm0guw/image/upload/v1731399064/ChickenRepublic_Logo_ar2bwm.svg"
          name="Chicken Republic"
          description="A delightful dining experience."
          link="https://restaurant1.com"
        /><RestaurantCard
        image="https://res.cloudinary.com/dqbbm0guw/image/upload/v1729973467/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_nrkzd7.jpg"
        logo="https://res.cloudinary.com/dqbbm0guw/image/upload/v1731399064/ChickenRepublic_Logo_ar2bwm.svg"
        name="Chicken Republic"
        description="A delightful dining experience."
        link="https://restaurant1.com"
      /><RestaurantCard
      image="https://res.cloudinary.com/dqbbm0guw/image/upload/v1729973467/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_nrkzd7.jpg"
      logo="https://res.cloudinary.com/dqbbm0guw/image/upload/v1731399064/ChickenRepublic_Logo_ar2bwm.svg"
      name="Chicken Republic"
      description="A delightful dining experience."
      link="https://restaurant1.com"
    />
        {/* Additional RestaurantCard components as needed */}
      </div>
    </div>
  );
};

export default RestaurantPage;
