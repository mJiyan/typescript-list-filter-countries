import React, { useEffect, useRef, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import { ICountries } from '../../models';
import { CountryType } from '../../redux/actions/Country/types';
import * as actions from '../../redux/actions/Country';
import { Filter, CardList } from '../../components';

const Countries: React.FC<ICountries> = (props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [countryStates, setCountryStates] = useState<CountryType[]>();
  const [filterByRegion, setFilterByRegion] = useState<string>('');

  const dispatch = useDispatch();
  const countryState = useSelector((state: RootStore) => state.country);
  const loading = useRef(false);

  // calling the list function
  useEffect(() => {
    dispatch(actions.GetCountries());
    loading.current = countryState.loading;
  }, [loading.current]);

  const search = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const setRegion = (region: string) => {
    setFilterByRegion(region)
  }

  useEffect(() => {
    let filteredCountries: Array<CountryType> | undefined = countryState.countries?.filter((val) => {
      if (searchTerm == '' && filterByRegion == '') {
        return countryState.countries;
      } else if (
        filterByRegion !== '' ?
          val.name.toLowerCase().includes(searchTerm.toLowerCase()) && val.region == filterByRegion :
          val.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return countryState.countries;
      }
    });
    setCountryStates(filteredCountries)
  }, [searchTerm, filterByRegion]);

  return (
    <>
      <Filter search={search} setRegion={setRegion} />
      <CardList
        cards={countryStates ?? countryState.countries}
      />
    </>
  );
};

export default Countries;
