import { configureStore, combineReducers } from '@reduxjs/toolkit';
import lists from './lists';
import shops from './shops';
import items from './items';

const store = configureStore({
  reducer: combineReducers({
    lists,
    shops,
    items,
  }),
});

export default store;
