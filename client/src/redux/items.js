const FETCH_LOCAL_ITEMS = 'FETCH_LOCAL_ITEMS';
const UPDATE_LOCAL_ITEM_QUANTITY = 'UPDATE_LOCAL_ITEM_QUANTITY';
const INC_LOCAL_ITEM_QUANTITY = 'INC_LOCAL_ITEM_QUANTITY';
const DEC_LOCAL_ITEM_QUANTITY = 'DEC_LOCAL_ITEM_QUANTITY';
const ADD_LOCAL_ITEM = 'ADD_LOCAL_ITEM';
const initialState = [];

export const fetchLocalItems = () => {
  const items = JSON.parse(localStorage.getItem('items')) || initialState;
  if (items.length === 0) {
    localStorage.setItem('items', JSON.stringify(initialState));
  }
  return {
    type: FETCH_LOCAL_ITEMS,
    payload: items,
  };
};

export const updateLocalItemQuantity = (itemId, quantity) => {
  const items = JSON.parse(localStorage.getItem('items')) || initialState;
  const item = items.find((item) => item.id === itemId);
  item.quantity = quantity;
  localStorage.setItem('items', JSON.stringify(items));
  return {
    type: UPDATE_LOCAL_ITEM_QUANTITY,
    payload: items,
  };
};

export const incLocalItemQuantity = (itemId) => {
  const items = JSON.parse(localStorage.getItem('items')) || initialState;
  const item = items.find((item) => item.id === itemId);
  item.quantity++;
  localStorage.setItem('items', JSON.stringify(items));
  return {
    type: INC_LOCAL_ITEM_QUANTITY,
    payload: items,
  };
};

export const decLocalItemQuantity = (itemId) => {
  const items = JSON.parse(localStorage.getItem('items')) || initialState;
  const item = items.find((item) => item.id === itemId);
  item.quantity--;
  localStorage.setItem('items', JSON.stringify(items));
  return {
    type: DEC_LOCAL_ITEM_QUANTITY,
    payload: items,
  };
};

export const addLocalItem = (item) => {
  console.log('item', item);
  const items = JSON.parse(localStorage.getItem('items'));
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
  return {
    type: ADD_LOCAL_ITEM,
    payload: items,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCAL_ITEMS:
      return action.payload;
    case UPDATE_LOCAL_ITEM_QUANTITY:
      return action.payload;
    case INC_LOCAL_ITEM_QUANTITY:
      return action.payload;
    case DEC_LOCAL_ITEM_QUANTITY:
      return action.payload;
    case ADD_LOCAL_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
