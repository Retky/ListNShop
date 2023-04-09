const FETCH_LOCAL_LISTS = 'FETCH_LOCAL_LISTS';
const initialState = [{ id: 0, name: 'New List' }];

export const fetchLocalLists = () => {
  const lists = JSON.parse(localStorage.getItem('lists')) || initialState;
  return {
    type: FETCH_LOCAL_LISTS,
    payload: lists,
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
