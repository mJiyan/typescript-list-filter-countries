import { UIComponentProp } from "src/shared/types";

const CountryInformationDetailsWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className={`flex
      xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col
      xl:pt-36 lg:pt-36 md:pt-36 sm:pt-0 xs:pt-0
      h-screen 
      ${props}`
    }>
      {children}
    </div>
  );

export default CountryInformationDetailsWrapper;
