const FETCH_LOCAL_PRICES = 'FETCH_LOCAL_PRICES';
const initialState = [];

export const fetchLocalPrices = () => {
  const prices = JSON.parse(localStorage.getItem('prices')) || initialState;
  return {
    type: FETCH_LOCAL_PRICES,
    payload: prices,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCAL_PRICES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
