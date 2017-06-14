import { apiCall } from './apiMiddleware';

const source = 'http://private-623b1-beraiseapi.apiary-mock.com';

export const getProducts = () => ({
  type: 'GET_PRODUCTS',
  [apiCall]: {
    url: `${source}/products`,
    method: 'GET'
  }
});

export const addToCart = (productId) => ({
  type: 'ADD_TO_CART',
  [apiCall]: {
    url: `${source}/order`,
    method: 'POST'
  },
  productId
});

export const activateSubscription = () => ({
  type: 'ACTIVATE_SUBSCRIPTION',
  [apiCall]: {
    url: `${source}/subscription`,
    method: 'POST'
  }
});

export const getSubscriptions = () => ({
  type: 'GET_SUBSCRIPTIONS',
  [apiCall]: {
    url: `${source}/subscription`,
    method: 'GET'
  }
});
