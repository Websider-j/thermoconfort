'use client';

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-base md:text-lg pr-8 transition-colors ${isOpen ? 'text-foreground font-semibold' : 'text-foreground font-medium'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 text-muted transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <div className="pb-6 text-muted leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
