/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './NavigationContainer.jsx';
import Cards from './CardsContainer.jsx';
import types from '../constants/actionTypes';
import * as actions from '../actions/actions';
import ItemForm from '../components/ItemForm.jsx';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

// use this.props.cards to access state in our components below
const mapStateToProps = store => ({
  cards: store.cards,
  // search: store.search
});

// need to add all our action creators here
// reference unit-12-testing MarketsContainer for a possible refactor
const mapDispatchToProps = dispatch => ({
  fetchAllItems: () => {
    dispatch(actions.fetchItemsData());
  },
  fetchSearchedItems: (value) => {
    dispatch(actions.fetchSearchedItems(value));
  },
  searchBoxChange: (value) => {
    dispatch(actions.searchValueChange(value));
  },
  fetchCategory: (value) => {
    dispatch(actions.fetchCategoryItems(value));
  },
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllItems();
  }

  // TODO: extract nav
  render() {
    // console.log('thisprops', this.props)
    const {cards: { items, fetching }} = this.props;
    // const {items, fetching} = cards;
    // function renderCards (props) {
    //   console.log('props: ', props)
    //   return (<Cards {...props} items={items} fetchFlag={fetching} />)
    // }
    // loading={this.props} 
    // console.log('here are ur props ',this.props.cards.items);
    return (
      <Router>

      <div>
        {/* extract nav  */}
        <div id="navdiv">
          <Navigation
            fetchSearchedItems={this.props.fetchSearchedItems}
            fetchCategory={this.props.fetchCategory}
            searchValue={this.props.cards.searchBoxValue}
            searchBoxChange={this.props.searchBoxChange}
            />
        </div>
        <div id="cardsdiv">
        <Switch>
            <Route
              exact path='/'
              render= {(props) => <Cards {...props} items={items} fetchFlag={fetching} loading={this.props} />}
              />
            <Route
              path='/add'
              component={ItemForm}
              />
            <Route>
              path=''
            />
        </Switch>
        </div>
      </div>
    </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
