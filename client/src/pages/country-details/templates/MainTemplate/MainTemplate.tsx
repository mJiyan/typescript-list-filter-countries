import { useHistory } from 'react-router-dom';

import { CountryDetailsWrapper } from 'src/ui-library';
import { PreviousPageContainer, CountryInformationContainer } from 'src/containers';
import { CountryType, Maybe } from 'src/shared/types';

const MainTemplate = ({ country }: { country: Maybe<CountryType> }) => {
    const history = useHistory()
    return (
        <CountryDetailsWrapper>
            <PreviousPageContainer history={history} />
            {country && 
                <CountryInformationContainer 
                    name={country.name}
                    nativeName={country.nativeName}
                    population={country.population}
                    region={country.region}
                    subregion={country.subregion}
                    capital={country.capital}
                    topLevelDomain={country.topLevelDomain}
                    currency={country.currency}
                    languages={country.languages}
                    borders={country.borders}
                    flag={country.flag}
                />
            }
        </CountryDetailsWrapper>
    )
};


export default MainTemplate;
