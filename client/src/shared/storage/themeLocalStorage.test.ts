import { getThemeColorConfig, setThemeColorConfig } from "./themeLocalStorage"

const THEME_COLOR = "light";

describe("theme color localStorage ", () => {
    it("should set and return app state with using localStorage", () => {
        setThemeColorConfig(THEME_COLOR)
        const result = getThemeColorConfig()
        expect(result).toEqual(THEME_COLOR)
    })
});
