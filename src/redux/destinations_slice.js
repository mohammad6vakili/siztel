// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const destinationsSlice = createSlice({
  name: "destinations",
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

export const { setSelectedEntity, setDeleteModal } = destinationsSlice.actions;

export default destinationsSlice.reducer;
