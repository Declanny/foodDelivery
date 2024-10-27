import PropTypes from "prop-types";
import './ChefCard.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ChefCard = ({ 
  chefImage, 
  chefName, 
  chefDescription, 
  isVerified, 
  width = '250px', 
  height = '250px', 
  borderRadius = '10px' 
}) => {
  // Define Cloudinary transformations or any other CDN adjustments for responsive image optimization
  const imageUrl = chefImage.replace('/upload/', '/upload/c_scale,w_600/'); // Default width 600px

  return (
    <div className="chef-card" style={{ width, height, borderRadius }}>
      <div className="chef-card-image" style={{ borderRadius }}>
        <img 
          src={imageUrl}
          srcSet={`
            ${chefImage.replace('/upload/', '/upload/c_scale,w_300/')} 300w,
            ${chefImage.replace('/upload/', '/upload/c_scale,w_600/')} 600w,
            ${chefImage.replace('/upload/', '/upload/c_scale,w_1200/')} 1200w
          `}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 250px" // Responsive size adjustments
          alt="Chef"
          loading="lazy"
          style={{ borderRadius }}
        />
        {isVerified && (
          <div className="chef-card-badge">
            <AiOutlineCheckCircle title="Verified Chef" className="verified-icon" />
          </div>
        )}
      </div>
      <div className="chef-card-content">
        <h3 className="chef-name">{chefName}</h3>
        <p className="chef-description">{chefDescription}</p>
      </div>
    </div>
  );
};

ChefCard.propTypes = {
  chefImage: PropTypes.string.isRequired, // Ensure image is a string URL
  chefName: PropTypes.string.isRequired,
  chefDescription: PropTypes.string.isRequired,
  isVerified: PropTypes.bool, // Updated prop type for the verified badge
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string
};

export default ChefCard;
