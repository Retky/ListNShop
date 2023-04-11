const FETCH_LOCAL_ITEMS = 'FETCH_LOCAL_ITEMS';
const UPDATE_LOCAL_ITEM_QUANTITY = 'UPDATE_LOCAL_ITEM_QUANTITY';
const INC_LOCAL_ITEM_QUANTITY = 'INC_LOCAL_ITEM_QUANTITY';
const DEC_LOCAL_ITEM_QUANTITY = 'DEC_LOCAL_ITEM_QUANTITY';
const initialState = [];

export const fetchLocalItems = () => {
  const items = JSON.parse(localStorage.getItem('items')) || initialState;
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
    default:
      return state;
  }
};

export default reducer;
