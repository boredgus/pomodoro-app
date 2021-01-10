import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimeValue, toggleAutoStart } from "../redux/timer";

export default function Settings() {
    const { session, shortBreak, longBreak, autoStart } = useSelector(state => state.timer);

    document.title = "POMODORO";
    const dispatch = useDispatch();

    function changeTime(event) {
        console.dir(event.target.id);
        dispatch(setTimeValue(event.target.id, event.target.value));
    }
    function changeAutoStart() {
        dispatch(toggleAutoStart());
        console.log(autoStart)
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
                    min="1" />
                <input
                    id="shortBreak"
                    type="number"
                    value={shortBreak}
                    onChange={changeTime}
                    min="1" />
                <input
                    id="longBreak"
                    type="number"
                    value={longBreak}
                    onChange={changeTime}
                    min="1"
                     />
            </div>
            <div className="settings-row">
                <label>Auto start next level?</label>
                <input id="autoStart"
                    type="checkbox"
                    value="autoStart"
                    checked={autoStart}
                    onChange={changeAutoStart} />
            </div>
            <img src="https://cdn.onlinewebfonts.com/svg/img_483008.png" alt="tomato line" />
        </main>
    );
}