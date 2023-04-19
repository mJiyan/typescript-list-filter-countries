import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters, wait } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';

import CountryInformation, { CountryInformationModuleProps } from './CountryInformation'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ 
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currency,
  languages,
  borders,
}: CountryInformationModuleProps) => renderWithProviders(
    <CountryInformation 
      name={name}
      nativeName={nativeName}
      population={population}
      region={region}
      subregion={subregion}
      capital={capital}
      topLevelDomain={topLevelDomain}
      currency={currency}
      languages={languages}
      borders={borders}
    />, [withRedux(store, history)])

describe(CountryInformation.name, () => {
  it("should render container as expected", async () => {
      setUp({
        name: REDUX_STATE_MOCK.country.name,
        population: REDUX_STATE_MOCK.country.population,
        region: REDUX_STATE_MOCK.country.region,
        capital: REDUX_STATE_MOCK.country.capital,
        nativeName: REDUX_STATE_MOCK.country.nativeName,
        subregion: REDUX_STATE_MOCK.country.subregion,
        topLevelDomain: REDUX_STATE_MOCK.country.topLevelDomain,
        currency: REDUX_STATE_MOCK.country.currency,
        languages: REDUX_STATE_MOCK.country.languages,
        borders: REDUX_STATE_MOCK.country.borders,
      });
      expect(screen.queryByText("Afghanistan")).toBeInTheDocument();
      expect(screen.queryByText("40,218,234")).toBeInTheDocument();
      expect(screen.queryByText("Asia")).toBeInTheDocument();
      expect(screen.queryByText("Kabul")).toBeInTheDocument();
      expect(screen.queryByText("افغانستان")).toBeInTheDocument();
      expect(screen.queryByText("Southern Asia")).toBeInTheDocument();
      expect(screen.queryByText(".af")).toBeInTheDocument();
      expect(screen.queryByText("Afghan afghani")).toBeInTheDocument();
  })
})
