
import { UIComponentProp } from "src/shared/types"

const FilterWrapper = ({props, children}: UIComponentProp) => (
    <div
    className={`flex 
      xl:flex-row lg:flex-row  md:flex-row sm:flex-col xs:flex-col 
      justify-between 
      xl:px-20 lg:px-20 md:px-20 sm:px-3 xs:px-3
      xl:pt-8 lg:pt-8 md:pt-8 sm:pt-5 xs:pt-5
      xl:h-20 lg:h-20 md:h-20 sm:h-full xs:h-full ${props}`}
  >
    {children}
  </div>
)

export default FilterWrapper
