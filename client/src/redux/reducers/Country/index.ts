import {
    CountryType,
    CountryDispatchTypes,
    COUNTRIES_SUCCESS,
    COUNTRY_SUCCESS,
    COUNTRY_NAME_SUCCESS,
    COUNTRIES_FAIL,
    COUNTRIES_LOADING,
} from '../../actions/Country/types';


export interface DefaultStateI {
    loading: boolean;
    countryName?: CountryType;
    country?: CountryType;
    countries?: Array<CountryType>;
    error?: boolean;
}

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const countryReducer = (
    state: DefaultStateI = defaultState,
    action: CountryDispatchTypes,
): DefaultStateI => {
    switch (action.type) {
        case COUNTRIES_FAIL:
            return {
                loading: false,
                error: true
            };
        case COUNTRIES_LOADING:
            return {
                loading: true,
            };
        case COUNTRIES_SUCCESS:
            return {
                loading: false,
                countries: action.payload,
                
            };
        case COUNTRY_SUCCESS:
            return {
                loading: false,
                country: action.payload,
            };
        case COUNTRY_NAME_SUCCESS:
            return {
                loading: false,
                country: action.payload,
            };
        default:
            return state;
    }
};


export default countryReducer;
