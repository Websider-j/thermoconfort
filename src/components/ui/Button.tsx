import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantMap = {
  primary: 'bg-accent hover:bg-accent-hover text-white',
  secondary: 'bg-transparent border border-foreground/20 text-foreground hover:bg-foreground hover:text-white',
  white: 'bg-white text-foreground hover:bg-white/90',
};

const sizeMap = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({ href, variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 ${variantMap[variant]} ${sizeMap[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
