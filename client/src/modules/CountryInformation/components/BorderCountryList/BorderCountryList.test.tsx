import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK, COUNTRY_BORDER_NAMES } from 'src/shared/mock';
import { CountryBorderNames } from 'src/shared/types';

import BorderCountryList from './BorderCountryList'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ countries }: { countries: CountryBorderNames[]}) => renderWithProviders(
  <BorderCountryList 
    countries={countries}
  />, [withRedux(store, history)])

describe(BorderCountryList.name, () => {
    it("should render container as expected", () => {
        setUp({ 
          countries: [COUNTRY_BORDER_NAMES]
        })
        expect(screen.queryByText("nameValue")).toBeInTheDocument()
    })
})
