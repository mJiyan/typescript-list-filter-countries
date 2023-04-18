import { UIComponentProp } from "src/shared/types";

const Box: React.FC<UIComponentProp> = ({ children, props }) => (
    <div className={`
        flex
        ${props}`}
    >
        {children}
    </div>
)
export default Box;
