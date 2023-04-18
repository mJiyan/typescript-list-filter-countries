import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStore } from 'src/Store';
import { getCountries } from 'src/redux/actions';
import { CountriesType } from 'src/shared/types';


const useGetCountryList = (): CountriesType | undefined => {
    const dispatch = useDispatch();
    const { countries, loading} = useSelector((state: RootStore) => state.country);
    const isLoading = useRef(false);
  
    useEffect(() => {
      dispatch(getCountries());
      isLoading.current = loading;
    }, [isLoading.current]);

    return countries 
}

export default useGetCountryList;