// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const chargersSlice = createSlice({
  name: "chargers",
  initialState: {
    selectedEntity: null,
    deleteModal: false,
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

export const { setSelectedEntity, setDeleteModal } = chargersSlice.actions;

export default chargersSlice.reducer;
