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
      className={`bg-[#373737] text-white text-lg font-medium py-4 px-8 rounded-full w-full hover:bg-black
                transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
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