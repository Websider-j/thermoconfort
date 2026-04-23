'use client';

import { useEffect, useState } from 'react';

export function useCountUp(end: number, duration: number = 1500, startOn: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOn) return;
    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, startOn]);

  return count;
}
