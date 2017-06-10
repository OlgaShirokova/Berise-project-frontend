import { fetchProducts } from './apiMiddleware';

const defaultState = {
  products: [],
  orders: {},
  authentication: {}
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
      console.log('in order', state.orders);
      newState = Object.assign({}, state)
      newState.orders = Object.assign({}, state.orders, {
        [action.productId]: {
          sku: action.productId,
          quantity: state.orders[action.productId].quantity+1
        }
      })
    }else{
      console.log('too bad', state.orders);
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
  default:
    return state;
  }
};

export default reducer;
