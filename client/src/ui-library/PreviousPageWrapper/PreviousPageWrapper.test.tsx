import {
  render,
  screen,
} from "@testing-library/react";

import PreviousPageWrapper from "./PreviousPageWrapper";

describe(PreviousPageWrapper.name, () => {
  it("should render the component as expected ", () => {
      render(<PreviousPageWrapper>PreviousPageWrapper content</PreviousPageWrapper>)
      expect(screen.getByText("PreviousPageWrapper content")).toBeTruthy();
  })
})
