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
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-sm font-medium">
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

        <div>
          <label className="text-sm font-semibold block mb-1.5">Nom <span className="text-emergency">*</span></label>
          <input
            type="text"
            name="nom"
            required
            className="w-full px-3 py-2.5 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label className="text-sm font-semibold block mb-1.5">Prenom <span className="text-emergency">*</span></label>
          <input
            type="text"
            name="prenom"
            required
            className="w-full px-3 py-2.5 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
            placeholder="Votre prenom"
          />
        </div>

        <div>
          <label className="text-sm font-semibold block mb-1.5">Telephone <span className="text-emergency">*</span></label>
          <input
            type="tel"
            name="telephone"
            required
            className="w-full px-3 py-2.5 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
            placeholder="01 02 03 04 05"
          />
        </div>

        <div>
          <label className="text-sm font-semibold block mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2.5 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
            placeholder="votre@email.fr"
          />
        </div>

        <div>
          <label className="text-sm font-semibold block mb-1.5">Code postal <span className="text-emergency">*</span></label>
          <input
            type="text"
            name="cp"
            defaultValue={defaultCp}
            required
            pattern="[0-9]{5}"
            className="w-full px-3 py-2.5 border border-border rounded-md text-sm bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
            placeholder="75000"
          />
        </div>

        <div>
          <label className="text-sm font-semibold block mb-1.5">Type de prestation <span className="text-emergency">*</span></label>
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
        className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-md font-semibold text-base transition-colors duration-150"
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
