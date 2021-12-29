export const COUNTRIES_LOADING = 'COUNTRIES_LOADING';
export const COUNTRIES_FAIL = 'COUNTRIES_FAIL';
export const COUNTRIES_SUCCESS = 'COUNTRIES_SUCCESS';
export const COUNTRY_SUCCESS = 'COUNTRY_SUCCESS';
export const COUNTRY_NAME_SUCCESS = 'COUNTRY_NAME_SUCCESS';

// declared all Country types here and exported them. in order to enable to reach them easily
export type CountryType = {
  name: string;
  flag: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: Array<{ name: string }>;
  languages: Array<{ name: string }>;
  borders: { alpha: string; name: string; }[];
  alpha3Code: string;

};

export type CountryName = {
  description: string;
};


export type Countries = {
  countries: Array<CountryType>;
};

interface CountryLoading {
  type: typeof COUNTRIES_LOADING;
}

interface CountryFail {
  type: typeof COUNTRIES_FAIL;
}

interface CountriesSuccess {
  type: typeof COUNTRIES_SUCCESS;
  payload: Array<CountryType>;
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
