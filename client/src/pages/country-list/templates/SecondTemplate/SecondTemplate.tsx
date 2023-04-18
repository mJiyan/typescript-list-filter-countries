import { FilterContainer, CountryCardListContainer } from 'src/containers';
import { CountriesType } from 'src/shared/types';

export type SecondTemplate = {
  search: (event: React.ChangeEvent<HTMLInputElement>) => void
  setRegion: (region: string) => void
  countryList: CountriesType | undefined
}

const SecondTemplate = ({ search, setRegion, countryList}: SecondTemplate) => (
    <>
      <p className='flex justify-center w-full'>SecondTemplate</p>
      <FilterContainer search={search} setRegion={setRegion} />
      <CountryCardListContainer
        countryList={countryList}
      />
    </>
  );

export default SecondTemplate;
