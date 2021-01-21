import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateTheme, updateTime } from "../settings/settings";
import { setColorTheme } from "../redux/colorTheme";
import { changeMode, setTime, stopTimer, setCurrentState } from "../redux/timer";

export default function Timer() {
    const state = useSelector(state => state);
    const theme = useSelector(state => state.colorTheme);
    const { isStarted, session, shortBreak, longBreak, currentState, autoStart } = useSelector(state => state.timer);
    const { minutes, seconds } = useSelector(state => state.timer.time);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(!isStarted)
            dispatch(setTime(updateTime(state), 0));
        return () => dispatch(stopTimer());        
    }, [])

    let timeout = null;
    useEffect(() => {
        if (isStarted) {
            timeout = setTimeout(() => {
                if (seconds > 0)
                    dispatch(setTime(minutes, seconds - 1))
                else if (minutes > 0)
                    dispatch(setTime(minutes - 1, 59));
                else
                    timerEnded();
            }, 1000)
        }
    }, [isStarted, seconds])

    useEffect(() => {
        updateTheme(theme);
    }, [theme]);


    useEffect(() => {
        document.title = document.querySelector(".timer-container p").innerHTML + " " + currentState + " | TomoTimer";
    }, [seconds, minutes, currentState])

    function optionChanged(shade, minutes) {
        clearTimeout(timeout);
        dispatch(stopTimer());
        dispatch(setColorTheme(shade));
        let state = shade === "red" ? "pomodoro" : "break";
        dispatch(setCurrentState(state));
        dispatch(setTime(minutes, 0));
    }
    function buttonClicked() {
        clearTimeout(timeout);
        dispatch(changeMode());
        let buttonClickSound = document.querySelector("audio#button-clicked");
        buttonClickSound.play();
    }
    function timerEnded() {
        clearTimeout(timeout);
        let timerEndedSound = document.querySelector("audio#timer-ended");
        timerEndedSound.play();
        for (let i = 1; i < 3; i++) {
            setTimeout(() => {
                timerEndedSound.play();
            }, 770 * i);
        }
        dispatch(stopTimer())
        if (currentState === "break") {
            dispatch(setColorTheme("red"));
            dispatch(setTime(session, 0));
            dispatch(setCurrentState("session"))
        }
        else {
            dispatch(setColorTheme("green"));
            dispatch(setTime(shortBreak, 0));
            dispatch(setCurrentState("break"))
        }
        if (autoStart)
            buttonClicked();
    }
    return (
        <main>
            <div className="timer-container">
                <ul className="options">
                    <li className="active"
                        onClick={() => optionChanged("red", session)}>
                        Pomodoro
                    </li>
                    <li onClick={() => optionChanged("green", shortBreak)}>
                        Short break
                    </li>
                    <li onClick={() => optionChanged("blue", longBreak)}>
                        Long break
                    </li>
                </ul>
                <p>
                    {(minutes < 10) ? "0" + minutes : minutes}:{(seconds < 10) ? "0" + seconds : seconds}
                </p>
                <button onClick={() => buttonClicked()}> {isStarted ? "STOP" : "START"} </button>
                <audio id="button-clicked">
                    <source src="./button_clicked.mp3"></source>
                </audio>
                <audio id="timer-ended">
                    <source src="./timer-ended.mp3"></source>
                </audio>
            </div>
        </main>
    );
}