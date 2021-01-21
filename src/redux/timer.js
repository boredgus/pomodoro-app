export function setTimeValue(sort, time) {
    return {
        type: "SET_TIME_VALUE",
        sort, 
        time
    }
}
export function setTime(minutes, seconds) {
    return {
        type: "SET_TIME",
        minutes,
        seconds
    }
}
export function changeMode() {
    return {
        type: "CHANGE_MODE"
    }
}
export function stopTimer() {
    return {
        type: "STOP_TIMER"
    }
}
export function setCurrentState(currentState) {
    return {
        type: "SET_CURRENT_STATE",
        currentState
    }
}
export function toggleAutoStart() {
    return {
        type: "TOGGLE_AUTO_START"
    }
}

const initialState = {
    isStarted: false,
    autoStart: false,
    time: {
        minutes: 25,
        seconds: 0
    },
    session: 25,
    shortBreak: 5,
    longBreak: 15,
    currentState: "pomodoro"
}

export default function timerReducer(timer = initialState, action) {
    switch (action.type) {
        case "SET_TIME_VALUE":
            return {
                ...timer,
                [action.sort]: action.time
            }
        case "SET_TIME":
            return {
                ...timer,
                time: {
                    minutes: action.minutes,
                    seconds: action.seconds
                }
            }
        case "CHANGE_MODE":
            return {
                ...timer,
                isStarted: !timer.isStarted
            }
        case "STOP_TIMER":
            return {
                ...timer,
                isStarted: false,
                buttonText: "START"
            }
        case "SET_CURRENT_STATE":
            return {
                ...timer,
                currentState: action.currentState
            }
        case "TOGGLE_AUTO_START":
            return {
                ...timer,
                autoStart: !timer.autoStart
            }
        default:
            return timer;
    }
}