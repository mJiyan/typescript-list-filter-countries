import { UIComponentProp } from "src/shared/types";

const Text: React.FC<UIComponentProp> = ({ props, children }) => (
    <p className={`${props}`}>
        {children}
    </p>
)

export default Text;
