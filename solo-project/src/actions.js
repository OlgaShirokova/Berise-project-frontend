import { apiCall } from './apiMiddleware';

export const getProducts = () => ({
  type: 'GET_PRODUCTS',
  [apiCall]: {
    url: 'http://private-623b1-beraiseapi.apiary-mock.com/products',
    method: 'GET'
  }
});

export const addToCart = (productId) => ({
  type: 'ADD_TO_CART',
  [apiCall]: {
    url: 'http://private-623b1-beraiseapi.apiary-mock.com/order',
    method: 'POST'
  },
  productId
});
