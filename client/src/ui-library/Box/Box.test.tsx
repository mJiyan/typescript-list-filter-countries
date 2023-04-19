import {
  render,
  screen,
} from "@testing-library/react";

import Box from "./Box";

describe(Box.name, () => {
  it("should render the component as expected ", () => {
      render(<Box>Box content</Box>)
      expect(screen.getByText("Box content")).toBeTruthy();
  })
})
