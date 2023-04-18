import { UIComponentProp } from "src/shared/types";

const HeaderWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className={`
      flex 
      items-center 
      justify-between 
      py-2 
      h-20 
      bg-WhiteDark dark:bg-DarkBlue 
      shadow-md 
      xl:px-20 lg:px-20 md:px-20 sm:px-5 xs:px-3 
    ${props}`}>
      {children}
    </div>
  );

export default HeaderWrapper;
