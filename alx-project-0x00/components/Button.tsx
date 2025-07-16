import { ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({ 
    title, 
    shape = "rounded-md",
    size = "medium",
    ...rest 
}) => {
  const sizeClass =
    size === "Large" ? "text-3xl" : size === "medium" ? "text-xl" : "text-sm";

  return (
    <button className={`${sizeClass} ${shape}`} {...rest}>
      {title}
    </button>
  );
};


export default Button;