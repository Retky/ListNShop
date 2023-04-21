const FETCH_LOCAL_PRICES = 'FETCH_LOCAL_PRICES';
const UPDATE_LOCAL_PRICE = 'UPDATE_LOCAL_PRICE';
const ADD_LOCAL_PRICE = 'ADD_LOCAL_PRICE';
const initialState = {
  nextId: 1,
  prices: [],
};

export const fetchLocalPrices = () => {
  const fetch = JSON.parse(localStorage.getItem('prices')) || initialState;
  localStorage.setItem('prices', JSON.stringify(fetch));
  return {
    type: FETCH_LOCAL_PRICES,
    payload: fetch.prices,
  };
};
export const updateLocalPrice = (price, itemId, shopId) => {
  const fetch = JSON.parse(localStorage.getItem('prices')) || initialState;
  const prices = fetch.prices;
  if (prices.find((p) => p.item_id === itemId && p.shop_id === shopId)) {
    const changedPrice = prices.find((p) => p.item_id === itemId && p.shop_id === shopId);
    changedPrice.price = price;
  } else {
    const newPrice = {
      id: fetch.nextId,
      item_id: itemId,
      shop_id: shopId,
      price,
    };
    prices.push(newPrice);
    fetch.nextId++;
  }
  localStorage.setItem('prices', JSON.stringify(fetch));
  return {
    type: UPDATE_LOCAL_PRICE,
    payload: fetch.prices,
  };
};
export const addLocalPrice = (newPrices) => {
  const fetch = JSON.parse(localStorage.getItem('prices')) || initialState;
  const prices = fetch.prices;
  newPrices.forEach((newPrice) => {
    const price = {
      id: fetch.nextId,
      item_id: newPrice.item_id,
      shop_id: newPrice.shop_id,
      price: newPrice.price,
    };
    prices.push(price);
    fetch.nextId++;
  });
  localStorage.setItem('prices', JSON.stringify(fetch));
  return {
    type: ADD_LOCAL_PRICE,
    payload: fetch.prices,
  };
};

const reducer = (state = initialState.prices, action) => {
  switch (action.type) {
    case FETCH_LOCAL_PRICES:
      return action.payload;
    case UPDATE_LOCAL_PRICE:
      return action.payload;
    case ADD_LOCAL_PRICE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
