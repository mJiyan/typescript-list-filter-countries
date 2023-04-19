import { CountryCard } from "src/modules"
import { CountryCardListWrapper } from "src/ui-library";
import { CountriesType } from 'src/shared/types';

export type CountryCardListContainerProps = {
  countryList: CountriesType | undefined
}

const CountryCardListContainer = ({ countryList }: CountryCardListContainerProps) => (
  <CountryCardListWrapper>
    {countryList &&
      countryList.map((country) => (
        <CountryCard
          key={country.name}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flag}
          alpha3Code={country.alpha3Code}
        />
      ))
    }
  </CountryCardListWrapper>
)

export default CountryCardListContainer
