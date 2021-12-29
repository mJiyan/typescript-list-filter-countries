import React from 'react';
import { Link } from 'react-router-dom'
import { IBorderCountry } from '../../models';

const BorderCountry: React.FC<IBorderCountry> = ({ country }) => {


  return (
    <div>
      <Link
        className="flex items-center justify-center rounded bg-WhiteDark dark:bg-DarkBlue text-sm shadow-lg truncate
          xl:text-sm lg:text-sm  md:text-sm  sm:text-sm  xs:text-sm
          xl:w-28  lg:w-28  md:w-28  sm:w-24  xs:w-24
          xl:h-8  lg:h-8  md:h-8  sm:h-8  xs:h-8"
        to={'/name/' + country.alpha}
      >
        {country.name}
      </Link>
    </div>
  );
};

export default BorderCountry;
