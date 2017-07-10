import React, { Component } from 'react';
import './OrderPage.css';
import RaisedButton from 'material-ui/RaisedButton';
import { addToCart } from '../actions';
import { activateSubscription } from '../actions';
import BadgeBasket from '../visuals/Badge.js';
import { OrderItem } from './OrderItem';


const style = {
  margin: 25,
};

export class OrderPage extends Component {

  renderProducts () {
    return Object.keys(this.props.products.orders).map(element => {
      return <OrderItem key={element}  product={this.props.products.products[parseInt(element)]}
      order={this.props.products.orders[parseInt(element)]}
      />;
    })
  }

  calculateTotal() {
    const that = this;
    return Object.keys(this.props.products.orders).reduce(function(a, b) { return a + that.props.products.orders[b].quantity * that.props.products.products[b].price/100
    }, 0)
  }

  render () {
    return (
      <div className="order-container">
        <h2>Your box </h2>
        <div className="order-list">
          {this.renderProducts()}
        </div>
        <h3> Total: ${this.calculateTotal()} </h3>
        <button
          label={`Subscribe`}
          onClick={() => this.props.activateSubscription()}>Subscribe</button>
      </div>
    );
  }
}
