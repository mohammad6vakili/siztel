// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const sharedGroupsSlice = createSlice({
  name: "sharedGroups",
  initialState: {
    slots: [],
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
});

export const { setSlots } = sharedGroupsSlice.actions;

export default sharedGroupsSlice.reducer;
