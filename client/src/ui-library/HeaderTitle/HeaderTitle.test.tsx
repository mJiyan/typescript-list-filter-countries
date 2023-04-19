import {
  render,
  screen,
} from "@testing-library/react";

import HeaderTitle from "./HeaderTitle";

describe(HeaderTitle.name, () => {
  it("should render the component as expected ", () => {
      render(<HeaderTitle>HeaderTitle content</HeaderTitle>)
      expect(screen.getByText("HeaderTitle content")).toBeTruthy();
  })
})
