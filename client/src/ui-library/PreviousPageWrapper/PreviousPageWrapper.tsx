import { UIComponentProp } from "src/shared/types";

const PreviousPageWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className={`xl:pt-10 lg:pt-10 md:pt-10 sm:pt-5 xs:pt-5 absolute ${props}`}>
      {children}
    </div>
  );

export default PreviousPageWrapper;
