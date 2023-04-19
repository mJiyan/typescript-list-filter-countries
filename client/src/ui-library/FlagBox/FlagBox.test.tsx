import {
  render,
  screen,
} from "@testing-library/react";

import FlagBox from "./FlagBox";

describe(FlagBox.name, () => {
  it("should render the component as expected ", () => {
      render(<FlagBox>FlagBox content</FlagBox>)
      expect(screen.getByText("FlagBox content")).toBeTruthy();
  })
})
