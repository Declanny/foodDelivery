// src/components/shared/button/Button.js
import PropTypes from "prop-types"

import './Button.css';

const Button = ({ children, onClick }) => (
  <button className="custom-button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.any
}

export default Button;
