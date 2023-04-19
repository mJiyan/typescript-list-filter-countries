import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/shared/mock';

import CountryInformationText, { CountryInformationTextProps } from './CountryInformationText'

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({label, value }: CountryInformationTextProps) => renderWithProviders(
  <CountryInformationText 
    label={label}
    value={value}
  />, [withRedux(store, history)])

describe(CountryInformationText.name, () => {
    it("should render container as expected", () => {
        setUp({ 
          label: "textLabel",
          value: "textValue"
        })
        expect(screen.queryByText("textLabel:")).toBeInTheDocument()
        expect(screen.queryByText("textValue")).toBeInTheDocument()
    })
})
