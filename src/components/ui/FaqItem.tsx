'use client';

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between py-5 px-4 text-left rounded-2xl transition-all duration-300 ${
          isOpen ? 'bg-white/5' : 'hover:bg-white/5'
        }`}
        aria-expanded={isOpen}
      >
        <span className={`text-base pr-8 transition-colors duration-300 ${isOpen ? 'text-white font-semibold' : 'text-white/80 font-medium'}`}>
          {question}
        </span>
        <span className="flex-shrink-0 relative w-5 h-5 text-white/40">
          <span
            className="absolute top-1/2 left-0 w-5 h-0.5 bg-current transition-all duration-300"
            style={{ transform: 'translateY(-50%)' }}
          />
          <span
            className="absolute top-1/2 left-0 w-5 h-0.5 bg-current transition-all duration-300"
            style={{ transform: isOpen ? 'translateY(-50%) scaleX(0)' : 'translateY(-50%) rotate(90deg)' }}
          />
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-5 text-white/50 leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
