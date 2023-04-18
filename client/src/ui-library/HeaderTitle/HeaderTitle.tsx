import { UIComponentProp } from "src/shared/types";

const HeaderTitle: React.FC<UIComponentProp> = ({ props, children }) => (
    <p className={`
    font-bold 
    tracking-tight 
    xl:text-2xl lg:text-2xl md:text-2xl sm:text-md xs:text-sm 
    ${props}`}>
      {children}
    </p>
  );

export default HeaderTitle;
