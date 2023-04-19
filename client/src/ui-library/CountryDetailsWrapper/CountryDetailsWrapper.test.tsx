import {
  render,
  screen,
} from "@testing-library/react";

import CountryDetailsWrapper from "./CountryDetailsWrapper";

describe(CountryDetailsWrapper.name, () => {
  it("should render the component as expected ", () => {
      render(<CountryDetailsWrapper>CountryDetailsWrapper content</CountryDetailsWrapper>)
      expect(screen.getByText("CountryDetailsWrapper content")).toBeTruthy();
  })
})
