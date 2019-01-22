import React, { Component } from 'react';
// import { Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';


const ItemForm = (props) => {
  
  return (
    <div id="modal-form">
      <h3>Add an item</h3>
      <form>
        Item Name<br></br>
        <input type="text"></input>
        Description<br></br>
        <textarea></textarea>
        Price<br></br>
        <input type="number"></input>
        Image Url<br></br>
        <input type="url"></input>
        <button></button>
      </form>
    </div>
  )

}

//export default ItemForm;
export default withRouter(connect(null, null)(ItemForm));