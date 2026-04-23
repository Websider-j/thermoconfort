import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const variantMap = {
  primary: 'bg-accent text-white hover:bg-accent-hover shadow-tactile',
  secondary: 'bg-transparent border border-foreground/20 text-foreground hover:bg-foreground/5',
  inverse: 'bg-white text-foreground hover:bg-warm shadow-tactile',
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
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 active:translate-y-0 hover:-translate-y-0.5 ${variantMap[variant]} ${sizeMap[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
