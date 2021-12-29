import React from 'react';
import { Header } from '../../src/components';
import renderer from 'react-test-renderer';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { mount, shallow } from 'enzyme';


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
        <Header />
      </Switch>
    </Router>
  </Provider>,
);



const wrapperMount = mount(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Header />
      </Switch>
    </Router>
  </Provider>,
);


describe('rendering header components', () => {
  test('it should match with the snapshot', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });


  test('it should find the darkModeButton', () => {
    const darkButton = wrapperMount.find('[data-testid="dark-mode"]');
    expect(darkButton.length).toEqual(1);
  });

  test('it should make the theme dark', () => {
    const darkButton = wrapperMount.find('[data-testid="dark-mode"]');
    darkButton.simulate('click');
    expect(localStorage.theme).toEqual("dark");
  });

  test('it should make the theme light', () => {
    const darkButton = wrapperMount.find('[data-testid="dark-mode"]');
    darkButton.simulate('click');
    expect(localStorage.theme).toEqual("light");
  });
});

localStorage.setItem('theme', 'dark');
const wrapperDarkThemeMount = mount(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Header />
      </Switch>
    </Router>
  </Provider>,
);


describe('rendering components', () => {
  test('it should make the theme light', () => {
    const darkButton = wrapperDarkThemeMount.find('[data-testid="dark-mode"]');
    darkButton.simulate('click');
    expect(localStorage.theme).toEqual("light");
  });
});