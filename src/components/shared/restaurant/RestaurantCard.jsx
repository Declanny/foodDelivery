import PropTypes from "prop-types";
import './RestaurantCard.css';

const RestaurantCard = ({ image, logo, name, description, link }) => {
  return (
    <div className="restaurant-card">
      {/* Restaurant image with link */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={`${name} cover`} className="restaurant-image" />
      </a>

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
  image: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default RestaurantCard;
