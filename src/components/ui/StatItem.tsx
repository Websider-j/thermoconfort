import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

export function StatItem({ number, label }: StatItemProps) {
  return (
    <div>
      <div className="text-3xl font-bold tracking-tight text-foreground">{number}</div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  );
}
