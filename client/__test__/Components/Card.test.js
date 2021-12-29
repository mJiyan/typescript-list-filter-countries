import React from 'react';
import { Card } from '../../src/components';
import { mount, shallow } from 'enzyme';
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
        <Card name={defaultState[0].name} population={defaultState[0].population} region={defaultState[0].region} capital={defaultState[0].capital} flag={defaultState[0].flag} alpha3Code={defaultState[0].alpha3Code} />
      </Switch>

    </Router>

  </Provider>,
);


describe('rendering card components', () => {
  test('it should match with the snapshot', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

});
