import { getProducts } from './actions';
import { activateSubscription } from './actions';
import { getSubscriptions } from './actions';

export const apiCall = Symbol('apiCall');

const createNewAction = (action, append) => {
  const newAction = Object.assign({}, action, {
    type: action.type + append
  })
  delete newAction[apiCall]
  return newAction
}

export default store => next => action => {

  const defaultHeaders = {
    'Content-Type': 'application/json'
  }

  const callApi = action[apiCall];
  if (!callApi) return next(action);

  const { body } = callApi;

  // Getting the auth token from the state
  const token = '93jwidn2i9ekdlsfo0iweiorwijf0ijfk2e2o09'
  defaultHeaders.authorization = `Bearer ${token}`

  let { method, headers } = callApi;
  method = method || 'GET';

  fetch(callApi.url, {
    method,
    headers: Object.assign({}, defaultHeaders, headers),
    body
  })
  .then(data => {
    console.log('DATA', data);
    // parse data
    return data.json().catch(() => ({}))
  }
  )
  .then(data => {
    // dispatch success action
    return store.dispatch(Object.assign(createNewAction(action, '_SUCCESS'), {data}));
  })
  .catch(error => {
    // dispatch error action
    return store.dispatch(Object.assign(createNewAction(action, '_FAIL'), {error}));
  });


  next(createNewAction(action, '_REQUEST'))
};
