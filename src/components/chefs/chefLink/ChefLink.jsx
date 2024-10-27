// src/components/chefLink/ChefLink.js
import PropTypes from "prop-types";
import ChefCard from "../../shared/chefCard/ChefCard";


const chefs = [
  {
    chefImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730032524/skilled-head-chef-wearing-cooking-uniform-while-preparing-ingredients-dish-restaurant-professional-kitchen-african-american-gastronomy-expert-doing-preparation-work-dinner-meal_x9llgg.jpg",
    chefName: "Chef Angela",
    chefDescription: "Award-winning pastry chef",
    verifiedBadge: true,
  },
  {
    chefImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730032518/chef5_f0hgrs.webp",
    chefName: "Chef Marco",
    chefDescription: "Italian cuisine specialist",
    verifiedBadge: false,
  },
  {
    chefImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730032518/chef6_yeyo3z.jpg",
    chefName: "Chef Angela",
    chefDescription: "Award-winning pastry chef",
    verifiedBadge: true,
  },
  {
    chefImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730032517/chef4_epvci3.webp",
    chefName: "Chef Marco",
    chefDescription: "Italian cuisine specialist",
    verifiedBadge: false,
  },
  {
    chefImage: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1730032518/chef5_f0hgrs.webp",
    chefName: "Chef Marco",
    chefDescription: "Italian cuisine specialist",
    verifiedBadge: false,
  },
  // Add more chef items as needed
];

const ChefLink = () => {
  return (
    <div className="chef-cards">
      {chefs.map((chef, index) => (
        <div key={index} className="chef-card-container">
          <ChefCard
            chefImage={chef.chefImage}
            chefName={chef.chefName}
            chefDescription={chef.chefDescription}
            verifiedBadge={chef.verifiedBadge}
            width="260px"
            height="220px"
            borderRadius="12px"
          />
        </div>
      ))}
    </div>
  );
};

ChefLink.propTypes = {
  chefs: PropTypes.array,
};

export default ChefLink;
