'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandMark } from './BrandMark';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#zone', label: 'Zone' },
  { href: '/#confiance', label: 'Engagements' },
  { href: '/#devis', label: 'Devis' },
];

const marqueeItems = [
  'Intervention a Versailles — il y a 12 min',
  'Devis accepte a Nanterre — il y a 8 min',
  'Depannage a Chatou — il y a 25 min',
  'Installation a Saint-Germain — il y a 42 min',
  'Urgence a Boulogne — il y a 3 min',
  'Entretien a Rueil-Malmaison — il y a 18 min',
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-surface border-b border-border sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-foreground">
            <BrandMark size={28} className="text-accent" />
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
              className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-tactile"
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

      {/* Marquee trust strip */}
      <div className="bg-warm-dark border-b border-border overflow-hidden">
        <div className="flex items-center">
          <div className="flex-shrink-0 px-4 py-1.5 flex items-center gap-2 border-r border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
            <span className="text-xs font-medium text-muted">En direct</span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-6 text-xs text-muted">
                  <span className="w-1 h-1 rounded-full bg-accent/40" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
