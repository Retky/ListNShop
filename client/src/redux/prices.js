const FETCH_LOCAL_PRICES = 'FETCH_LOCAL_PRICES';
const UPDATE_LOCAL_PRICE = 'UPDATE_LOCAL_PRICE';
const ADD_LOCAL_PRICE = 'ADD_LOCAL_PRICE';
const initialState = [];

export const fetchLocalPrices = () => {
  const prices = JSON.parse(localStorage.getItem('prices')) || initialState;
  if (prices.length === 0) {
    localStorage.setItem('prices', JSON.stringify(initialState));
  }
  return {
    type: FETCH_LOCAL_PRICES,
    payload: prices,
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
