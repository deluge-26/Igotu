/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';

// TODO: set up ReactRouter routes/components
class App extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: create/insert nav component
  render() {
    return (
        <div>
          <MainContainer 
        /></div>
    );
  }
}

export default App;
