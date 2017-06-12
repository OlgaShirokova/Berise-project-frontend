import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { ProductPage } from './ProductPage.js';
import './LandingPage.css';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 25,
};

export class LandingPage extends Component {


  render () {

    return (
      <div className="container">
        <div className="try-berise">
          <p>Try Berise for free today!</p>
          <Link to = {'/admin'}>
            <RaisedButton label="Try Now!" backgroundColor='pink' style={style} />
          </Link>
        </div>
        <div className="intro">
          <p>Our service gives freedom and flexibility to our girls to make their special days, special in a very special way!</p>
          <p>We bring to your door the products that fit you best from the brands your prefer exactly when you need them!</p>
        </div>
        <div className="images">
          <div className="first-image">
            <img src='https://cdn.rosetta.pgsitecore.com/en-gb/-/media/Always_GB/Images/Callouts/Desktop/products/Ultra/Normal%20Ultra%20Size%201%20Wings/always_ultra_normal_size_1_sanitary_towels_wings_14_pads_1200x1200.png?w=450&v=1-201704241438'/>
          </div>
          <div className="second-image">
            <img src='https://www.jnjcolombia.com/sites/default/files/content-images/marca_ob/product-selector/assets/img/procomfort-mini.png'/>
          </div>
          <div className="third-image">
            <img src={require('../visuals/soft.png')}/>
          </div>
          <div className="fourth-image">
            <img src='https://www.carethy.lu/media/4/photos/products/034109/34109-081_1_g.jpg'/>
          </div>
          <div className="fifth-image">
            <img src='https://www.ulabox.com/media/33184_l1.jpg'/>
          </div>
        </div>
        <p>Discover all our products from all our brands!</p>
        <Link to = {'/products'}><RaisedButton label="See All" backgroundColor='pink' style={style} /></Link>
        <div className='how-it-works'>
          <h2>How it works?</h2>
          <p> You pick the products you prefer in thequntity you need, place a monthly order depending on your period with our assistance if needed and voila! Some days before your perios a small beautiful box will appear in front of your door! </p>
        </div>
        <div className='reviews'>
          <h2>See what other customers say about us! </h2>
          <div className='reviews-p'>
            <p className='left-review'>"I totally love FitBerry!! Before my peiod was a bad experience, but now I can't wait for it to come!"</p>
            <p className='right-review'>"You guys are doing an amazing job! The product is great, the package amazing and the treats magical!"</p>
          </div>
          <RaisedButton label="Get Started!" backgroundColor='pink' style={style} />
        </div>
      </div>
    );
  }
}
