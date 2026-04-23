'use client';

import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';

interface StatItemProps {
  number: string;
  label: string;
}

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const { ref, isInView } = useInView();
  const count = useCountUp(numericValue || 0, 1500, isInView);

  if (isNaN(numericValue)) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function StatItem({ number, label }: StatItemProps) {
  const hasPlus = number.includes('+');
  const cleanNumber = number.replace('+', '').replace(' min', '').replace('/7', '');
  const suffix = hasPlus ? '+' : number.includes('min') ? ' min' : number.includes('/') ? '/7' : '';
  const isSpecial = number.includes('/') || number.includes('min');

  return (
    <div>
      <div className="text-3xl font-bold tracking-tight text-accent">
        {isSpecial ? number : <AnimatedNumber value={cleanNumber} suffix={suffix} />}
      </div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  );
}
