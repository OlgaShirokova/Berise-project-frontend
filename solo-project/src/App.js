import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProductPage from './Components/ProductPage.js';
import { LandingPage } from './Components/LandingPage.js';
import { OrderPage } from './Components/OrderPage.js';
import { getProducts } from './actions';
import { addToCart } from './actions';
import { activateSubscription } from './actions';


class App extends Component {
  renderAdminButton() {
    if(!this.props.products.user.staff) return

    return (
      <Link to = {'/admin'}>
        <div className="admin-access">
          Admin View
        </div>
      </Link>
    )
  }
  render() {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', this.props);
    return (
      <Router>
        <MuiThemeProvider>
          <div className='general-container'>
            <div className="header">
              {this.renderAdminButton()}
              <div>
                <Link to = {'/'}>
                  <h2>Berise</h2>
                </Link>
                <div className="app-bar">
                  <p>Menu</p>
                  <p>How It Works</p>
                  <Link to = {'/products'}>
                    <p>Products</p>
                  </Link>
                  <p>Reviews</p>
                  <p>Login</p>
                  <p>Join</p>
                </div>
              </div>
            </div>
            <Route exact={true} path="/" component={LandingPage} />
            
            <Route path='/products' render={() => (
              <ProductPage products={this.props.products} />
            )} />
            <Route path='/order' render={() => (
              <OrderPage products={this.props.products} activateSubscription={this.props.activateSubscription}/>
            )} />

          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state,

});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addToCart: (productId) => dispatch(addToCart(productId)),
  activateSubscription: () => dispatch(activateSubscription()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
