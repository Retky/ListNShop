import { configureStore, combineReducers } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: combineReducers({
    // Add reducers here
  }),
});

export default store;
