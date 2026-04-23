import React from 'react';

interface TestimonialProps {
  text: string;
  author: string;
  location: string;
  rating?: number;
}

function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

export function TestimonialCard({ text, author, location, rating = 5 }: TestimonialProps) {
  return (
    <figure className="relative py-8 px-2">
      {/* Decorative large quote */}
      <span className="absolute top-0 left-0 text-[6rem] leading-none font-serif text-accent/[0.06] select-none" aria-hidden="true">
        &ldquo;
      </span>

      {rating > 0 && (
        <div className="flex gap-0.5 text-accent/70 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          ))}
        </div>
      )}

      <blockquote className="text-foreground text-base leading-relaxed mb-6 relative z-10">
        &ldquo;{text}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center text-xs font-bold text-accent">
          {getInitials(author)}
        </div>
        <div>
          <span className="font-semibold text-sm">{author}</span>
          <span className="text-muted text-sm"> — {location}</span>
        </div>
      </figcaption>
    </figure>
  );
}
