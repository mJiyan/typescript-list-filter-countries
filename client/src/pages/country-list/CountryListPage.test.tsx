import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';
import { CountryListPageTemplates } from 'src/shared/const';

import CountryListPage, { CountryListPageProps } from './CountryListPage'

jest.mock('./hooks', () => ({
  useGetCountryList:  () => (REDUX_STATE_MOCK.countries),
  useSearchAndFilterCountries: () => ({})
}));

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = (props: CountryListPageProps) => renderWithProviders(<CountryListPage match={props.match} />, [withRedux(store, history)])

describe(CountryListPage.name, () => {
    it("should render page as expected", async () => {
        setUp({ 
          match: {
            params: {
              templateName: CountryListPageTemplates.MAIN,
            }
          }
         });
        expect(screen.queryByText("Asia")).toBeInTheDocument()
    })

    it("should render second template when it is provided", async () => {
      setUp({ 
        match: {
          params: {
            templateName: CountryListPageTemplates.SECONDARY,
          }
        }
       });
      expect(screen.queryByText("SecondTemplate")).toBeInTheDocument()
  })
})
