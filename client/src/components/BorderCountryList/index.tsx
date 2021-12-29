import React from 'react';
import { IBorderCountryList } from '../../models';
import { BorderCountry } from '../';

const BorderCountryList: React.FC<IBorderCountryList> = ({ countries }) => {
  return (
    <div className="absolute">
      <div
        className="flex flex-col
          xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col
          py-10 pr-5 w-full relative"
      >
        <p className="xl:pr-2 lg:pr-2 md:pr-2 sm:pr-0 xs:pr-0 pt-2">Border Countries:</p>
        <div className="grid 
            xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3
            xl:pt-0  lg:pt-0  md:pt-0   sm:pt-2   xs:pt-2"
        >
          {countries &&
            countries.map((item, key) => (
              <div className="pr-1 py-1" key={key}>
                <BorderCountry key={key} country={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BorderCountryList;
