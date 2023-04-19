import {
  render,
  screen,
} from "@testing-library/react";

import CountryInformationWrapper from "./CountryInformationWrapper";

describe(CountryInformationWrapper.name, () => {
  it("should render the component as expected ", () => {
      render(<CountryInformationWrapper>CountryInformationWrapper content</CountryInformationWrapper>)
      expect(screen.getByText("CountryInformationWrapper content")).toBeTruthy();
  })
})
