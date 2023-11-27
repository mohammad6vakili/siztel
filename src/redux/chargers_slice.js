// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const chargersSlice = createSlice({
  name: "chargers",
  initialState: {
    slots: [],
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { setSlots } = chargersSlice.actions;

export default chargersSlice.reducer;
