import { fetchProducts } from './apiMiddleware';

const defaultState = {
  user: {
            "email": "donkey@kong.com",
            "age": 23,
            "auth_token": "93jwidn2i9ekdlsfo0iweiorwijf0ijfk2e2o09",
            "staff": true
        },
  products: [],
  orders: {},
  authentication: {},
  subscription: {},
  subscriptions: {},
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'GET_PRODUCTS_REQUEST':
    return state
    break;
  case 'GET_PRODUCTS_SUCCESS':
    return Object.assign({}, state, { products: action.data});
  case 'GET_PRODUCTS_FAIL':
    return state;
    break;
  case 'ADD_TO_CART_SUCCESS':
    const order = Object.keys(state.orders)
    .map(sku => state.orders[parseInt(sku)])
    .find(el => el.sku === action.productId)

    let newState;
    if(order) {
      newState = Object.assign({}, state)
      newState.orders = Object.assign({}, state.orders, {
        [action.productId]: {
          sku: action.productId,
          quantity: state.orders[action.productId].quantity+1
        }
      })
    }else{
      newState = Object.assign({}, state)
      newState.orders = Object.assign({}, state.orders, {
        [action.productId]: {
          sku: action.productId,
          quantity: 1
        }
      })
    }
    return newState

    break;
  case 'ACTIVATE_SUBSCRIPTION_SUCCESS':
    newState = Object.assign({}, state)
    newState.subscription = Object.assign({}, state.subscription, {
      active: true
    })
    return newState
    break;
  case 'GET_SUBSCRIPTIONS_SUCCESS':
    return Object.assign({}, state, { subscriptions: action.data});
  default:
    return state;
  }
};

export default reducer;
