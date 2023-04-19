import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';

import SecondTemplate, { SecondTemplateProps } from './SecondTemplate'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ countryList, search, setRegion }: SecondTemplateProps) => renderWithProviders(
  <SecondTemplate 
    countryList={countryList}
    search={search}
    setRegion={setRegion}
  />, [withRedux(store, history)])

const mockSearch = jest.fn();
const mockSetRegion = jest.fn();

describe(SecondTemplate.name, () => {
    it("should render container as expected", () => {
        setUp({
            countryList: REDUX_STATE_MOCK.countries,
            search: mockSearch,
            setRegion: mockSetRegion,
        });
        expect(screen.queryByText("SecondTemplate")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Search for a country...")).toBeInTheDocument();
        expect(screen.getByText("Filter by Region")).toBeTruthy();
        expect(screen.queryByText("Asia")).toBeInTheDocument();
    })
})
