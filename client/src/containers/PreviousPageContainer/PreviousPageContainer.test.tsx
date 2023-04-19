import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';

import PreviousPageContainer from './PreviousPageContainer'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = () => renderWithProviders(<PreviousPageContainer history={history} />, [withRedux(store, history)])

describe(PreviousPageContainer.name, () => {
    it("should render container as expected", () => {
        setUp()
        expect(screen.queryByText("Back")).toBeInTheDocument()
    })
})
