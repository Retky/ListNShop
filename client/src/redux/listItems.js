const FETCH_LOCAL_LIST_ITEMS = 'FETCH_LOCAL_LIST_ITEMS';

const initialState = [];

export const fetchLocalListItems = (listId) => {
  const listItems = JSON.parse(localStorage.getItem('items')) || initialState;
  const filteredListItems = listItems.filter((item) => item.list_id === listId);
  return {
    type: FETCH_LOCAL_LIST_ITEMS,
    payload: filteredListItems,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCAL_LIST_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
