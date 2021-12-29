import { Dispatch } from 'redux';
import apiCall from '../../../services/api';
import { HTTP } from '../../../services/constants';
import { CountryDispatchTypes, COUNTRIES_SUCCESS, COUNTRY_SUCCESS, COUNTRY_NAME_SUCCESS, COUNTRIES_FAIL, COUNTRIES_LOADING } from './types';

export const GetCountries = () => async (dispatch: Dispatch<CountryDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    dispatch({ type: COUNTRIES_LOADING });
    const { data } = await apiCall('/all', null, null, HTTP.GET, {});

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

export const GetCountry = (alpha: string) => async (dispatch: Dispatch<CountryDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    dispatch({ type: COUNTRIES_LOADING });
    const { data } = await apiCall(`/alpha/${alpha}`, null, null, HTTP.GET, {});


    data.borders = data.borders !== undefined ? await loadBorderNames(data.borders) : data.borders;


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

export const GetCountryName = (name: string) => async (dispatch: Dispatch<CountryDispatchTypes>) => {
  try {
    // after function is called the loading is setting true in order to indicate that the function is triggered
    const { data } = await apiCall(`/name/${name}`, null, null, HTTP.GET, {});
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

export async function loadBorderNames(borders: string[]) {
  const borderNameArray: { name: string }[] = [];
  try {
    await Promise.all(borders.map(async (item) => {
      const { data } = await apiCall(`/alpha/${item}`, null, null, HTTP.GET, {});
      const obj = { alpha: item, name: data.name }
      borderNameArray.push(obj);
    }));
    return borderNameArray;
  }
  catch (e) {
    return e;
  }

}
