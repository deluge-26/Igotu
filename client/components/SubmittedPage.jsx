import React, { Component } from 'react';
// import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Switch, Route, withRouter, Link, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'

class SubmittedPage extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        console.log(this.props);
      return (
          <div className='submittedItem'>
         <h3>Here's your item:</h3>

        </div>
      )
  
  }
}
  export default SubmittedPage;
//   withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemForm));