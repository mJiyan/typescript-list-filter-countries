import React from 'react';
import { Link } from 'react-router-dom';

import { numberWithCommas } from 'src/shared/utils';
import { CountryType } from 'src/shared/types';

export type CountryCardProps = Pick<CountryType, "name" | "population" | "region" | "capital" | "flag" | "alpha3Code">

const CountryCard: React.FC<CountryCardProps> = ({ name, population, region, capital, flag, alpha3Code }) => (
  <Link
    className="rounded-md overflow-hidden shadow-lg bg-WhiteDark dark:bg-DarkBlue h-96 w-80 cursor-pointer
              xl:mb-20 lg:mb-20 md:mb-20 sm:mb-10 xl:mb-10"
    to={'/name/' + alpha3Code}
  >
    <img className="object-cover w-full h-44" src={flag} />
    <div className="flex flex-col items-start justify-start h-full p-8">
      <p className="text-orange-600 text-lg pb-4 font-bold"> {name}</p>
      <div className="flex flex-col items-start justify-end">
        <p className="text-base">
          <span className='font-normal'>Population: </span> {numberWithCommas(parseInt(population))}
        </p>
        <p className="text-base">
          <span className='font-normal'>Region: </span> {region}
        </p>
        <p className="text-base">
          <span className='font-normal'>Capital: </span> {capital}
        </p>
      </div>
    </div>
  </Link>
);

export default CountryCard;
