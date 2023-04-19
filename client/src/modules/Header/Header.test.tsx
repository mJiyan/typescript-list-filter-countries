import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';
import { ThemeColorsEnum } from 'src/shared/const';

import Header from './Header'
import * as useChangeAppColorConfig from './hooks';


const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = () => renderWithProviders(<Header />, [withRedux(store, history)])

const mockToggleAppColor = jest.fn();

describe(Header.name, () => {
    it("should render container as expected", () => {
        jest.spyOn(useChangeAppColorConfig, "useChangeAppColorConfig").mockReturnValueOnce({ toggleAppColor: mockToggleAppColor, theme: ThemeColorsEnum.LIGHT});

        setUp();

        expect(screen.getByText("Light Mode")).toBeTruthy();
        expect(screen.getByText("Where in the world?")).toBeTruthy();
    })

    it("should render dark mode when localStorage is changed", () => {
      jest.spyOn(useChangeAppColorConfig, "useChangeAppColorConfig").mockReturnValueOnce({ toggleAppColor: mockToggleAppColor, theme: ThemeColorsEnum.DARK});

      setUp();

      expect(screen.getByText("Dark Mode")).toBeTruthy();
      expect(screen.getByText("Where in the world?")).toBeTruthy();
  })
})
