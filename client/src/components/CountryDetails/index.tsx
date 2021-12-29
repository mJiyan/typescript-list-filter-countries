import React from 'react';
import { ICountryDetails } from '../../models';
import { CountryInformations, Flag, BackButton } from '../';

const CountryDetails: React.FC<ICountryDetails> = ({
  name,
  flag,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}) => {
  return (
    <div className="flex flex-col w-full h-screen 
      xl:px-20 lg:px-20 md:px-20 sm:px-5 xs:px-3
    ">
      <div className="absolute">
        <BackButton />
      </div>
      <div
        className="flex 
          xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col 
          xl:pt-36 lg:pt-36 md:pt-36  sm:pt-0  xs:pt-0 
          h-screen "
      >
        <Flag flag={flag} />
        <CountryInformations
          name={name}
          nativeName={nativeName}
          population={population}
          region={region}
          subRegion={subRegion}
          capital={capital}
          topLevelDomain={topLevelDomain}
          currencies={currencies}
          languages={languages}
          borderCountries={borderCountries}
        />
      </div>
    </div>
  );
};

export default CountryDetails;
