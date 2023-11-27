// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    slots: [],
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { setSlots } = accountsSlice.actions;

export default accountsSlice.reducer;
