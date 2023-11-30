// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const actionTriggersSlice = createSlice({
  name: "actionTriggers",
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
  actionTriggersSlice.actions;

export default actionTriggersSlice.reducer;
