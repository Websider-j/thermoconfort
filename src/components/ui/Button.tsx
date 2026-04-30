import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantMap = {
  primary: 'bg-accent hover:bg-accent-hover text-white glow-teal hover:glow-teal-strong active:scale-[0.97]',
  secondary: 'glass hover:bg-white/10 text-white border-white/20',
  glass: 'glass-card hover:bg-white/10 text-white',
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
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 ${variantMap[variant]} ${sizeMap[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
