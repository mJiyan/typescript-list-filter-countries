import React, { useEffect, useRef } from 'react';
import { ICountry } from '../../models/';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Store';
import * as actions from '../../redux/actions/Country';
import { CountryDetails } from '../../components';

const Country: React.FC<ICountry> = (props) => {
  const name = props.match.params.name;
  const dispatch = useDispatch();
  const countryState = useSelector((state: RootStore) => state.country);
  const loading = useRef(false);

  // calling the list function
  useEffect(() => {
    dispatch(actions.GetCountry(name));
    loading.current = countryState.loading;
  }, [loading.current, name]);
  
  return (
    <>
    {countryState.country &&
      <CountryDetails
        name={countryState.country.name}
        flag={countryState.country.flag}
        nativeName={countryState.country.nativeName}
        population={countryState.country.population}
        region={countryState.country.region}
        subRegion={countryState.country.subregion}
        capital={countryState.country.capital}
        topLevelDomain={countryState.country.topLevelDomain}
        currencies={countryState.country.currencies[0].name}
        languages={countryState.country.languages}
        borderCountries={countryState.country.borders}
      />}
    </>
  );
};

export default Country;
