// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const ratingPlansSlice = createSlice({
  name: "ratingPlans",
  initialState: {
    slots: [],
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { setSlots } = ratingPlansSlice.actions;

export default ratingPlansSlice.reducer;
