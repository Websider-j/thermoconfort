import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative">
      <div className="glass-card-dark rounded-t-[40px] mx-4 md:mx-8">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h4 className="text-2xl font-bold tracking-tight mb-4 text-white">ThermoConfort</h4>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                Artisan plombier, chauffagiste et climaticien en Ile-de-France.
                Certifie Qualigaz. Intervention rapide et devis gratuit.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/plombier/chatou" className="text-sm text-white/60 hover:text-white transition-colors">Plomberie</Link></li>
                <li><Link href="/chauffagiste/chatou" className="text-sm text-white/60 hover:text-white transition-colors">Chauffage</Link></li>
                <li><Link href="/climatisation/chatou" className="text-sm text-white/60 hover:text-white transition-colors">Climatisation</Link></li>
                <li><Link href="/depannage-urgent/chatou" className="text-sm text-white/60 hover:text-white transition-colors">Depannage urgent</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-sm text-white/60"><a href="tel:+33102030405" className="hover:text-white transition-colors">01 02 03 04 05</a></li>
                <li className="text-sm text-white/60"><a href="mailto:Bisignano.julien@gmail.com" className="hover:text-white transition-colors">Bisignano.julien@gmail.com</a></li>
                <li className="text-sm text-white/60">57 Boulevard de la Republique<br/>78400 Chatou</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
            <span>&copy; {new Date().getFullYear()} ThermoConfort</span>
            <span>Mentions legales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
