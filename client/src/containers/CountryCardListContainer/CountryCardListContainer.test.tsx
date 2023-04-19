import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK, COUNTRIES_SUCCESS_STATE } from 'src/shared/mock';

import CountryCardListContainer, { CountryCardListContainerProps } from './CountryCardListContainer'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ countryList }: CountryCardListContainerProps) => renderWithProviders(<CountryCardListContainer countryList={countryList} />, [withRedux(store, history)])

describe(CountryCardListContainer.name, () => {
    it("should render container as expected", () => {
        setUp({
            countryList: COUNTRIES_SUCCESS_STATE.countries
        })
        expect(screen.queryByText("Asia")).toBeInTheDocument()
    })
})
