// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const ratingPlansSlice = createSlice({
  name: "ratingPlans",
  initialState: {
    slots: [],
    selectedEntity: null,
    deleteModal: false,
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
    setSelectedEntity: (state, action) => {
      state.selectedEntity = action.payload;
    },
    setDeleteModal: (state, action) => {
      state.deleteModal = action.payload;
    },
  },
});

export const { setSlots, setSelectedEntity, setDeleteModal } =
  ratingPlansSlice.actions;

export default ratingPlansSlice.reducer;
