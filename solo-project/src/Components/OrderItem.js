import React, { Component } from 'react';
import './OrderItem.css';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 25,
};

export class OrderItem extends Component {

  render () {
    console.log('ORDEEEERRRR', this.props);
    return (
      <div>
        <h2>{this.props.product.name}</h2>
        <h4>Price: ${this.props.product.price/100}</h4>
        <h4>Quantity: {this.props.order.quantity}</h4>
        <img className="product-image" src={this.props.product.picture}/>
      </div>
    );
  }
}
