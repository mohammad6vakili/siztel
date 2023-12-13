// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    selectedEntity: null,
    deleteModal: null,
  },
  reducers: {
    setSelectedEntity: (state, action) => {
      state.selectedEntity = action.payload;
    },
    setDeleteModal: (state, action) => {
      state.deleteModal = action.payload;
    },
  },
});

export const { setSelectedEntity, setDeleteModal } = accountsSlice.actions;

export default accountsSlice.reducer;
