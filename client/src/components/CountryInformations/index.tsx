import React from 'react';
import { BorderCountryList } from '../';
import { ICountryInformations } from '../../models';
import { numberWithCommas } from '../../services/utils'

const CountryInformations: React.FC<ICountryInformations> = ({
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}) => {
  return (
    <div
      className="
      xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full
      xl:mt-0 lg:mt-0 md:mt-0 sm:mt-12 xs:mt-12
    "
    >
      <p className="text-4xl pb-8 w-full font-bold">{name}</p>
      <div
        className="flex
          xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col 
          xl:h-fit lg:h-fit md:h-fit sm:h-full xs:h-full
          items-between justify-between w-full "
      >
        <div className="">
          <p>
            <span className='font-normal'>Native Name:</span> <span className='font-light'>{nativeName}</span>
          </p>
          <p>
            <span className='font-normal'>Population:</span> <span className='font-light'>{numberWithCommas(parseInt(population))}</span>
          </p>
          <p>
            <span className='font-normal'>Region:</span> <span className='font-light'>{region}</span>
          </p>
          <p>
            <span className='font-normal'>Sub Region:</span> <span className='font-light'>{subRegion}</span>
          </p>
          <p>
            <span className='font-normal'>Capital:</span> <span className='font-light'>{capital}</span>
          </p>
        </div>
        <div className="">
          <p>
            <span className='font-normal'>Top Level Domain:</span> <span className='font-light'>{topLevelDomain}</span>
          </p>
          <p>
            <span className='font-normal'>Currencies:</span> <span className='font-light'>{currencies}</span>

          </p>
          <p>
            <span className='font-normal'>Languages: {' '}</span> <span className='font-light'>{languages.map((item, key) => {
              return item.name + (languages.length !== key + 1 ? ', ' : '');
            })}</span>

          </p>
        </div>
      </div>
      <div>
        <BorderCountryList countries={borderCountries} />
      </div>
    </div>
  );
};

export default CountryInformations;
