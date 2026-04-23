import React from 'react';

export function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-8 ${className}`}>
      <div className="h-px w-12 bg-border" />
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
      </div>
      <div className="h-px w-12 bg-border" />
    </div>
  );
}
