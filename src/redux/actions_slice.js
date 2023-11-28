// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const actionsSlice = createSlice({
  name: "actions",
  initialState: {
    slots: [],
    selectedAction: null,
    deleteModal: false,
  },
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
    setSelectedAction: (state, action) => {
      state.selectedAction = action.payload;
    },
    setDeleteModal: (state, action) => {
      state.deleteModal = action.payload;
    },
  },
});

export const { setSlots, setSelectedAction, setDeleteModal } =
  actionsSlice.actions;

export default actionsSlice.reducer;
