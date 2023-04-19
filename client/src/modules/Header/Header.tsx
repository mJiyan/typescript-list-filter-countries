import { ThemeColorsEnum } from 'src/shared/const';
import { DarkMoonIcon, LightMoonIcon, HeaderTitle, Text, HeaderWrapper } from 'src/ui-library';

import { useChangeAppColorConfig } from './hooks';

const Header = () => {
  const {
    toggleAppColor,
    theme
  } = useChangeAppColorConfig();

  return (
      <HeaderWrapper>
        <HeaderTitle>Where in the world?</HeaderTitle>
          <button
            className="flex flex-cols font-bold text-sm tracking-tight"
            data-testid="dark-mode"
            onClick={toggleAppColor}
          >
            {theme === ThemeColorsEnum.DARK ? (
              <>
                <DarkMoonIcon />
                <Text props="px-1 font-light">Dark Mode</Text>
              </>
            ) : (
              <>
                <LightMoonIcon />
                <Text props="px-1 font-light">Light Mode</Text>
              </>
            )}
          </button>
      </HeaderWrapper>
  );
};

export default Header;
