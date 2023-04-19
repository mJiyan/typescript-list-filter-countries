import {
  render,
  screen,
} from "@testing-library/react";

import Regions, { RegionsProps } from "./Regions";

const mockSetRegion = jest.fn();
jest.mock('./hooks', () => ({
  useUpdateDropDownModule: () => ({
    title: "Region Title"
  }),
}));

const setUp = ({ setRegion }: RegionsProps) => render(<Regions setRegion={setRegion} />)

describe(Regions.name, () => {
  it("should render the component as expected ", () => {
      setUp({ setRegion: mockSetRegion })
      expect(screen.getByText("Region Title")).toBeTruthy();
  })
})
