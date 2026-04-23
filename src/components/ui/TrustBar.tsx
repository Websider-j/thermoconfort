import React from 'react';

interface TrustBarProps {
  items?: { icon: React.ReactNode; label: string }[];
}

export function TrustBar({ items }: TrustBarProps) {
  const defaultItems = [
    {
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
      label: 'Certifie Qualigaz',
    },
    {
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      label: 'Intervention 24h/24',
    },
    {
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
      label: 'Devis gratuit',
    },
  ];

  const displayItems = items || defaultItems;

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
      {displayItems.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {item.icon}
          <span className="font-medium">{item.label}</span>
        </span>
      ))}
    </div>
  );
}
