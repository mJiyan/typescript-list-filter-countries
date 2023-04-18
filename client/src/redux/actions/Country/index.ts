import { Dispatch } from 'redux';

import { HTTP, apiCall } from 'src/services/';
import { CountryBorderNames, CountryType } from 'src/shared/types';
import { 
  CountryDispatchTypes, 
  COUNTRIES_SUCCESS, 
  COUNTRY_SUCCESS, 
  COUNTRY_NAME_SUCCESS, 
  COUNTRIES_FAIL, 
  COUNTRIES_LOADING 
} from './types';

export const getCountries = () => async (dispatch: Dispatch<CountryDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    dispatch({ type: COUNTRIES_LOADING });
    const { data } = await apiCall({
      url: "/all",
      data: null,
      params: null,
      method: HTTP.GET,
      headers: {}
    });

    // if the request return data without error then it updates the state with the response
    dispatch({
      type: COUNTRIES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    // if the request failed then it dispatch fail
    dispatch({
      type: COUNTRIES_FAIL,
    });
  }
};

export const getCountryDetails = (alpha: string) => async (dispatch: Dispatch<CountryDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    dispatch({ type: COUNTRIES_LOADING });
    const data: CountryType = await apiCall({
      url: `/alpha/${alpha}`,
      data: null,
      params: null,
      method: HTTP.GET,
      headers: {}
    })
    .then(async ({ data }) => ({
      ...data,
      borders: data.borders ? await loadCountryBorderNames(data.borders) : [],
      currency: data?.currencies?.[0]?.name,
    }));

    // if the request return data without error then it updates the state with the response
    dispatch({
      type: COUNTRY_SUCCESS,
      payload: data,
    });
  } catch (e) {
    // if the request failed then it dispatch fail
    dispatch({
      type: COUNTRIES_FAIL,
    });
  }
};

export const getCountryName = (name: string) => async (dispatch: Dispatch<CountryDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    const { data } = await apiCall({
      url: `/name/${name}`,
      data: null,
      params: null,
      method: HTTP.GET,
      headers: {}
    });
    // if the request return data without error then it updates the state with the response
    dispatch({
      type: COUNTRY_NAME_SUCCESS,
      payload: data,
    });
  } catch (e) {
    // if the request failed then it dispatch fail
    dispatch({
      type: COUNTRIES_FAIL,
    });
  }
};


async function loadCountryBorderNames(borders: string[]) {
  const borderNameArray: CountryBorderNames[] = [];
  try {
    await Promise.all(borders.map(async (item) => {
      const { data } = await apiCall({
        url: `/alpha/${item}`,
        data: null,
        params: null,
        method: HTTP.GET,
        headers: {}
      });

      borderNameArray.push({ alpha: item, name: data.name });
    }));

    return borderNameArray;
  }
  catch (e) {
    return e;
  }

}
