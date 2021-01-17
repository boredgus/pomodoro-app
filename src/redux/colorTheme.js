export function setColorTheme(color) {
    return {
        type: "SET_THEME_COLOR",
        color
    }
}

const initialTheme = {
    shade: "red",
    darkColor: "#EE423E",
    lightColor: "#F7937B"
}
export default function colorThemeReducer(theme = initialTheme, action) {
    switch (action.type) {
        case "SET_THEME_COLOR":
            switch (action.color) {
                case "red":
                    return {
                        shade: action.color.toLowerCase(),
                        darkColor: "#EE423E",
                        lightColor: "#F7937B"
                    }
                case "blue":
                    return {
                        shade: action.color.toLowerCase(),
                        darkColor: "#0268B3",
                        lightColor: "#608DC8"
                    }
                case "green":
                    return {
                        shade: action.color.toLowerCase(),
                        darkColor: "#03A863",
                        lightColor: "#69C499"
                    }
                default:
                    return theme;
            }
        default:
            return theme;
    }
}