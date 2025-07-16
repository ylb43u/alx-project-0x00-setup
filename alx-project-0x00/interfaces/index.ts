export interface PillProps {
  title: string
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  title:string;    
  styles: string;
}