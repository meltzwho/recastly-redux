import React from 'react';
import Search from './Search.js';
import SearchContainer from '../containers/SearchContainer.js';
//TODO: swap out the React components below for the container components
//  you wrote in the 'containers' directory.

var Nav = ({handleSearchInputChange}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <SearchContainer />
      {/*<Search handleSearchInputChange={handleSearchInputChange}/>*/}
    </div>
  </nav>
);

export default Nav;
