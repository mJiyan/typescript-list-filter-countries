import {
  render,
  screen,
} from "@testing-library/react";

import CountryInformationDetailsWrapper from "./CountryInformationDetailsWrapper";

describe(CountryInformationDetailsWrapper.name, () => {
  it("should render the component as expected ", () => {
      render(<CountryInformationDetailsWrapper>CountryInformationDetailsWrapper content</CountryInformationDetailsWrapper>)
      expect(screen.getByText("CountryInformationDetailsWrapper content")).toBeTruthy();
  })
})
