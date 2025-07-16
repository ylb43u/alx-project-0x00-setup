import { ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({ 
    title, 
    styles,
    ...rest 
}) => {
  return (
    <button className={`text-white px-4 py-2 ${styles}`} {...rest}>
      {title}
    </button>
  );
};


export default Button;