import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaygroundState } from "./types";
import {ARR_ARROW_CODES} from "../constants";

export const initialState: PlaygroundState = {
  currentStep: 0,
  steps: []
};
export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep = state.currentStep + 1;
    },
    setSteps: (state) => {
      const randomKey = Math.floor(Math.random()* ARR_ARROW_CODES.length)
      state.steps.push({
        step: state.currentStep,
        currentValue: ARR_ARROW_CODES[randomKey], enteredValue: null,
        success: null,
      })
    },
    setEnteredValue: (state, action) => {
      const step = state.steps[state.currentStep-1]
      state.steps[state.currentStep-1] = {
        ...step,
        enteredValue: action.payload
      }
    }
  },
});

export const { setCurrentStep,setEnteredValue,setSteps } = playgroundSlice.actions;
export default playgroundSlice.reducer;
