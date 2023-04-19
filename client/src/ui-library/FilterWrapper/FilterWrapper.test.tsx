import {
  render,
  screen,
} from "@testing-library/react";

import FilterWrapper from "./FilterWrapper";

describe(FilterWrapper.name, () => {
  it("should render the component as expected ", () => {
      render(<FilterWrapper>FilterWrapper content</FilterWrapper>)
      expect(screen.getByText("FilterWrapper content")).toBeTruthy();
  })
})
