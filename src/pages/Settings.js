import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTime, setTimeValue, toggleAutoStart } from "../redux/timer";
import { updateTime } from "../settings/settings";

export default function Settings() {
    const state = useSelector(state => state);
    const { session, shortBreak, longBreak, autoStart } = useSelector(state => state.timer);
    const minutes = useSelector(state => state.timer.time.minutes)
    // console.log(minutes)

    document.title = "POMODORO";
    const dispatch = useDispatch();

    function changeTime(event) {
        console.log(event.target.value)
        dispatch(setTimeValue(event.target.id, event.target.value));
        // setTimeout(() => {
        //     let min = updateTime(state);
            // dispatch(setTime(event.target.value, 0));
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
                    min="1"
                    max="60" />
                <input
                    id="shortBreak"
                    type="number"
                    value={shortBreak}
                    onChange={changeTime}
                    min="1"
                    max="10" />
                <input
                    id="longBreak"
                    type="number"
                    value={longBreak}
                    onChange={changeTime}
                    min="1"
                    max="30" />
                    {/* <select value={longBreak}>
                        {() => {
                            const options
                            return options;
                        }}
                    </select> */}
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