import React, { Component } from 'react';
import './Product.css';
import RaisedButton from 'material-ui/RaisedButton';
import { addToCart } from '../actions';

const style = {
  margin: 25,
};

export class Product extends Component {

  render () {
    return (
      <div className="product">
        <img className="product-image" src={this.props.product.picture}/>
        <h2>{this.props.product.name}</h2>
        <RaisedButton
          label={`(${this.props.product.price/100}) Add to cart`}
          secondary={true}
          style={style}
          onClick={() => this.props.addToCart(this.props.product.SKU)}
          />
      </div>
    );
  }
}
