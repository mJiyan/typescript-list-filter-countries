import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';
import { CountryDetailsPageTemplates } from 'src/shared/const';

import CountryDetailsPage, { CountryDetailsPageProps } from './CountryDetailsPage'

jest.mock('./hooks', () => ({
  useGetCountryDetails: jest.fn()
}));

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = (props: CountryDetailsPageProps) => renderWithProviders(<CountryDetailsPage match={props.match} />, [withRedux(store, history)])

describe(CountryDetailsPage.name, () => {
    it("should render page as expected", async () => {
        setUp({ 
          match: {
            params: {
              name: "",
              template: CountryDetailsPageTemplates.MAIN,
            }
          }
         });
        expect(screen.queryByText("Back")).toBeInTheDocument()
    })
})
