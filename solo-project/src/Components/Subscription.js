import React, { Component } from 'react';
import './Subscription.css';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';

const style = {
  margin: 25,
};

export class Subscription extends Component {

  renderOrders() {
    return (this.props.subscription.order).map(element => {
      console.log(element);
      return (
        <div id='order-details'>
          <div style={{fontWeight:'bold'}} className='order-detail'>{element.name}:</div>
          <div className='order-detail'>${element.price/100},</div>
          <div className='order-detail'>{element.quantity} units</div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className="subscription">
        <div> User: {this.props.subscription.email} </div>
        <div> Delivery date: {moment(this.props.subscription.date).format('MMMM Do YYYY, h:mm:ss a')} </div>
        {this.renderOrders()}
      </div>
    );
  }
}
