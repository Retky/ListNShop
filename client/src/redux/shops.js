const FETCH_LOCAL_SHOPS = 'FETCH_LOCAL_SHOPS';
const ADD_LOCAL_SHOP = 'ADD_LOCAL_SHOP';
const initialState = [
  { id: 0, name: 'Default' },
];

export const fetchLocalShops = () => {
  const shops = JSON.parse(localStorage.getItem('shops')) || initialState;
  return {
    type: FETCH_LOCAL_SHOPS,
    payload: shops,
  };
};

export const addLocalShop = (shop) => {
  const shops = JSON.parse(localStorage.getItem('shops')) || initialState;
  shops.push(shop);
  localStorage.setItem('shops', JSON.stringify(shops));
  return {
    type: ADD_LOCAL_SHOP,
    payload: shops,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCAL_SHOPS:
      return action.payload;
    case ADD_LOCAL_SHOP:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
