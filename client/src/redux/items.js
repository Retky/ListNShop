const FETCH_LOCAL_ITEMS = 'FETCH_LOCAL_ITEMS';
const initialState = [];

export const fetchLocalItems = (listId) => {
  const items = JSON.parse(localStorage.getItem('items')) || initialState;

  return {
    type: FETCH_LOCAL_ITEMS,
    payload: items,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCAL_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
