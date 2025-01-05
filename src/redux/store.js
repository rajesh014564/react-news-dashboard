import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import newsReducer from './newsSlice.js';
import payoutReducer from './payoutSlice.js';

export default configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    payout: payoutReducer,
  },
});

