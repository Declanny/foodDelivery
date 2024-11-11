import PropTypes from "prop-types"

import './RestaurantCard.css';

const RestaurantCard = ({ image, logo, name, description }) => {
  return (
    <div className="restaurant-card">
      {/* Restaurant image */}
      <img src={image} alt={`${name} cover`} className="restaurant-image" />

      {/* Restaurant details */}
      <div className="restaurant-details">
        {/* Logo and name row */}
        <div className="restaurant-header">
          <img src={logo} alt={`${name} logo`} className="restaurant-logo" />
          <h3 className="restaurant-name">{name}</h3>
        </div>

        {/* Description */}
        <p className="restaurant-description">{description}</p>
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  description: PropTypes.any,
  image: PropTypes.any,
  logo: PropTypes.any,
  name: PropTypes.any
}

export default RestaurantCard;
