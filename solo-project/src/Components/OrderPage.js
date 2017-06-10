import React, { Component } from 'react';
import './OrderPage.css';
import RaisedButton from 'material-ui/RaisedButton';
import { addToCart } from '../actions';
import BadgeBasket from '../visuals/Badge.js';


const style = {
  margin: 25,
};

export class OrderPage extends Component {

  render () {
    console.log('????????', this.props.products.orders)
    return (
      <div>
        <p> {this.props.products.orders[12].sku} </p>
      </div>
    );
  }
}
