import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaygroundState } from "./types";

export const initialState: PlaygroundState = {
  currentStep: 0,
};
export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep = state.currentStep + 1;
    },
  },
});

export const { setCurrentStep } = playgroundSlice.actions;
export default playgroundSlice.reducer;
