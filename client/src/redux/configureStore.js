import { configureStore, combineReducers } from '@reduxjs/toolkit';
import lists from './lists';
import shops from './shops';
import items from './items';
import prices from './prices';

const store = configureStore({
  reducer: combineReducers({
    lists,
    shops,
    items,
    prices,
  }),
});

export default store;
