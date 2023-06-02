import { createSlice } from "@reduxjs/toolkit";

// Counter
const InitialAuthState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: InitialAuthState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
