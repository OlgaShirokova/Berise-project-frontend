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
    return Object.assign({}, state, { products: state.products.concat(action.data) });
  case 'GET_PRODUCTS_FAIL':
    return state;
    break;
  case 'ADD_TO_CART_SUCCESS':
    console.log('--------', Object.keys(state.orders).map(id => state.orders[parseInt(id)]));
    const order = Object.keys(state.orders)
    .map(id => state.orders[parseInt(id)])
    .find(el => el.SKU === action.productId)

    let newState;
    if(order) {
      console.log('in order', state.orders[action.productId].quantity);
      newState = Object.assign({}, state)
      newState.orders = Object.assign({}, state.orders, {
        [action.productId]: {
          quantity: state.orders[action.productId].quantity+1
        }
      })
    }else{
      console.log('too bad');
      newState = Object.assign({}, state)
      newState.orders = Object.assign({}, state.orders, {
        [action.productId]: {
          SKU: action.productId,
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
