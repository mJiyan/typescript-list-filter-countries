import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';
import { FLAG_IMAGE_BOX_TESTID } from 'src/ui-library/FlagImageBox/FlagImageBox';

import Flag, { FlagProps } from './Flag'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ flag }: FlagProps) => renderWithProviders(<Flag flag={flag} />, [withRedux(store, history)])

describe(Flag.name, () => {
    it("should render container as expected", () => {
        setUp({
            flag: REDUX_STATE_MOCK.country.flag
        })

        expect(screen.getByTestId(FLAG_IMAGE_BOX_TESTID)).toBeTruthy();
    })
})
