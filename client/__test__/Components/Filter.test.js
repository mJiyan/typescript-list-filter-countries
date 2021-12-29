import React from 'react';
import { Filter } from '../../src/components';
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

const search = (searchTerm) => {
    return searchTerm;
}

const setRegion = (region) => {
    return region;
}


const wrapper = renderer.create(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Filter search={search} setRegion={setRegion} />
            </Switch>
        </Router>
    </Provider>,
);


const wrapperMount = mount(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Filter search={search} setRegion={setRegion} />
            </Switch>
        </Router>
    </Provider>,
);

describe('rendering filter components', () => {
    test('it should match with the snapshot', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('it should open the filter list', () => {
        const toggleListButton = wrapperMount.find('[data-testid="toggle-filter-list"]');
        const regionFilterAsia = wrapperMount.find('[data-testid="region-filter-Asia"]');
        
        expect(regionFilterAsia.length).toEqual(0);

        toggleListButton.simulate('click');
        const regionFilterAsia2 = wrapperMount.find('[data-testid="region-filter-Asia"]');

        expect(regionFilterAsia2.length).toEqual(1);
    });

    
    test('it should change the title', () => {
        const regionFilterAsia = wrapperMount.find('[data-testid="region-filter-Asia"]');
        const toggleListButton = wrapperMount.find('[data-testid="toggle-filter-list"]');

        
        expect(toJson(toggleListButton).node.rendered[0]).toEqual('Filter by Region');
        regionFilterAsia.simulate('click');

        const toggleListButton2 = wrapperMount.find('[data-testid="toggle-filter-list"]');
        expect(toJson(toggleListButton2).node.rendered[0]).toEqual('Asia');
    });


    test('it should find the search box', () => {
        const searchInput = wrapperMount.find('[data-testid="search-input"]');

        expect(searchInput.length).toEqual(1);
    });

    // test('it should change the search box value', () => {
    //     const searchInput = wrapperMount.find('[data-testid="search-input"]');

    //     // searchInput.simulate('change', { target: { value: 'Hello' } })
    //     // searchInput.simulate('change', { target: { value: 'Hello' } })

    //     // console.log(toJson(searchInput))

    //     //expect(searchInput.get(0).value).toEqual('Hello');
    //      expect(toJson(searchInput)).toEqual(1);
    // });

});
