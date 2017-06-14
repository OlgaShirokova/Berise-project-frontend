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
      <div className="order-item-container">
        <div className="order-item">
          <div className="order-image">
            <img className="product-image" src={this.props.product.picture}/>
          </div>
          <div className="product-details">
            <div className='prod-name'>{this.props.product.name}</div>
            <div className='price'>Price: ${this.props.product.price/100}</div>
            <div className='quantity'>Quantity: {this.props.order.quantity}</div>
          </div>
        </div>
      </div>
    );
  }
}
