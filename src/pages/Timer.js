import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setColorTheme, updateTheme } from "../redux/colorTheme";
import { changeMode,  setTime, stopTimer } from "../redux/timer";

export default function Timer() {
    const { minutes, seconds } = useSelector(state => state.timer.time);
    const theme = useSelector(state => state.colorTheme);
    const { buttonText, isStarted } = useSelector(state => state.timer);
    // console.dir(useState(state => state))

    const dispatch = useDispatch();
    useEffect(() => {
        updateTheme(theme);
    }, [theme]);

    let timeout = null;
    useEffect(() => {
        if (isStarted) {
            timeout = setTimeout(() => {
                if (seconds > 0) 
                    dispatch(setTime(minutes, seconds - 1))
                else 
                    dispatch(setTime(minutes - 1, 59));
            }, 1000)
        }
        else clearTimeout(timeout);
    }, [isStarted, seconds])

    function optionChanged(shade, minutes) {
        dispatch(setTime(minutes, 0));
        dispatch(setColorTheme(shade));
        dispatch(stopTimer());
        clearTimeout(timeout);
    }
    useEffect(() => {
        document.title = document.querySelector(".timer-container p").innerHTML;
    }, [seconds, minutes])
    return (
        <main>
            <div className="timer-container">
                <ul className="options">
                    <li
                        className="active"
                        onClick={() => optionChanged("red", 25)}>
                        Session
                    </li>
                    <li onClick={() => optionChanged("green", 5)}>
                        Short break
                        </li>
                    <li onClick={() => optionChanged("blue", 15)}>
                        Long break
                    </li>
                </ul>
                <p>
                    {minutes}:{(seconds < 10) ? "0" + seconds : seconds}
                </p>
                <button onClick={() => dispatch(changeMode())}>
                        {buttonText}
                </button>
            </div>
        </main>
    );
}