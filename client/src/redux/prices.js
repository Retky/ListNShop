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
  const prices = JSON.parse(localStorage.getItem('prices')) || initialState;
  const newPrice = { price, shop_id: shopId, item_id: itemId };
  if (prices.find((p) => p.item_id === itemId && p.shop_id === shopId)) {
    const priceId = prices.find((p) => p.item_id === itemId && p.shop_id === shopId).id;
    newPrice.id = priceId;
    const index = prices.findIndex((p) => p.id === priceId);
    prices[index] = newPrice;
  } else {
    newPrice.id = prices.length + 1;
    prices.push(newPrice);
  }
  localStorage.setItem('prices', JSON.stringify(prices));
  return {
    type: UPDATE_LOCAL_PRICE,
    payload: prices,
  };
};

export const addLocalPrice = (newPrices) => {
  const prices = JSON.parse(localStorage.getItem('prices'));
  newPrices.forEach((newPrice) => {
    let newId = prices.length;
    while (prices.find((p) => p.id === newId)) {
      newId++;
    }
    newPrice.id = newId;
    prices.push(newPrice);
  });
  localStorage.setItem('prices', JSON.stringify(prices));
  return {
    type: ADD_LOCAL_PRICE,
    payload: prices,
  };
};

const reducer = (state = initialState, action) => {
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
