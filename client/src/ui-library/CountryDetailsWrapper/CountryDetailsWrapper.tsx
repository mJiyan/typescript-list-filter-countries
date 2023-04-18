import { UIComponentProp } from "src/shared/types";

const CountryDetailsWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className={`
      flex 
      flex-col 
      w-full 
      h-screen 
      xl:px-20 lg:px-20 md:px-20 sm:px-5 xs:px-3 
      ${props}`
    }>
      {children}
    </div>
  );

export default CountryDetailsWrapper;
