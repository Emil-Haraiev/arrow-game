import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setCurrentStep} from "./store/slices";
import Controls from "./components/Controls";

export const INTERVAL_TIME = 3000;

const Playground : React.FC= () => {
    const state = useAppSelector((state) => state.playground);
    const dispatch = useAppDispatch();
    const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

    useEffect(()=> {
        setInterval(() =>{

        },INTERVAL_TIME)
    },[isTimerActive])

    return(
        <div>
            <Controls isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive}/>
        </div>
    )
}

export default Playground