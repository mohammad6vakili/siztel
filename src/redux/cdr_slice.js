// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const cdrSlice = createSlice({
  name: "cdr",
  initialState: {
    slots: [],
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { setSlots } = cdrSlice.actions;

export default cdrSlice.reducer;
