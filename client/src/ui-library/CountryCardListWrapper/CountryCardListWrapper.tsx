import { UIComponentProp } from "src/shared/types"

const CountryCardListWrapper = ({props, children}: UIComponentProp) => (
    <div
    className={`grid
    justify-items-center
    xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1
    xl:pt-10 lg:pt-10 md:pt-10 sm:pt-0 xs:pt-0
    px-10 ${props}`}
  >
    {children}
  </div>
)

export default CountryCardListWrapper
