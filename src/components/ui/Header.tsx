'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#zone', label: 'Zone d\'intervention' },
  { href: '/#confiance', label: 'Engagements' },
  { href: '/#devis', label: 'Devis' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
          ThermoConfort
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+33102030405"
            className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md transition-colors duration-150"
          >
            01 02 03 04 05
          </a>
        </nav>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="md:hidden border-t border-border bg-surface">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33102030405"
              className="text-base font-semibold bg-accent text-white px-4 py-2.5 rounded-md text-center"
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
