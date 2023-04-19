import {
  render,
  screen,
} from "@testing-library/react";

import CountryCardListWrapper from "./CountryCardListWrapper";

describe(CountryCardListWrapper.name, () => {
  it("should render the component as expected ", () => {
      render(<CountryCardListWrapper>CountryCardListWrapper content</CountryCardListWrapper>)
      expect(screen.getByText("CountryCardListWrapper content")).toBeTruthy();
  })
})
