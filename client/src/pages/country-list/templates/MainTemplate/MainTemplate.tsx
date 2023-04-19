import { FilterContainer, CountryCardListContainer } from 'src/containers';
import { CountriesType } from 'src/shared/types';

export type MainTemplateProps = {
  search: (event: React.ChangeEvent<HTMLInputElement>) => void
  setRegion: (region: string) => void
  countryList: CountriesType | undefined
}

const MainTemplate = ({ search, setRegion, countryList}: MainTemplateProps) => (
    <>
      <FilterContainer search={search} setRegion={setRegion} />
      <CountryCardListContainer
        countryList={countryList}
      />
    </>
  );

export default MainTemplate;
 