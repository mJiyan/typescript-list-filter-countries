import { UIComponentProp } from "src/shared/types";

const CountryInformationWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className={`
      xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full 
      xl:mt-0 lg:mt-0 md:mt-0 sm:mt-12 xs:mt-12 
      ${props}`
    }>
      {children}
    </div>
  );

export default CountryInformationWrapper;
