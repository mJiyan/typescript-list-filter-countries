import { Maybe } from "src/shared/types"

const THEME_COLOR_KEY = "theme";

export const getThemeColorConfig = (): Maybe<string> => {
    const themeColorConfigResult = localStorage.getItem(THEME_COLOR_KEY);
    if (themeColorConfigResult) {
        return themeColorConfigResult;
    }
    return null
}

export const setThemeColorConfig = (themeColorConfig: Maybe<string>): void => {
    try {
        if (themeColorConfig) {
            localStorage.setItem(THEME_COLOR_KEY, themeColorConfig);
        }
    } catch (e) {
        console.log(e);
    }
}
