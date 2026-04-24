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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="p-4 bg-emerald-50/80 backdrop-blur border border-emerald-200 rounded-2xl text-emerald-800 text-sm font-medium">
          Demande envoyee. Nous vous recontactons sous 24h.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">Nom</label>
          <input type="text" name="nom" required className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/40 text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" placeholder="Votre nom" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">Prenom</label>
          <input type="text" name="prenom" required className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/40 text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" placeholder="Votre prenom" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">Telephone</label>
          <input type="tel" name="telephone" required className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/40 text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" placeholder="01 02 03 04 05" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">Email</label>
          <input type="email" name="email" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/40 text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" placeholder="votre@email.fr" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">Code postal</label>
          <input type="text" name="cp" defaultValue={defaultCp} required pattern="[0-9]{5}" className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/40 text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" placeholder="75000" />
        </div>
        <div>
          <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">Prestation</label>
          <select name="prestation" defaultValue={defaultService || ''} required className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/40 text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all">
            <option value="" disabled>Choisir...</option>
            <option value="plombier">Plomberie</option>
            <option value="chauffagiste">Chauffage</option>
            <option value="climatisation">Climatisation</option>
            <option value="depannage-urgent">Depannage urgent</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">Message</label>
        <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/40 text-foreground focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all resize-none" placeholder="Decrivez votre besoin..." />
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input type="checkbox" name="rgpd" required className="mt-1 accent-accent" />
        <label className="text-sm text-muted">J&apos;accepte d&apos;etre recontacte au sujet de ma demande.</label>
      </div>

      <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30">
        Envoyer ma demande
      </button>
    </form>
  );
}
