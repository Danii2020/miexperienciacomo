import Link from 'next/link';
import { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const CustomLink = ({
  children,
  className = "",
  ...props
}: CustomLinkProps) => {
  return (
    <Link
      className={`w-full px-8 py-2 bg-[#404040] hover:bg-black text-white rounded-3xl font-bold text-xl
                 text-center transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink; 