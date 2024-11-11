import PropTypes from "prop-types";
import './Button.css';

const Button = ({ width, height, color, text, icon, onClick }) => (
  <button
    className="custom-button"
    style={{
      width: width || 'auto',
      height: height || 'auto',
      backgroundColor: color || '#2a6e5a',
    }}
    onClick={onClick}
  >
    {text}
    {icon && <span className="button-icon">{icon}</span>}
  </button>
);

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
