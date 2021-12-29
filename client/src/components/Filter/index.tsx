import React, { useState, ChangeEvent } from 'react';
import { IFilter } from '../../models';

const Filter: React.FC<IFilter> = ({ search, setRegion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Filter by Region');
  const toggleFilter = () => {
    setIsOpen((c) => !c);
  };

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  return (
    <div
      className="flex 
                    xl:flex-row lg:flex-row  md:flex-row sm:flex-col xs:flex-col 
                    justify-between 
                    xl:px-20 lg:px-20 md:px-20 sm:px-3 xs:px-3
                    xl:pt-8 lg:pt-8 md:pt-8 sm:pt-5 xs:pt-5
                    xl:h-20 lg:h-20 md:h-20 sm:h-full xs:h-full"
    >
      <div
        className="flex items-center 
      xl:w-2/6 lg:w-2/6 md:w-2/6 sm:w-full xs:w-full 
      xl:h-full lg:h-full md:h-full sm:h-12 xs:h-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute ml-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="border-none rounded-md text-sm bg-WhiteDark dark:bg-DarkBlue shadow w-full h-full px-16 placeholder-VeryDarkBlueLight dark:placeholder-WhiteDark"
          placeholder="Search for a country..."
          onChange={event => search(event)}
          data-testid="search-input"
        />
      </div>

      <div
        className="xl:w-1/6 lg:w-1/6 md:w-1/6 sm:w-2/3 xs:w-2/3 
      xl:h-full lg:h-full md:h-full sm:h-12 xs:h-12
      xl:my-0 lg:my-0 md:my-0 sm:my-10 xs:my-10"
      >
        <button
          className="flex items-center justify-between border-none shadow rounded-md w-full h-full text-sm px-6 bg-WhiteDark dark:bg-DarkBlue "
          onClick={toggleFilter}
          data-testid="toggle-filter-list"
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
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
              {regions.map((item) => { return <li key={item} className='cursor-pointer' onClick={() => { setRegion(item); setTitle(item); toggleFilter();  }} data-testid={`region-filter-${item}`} >{item}</li> })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
