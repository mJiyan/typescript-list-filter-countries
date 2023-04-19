import {
  render,
  screen,
} from "@testing-library/react";

import Button from "./Button";

describe(Button.name, () => {
  it("should render the component as expected ", () => {
      render(<Button>Button content</Button>)
      expect(screen.getByText("Button content")).toBeTruthy();
  })
})
