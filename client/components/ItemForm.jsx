import React, { Component } from 'react';
// import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
<<<<<<< HEAD
import { Switch, Route, withRouter, Link, NavLink, Redirect } from 'react-router-dom';
=======
import { Switch, Route, withRouter, Link, browswerHistory, NavLink } from 'react-router-dom';
>>>>>>> c3e3a8e3ccf596dd502306a691e654ce329bd218
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'
const moment = require ('moment');

const mapStateToProps = store => ({
  items: store.items,
});

const mapDispatchToProps = dispatch => ({
  createItem: ((itemInfo) => {
    dispatch(actions.createItem(itemInfo))
  })
});

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemName: '',
      category: '',
      description: '',
      price: '',
      image: '',
      fireRedirect: false,
    }
    this.createItem = this.createItem.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    console.log("e.target: ", e.target);

    e.preventDefault();
    const newState = this.state;
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  }

  createItem(e) {
    e.preventDefault();
    let newItem = {
      item_name: this.state.itemName,
      category: this.state.category,
      item_details: this.state.description,
      price: this.state.price,
      photo: this.state.image,
      user_id: 1,
      created_at: moment().format()
    };

    this.props.createItem(newItem);
    this.setState({ fireRedirect: true })

  }

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state
    console.log("this.state: ", this.state);
    return (
      <div className="addItemForm">
        <h3>Add an item</h3>
          Item Name<br></br>
          <input className="item-name" id="itemName" onChange={this.handleChange} type="text"></input>
          Category<br></br>
          <select id='category' value={this.state.category} onChange={this.handleChange}>
            <option value="entertainment">Entertainment</option>
            <option value="household">Household</option>
            <option value="outdoor">Outdoor</option>
            <option value="toys">Toys</option>
          </select>
          Description<br></br>
          <textarea className="item-description" id="description" onChange={this.handleChange}></textarea>
          <br></br>
          Price<br></br>
          <input className="item-price" id="price" onChange={this.handleChange} type="number"></input>
          Image Url<br></br>
          <input className="item-image" id="image" onChange={this.handleChange} type="url"></input>
<<<<<<< HEAD
          <button className="addItemButton" onClick={this.createItem}>Add Item</button> {fireRedirect && (
          <Redirect to={'/Submitted'}/>
        )}
=======
          <NavLink to='/' >
          <button className="addItemButton" onClick={this.createItem}>Add Item</button>

          </NavLink>
>>>>>>> c3e3a8e3ccf596dd502306a691e654ce329bd218
      </div>
    )

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

//export default ItemForm;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemForm));