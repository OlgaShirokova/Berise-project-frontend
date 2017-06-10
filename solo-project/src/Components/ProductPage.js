import React, { Component } from 'react';
import { Product } from './Product';
import './ProductPage.css';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import { addToCart } from '../actions';
import BadgeBasket from '../visuals/Badge.js';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class ProductPage extends Component {

  componentDidMount () {
    this.props.getProducts();
  }

  renderProducts () {
    return this.props.products
    .map(element => {
      // console.log(element);
      return <Product productId={element.SKU} product={element} addToCart={this.props.addToCart}/>;
    });
  }

  render () {
    return (
      <div className="product-list-container">
        <Link to = {'/order'}>
          <BadgeBasket />
        </Link>
        {this.renderProducts()}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  products: state.products
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addToCart: (productId) => dispatch(addToCart(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
