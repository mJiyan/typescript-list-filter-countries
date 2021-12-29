import { combineReducers } from 'redux';
import countryReducer from './Country';

const RootReducer = combineReducers({
  country: countryReducer,
});

export default RootReducer;
