import {
    render,
    screen,
  } from "@testing-library/react";
  
  import { RegionListItem } from "./RegionListItem";

  const mockFilterByRegion = jest.fn()
  
  describe(RegionListItem.name, () => {
    it("should render the component as expected ", () => {
        render(
            <RegionListItem 
                filterByRegion={mockFilterByRegion}
                region="RegionListItem"
            />
        )
        expect(screen.getByText("RegionListItem")).toBeTruthy();
    })
  })
  