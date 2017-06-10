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


class App extends Component {

  render() {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', this.props);
    return (
      <Router>
        <MuiThemeProvider>
          <div className='general-container'>
            <div className="header">
              <div>
                <Link to = {'/'}>
                  <h2>BERISE</h2>
                </Link>
                <Route path='/admin' render = {() => (
                  <h1>Hello Admin!</h1>
                )}/>
                <h3>Be confident, be free and feel great!</h3>
              </div>
            </div>
            <Route exact={true} path="/" component={LandingPage} />
            <Route path='/products' render={() => (
              <ProductPage products={this.props.products} />
            )} />
            <Route path='/order' render={() => (
              <OrderPage products={this.props.products} />
            )} />

          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addToCart: (productId) => dispatch(addToCart(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
