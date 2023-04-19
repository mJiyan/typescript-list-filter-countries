import {
  render,
  screen,
} from "@testing-library/react";

import BorderCountryWrapper from "./BorderCountryWrapper";

describe(BorderCountryWrapper.name, () => {
  it("should render the component as expected ", () => {
      render(<BorderCountryWrapper>BorderCountryWrapper content</BorderCountryWrapper>)
      expect(screen.getByText("BorderCountryWrapper content")).toBeTruthy();
  })
})
