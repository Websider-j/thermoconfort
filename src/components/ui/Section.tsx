import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'surface' | 'warm' | 'primary';
}

const paddingMap = {
  none: '',
  sm: 'py-10',
  md: 'py-16',
  lg: 'py-24',
  xl: 'py-32',
};

const bgMap = {
  default: '',
  surface: 'bg-surface',
  warm: 'bg-warm',
  primary: 'bg-foreground text-white',
};

export function Section({ children, className = '', id, padding = 'md', background = 'default' }: SectionProps) {
  return (
    <section id={id} className={`${paddingMap[padding]} ${bgMap[background]} ${className}`}>
      {children}
    </section>
  );
}
