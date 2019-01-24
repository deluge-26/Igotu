import React, { Component } from 'react';
// import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import {
  Switch, Route, withRouter, Link, browswerHistory, NavLink, Redirect, Prompt,
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const moment = require('moment');

const mapStateToProps = store => ({
  items: store.items,
});

const mapDispatchToProps = dispatch => ({
  createItem: ((itemInfo) => {
    dispatch(actions.createItem(itemInfo));
  }),
});

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      category: '',
      description: '',
      price: '',
      image: '',
      selectedFile: null,
      fireRedirect: false,
    };
    this.createItem = this.createItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleChange(e) {
    console.log('e.target: ', e.target);

    e.preventDefault();
    const newState = this.state;
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  handleFileChange(e) {
    const file = e.target.files[0];
    this.setState({ selectedFile: file });
  }

  createItem(e) {
    e.preventDefault();
    const newItem = {
      item_name: this.state.itemName,
      category: this.state.category,
      item_details: this.state.description,
      price: this.state.price,
      photo: this.state.image,
      file: this.state.selectedFile,
      user_id: 1,
      created_at: moment().format(),
    };

    this.props.createItem(newItem);
    this.setState({ fireRedirect: true });
  }

  render() {
    const { fireRedirect } = this.state;
    console.log('this.state: ', this.state);
    return (
      <div className="addItemForm">
        <h3>Add an item</h3>
          Item Name
        <br />
        <input className="item-name" id="itemName" onChange={this.handleChange} type="text" />
          Category
        <br />
        <select id="category" value={this.state.category} onChange={this.handleChange}>
          <option value="entertainment">Entertainment</option>
          <option value="household">Household</option>
          <option value="outdoor">Outdoor</option>
          <option value="toys">Toys</option>
        </select>
          Description
        <br />
        <textarea className="item-description" id="description" onChange={this.handleChange} />
        <br />
          Price
        <br />
        <input className="item-price" id="price" onChange={this.handleChange} type="number" />
        <div>
          <br />
          <strong>Upload Photo</strong>
          <br />
            Photo URL:
          <br />
          <input className="item-image" id="image" onChange={this.handleChange} type="url" />
            -OR-
          <br />
            Choose an Image
          <br />
          <input className="item-upload" id="file" onChange={this.handleFileChange} type="file" />
        </div>
        <br />
        <div>
          <button className="addItemButton" onClick={this.createItem}>Add Item</button>
          {fireRedirect && (<Redirect to="/" />)}
        </div>
      </div>
    );
  }
}


// const ItemForm = (props) => {

//   return (
//     <div id="modal-form">
//       <h3>Add an item</h3>
//       <form>
//         Item Name<br></br>
//         <input type="text"></input>
//         Category<br></br>
//         <select value="categoryDropDown">
//           <option>--</option>
//           <option value="entertainment">Entertainment</option>
//           <option value="household">Household</option>
//           <option value="outdoor">Outdoor</option>
//           <option value="toys">Toys</option>
//         </select>

//         Description<br></br>
//         <textarea></textarea>
//         Price<br></br>
//         <input type="number"></input>
//         Image Url<br></br>
//         <input type="url"></input>
//         <button className="addItemButton">Add Item</button>
//       </form>
//     </div>
//   )

// }

// export default ItemForm;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemForm));
