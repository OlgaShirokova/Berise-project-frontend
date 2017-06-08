import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { ProductPage } from './ProductPage.js';

export class LandingPage extends Component {

  render () {
    return (
      <div className="container">
        <div className="header">
          <div>
            <h2>FIT BERRY</h2>
            <Route path='/admin' render = {() => (
              <h1>Hello Admin!</h1>
            )}/>
            <h3>Be confident, be free and feel great!</h3>
          </div>
          <div>
            <p>Try Fit Berry for free today!</p>
            <Link to = {'/admin'}>
              <button>Try Now!</button>
            </Link>
          </div>
        </div>
        <Route path='/products' component={ProductPage} />
        <div className="intro">
          <p>Our service gives freedom and flexibility to our girls to make their special days, special in a very special way!</p>
          <p>We bring to your door the products that fit you best from the brands your prefer exactly when you need them!</p>
        </div>
        <div className="images">
          <img src='https://cdn.rosetta.pgsitecore.com/en-gb/-/media/Always_GB/Images/Callouts/Desktop/products/Ultra/Normal%20Ultra%20Size%201%20Wings/always_ultra_normal_size_1_sanitary_towels_wings_14_pads_1200x1200.png?w=450&v=1-201704241438'/>
          <img src='https://www.jnjcolombia.com/sites/default/files/content-images/marca_ob/product-selector/assets/img/procomfort-mini.png'/>
          <img src={require('../images/soft.png')}/>
          <Link to = {'/products'}> <p>Discover all our products from all our brands!</p> </Link>
        </div>
        <div className='how-it-works'>
          <h2>How it works?</h2>
          <p> You pick the products you prefer in thequntity you need, place a monthly order depending on your period with our assistance if needed and voila! Some days before your perios a small beautiful box will appear in front of your door! </p>
        </div>
        <div className='reviews'>
          <h2>See what other custmers say about us! </h2>
          <p>"I totally love FitBerry!! Before my peiod was a bad experience, but now I can't wait for it to come!"</p>
          <p>"You guys are doing an amazing job! The product is great, the package amazing and the treats magical!"</p>
          <button>Get started!</button>
        </div>
      </div>
    );
  }
}
