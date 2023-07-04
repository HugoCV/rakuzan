import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { total: 0 },
  reducers: {
    increment(state) {
      state.total += 1;
    },
    decrement(state) {
      state.total -= 1;
    },
    incrementByAmount(state, action) {
      state.total += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
