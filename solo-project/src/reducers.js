const movies = (state = [], action) => {
  switch (action.type) {
  case 'ADD_MOVIES':
    return state;
  case 'MARK_AS_SEEN':
    return state;
  default:
    return state;
  }
};

export default movies;
