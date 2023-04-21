const FETCH_LOCAL_ITEMS = 'FETCH_LOCAL_ITEMS';
const UPDATE_LOCAL_ITEM_QUANTITY = 'UPDATE_LOCAL_ITEM_QUANTITY';
const INC_LOCAL_ITEM_QUANTITY = 'INC_LOCAL_ITEM_QUANTITY';
const DEC_LOCAL_ITEM_QUANTITY = 'DEC_LOCAL_ITEM_QUANTITY';
const ADD_LOCAL_ITEM = 'ADD_LOCAL_ITEM';
const DELETE_LOCAL_ITEM = 'DELETE_LOCAL_ITEM';
const initialState = {
  nextId: 1,
  items: [],
};

export const fetchLocalItems = () => {
  const fetch = JSON.parse(localStorage.getItem('items')) || initialState;
    localStorage.setItem('items', JSON.stringify(fetch));
  return {
    type: FETCH_LOCAL_ITEMS,
    payload: fetch.items,
  };
};
export const updateLocalItemQuantity = (itemId, quantity) => {
  const fetch = JSON.parse(localStorage.getItem('items')) || initialState;
  const items = fetch.items;
  const item = items.find((item) => item.id === itemId);
  item.quantity = quantity;
  localStorage.setItem('items', JSON.stringify(fetch));
  return {
    type: UPDATE_LOCAL_ITEM_QUANTITY,
    payload: fetch.items,
  };
};
export const incLocalItemQuantity = (itemId) => {
  const fetch = JSON.parse(localStorage.getItem('items')) || initialState;
  const items = fetch.items;
  const item = items.find((item) => item.id === itemId);
  item.quantity++;
  localStorage.setItem('items', JSON.stringify(fetch));
  return {
    type: INC_LOCAL_ITEM_QUANTITY,
    payload: fetch.items,
  };
};
export const decLocalItemQuantity = (itemId) => {
  const fetch = JSON.parse(localStorage.getItem('items')) || initialState;
  const items = fetch.items;
  const item = items.find((item) => item.id === itemId);
  item.quantity--;
  localStorage.setItem('items', JSON.stringify(fetch));
  return {
    type: DEC_LOCAL_ITEM_QUANTITY,
    payload: fetch.items,
  };
};
export const addLocalItem = (itemName, itemQuantity, itemUnit) => {
  const fetch = JSON.parse(localStorage.getItem('items')) || initialState;
  const items = fetch.items;
  const newItem = {
    id: fetch.nextId,
    name: itemName,
    quantity: itemQuantity,
    unit: itemUnit,
  };
  items.push(newItem);
  fetch.nextId++;
  localStorage.setItem('items', JSON.stringify(fetch));
  return {
    type: ADD_LOCAL_ITEM,
    payload: items,
    itemId: newItem.id,
  };
};
export const deleteLocalItem = (itemId) => {
  const fetch = JSON.parse(localStorage.getItem('items')) || initialState;
  const items = fetch.items;
  const item = items.find((item) => item.id === itemId);
  const index = items.indexOf(item);
  items.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(fetch));
  return {
    type: DELETE_LOCAL_ITEM,
    payload: items,
  };
};

const reducer = (state = initialState.items, action) => {
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
    case DELETE_LOCAL_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
