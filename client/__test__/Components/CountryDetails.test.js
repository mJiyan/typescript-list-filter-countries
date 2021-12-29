import React from 'react';
import { CountryDetails } from '../../src/components';
import renderer from 'react-test-renderer';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history'

import defaultState from '../Mock/defaulState';
import toJson from 'enzyme-to-json'; //added this line
import 'jsdom-global/register'; //at the top of file , even  , before importing react

const mockStore = configureMockStore([thunk]);
const store = mockStore(defaultState);
const history = createMemoryHistory()

const wrapper = renderer.create(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <CountryDetails
          name={defaultState[0].name}
          flag={defaultState[0].flag}
          nativeName={defaultState[0].nativeName}
          population={defaultState[0].population}
          region={defaultState[0].region}
          subRegion={defaultState[0].subregion}
          capital={defaultState[0].capital}
          topLevelDomain={defaultState[0].topLevelDomain}
          currencies={defaultState[0].currencies[0].name}
          languages={defaultState[0].languages}
          borderCountries={defaultState[0].borders}
        />
      </Switch>

    </Router>

  </Provider>,
);


describe('rendering countryDetails components', () => {
  test('it should match with the snapshot', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

});
