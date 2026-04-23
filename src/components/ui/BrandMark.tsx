import React from 'react';

export function BrandMark({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Water drop */}
      <path
        d="M16 10c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"
        fill="currentColor"
        opacity="0.9"
        transform="translate(8, 2) scale(0.9)"
      />
      {/* Flame */}
      <path
        d="M24 4c-2 2.5-3 5-3 7.5 0 2.5 1.5 4.5 3 4.5s3-2 3-4.5c0-2.5-1-5-3-7.5z"
        fill="currentColor"
        opacity="0.85"
        transform="translate(0, 1)"
      />
      {/* Snowflake */}
      <path
        d="M40 10c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"
        fill="currentColor"
        opacity="0.75"
        transform="translate(-8, 2) scale(0.9)"
      />
      {/* Connecting lines — hand-drawn feel */}
      <path
        d="M16 20c2 4 6 6 8 8M32 20c-2 4-6 6-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Bottom shield/hand outline — slightly imperfect */}
      <path
        d="M12 28c0-2 2-4 4-4h16c2 0 4 2 4 4v4c0 8-6 14-12 14s-12-6-12-14v-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
