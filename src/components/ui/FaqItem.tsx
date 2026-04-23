'use client';

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-t border-border transition-colors duration-200 ${isOpen ? 'bg-warm' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-2 text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-base pr-4 transition-colors duration-200 ${isOpen ? 'text-foreground font-semibold' : 'text-foreground font-medium'}`}>
          {question}
        </span>
        <span className="flex-shrink-0 relative w-5 h-5 text-muted">
          <span
            className="absolute top-1/2 left-0 w-5 h-0.5 bg-current transition-transform duration-200"
            style={{ transform: isOpen ? 'translateY(-50%) rotate(0deg)' : 'translateY(-50%) rotate(0deg)' }}
          />
          <span
            className="absolute top-1/2 left-0 w-5 h-0.5 bg-current transition-transform duration-200"
            style={{ transform: isOpen ? 'translateY(-50%) rotate(90deg) scaleX(0)' : 'translateY(-50%) rotate(90deg)' }}
          />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-2 pb-5 text-muted text-sm leading-relaxed max-w-2xl">
          {answer}
        </div>
      </div>
    </div>
  );
}
