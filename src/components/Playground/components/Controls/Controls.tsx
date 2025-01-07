import React from 'react';
import PropTypes from 'prop-types';
export interface ControlsProps {
    isTimerActive: boolean;
    setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Controls:React.FC<ControlsProps> = (props)  => {
    const {isTimerActive, setIsTimerActive} = props
    return (
        <div>
            <button onClick={()=> setIsTimerActive(true)} disabled={isTimerActive}>Play</button>
            <button onClick={()=> setIsTimerActive(false)} disabled={!isTimerActive}>Pause</button>
        </div>
    );
};



export default Controls;