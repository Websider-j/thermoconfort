import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantMap = {
  primary: 'bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/30',
  secondary: 'glass hover:bg-white/40 text-foreground',
  glass: 'glass-dark hover:bg-white/10 text-white border-white/20',
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
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 ${variantMap[variant]} ${sizeMap[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
