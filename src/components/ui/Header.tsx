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
    <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          ThermoConfort
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+33102030405"
            className="text-sm font-semibold bg-foreground hover:bg-dark-elevated text-white px-5 py-2.5 rounded-md transition-colors"
          >
            01 02 03 04 05
          </a>
        </nav>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer' : 'Menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33102030405"
              className="text-base font-semibold bg-foreground text-white px-5 py-3 rounded-md text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              01 02 03 04 05
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
