import React, {useEffect, useRef, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrentStep } from "./store/slices";
import Controls from "./components/Controls";
import { INTERVAL_TIME } from "./constants";
import RandomKeys from "./components/RandomKeys";


const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if(isTimerActive){
      refreshIntervalId.current = setInterval(() => {
        dispatch(setCurrentStep())
      }, INTERVAL_TIME);
    }else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
  }, [isTimerActive]);

  return (
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
    </div>
  );
};

export default Playground;
