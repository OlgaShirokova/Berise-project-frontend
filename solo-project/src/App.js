import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProductPage from './Components/ProductPage.js';
import { LandingPage } from './Components/LandingPage.js';
import { OrderPage } from './Components/OrderPage.js';
import AdminPage from './Components/AdminPage.js';
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
          <Switch>
            <Route exact={true} path="/" component={LandingPage} />
            <Route path='/' render={() => (
              <div>
                <div className="header">
                {this.renderAdminButton()}
                <div>
                <Link to = {'/'}>
                <h2>Berise</h2>
                </Link>
                <div className="app-bar">
                <p>Menu</p>
                <Link to = {'/#how-it-works'}><p>How It Works</p></Link>
                <Link to = {'/products'}>
                <p>Products</p>
                </Link>
                <Link to = {'/#reviews'}><p>Reviews</p></Link>
                <p>Login</p>
                <p>Join</p>
                </div>
                </div>
                </div>
                <Route path='/admin' render={() => (
                  <AdminPage />
                )} />
                <Route path='/products' render={() => (
                  <ProductPage products={this.props.products} />
                )} />
                <Route path='/order' render={() => (
                  <OrderPage products={this.props.products} activateSubscription={this.props.activateSubscription}/>
                )} />
              </div>
            )} />
          </Switch>

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
