// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    detailsModal: null,
    viewAccountDetail: null,
    viewAccountDetailLoading: false,
  },
  reducers: {
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
  setDetailsModal,
  setViewAccountDetail,
  setViewAccountDetailLoading,
} = accountsSlice.actions;

export default accountsSlice.reducer;
