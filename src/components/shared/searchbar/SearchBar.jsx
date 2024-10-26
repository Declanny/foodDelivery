// src/components/SearchBar.js

import PropTypes from "prop-types"
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search menu..."
        onChange={handleInputChange}
        className="search-input"
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func
}

export default SearchBar;
