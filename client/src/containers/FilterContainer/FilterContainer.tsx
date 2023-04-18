import React from 'react';

import { SearchAndFilterCountriesProps } from 'src/pages/country-list/utils';
import { Regions, Search } from "src/modules";
import { FilterWrapper } from 'src/ui-library';

type FilterProps = Omit<SearchAndFilterCountriesProps, "countryStates">

const FilterContainer: React.FC<FilterProps> = ({ search, setRegion }) => (
  <FilterWrapper>
      <Search search={search} />
      <Regions setRegion={setRegion} />
  </FilterWrapper>
)

export default FilterContainer