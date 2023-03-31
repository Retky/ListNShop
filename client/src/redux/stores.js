const FETCH_LOCAL_STORES = 'FETCH_LOCAL_STORES';

const initialState = [];

export const fetchLocalStores = () => {
  const stores = JSON.parse(localStorage.getItem('stores')) || initialState;
  return {
    type: FETCH_LOCAL_STORES,
    payload: stores,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCAL_STORES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
