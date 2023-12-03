// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const actionsSlice = createSlice({
  name: "app",
  initialState: {
    AllTpIds: [],
    selectedTpId: null,
  },
  reducers: {
    setAllTpIds: (state, action) => {
      state.AllTpIds = action.payload;
    },
    setSelectedTpId: (state, action) => {
      state.selectedTpId = action.payload;
    },
  },
});

export const { setAllTpIds, setSelectedTpId } = actionsSlice.actions;

export default actionsSlice.reducer;
