import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  icon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
}

const Button = ({
  children,
  isLoading = false,
  icon,
  loadingIcon,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`bg-[#373737] py-4 px-8 w-full text-white rounded-xl font-bold text-2xl
                    transition-all duration-300 ease-in-out hover:bg-[#CFC8C8] hover:text-[#373737] hover:border-[1px]
                    hover:border-[#373737] hover:scale-105 ${className}`}
      {...props}
    >
      <div className="flex justify-center items-center gap-8">
        {isLoading ? loadingIcon : icon}
        {children}
      </div>
    </button>
  );
};

export default Button; 