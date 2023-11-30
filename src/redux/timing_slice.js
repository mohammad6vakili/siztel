// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const timingSlice = createSlice({
  name: "timing",
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

export const { setSelectedEntity, setDeleteModal } = timingSlice.actions;

export default timingSlice.reducer;
