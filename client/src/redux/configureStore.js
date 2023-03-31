import { configureStore, combineReducers } from '@reduxjs/toolkit';
import lists from './lists';
import stores from './stores';

const store = configureStore({
  reducer: combineReducers({
    lists,
    stores,
  }),
});

export default store;
