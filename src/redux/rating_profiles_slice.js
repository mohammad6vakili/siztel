// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const ratingProfiles = createSlice({
  name: "ratingProfiles",
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
  ratingProfiles.actions;

export default ratingProfiles.reducer;
