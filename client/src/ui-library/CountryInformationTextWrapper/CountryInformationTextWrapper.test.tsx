import {
  render,
  screen,
} from "@testing-library/react";

import CountryInformationTextWrapper from "./CountryInformationTextWrapper";

describe(CountryInformationTextWrapper.name, () => {
  it("should render the component as expected ", () => {
      render(<CountryInformationTextWrapper>CountryInformationTextWrapper content</CountryInformationTextWrapper>)
      expect(screen.getByText("CountryInformationTextWrapper content")).toBeTruthy();
  })
})
