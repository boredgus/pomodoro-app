export function updateTheme({ darkColor, lightColor, shade }) {
    document.querySelectorAll("main .timer-container .options li").forEach(item => {
        item.className = "";
        item.style.backgroundColor = "";
    });
    document.querySelector("main .timer-container").style.backgroundColor = lightColor;
    document.querySelector("main .timer-container button").style.color = darkColor;
    switch (shade) {
        case "red":
            document.querySelectorAll("main .timer-container .options li")[0].className = "active";
            break;
        case "green":
            document.querySelectorAll("main .timer-container .options li")[1].className = "active";
            break;
        case "blue":
            document.querySelectorAll("main .timer-container .options li")[2].className = "active";
            break;
        default:
            break;
    }
    document.querySelector("main .timer-container .options li.active").style.backgroundColor = darkColor;
}

export function updateTime(state) {
    switch (state.colorTheme.shade) {
        case "red":
            return state.timer.session;
        case "green":
            return state.timer.shortBreak;
        case "blue":
            return state.timer.longBreak;
        default:
            break;
    }
} 