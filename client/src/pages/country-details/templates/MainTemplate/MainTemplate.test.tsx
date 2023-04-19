import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK, COUNTRIES_SUCCESS_STATE } from 'src/shared/mock';

import MainTemplate, { MainTemplateProps } from './MainTemplate'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ country }: MainTemplateProps) => renderWithProviders(<MainTemplate country={country} history={history} />, [withRedux(store, history)])

const mockHistory = jest.fn();

describe(MainTemplate.name, () => {
    it("should render container as expected", () => {
        setUp({
            country: REDUX_STATE_MOCK.country,
            history: mockHistory
        });

        expect(screen.queryByText("Back")).toBeInTheDocument();
        expect(screen.queryByText("Asia")).toBeInTheDocument();
    })
})
