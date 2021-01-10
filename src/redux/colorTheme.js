export function updateTheme({ darkColor, lightColor, shade }) {
    document.querySelectorAll("main .timer-container .options li").forEach(item => {
        item.className = "";
        item.style.backgroundColor = "";
    });
    document.querySelector("main .timer-container").style.backgroundColor = lightColor;
    document.querySelector("main .timer-container button").style.color = darkColor;
    // console.dir(document.querySelectorAll("main .timer-container .options li").className)
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
export function setColorTheme(color) {
    return {
        type: "SET_THEME_COLOR",
        color
    }
}

const initialTheme = {
    shade: "red",
    darkColor: "#f55656",
    lightColor: "#fa9a9a"
}
export default function colorThemeReducer(theme = initialTheme, action) {
    switch (action.type) {
        case "SET_THEME_COLOR":
            switch (action.color) {
                case "red":
                    return {
                        shade: action.color.toLowerCase(),
                        darkColor: "#f55656",
                        lightColor: "#fa9a9a"
                    }
                case "blue":
                    return {
                        shade: action.color.toLowerCase(),
                        darkColor: "#1338a0",
                        lightColor: "#6992c7"
                    }
                case "green":
                    return {
                        shade: action.color.toLowerCase(),
                        darkColor: "#227212",
                        lightColor: "#7ac769"
                    }
                default:
                    return theme;
            }
        default:
            return theme;
    }
}