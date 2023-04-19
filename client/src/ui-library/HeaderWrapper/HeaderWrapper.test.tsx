import {
  render,
  screen,
} from "@testing-library/react";

import HeaderWrapper from "./HeaderWrapper";

describe(HeaderWrapper.name, () => {
  it("should render the component as expected ", () => {
      render(<HeaderWrapper>HeaderWrapper content</HeaderWrapper>)
      expect(screen.getByText("HeaderWrapper content")).toBeTruthy();
  })
})
