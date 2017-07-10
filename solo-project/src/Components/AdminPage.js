import React, { Component } from 'react';
import './AdminPage.css';
import { connect } from 'react-redux';
import { Subscription } from './Subscription.js';
import { getSubscriptions } from '../actions';

class AdminPage extends Component {

  componentDidMount () {
    this.props.getSubscriptions();
  }

  renderSubscriptions () {
    if (this.props.subscriptions.subscriptions)
    return (this.props.subscriptions.subscriptions).map(element => {
      return <Subscription key={element.sub_id} subscription={element}/>;
    })

  }

  render () {
    return (
      <div className="subscription-list-container">
        {this.renderSubscriptions()}
      </div>
    );
  }

}


const mapStateToProps = (state) => ({
  subscriptions: state.subscriptions
});

const mapDispatchToProps = (dispatch) => ({
  getSubscriptions: () => dispatch(getSubscriptions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
