const FETCH_LOCAL_LIST_ITEMS = 'FETCH_LOCAL_LIST_ITEMS';
const SAVE_LOCAL_LIST_ITEMS = 'SAVE_LOCAL_LIST_ITEMS';

const initialState = [];

export const fetchLocalListItems = (listId) => {
  const listItems = JSON.parse(localStorage.getItem('list_items')) || initialState;
  const items = JSON.parse(localStorage.getItem('items')) || initialState;
  const storagePrices = JSON.parse(localStorage.getItem('prices')) || initialState;

  const filterListItems = listItems.filter((listItem) => listItem.list_id === listId);

  const listItemsWithItems = filterListItems.map((listItem) => {
    const item = items.find((item) => item.id === listItem.item_id);
    const prices = storagePrices.filter((price) => price.item_id === listItem.item_id);

    return { ...listItem, item, prices };
  });

  return {
    type: FETCH_LOCAL_LIST_ITEMS,
    payload: listItemsWithItems,
  };
};

export const saveLocalListItems = (listItems) => {
  localStorage.setItem('list_items', JSON.stringify(listItems));

  return {
    type: SAVE_LOCAL_LIST_ITEMS,
    payload: listItems,
  };
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCAL_LIST_ITEMS:
      return action.payload;
    case SAVE_LOCAL_LIST_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
