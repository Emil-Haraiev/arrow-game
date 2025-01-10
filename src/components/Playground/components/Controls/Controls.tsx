import React from "react";
export interface IControlsProps {
  isTimerActive: boolean;
  isShowModal: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive, isShowModal } = props;

  return (
    <div>
      <button onClick={() => setIsTimerActive(true)} disabled={isTimerActive || isShowModal}>
        Play
      </button>
      <button onClick={() => setIsTimerActive(false)} disabled={!isTimerActive || isShowModal}>
        Pause
      </button>
    </div>
  );
};

export default Controls;
