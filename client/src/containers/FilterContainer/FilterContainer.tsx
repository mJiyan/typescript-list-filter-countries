import React from 'react';

import { UseSearchAndFilterCountriesProps } from 'src/pages/country-list/hooks/useSearchAndFilterCountries';
import { Regions, Search } from "src/modules";
import { FilterWrapper } from 'src/ui-library';

export type FilterProps = Omit<UseSearchAndFilterCountriesProps, "countryStates">

const FilterContainer: React.FC<FilterProps> = ({ search, setRegion }) => (
  <FilterWrapper>
      <Search search={search} />
      <Regions setRegion={setRegion} />
  </FilterWrapper>
)

export default FilterContainer;
