// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const destinationRatesSlice = createSlice({
  name: "destinationRates",
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
  destinationRatesSlice.actions;

export default destinationRatesSlice.reducer;
