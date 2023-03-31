import { configureStore, combineReducers } from '@reduxjs/toolkit';
import lists from './lists';

const store = configureStore({
  reducer: combineReducers({
    lists,
  }),
});

export default store;
