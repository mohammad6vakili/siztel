// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const actionsSlice = createSlice({
  name: "app",
  initialState: {
    AllTpIds: [],
    getAllTpIdsLoading: false,
    selectedTpId: null,
  },
  reducers: {
    setAllTpIds: (state, action) => {
      state.AllTpIds = action.payload;
    },
    setGetAllTpIdsLoading: (state, action) => {
      state.getAllTpIdsLoading = action.payload;
    },
    setSelectedTpId: (state, action) => {
      state.selectedTpId = action.payload;
    },
  },
});

export const { setAllTpIds, setGetAllTpIdsLoading, setSelectedTpId } =
  actionsSlice.actions;

export default actionsSlice.reducer;
