import React from 'react';
import { Switch, Route, withRouter, Link, NavLink } from 'react-router-dom';
/* eslint-disable arrow-parens, */
const Search = props => {
  function handleChange(e) {
    console.log(e.target.value);
    props.searchBoxChange(e.target.value);
  }
  function clearTextBox() {
    props.searchBoxChange();
  }
  return (
    <div id="search-bar">
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log('event: ', props.searchValue);
          props.fetchSearchedItems(props.searchValue);
        }}
        onChange={handleChange}
      >
      <NavLink to='/search'>
        <input type="search" name="searchbox" size="35" />
      </NavLink>
      </form>
    </div>
  );
};

export default Search;
