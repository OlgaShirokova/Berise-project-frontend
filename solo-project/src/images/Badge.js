import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import ShoppingBasketIcon from 'material-ui/svg-icons/action/shopping-basket';
import { connect } from 'react-redux';

class BadgeBasket extends React.Component {

  render() {
    return (
      <div>
        <Badge
          badgeContent={Object.keys(this.props.orders).length}
          secondary={true}
          badgeStyle={{top: 12, right: 12}}
        >
          <IconButton tooltip="shopping-basket">
            <ShoppingBasketIcon />
          </IconButton>
        </Badge>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  orders: state.orders
})

export default connect(mapStateToProps)(BadgeBasket);
