import { Maybe } from 'src/shared/types';
import { CountryListPageTemplates } from 'src/shared/const';

import { useGetCountryList, useSearchAndFilterCountries } from './hooks';
import { MainTemplate, SecondTemplate } from "./templates"

export type CountryListPageProps = {
  match: {
      params: {
        templateName: string;
      }
  }
}

const CountryListPage: React.FC<CountryListPageProps> = (props) => {
  const templateName = props?.match?.params?.templateName?.toLowerCase();
  const countries = useGetCountryList();
  const { countryStates, search, setRegion } = useSearchAndFilterCountries (countries);

  const setTemplate = (template: Maybe<string>) => {
    switch(template) {
      case CountryListPageTemplates.MAIN:
        return <MainTemplate search={search} setRegion={setRegion} countryList={countryStates ?? countries}/>;
      case CountryListPageTemplates.SECONDARY:
        return <SecondTemplate search={search} setRegion={setRegion} countryList={countryStates ?? countries}/>;
      // ...can be added more template
      default:
        return <MainTemplate search={search} setRegion={setRegion} countryList={countryStates ?? countries}/>;
    }
  }

  return setTemplate(templateName)
}

export default CountryListPage;
