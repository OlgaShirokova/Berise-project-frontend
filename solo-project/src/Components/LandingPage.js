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
        <div className="landing-view">
          <Link to = {'/'}><div id='logo'>Berise</div></Link>
          <div className='menu-bar'>
            <div><a href='#how-it-works'>How it works</a></div>
            <Link to = {'/products'}><div>Products</div></Link>
            <div><a href='#reviews'>Reviews</a></div>
            <div>Login</div>
            <div>Join</div>
            <Link to = {'/admin'}><div>Admin</div></Link>
          </div>
          <div className='try-berise'>
          <div id='try-text'>We want girls to live every day fully and without worries! For that we deliver your preferred products for your period to your door exactly when you need them!</div>
          <p>Try Berise for free today!</p>
            <Link to = {'/products'}><button> TRY NOW! </button></Link>
          </div>
        </div>
        <div className="intro">
          <p className='intro-first'>Be free and live your days freely</p>
          <p>Our service gives freedom and flexibility to our girls to make their special days, special in a very special way!</p>
          <p>We bring to your door the products that fit you best from the brands your prefer exactly when you need them!</p>
        </div>
        <div className="images">
          <div className="first-image">
            <img src='http://news.always.com/sites/always.newshq.businesswire.com/files/logo/image/Always_Infinity_logo.jpg'/>
          </div>
          <div className="second-image">
            <img src='http://momspotted.com/wp-content/uploads/2011/11/OB-logo-hi-res.jpg'/>
          </div>
          <div className="third-image">
            <img src='http://www.creativespark.co.za/wp-content/uploads/2016/09/CS_logos_kotex.jpg'/>
          </div>
          <div className="fourth-image">
            <img src='http://www.granpremioalainnovacion.com/wp-content/uploads/2012/12/evax.jpg'/>
          </div>
          <div className="fifth-image">
            <img src='https://www.aecc.es/Investigacion/Fundaci%C3%B3n%20Cient%C3%ADfica/colabora/entidades/PublishingImages/Logo_ausonia.gif'/>
          </div>
        </div>
        <div className='discover'>
          <p>Discover all our products from all our brands!</p>
          <Link to = {'/products'}><button>SEE ALL</button></Link>
        </div>
        <div className='how-it-works' id='how-it-works'>
          <h2>How it works?</h2>
          <p> You pick the products you prefer in the quantity you need, place an order according to your period length and voila! A couple of days before your period a small beautiful box will appear in front of your door! We have assistants who will love to help you at any moment to figure ot how to set your subscription best to get everything you need exactly when you need it!</p>
        </div>
        <div className='reviews' id='reviews'>
          <h2>See what other customers say about us! </h2>
          <div className='reviews-p'>
            <img src='http://cdn.playbuzz.com/cdn/46174aaf-3486-43fb-97bb-ece8e0f23eaa/df9ad726-bfe2-4722-8262-dd7958034c72.png'/>
            <p className='left-review'>"I totally love Berise!! Before my peiod was a bad experience, but now I can't wait for it to come!"</p>
            <img src='http://www.womenandinfants.org/images/women-and-infants-breast-exam-options.jpg'/>
            <p className='right-review'>"You guys are doing an amazing job! The product is great, the package amazing and the treats magical!"</p>
          </div>
          <Link to = {'/products'}><button id='get-started'>GET STARTED!</button></Link>
        </div>
      </div>
    );
  }
}
