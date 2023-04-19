import { useEffect, useState, ChangeEvent } from 'react';

import { CountriesType } from 'src/shared/types';

export interface UseSearchAndFilterCountriesProps {
    countryStates: CountriesType | undefined
    search: (event: ChangeEvent<HTMLInputElement>) => void
    setRegion: (region: string) => void
}

const useSearchAndFilterCountries = (countries: CountriesType | undefined): UseSearchAndFilterCountriesProps => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [countryStates, setCountryStates] = useState<CountriesType>();
    const [filterByRegion, setFilterByRegion] = useState<string>('');
  
    const search = (event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value);
    const setRegion = (region: string) => setFilterByRegion(region);
  
    useEffect(() => {
      let filteredCountries: CountriesType | undefined = countries?.filter((country) => {
        if (!searchTerm && !filterByRegion) {
          return countries;
        } else if (
          filterByRegion 
              ? country.name.toLowerCase().includes(searchTerm.toLowerCase()) && country.region == filterByRegion 
              : country.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return countries;
        }
      });
      setCountryStates(filteredCountries)
    }, [searchTerm, filterByRegion]);

    return {
        countryStates,
        search,
        setRegion,
    }
}

export default useSearchAndFilterCountries;
