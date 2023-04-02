const FETCH_LOCAL_LIST_ITEMS = 'FETCH_LOCAL_LIST_ITEMS';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCAL_LIST_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
