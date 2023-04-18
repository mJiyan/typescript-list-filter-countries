import { UIComponentProp } from "src/shared/types";

const FlagBox: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className={`
      flex 
      flex-col
      justify-end
      items-start
      xl:h-1/2 lg:h-1/2 md:h-1/2 sm:h-1/2 xs:h-1/2
      xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full xs:w-full
      xl:mt-0 lg:mt-0 md:mt-0 sm:mt-12 xs:mt-12 
    ${props}`}>
      {children}
    </div>
  );

export default FlagBox;
