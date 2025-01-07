import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setCurrentStep} from "./store/slices";
import Controls from "./components/Controls";
import {INTERVAL_TIME} from "./constants";



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