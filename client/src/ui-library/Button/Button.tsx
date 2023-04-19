import { UIComponentProp } from "src/shared/types";

type ButtonProps = UIComponentProp & { type?: "button" | "submit" | "reset",  onClick?: () => void, dataTestId?: string }

const Button: React.FC<ButtonProps> = ({ children, type, props, onClick, dataTestId }) => (
    <button
        type={type}
        className={`
            flex 
            flex-row 
            items-center 
            rounded 
            bg-WhiteDark dark:bg-DarkBlue 
            text-sm 
            shadow-lg 
            relative ${props}`}
        onClick={onClick}
        data-testid={dataTestId}
    >
        {children}
    </button>
)
export default Button;
