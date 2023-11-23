// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const ratesSlice = createSlice({
  name: "rates",
  initialState: {
    slots: [],
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { setSlots } = ratesSlice.actions;

export default ratesSlice.reducer;
