import React from 'react';
import './SearchBarStyle.css'

const SearchBar = () => {
  return (
    <form className="search-container custom-search-container">
      <input type="text" placeholder="Search.." name="search"  />
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  );
}

export default SearchBar;