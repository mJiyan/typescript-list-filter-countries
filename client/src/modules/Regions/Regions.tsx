import React from 'react';

import { REGIONS } from 'src/shared/const';
import { SearchAndFilterCountriesProps } from 'src/pages/country-list/utils';
import { ArrowDownIcon } from 'src/ui-library';

import { updateDropDownModule } from './utils';
import { RegionListItem } from './RegionListItem';

export type RegionsProps = Pick<SearchAndFilterCountriesProps, "setRegion">

const Regions: React.FC<RegionsProps> = ({ setRegion }) => {
  const {
    isOpen,
    title,
    filterByRegion,
    toggleDropDown,
  } = updateDropDownModule({ setRegion })

  return (
      <div
        className="xl:w-1/6 lg:w-1/6 md:w-1/6 sm:w-2/3 xs:w-2/3 
          xl:h-full lg:h-full md:h-full sm:h-12 xs:h-12
          xl:my-0 lg:my-0 md:my-0 sm:my-10 xs:my-10"
      >
        <button
          className="flex items-center justify-between border-none shadow rounded-md w-full h-full text-sm px-6 bg-WhiteDark dark:bg-DarkBlue "
          onClick={(toggleDropDown)}
          data-testid="toggle-filter-list"
        >
          {title}
          <ArrowDownIcon />
        </button>
        {isOpen && (
          <div
            className="flex flex-row 
              border-none shadow rounded-md 
              bg-WhiteDark dark:bg-DarkBlue text-VeryDarkBlueLight dark:text-VeryLightGray 
              h-fit mt-1 py-3 px-5 text-sm
              xl:w-full lg:w-full md:w-full sm:w-full xs:w-full 
              xl:relative lg:relative md:relative sm:relative xs:relative"
          >
            <ul>
              {REGIONS.map((region) => <RegionListItem region={region} filterByRegion={() => filterByRegion(region)} />)}
            </ul>
          </div>
        )}
      </div>
  );
};

export default Regions;
