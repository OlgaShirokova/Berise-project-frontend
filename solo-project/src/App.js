import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { ProductPage } from './Components/ProductPage.js';
import { LandingPage } from './Components/LandingPage.js';

import { addMovies } from './actions';
import { markAsSeen } from './actions';

class App extends Component {
  render() {
    return (
      <Router>
        <LandingPage />
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
