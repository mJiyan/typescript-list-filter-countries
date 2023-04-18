import { CountryInformationWrapper, CountryInformationTextWrapper, Text } from 'src/ui-library';
import { numberWithCommas } from 'src/shared/utils'
import { CountryType } from 'src/shared/types';

import { CountryInformationText, BorderCountryList } from "./components"

type CountryInformationModuleProps = Omit<CountryType, "flag" | "alpha3Code">

const CountryInformation = ({
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
}: CountryInformationModuleProps) => {
  const languageList = languages.map((item) => item.name).join(", ");
  return (
    <CountryInformationWrapper>
      <Text props="text-4xl pb-8 w-full font-bold">{name}</Text>
      <CountryInformationTextWrapper>
        <div>
          <CountryInformationText label='Native Name' value={nativeName} />
          <CountryInformationText label='Population' value={numberWithCommas(parseInt(population))} />
          <CountryInformationText label='Region' value={region} />
          <CountryInformationText label='Sub Region' value={subregion} />
          <CountryInformationText label='Capital' value={capital} />
        </div>
        <div>
          <CountryInformationText label='Top Level Domain' value={topLevelDomain} />
          <CountryInformationText label='Currency' value={currency} />
          <CountryInformationText label='Languages' value={languageList} />
        </div>
      </CountryInformationTextWrapper>
      <div>
        <BorderCountryList countries={borders} />
      </div>
    </CountryInformationWrapper>
  );
};

export default CountryInformation;
