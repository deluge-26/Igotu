import React, { Component } from 'react';
// import { Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'

const mapStateToProps = store => ({
  storeItems: store.items.storeItems,
});

const mapDispatchToProps = dispatch => ({
  createItem: ((activityInfo) => {
    dispatch(actions.createActivity(activityInfo))
  })
});

class ItemForm1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemName: '',
      category: '',
      description: '',
      price: '',
      image: '',
      



    }
    }
  }
}


const ItemForm = (props) => {
  
  return (
    <div id="modal-form">
      <h3>Add an item</h3>
      <form>
        Item Name<br></br>
        <input type="text"></input>
        Category<br></br>
        <select value="categoryDropDown">
          <option>--</option>
          <option value="entertainment">Entertainment</option>
          <option value="household">Household</option>
          <option value="outdoor">Outdoor</option>
          <option value="toys">Toys</option>
        </select>
       
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