import { CountryInformationDetailsWrapper } from 'src/ui-library';
import { CountryType } from 'src/shared/types';
import { CountryInformation, Flag } from 'src/modules';

type CountryInformationContainerProps = Omit<CountryType, "alpha3Code">

const CountryInformationContainer = ({
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
  }: CountryInformationContainerProps) => (
    <CountryInformationDetailsWrapper>
        <Flag flag={flag} />
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
        />
    </CountryInformationDetailsWrapper>
)

export default CountryInformationContainer
