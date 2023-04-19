import { useEffect, useState } from 'react';

import { getThemeColorConfig, setThemeColorConfig } from 'src/shared/storage/themeLocalStorage';
import { ThemeColorsEnum } from 'src/shared/const';


const useChangeAppColorConfig = () => {
    const [theme, setTheme] = useState<ThemeColorsEnum>(ThemeColorsEnum.LIGHT);
  
    useEffect(() => {
      const themeColorConfig = getThemeColorConfig();
      if (themeColorConfig === ThemeColorsEnum.DARK) {
        document.documentElement.classList.add(ThemeColorsEnum.DARK);
        setTheme(ThemeColorsEnum.DARK);
      } else {
        document.documentElement.classList.remove(ThemeColorsEnum.DARK);
        setThemeColorConfig(ThemeColorsEnum.LIGHT)
        setTheme(ThemeColorsEnum.LIGHT);
      }
    }, [])
  
    const toggleAppColor = () => {
      if (theme === ThemeColorsEnum.LIGHT) {
        document.documentElement.classList.add(ThemeColorsEnum.DARK);
        setThemeColorConfig(ThemeColorsEnum.DARK)
        setTheme(ThemeColorsEnum.DARK);
      } else {
        document.documentElement.classList.remove(ThemeColorsEnum.DARK);
        setThemeColorConfig(ThemeColorsEnum.LIGHT)
        setTheme(ThemeColorsEnum.LIGHT);
      }
    };

    return {
        toggleAppColor,
        theme
    }
}

export default useChangeAppColorConfig;
