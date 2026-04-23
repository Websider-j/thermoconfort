'use client';

import React, { useState } from 'react';

export function ContactForm({ defaultCp = '', defaultService = '' }: { defaultCp?: string; defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const subject = `Demande de devis - ${data.prestation} - ${data.nom} ${data.prenom}`;
    const body = `Nouvelle demande de devis recue depuis le site web

CIVILITE & IDENTITE
Civilite : ${data.civilite}
Nom : ${data.nom}
Prenom : ${data.prenom}

COORDONNEES
Telephone : ${data.telephone}
Email : ${data.email || 'Non renseigne'}
Code postal : ${data.cp}

DETAILS DU PROJET
Type de prestation : ${data.prestation}
Type de logement : ${data.logement || 'Non renseigne'}
Urgence : ${data.urgence}

MESSAGE
${data.message || 'Aucun message complementaire'}

RGPD : Consentement donne pour etre recontacte.`;

    window.location.href = `mailto:Bisignano.julien@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      form.reset();
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitted && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-sm font-medium animate-fade-in">
          Votre demande a bien ete envoyee. Nous vous recontactons dans les plus brefs delais.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-semibold block mb-1.5">Civilite</label>
          <div className="flex gap-5 items-center pt-1">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="civilite" value="M." defaultChecked className="accent-accent" />
              M.
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="radio" name="civilite" value="Mme" className="accent-accent" />
              Mme
            </label>
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-semibold block mb-1.5">Nom <span className="text-accent">*</span></label>
          <div className="relative">
            <input
              type="text"
              name="nom"
              required
              className="w-full px-3 py-2.5 pl-9 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
              placeholder="Votre nom"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-semibold block mb-1.5">Prenom <span className="text-accent">*</span></label>
          <div className="relative">
            <input
              type="text"
              name="prenom"
              required
              className="w-full px-3 py-2.5 pl-9 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
              placeholder="Votre prenom"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-semibold block mb-1.5">Telephone <span className="text-accent">*</span></label>
          <div className="relative">
            <input
              type="tel"
              name="telephone"
              required
              className="w-full px-3 py-2.5 pl-9 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
              placeholder="01 02 03 04 05"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-semibold block mb-1.5">Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2.5 pl-9 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
              placeholder="votre@email.fr"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-semibold block mb-1.5">Code postal <span className="text-accent">*</span></label>
          <div className="relative">
            <input
              type="text"
              name="cp"
              defaultValue={defaultCp}
              required
              pattern="[0-9]{5}"
              className="w-full px-3 py-2.5 pl-9 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
              placeholder="75000"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold block mb-1.5">Type de prestation <span className="text-accent">*</span></label>
          <select
            name="prestation"
            defaultValue={defaultService || ''}
            required
            className="w-full px-3 py-2.5 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
          >
            <option value="" disabled>Choisir...</option>
            <option value="plombier">Plomberie</option>
            <option value="chauffagiste">Chauffage</option>
            <option value="climatisation">Climatisation</option>
            <option value="depannage-urgent">Depannage urgent</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold block mb-1.5">Type de logement</label>
          <select
            name="logement"
            className="w-full px-3 py-2.5 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
          >
            <option value="" disabled selected>Choisir...</option>
            <option value="Maison">Maison individuelle</option>
            <option value="Appartement">Appartement</option>
            <option value="Local">Local commercial</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold block mb-1.5">Urgence</label>
        <div className="flex gap-5 items-center pt-1">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="radio" name="urgence" value="Oui" className="accent-accent" />
            Oui
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="radio" name="urgence" value="Non" defaultChecked className="accent-accent" />
            Non
          </label>
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold block mb-1.5">Decrivez votre besoin</label>
        <textarea
          name="message"
          rows={4}
          className="w-full px-3 py-2.5 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
          placeholder="Detaillez votre probleme ou votre projet..."
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-md font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-tactile hover:shadow-tactile-hover"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Recevoir mon devis gratuit
      </button>
      <p className="text-xs text-muted text-center">
        En envoyant ce formulaire, vous acceptez d&apos;etre recontacte au sujet de votre demande. Vos donnees ne seront jamais transmises a des tiers.
      </p>
    </form>
  );
}
