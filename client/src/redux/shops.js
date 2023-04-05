const FETCH_LOCAL_SHOPS = 'FETCH_LOCAL_SHOPS';

const initialState = [];

export const fetchLocalShops = () => {
  const shops = JSON.parse(localStorage.getItem('shops')) || initialState;
  return {
    type: FETCH_LOCAL_SHOPS,
    payload: shops,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCAL_SHOPS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
