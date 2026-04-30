'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#zone', label: 'Zone' },
  { href: '/#confiance', label: 'Engagements' },
  { href: '/#devis', label: 'Devis' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map(l => l.href.replace('/#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
      scrolled 
        ? 'top-2 w-[calc(100%-1rem)] max-w-4xl' 
        : 'top-4 w-[calc(100%-2rem)] max-w-5xl'
    }`}>
      <nav className={`rounded-full px-6 flex items-center justify-between transition-all duration-300 ${
        scrolled 
          ? 'glass-strong py-2' 
          : 'glass py-3'
      }`}>
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          ThermoConfort
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('/#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all ${
                  isActive 
                    ? 'text-white bg-white/10' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
          <a
            href="tel:+33102030405"
            className="ml-2 text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full transition-all glow-teal hover:glow-teal-strong flex items-center gap-2"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="group-hover:animate-pulse"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            01 02 03 04 05
          </a>
        </div>

        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
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
        <div className="md:hidden mt-2 glass-strong rounded-3xl p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white/70 hover:text-white px-4 py-3 rounded-2xl hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+33102030405"
            className="text-base font-semibold bg-accent text-white px-5 py-3 rounded-full text-center mt-2 glow-teal"
            onClick={() => setMenuOpen(false)}
          >
            01 02 03 04 05
          </a>
        </div>
      )}
    </header>
  );
}
