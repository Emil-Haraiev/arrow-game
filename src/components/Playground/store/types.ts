export interface  IPlaygroundStepsState {
  currentValue: string
}
export interface PlaygroundState {
  currentStep: number;
  steps: IPlaygroundStepsState[];
}
