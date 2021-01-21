import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimeValue, toggleAutoStart } from "../redux/timer";

export default function Settings() {
    const { session, shortBreak, longBreak, autoStart } = useSelector(state => state.timer);
    document.title = "Settings | TomoTimer";
    const dispatch = useDispatch();

    function changeTime(event) {
        dispatch(setTimeValue(event.target.id, event.target.value));
    }
    return (
        <main className="narrow-container">
            <h2>TIMER SETTINGS</h2>
            <div className="settings-box">
                <label>Pomodoro</label>
                <label>Short break</label>
                <label>Long break</label>
                <input
                    id="session"
                    type="number"
                    value={session}
                    onChange={changeTime}
                    min="1"
                    max="180" />
                <input
                    id="shortBreak"
                    type="number"
                    value={shortBreak}
                    onChange={changeTime}
                    min="1"
                    max="20" />
                <input
                    id="longBreak"
                    type="number"
                    value={longBreak}
                    onChange={changeTime}
                    min="1"
                    max="60" />
            </div>
            <div className="settings-row">
                <label>Auto start next level?</label>
                <input id="autoStart"
                    type="checkbox"
                    value="autoStart"
                    checked={autoStart}
                    onChange={() => dispatch(toggleAutoStart())} />
            </div>
            <img src="./pomodoro_line.png" alt="tomato line" />
        </main>
    );
}