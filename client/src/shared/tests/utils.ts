import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { act } from "@testing-library/react"
import { createMemoryHistory } from 'history'

import { DefaultState } from 'src/redux/reducers/Country';

export const wait = async (ms = 0): Promise<void> => {
    await act(() => new Promise((resolve) => {
        setTimeout(resolve, ms)
    }))
}

export const getReduxMockProviderParameters = ({ mock }: { mock: DefaultState }) => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore(mock);
    const history = createMemoryHistory()

    return {
        store,
        history
    }
}
