import React from 'react';

import { SearchIcon } from 'src/ui-library';
import { SearchAndFilterCountriesProps } from 'src/pages/country-list/utils';

type SearchProps = Pick<SearchAndFilterCountriesProps, "search">

const Search: React.FC<SearchProps> = ({ search }) => {
  return (
      <div
        className="flex items-center 
          xl:w-2/6 lg:w-2/6 md:w-2/6 sm:w-full xs:w-full 
          xl:h-full lg:h-full md:h-full sm:h-12 xs:h-12"
      >
        <SearchIcon />
        <input
          className="border-none rounded-md text-sm bg-WhiteDark dark:bg-DarkBlue shadow w-full h-full px-16 placeholder-VeryDarkBlueLight dark:placeholder-WhiteDark"
          placeholder="Search for a country..."
          onChange={event => search(event)}
          data-testid="search-input"
        />
      </div>
  );
};

export default Search;
