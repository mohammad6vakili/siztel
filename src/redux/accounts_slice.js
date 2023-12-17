// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    selectedEntity: null,
    detailsModal: null,
    viewAccountDetail: null,
    viewAccountDetailLoading: false,
  },
  reducers: {
    setSelectedEntity: (state, action) => {
      state.selectedEntity = action.payload;
    },
    setDetailsModal: (state, action) => {
      state.detailsModal = action.payload;
    },
    setViewAccountDetail: (state, action) => {
      state.viewAccountDetail = action.payload;
    },
    setViewAccountDetailLoading: (state, action) => {
      state.viewAccountDetailLoading = action.payload;
    },
  },
});

export const {
  setSelectedEntity,
  setDetailsModal,
  setViewAccountDetail,
  setViewAccountDetailLoading,
} = accountsSlice.actions;

export default accountsSlice.reducer;
