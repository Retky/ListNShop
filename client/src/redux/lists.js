const FETCH_LOCAL_LISTS = 'FETCH_LOCAL_LISTS';
const initialState = {
  nextId: 1,
  lists: [
    { id: 0, name: 'New List' }
  ],
};

export const fetchLocalLists = () => {
   const fetch = JSON.parse(localStorage.getItem('lists')) || initialState;
  return {
    type: FETCH_LOCAL_LISTS,
    payload: fetch.lists,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCAL_LISTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
