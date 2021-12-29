import React from 'react';
import { IFlag } from '../../models';

const Flag: React.FC<IFlag> = ({ flag }) => {
  const image = 'https://flagcdn.com/be.svg';

  return (
    <div
      className="flex flex-col justify-end items-start
        xl:h-1/2 lg:h-1/2 md:h-1/2 sm:h-1/2 xs:h-1/2
        xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full
        xl:mt-0 lg:mt-0 md:mt-0 sm:mt-12 xs:mt-12
    "
    >
      <div
        className="
        xl:w-5/6 lg:w-5/6 md:w-5/6 sm:w-full xs:w-full
        xl:h-full lg:h-full md:h-full sm:h-3/4 xs:h-3/4
        bg-center bg-cover  bg-no-repeat"
        style={{ backgroundImage: `url(${flag})` }}
      ></div>
    </div>
  );
};

export default Flag;
