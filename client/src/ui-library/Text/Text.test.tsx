import {
    render,
    screen,
} from "@testing-library/react";

import Text from "./Text";

describe(Text.name, () => {
    it("should render the component as expected ", () => {
        render(<Text>Text content</Text>)
        expect(screen.getByText("Text content")).toBeTruthy();
    })
})
