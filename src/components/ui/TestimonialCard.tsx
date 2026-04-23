import React from 'react';

interface TestimonialProps {
  text: string;
  author: string;
  location: string;
  rating?: number;
}

export function TestimonialCard({ text, author, location, rating = 5 }: TestimonialProps) {
  return (
    <figure className="py-8">
      {rating > 0 && (
        <div className="flex gap-0.5 text-accent mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          ))}
        </div>
      )}
      <blockquote className="text-foreground text-base leading-relaxed mb-5">
        &ldquo;{text}&rdquo;
      </blockquote>
      <figcaption className="text-sm">
        <span className="font-semibold">{author}</span>
        <span className="text-muted"> — {location}</span>
      </figcaption>
    </figure>
  );
}
