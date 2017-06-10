import React, { Component } from 'react';
import './OrderPage.css';
import RaisedButton from 'material-ui/RaisedButton';
import { addToCart } from '../actions';
import BadgeBasket from '../visuals/Badge.js';
import { OrderItem } from './OrderItem';


const style = {
  margin: 25,
};

export class OrderPage extends Component {

  renderProducts () {
    console.log('TO SAVE', Object.keys(this.props.products.orders).map(element => this.props.products.products[parseInt(element)]));
    console.log('PROOOOPs', this.props);
    return Object.keys(this.props.products.orders).map(element => {
      console.log('ELEMEEEENT', element);
      console.log('PRODUCT', this.props.products.products[parseInt(element)]);
      console.log('ORDEEER', this.props.products.orders[parseInt(element)]);
      return <OrderItem product={this.props.products.products[parseInt(element)]}
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
    console.log('THE PROPS', this.props.products);
    console.log('THE PROPS PROOODS', this.props.products.products);
    console.log('????????', this.props.products.orders);
    console.log('KEEEYS', Object.keys(this.props.products.orders));
    console.log('PRODUCTS', this.props.products.products);
    console.log('QUANTITY TO DISPLAY', Object.keys(this.props.products.orders).map(sku => this.props.products.orders[parseInt(sku)].quantity));
    console.log('OBBBBBJ  TO DISPLAY', Object.keys(this.props.products.orders).map(sku => this.props.products.orders[parseInt(sku)].quantity).map(element => this.props.products.products[element]));

    return (
      <div>
        <h2>Your shopping basket </h2>
        {this.renderProducts()}
        <h4> Total: ${this.calculateTotal()} </h4>
        <RaisedButton
          label={`Make the Order!`}
          secondary={true}
          style={style}
          />
      </div>
    );
  }
}
