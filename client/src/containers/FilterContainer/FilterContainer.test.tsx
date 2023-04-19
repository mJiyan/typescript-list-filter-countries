import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK, COUNTRY_SUCCESS_STATE } from 'src/shared/mock';

import FilterContainer, { FilterProps } from './FilterContainer'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ search, setRegion }: FilterProps) => renderWithProviders(
    <FilterContainer 
      search={search}
      setRegion={setRegion}
    />, [withRedux(store, history)])

const mockSearchFunction = jest.fn();
const mockSetRegionFunction = jest.fn();

describe(FilterContainer.name, () => {
    it("should render container as expected", () => {
        setUp({
          search: mockSearchFunction,
          setRegion: mockSetRegionFunction,
        });
        expect(screen.getByPlaceholderText("Search for a country...")).toBeInTheDocument();
        expect(screen.getByText("Filter by Region")).toBeInTheDocument();
    });
})
