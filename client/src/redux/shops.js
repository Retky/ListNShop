const FETCH_LOCAL_SHOPS = 'FETCH_LOCAL_SHOPS';
const ADD_LOCAL_SHOP = 'ADD_LOCAL_SHOP';
const UPDATE_LOCAL_SHOP = 'UPDATE_LOCAL_SHOP';
const DELETE_LOCAL_SHOP = 'DELETE_LOCAL_SHOP';
const initialState = {
  nextId: 2,
  shops: [
    { id: 1, name: 'Default' },
  ]
};

export const fetchLocalShops = () => {
  const fetch = JSON.parse(localStorage.getItem('shops')) || initialState;
  const shops = fetch.shops;
  return {
    type: FETCH_LOCAL_SHOPS,
    payload: shops,
  };
};
export const addLocalShop = (shopName) => {
  const fetch = JSON.parse(localStorage.getItem('shops')) || initialState;
  const shops = fetch.shops;
  const newShop = {
    id: fetch.nextId,
    name: shopName,
  };
  fetch.nextId++;
  shops.push(newShop);
  localStorage.setItem('shops', JSON.stringify(fetch));
  return {
    type: ADD_LOCAL_SHOP,
    payload: shops,
  };
};
export const updateLocalShop = (shopName, id) => {
  const shops = JSON.parse(localStorage.getItem('shops')) || initialState;
  const shop = shops.find((shop) => shop.id === id);
  shop.name = shopName;
  localStorage.setItem('shops', JSON.stringify(shops));
  return {
    type: UPDATE_LOCAL_SHOP,
    payload: shops,
  };
};
export const deleteLocalShop = (id) => {
  const fetch = JSON.parse(localStorage.getItem('shops')) || initialState;
  const shops = fetch.shops;
  const shop = shops.find((shop) => shop.id === id);
  shops.splice(shops.indexOf(shop), 1);
  localStorage.setItem('shops', JSON.stringify(fetch));
  return {
    type: DELETE_LOCAL_SHOP,
    payload: shops,
  };
};

const reducer = (state = initialState.shops, action) => {
  switch (action.type) {
    case FETCH_LOCAL_SHOPS:
      return action.payload;
    case ADD_LOCAL_SHOP:
      return action.payload;
    case UPDATE_LOCAL_SHOP:
      return action.payload;
    case DELETE_LOCAL_SHOP:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
