export interface IPlaygroundStepsState {
  step: number;
  currentValue: string | null;
  enteredValue: string | null;
  success: boolean | null;
}
export interface PlaygroundState {
  currentStep: number;
  steps: IPlaygroundStepsState[];
  totalSuccessful: number;
  totalUnsuccessful: number;
}
