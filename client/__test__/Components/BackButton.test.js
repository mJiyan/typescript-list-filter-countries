import React from 'react';
import { BackButton } from '../../src/components';
import { mount, shallow } from 'enzyme';
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
const history = createMemoryHistory({ initialEntries: ['/'] })

const wrapper = mount(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <BackButton />
      </Switch>
    </Router>
  </Provider>,
);



describe('rendering components', () => {
  test('it should go previous page', () => {
    history.push('/DEU')
    expect(history.location.pathname).toEqual('/DEU');

    const backButton = wrapper.find('[data-testid="back-button"]');

    backButton.simulate('click');
    expect(history.location.pathname).toEqual('/');
  });
});
