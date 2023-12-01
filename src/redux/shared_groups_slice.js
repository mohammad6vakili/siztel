// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const sharedGroupsSlice = createSlice({
  name: "sharedGroups",
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
  sharedGroupsSlice.actions;

export default sharedGroupsSlice.reducer;
