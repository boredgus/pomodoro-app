export function setSession(session) {
    return {
        type: "SET_SESSION_TIME",
        session
    }
}
export function setShortBreak(shortBreak) {
    return {
        type: "SET_SHORT_BREAK",
        shortBreak
    }
}
export function setLongBreak(longBreak) {
    return {
        type: "SET_LONG_BREAK",
        longBreak
    }
}
export function setTime(minutes, seconds) {
    return {
        type: "SET_TIME",
        minutes,
        seconds
    }
}
export function setButtonText() {
    return {
        type: "SET_BUTTON_TEXT"
    }
}
export function toggleIsStarted() {
    return {
        type: "TOGGLE_IS_STARTED"
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

const initialState = {
    isStarted: false,
    time: {
        minutes: 25,
        seconds: 0
    },
    buttonText: "START",
    session: 25,
    shortBreak: 5,
    longBreak: 15
}

export default function timerReducer(timer = initialState, action) {
    switch (action.type) {
        case "SET_SESSION_TIME":
            return {
                ...timer,
                session: action.session
            }
        case "SET_SHORT_BREAK":
            return {
                ...timer,
                shortBreak: action.shortBreak
            }
        case "SET_LONG_BREAK":
            return {
                ...timer,
                longBreak: action.longBreak
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
                buttonText: timer.buttonText === "START" ? "STOP" : "START",
                isStarted: !timer.isStarted
            }
        case "STOP_TIMER":
            return {
                ...timer,
                isStarted: false,
                buttonText: "START"
            }
        default:
            return timer;
    }
}