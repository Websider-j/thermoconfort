'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#zone', label: 'Zone' },
  { href: '/#confiance', label: 'Engagements' },
  { href: '/#devis', label: 'Devis' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          ThermoConfort
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground px-4 py-2 rounded-full hover:bg-white/40 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+33102030405"
            className="ml-2 text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-accent/25"
          >
            01 02 03 04 05
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2 rounded-full hover:bg-white/40 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden mt-2 glass rounded-3xl p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted hover:text-foreground px-4 py-3 rounded-2xl hover:bg-white/40 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+33102030405"
            className="text-base font-semibold bg-accent text-white px-5 py-3 rounded-full text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            01 02 03 04 05
          </a>
        </div>
      )}
    </header>
  );
}
