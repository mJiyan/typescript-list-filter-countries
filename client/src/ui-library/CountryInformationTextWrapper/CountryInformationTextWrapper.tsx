import { UIComponentProp } from "src/shared/types";

const CountryInformationTextWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className={`
      flex
      items-between 
      justify-between 
      w-full
      xl:h-fit lg:h-fit md:h-fit sm:h-full xs:h-full
      xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col 
      ${props}`
    }>
      {children}
    </div>
)

export default CountryInformationTextWrapper;
