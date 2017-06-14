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
        <div className='image-div'><img className="product-image" src={this.props.product.picture}/></div>
        <div id='name'>{this.props.product.name}</div>
        <div id='price'>${this.props.product.price/100}</div>
        <button
          label={`Add to box`}
          onClick={() => this.props.addToCart(this.props.product.SKU)}
          >{`Add to box`}</button>
      </div>
    );
  }
}
