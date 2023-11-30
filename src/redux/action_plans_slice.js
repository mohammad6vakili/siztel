// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const actionPlansSlice = createSlice({
  name: "actionPlans",
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
  actionPlansSlice.actions;

export default actionPlansSlice.reducer;
