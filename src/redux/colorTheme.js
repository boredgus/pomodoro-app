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