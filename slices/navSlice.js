import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  timeTravelInfo: null,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTimeTravelInfo: (state, action) => {
      state.timeTravelInfo = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTimeTravelInfo } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTimeTravelInfo = (state) => state.nav.timeTravelInfo;

export default navSlice.reducer;
