import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';
import { CountryBorderNames } from 'src/shared/types';

import BorderCountry from './BorderCountry'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ alpha, name }: CountryBorderNames) => renderWithProviders(
  <BorderCountry 
    alpha={alpha}
    name={name}
  />, [withRedux(store, history)])

describe(BorderCountry.name, () => {
    it("should render container as expected", () => {
        setUp({ 
          alpha: "alphaValue",
          name: "nameValue"
        })
        expect(screen.queryByText("nameValue")).toBeInTheDocument()
    })
})
