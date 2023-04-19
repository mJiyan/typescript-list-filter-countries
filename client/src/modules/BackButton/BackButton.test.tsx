import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

import { renderWithProviders, withRedux, getReduxMockProviderParameters, wait } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';

import BackButton, { BUTTON_TESTID } from './BackButton'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = () => renderWithProviders(<BackButton history={history} />, [withRedux(store, history)])
history.goBack = jest.fn();

describe(BackButton.name, () => {
    it("should render container as expected", async () => {
        setUp();
        const backButton = screen.getByTestId(BUTTON_TESTID);
        await userEvent.click(backButton);

        await wait(1000);

        expect(screen.queryByText("Back")).toBeInTheDocument();
        expect(history.goBack).toHaveBeenCalledTimes(1);
    })
})
