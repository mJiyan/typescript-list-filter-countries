import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK, COUNTRY_SUCCESS_STATE } from 'src/shared/mock';

import CountryInformationContainer, { CountryInformationContainerProps } from './CountryInformationContainer'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({
  name,
  flag,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currency,
  languages,
  borders,
}: CountryInformationContainerProps) => renderWithProviders(
    <CountryInformationContainer name={name}
      nativeName={nativeName}
      population={population}
      flag={flag}
      region={region}
      subregion={subregion}
      capital={capital}
      topLevelDomain={topLevelDomain}
      currency={currency}
      languages={languages}
      borders={borders}
    />, [withRedux(store, history)])

describe(CountryInformationContainer.name, () => {
    it("should render container as expected", () => {
        setUp({
            name: COUNTRY_SUCCESS_STATE.country.name,
            nativeName: COUNTRY_SUCCESS_STATE.country.nativeName,
            population: COUNTRY_SUCCESS_STATE.country.population,
            flag: COUNTRY_SUCCESS_STATE.country.flag,
            region: COUNTRY_SUCCESS_STATE.country.region,
            subregion: COUNTRY_SUCCESS_STATE.country.subregion,
            capital: COUNTRY_SUCCESS_STATE.country.capital,
            topLevelDomain: COUNTRY_SUCCESS_STATE.country.topLevelDomain,
            currency: COUNTRY_SUCCESS_STATE.country.currency,
            languages: COUNTRY_SUCCESS_STATE.country.languages,
            borders: COUNTRY_SUCCESS_STATE.country.borders,
        })
        expect(screen.queryByText("Asia")).toBeInTheDocument()
    })
})
