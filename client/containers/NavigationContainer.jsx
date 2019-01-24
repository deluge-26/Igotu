/* eslint-disable no-unused-expressions */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Search from '../components/SearchBox.jsx';
import SubNavigation from './SubNavContainer.jsx'
import { Switch, Route, withRouter, Link, NavLink } from 'react-router-dom';

// import * as actions from '../constants/actionTypes';

//*React Router: on line 32 we have link to event

const Navigation = props => (
  <div id="nav-bar" className="header header-fixed unselectable header-animated">
    <div className="header-brand">
      <div className="nav_item no-hover">
        <a href="/">
          <h6 className="title">igotu</h6>
        </a>
      </div>
    </div>
    <div className="header-nav" id="header-menu">
      <div className="nav-left" />
      <div className="nav-center">
        <div className="nav-item no-hover" id="header-search">
          <Search
            fetchSearchedItems={props.fetchSearchedItems}
            searchValue={props.searchValue}
            searchBoxChange={props.searchBoxChange}
          />
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-item has-sub toggle-hover" id="dropdown">
          <a><NavLink to='/add'>Add an Item</NavLink></a>
          <a className="nav-dropdown-link">Categories</a>
          <ul className="dropdown-menu dropdown-animated" role="menu">
            <li role="menu-item">
              <center>
                <a href="/">Show All</a>
              </center>
            </li>
            <li
              role="menu-item"
              onClick={() => {
                props.fetchCategory('outdoor');
              }}
            >
            <NavLink to='/category/Outdoor'> 

              <center>Outdoor</center>
            </NavLink>
            </li>
            <li
              role="menu-item"
              onClick={() => {
                props.fetchCategory('household');
              }}
            >
            <NavLink to='/category/Household'>
              <center>Household</center>
            </NavLink>
            </li>
            <li
              role="menu-item"
              onClick={() => {
                props.fetchCategory('entertainment');
              }}
            >
            <NavLink to='/category/Entertainment'>
              <center>Entertainment</center>
            </NavLink>
            </li>
            <li
              role="menu-item"
              onClick={() => {
                props.fetchCategory('toys');
              }}
            >
            <NavLink to ='/category/Toys'>
              <center>Toys</center>
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
