import React from "react";
import { Button } from "../../../UI";

export interface IControlsProps {
  isTimerActive: boolean;
  isShowModal: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}
import { PlayArrow, Pause } from "@mui/icons-material";

import styles from "./Controls.module.css";
const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive, isShowModal } = props;

  return (
    <div>
      <Button
        endIcon={<PlayArrow />}
        className={styles.button}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive || isShowModal}
      >
        Play
      </Button>
      <Button
        endIcon={<Pause />}
        className={styles.button}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive || isShowModal}
      >
        Pause
      </Button>
    </div>
  );
};

export default Controls;
