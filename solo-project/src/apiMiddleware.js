import { getProducts } from './actions';

export const apiCall = Symbol('apiCall');

const createNewAction = (action, append) => {
  const newAction = Object.assign({}, action, {
    type: action.type + append
  })
  delete newAction[apiCall]
  return newAction
}

export default store => next => action => {

  const callApi = action[apiCall];
  if (!callApi) return next(action);

  let { method } = callApi;
  method = method || 'GET';

  fetch(callApi.url, {
    method
  })
  .then(data =>
    // parse data
    data.json()
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
