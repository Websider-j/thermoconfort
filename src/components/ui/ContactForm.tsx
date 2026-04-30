'use client';

import React, { useState } from 'react';

export function ContactForm({ defaultCp = '', defaultService = '' }: { defaultCp?: string; defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const subject = `Demande de devis - ${data.prestation} - ${data.nom} ${data.prenom}`;
    const body = `Nouvelle demande de devis

Civilite: ${data.civilite}
Nom: ${data.nom} ${data.prenom}
Telephone: ${data.telephone}
Email: ${data.email || '-'}
CP: ${data.cp}

Prestation: ${data.prestation}
Logement: ${data.logement || '-'}
Urgence: ${data.urgence}

Message:
${data.message || '-'}

RGPD: accepte`;

    window.location.href = `mailto:Bisignano.julien@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); form.reset(); }, 5000);
  };

  const inputClass = "w-full px-4 py-3 pl-11 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all";
  const labelClass = "text-xs font-semibold text-white/40 uppercase tracking-wider block mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitted && (
        <div className="p-5 bg-accent/10 backdrop-blur border border-accent/30 rounded-2xl text-accent text-sm font-medium text-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto mb-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Demande envoyee. Je vous recontacte sous 24h.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div className="relative">
          <label className={labelClass}>Nom</label>
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <input type="text" name="nom" required className={inputClass} placeholder="Votre nom" />
          </div>
        </div>
        <div className="relative">
          <label className={labelClass}>Prenom</label>
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <input type="text" name="prenom" required className={inputClass} placeholder="Votre prenom" />
          </div>
        </div>
        <div className="relative">
          <label className={labelClass}>Telephone</label>
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <input type="tel" name="telephone" required className={inputClass} placeholder="01 02 03 04 05" />
          </div>
        </div>
        <div className="relative">
          <label className={labelClass}>Email</label>
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <input type="email" name="email" className={inputClass} placeholder="votre@email.fr" />
          </div>
        </div>
        <div className="relative">
          <label className={labelClass}>Code postal</label>
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <input type="text" name="cp" defaultValue={defaultCp} required pattern="[0-9]{5}" className={inputClass} placeholder="75000" />
          </div>
        </div>
        <div className="relative">
          <label className={labelClass}>Prestation</label>
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <select name="prestation" defaultValue={defaultService || ''} required className={`${inputClass} appearance-none`}>
              <option value="" disabled>Choisir...</option>
              <option value="plombier">Plomberie</option>
              <option value="chauffagiste">Chauffage</option>
              <option value="climatisation">Climatisation</option>
              <option value="depannage-urgent">Depannage urgent</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea name="message" rows={3} className={inputClass} placeholder="Decrivez votre besoin..." />
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input type="checkbox" name="rgpd" required className="mt-1 accent-accent" />
        <label className="text-sm text-white/40">J&apos;accepte d&apos;etre recontacte au sujet de ma demande.</label>
      </div>

      <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold text-base transition-all glow-teal hover:glow-teal-strong flex items-center justify-center gap-2 group">
        Envoyer ma demande
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </form>
  );
}
