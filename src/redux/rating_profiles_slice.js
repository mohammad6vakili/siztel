// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const ratingProfiles = createSlice({
  name: "ratingProfiles",
  initialState: {
    slots: [],
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { setSlots } = ratingProfiles.actions;

export default ratingProfiles.reducer;
