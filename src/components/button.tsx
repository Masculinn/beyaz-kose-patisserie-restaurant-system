import { ButtonProps } from "@/interfaces";
import { FC } from "react";

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`
        px-4 
        transition-all
        duration-300
        py-2 
        rounded-md 
        tracking-tight 
        text-sm 
        items-center 
        flex 
        gap-2
        cursor-pointer
        bg-primary 
        text-background 
        hover:bg-primary/75
        ${className}
        `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
