import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStore } from 'src/Store';
import { CountryType } from 'src/shared/types';
import { getCountryDetails } from 'src/redux/actions/';

const useGetCountryDetails = (name: string): CountryType | undefined => {
    const dispatch = useDispatch();
    const { loading, country } = useSelector((state: RootStore) => state.country);
    const isLoading = useRef(false);
  
    useEffect(() => {
      dispatch(getCountryDetails(name));
      isLoading.current = loading;
    }, [isLoading.current, name]);

    return country;
}

export default useGetCountryDetails;
