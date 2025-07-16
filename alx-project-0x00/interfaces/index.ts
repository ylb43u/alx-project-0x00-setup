export interface PillProps {
  title: string
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  title:string;
  size?: "small"| "medium"| "Large"
  shape?:"rounded-sm"|"rounded-md"|"rounded-full"  
}