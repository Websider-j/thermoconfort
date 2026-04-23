import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  slug: string;
  label: string;
  description: string;
  icon: string;
  active?: boolean;
}

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactElement> = {
    droplet: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
    flame: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
    snowflake: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="12" y1="2" x2="12" y2="22" transform="rotate(60 12 12)"/><line x1="12" y1="2" x2="12" y2="22" transform="rotate(120 12 12)"/></svg>,
    'alert-triangle': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  };
  return icons[icon] || null;
}

export function ServiceCard({ slug, label, description, icon, active }: ServiceCardProps) {
  return (
    <article className={`group p-8 rounded-lg transition-colors duration-150 ${active ? 'bg-warm border border-accent/20' : 'bg-surface border border-border hover:border-foreground/10'}`}>
      <div className="w-10 h-10 rounded-md bg-foreground text-background flex items-center justify-center mb-5">
        <ServiceIcon icon={icon} />
      </div>
      <h3 className="text-lg font-bold mb-2 tracking-tight">{label}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
      <Link
        href={`/${slug}/chatou`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
      >
        Voir les interventions
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
      </Link>
    </article>
  );
}
