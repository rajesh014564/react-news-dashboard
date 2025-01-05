import { createSlice } from '@reduxjs/toolkit';

const payoutSlice = createSlice({
  name: 'payout',
  initialState: { rate: 0, payouts: [] },
  reducers: {
    setRate: (state, action) => {
      state.rate = action.payload;
    },
    addPayout: (state, action) => {
      state.payouts.push(action.payload);
    },
  },
});

export const { setRate, addPayout } = payoutSlice.actions;
export default payoutSlice.reducer;