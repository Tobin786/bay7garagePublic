import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {  SearchResultsList } from '.';



const SearchBar = ({ products }) => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (value) => {
    setInput(value);
    console.log(products); // Access the products prop here
    const results = products.filter((user) =>{
      return (
        value && 
        user && 
        user.name 
        && user.name.toLowerCase().includes(value));
    })
    console.log(results);
     setSearchResults(results);
     setShowResults(!!results.length);
  
  };

  return (
    <div className='navbar-search-container'>
        <div className='navbar-search-bar'>
          <FaSearch id='search-icon'></FaSearch>
          <input
            placeholder='Type to search'
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          ></input>
          
          
          {showResults && <div className='search-results-overlay'><SearchResultsList results={searchResults} /></div>}
        </div>
      </div>
  );
};



export default SearchBar;
