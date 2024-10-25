// src/components/shared/button/Button.js
import PropTypes from "prop-types";
import './Button.css';

const Button = ({ width, height, color, text, children, onClick }) => (
  <button
    className="custom-button"
    style={{
      width: width || 'auto',
      height: height || 'auto',
      backgroundColor: color || '#2a6e5a', // Default color for this project
    }}
    onClick={onClick}
  >
    {children}
    {text}
  </button>
);

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
