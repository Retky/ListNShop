import { configureStore, combineReducers } from '@reduxjs/toolkit';
import lists from './lists';
import stores from './stores';
import listItems from './listItems';

const store = configureStore({
  reducer: combineReducers({
    lists,
    stores,
    listItems,
  }),
});

export default store;
