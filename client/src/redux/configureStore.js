import { configureStore, combineReducers } from '@reduxjs/toolkit';
import lists from './lists';
import shops from './shops';
import listItems from './listItems';

const store = configureStore({
  reducer: combineReducers({
    lists,
    shops,
    listItems,
  }),
});

export default store;
