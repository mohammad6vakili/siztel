// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const actionPlansSlice = createSlice({
  name: "actionPlans",
  initialState: {
    slots: [],
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { setSlots } = actionPlansSlice.actions;

export default actionPlansSlice.reducer;
