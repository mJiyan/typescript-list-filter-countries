import {
    render,
    screen,
} from "@testing-library/react";

import FlagImageBox, { FLAG_IMAGE_BOX_TESTID } from "./FlagImageBox";

describe(FlagImageBox.name, () => {
    it("should render the component as expected ", () => {
        render(<FlagImageBox flag={""} />)
        expect(screen.getByTestId(FLAG_IMAGE_BOX_TESTID)).toBeTruthy();
    })
})
