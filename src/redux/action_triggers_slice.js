// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const actionTriggersSlice = createSlice({
  name: "actionTriggers",
  initialState: {
    slots: [],
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { setSlots } = actionTriggersSlice.actions;

export default actionTriggersSlice.reducer;
