import React from 'react';
import { CardList } from '../../src/components';
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
        <CardList cards={defaultState} />
      </Switch>

    </Router>

  </Provider>,
);


describe('rendering cardList components', () => {
  test('it should match with the snapshot', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
    // expect(1).toEqual(1);
  });

});
