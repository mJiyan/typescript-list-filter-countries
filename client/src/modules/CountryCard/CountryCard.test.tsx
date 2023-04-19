import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters, wait } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';

import CountryCard, { CountryCardProps } from './CountryCard'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ 
  name, 
  population, 
  region, 
  capital, 
  flag, 
  alpha3Code 
}: CountryCardProps) => renderWithProviders(
    <CountryCard 
      name={name} 
      population={population} 
      region={region} 
      capital={capital} 
      flag={flag} 
      alpha3Code={alpha3Code} 
    />, [withRedux(store, history)])

describe(CountryCard.name, () => {
    it("should render container as expected", async () => {
        setUp({
          name: REDUX_STATE_MOCK.country.name,
          population: REDUX_STATE_MOCK.country.population,
          region: REDUX_STATE_MOCK.country.region,
          capital: REDUX_STATE_MOCK.country.capital,
          flag: REDUX_STATE_MOCK.country.flag,
          alpha3Code: REDUX_STATE_MOCK.country.alpha3Code,
        });

        expect(screen.queryByText("Afghanistan")).toBeInTheDocument();
        expect(screen.queryByText("Asia")).toBeInTheDocument();
        expect(screen.queryByText("Kabul")).toBeInTheDocument();
        expect(screen.queryByText("40,218,234")).toBeInTheDocument();
    })
})
