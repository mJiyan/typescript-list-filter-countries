import { CountryType, CountriesType } from "src/shared/types"

export const COUNTRIES_LOADING = 'COUNTRIES_LOADING';
export const COUNTRIES_FAIL = 'COUNTRIES_FAIL';
export const COUNTRIES_SUCCESS = 'COUNTRIES_SUCCESS';
export const COUNTRY_SUCCESS = 'COUNTRY_SUCCESS';
export const COUNTRY_NAME_SUCCESS = 'COUNTRY_NAME_SUCCESS';

interface CountryLoading {
  type: typeof COUNTRIES_LOADING;
}

interface CountryFail {
  type: typeof COUNTRIES_FAIL;
}

interface CountriesSuccess {
  type: typeof COUNTRIES_SUCCESS;
  payload: CountriesType;
}

interface CountrySuccess {
  type: typeof COUNTRY_SUCCESS;
  payload: CountryType;
}

interface CountryNameSuccess {
  type: typeof COUNTRY_NAME_SUCCESS;
  payload: CountryType;
}

export type CountryDispatchTypes = CountryLoading | CountryFail | CountriesSuccess | CountrySuccess | CountryNameSuccess;
