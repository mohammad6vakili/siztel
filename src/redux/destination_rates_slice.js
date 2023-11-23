// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const destinationRatesSlice = createSlice({
  name: "destinationRates",
  initialState: {
    slots: [],
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { setSlots } = destinationRatesSlice.actions;

export default destinationRatesSlice.reducer;
