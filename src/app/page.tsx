import React from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { EmergencyBanner } from '@/components/ui/EmergencyBanner';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/ui/ContactForm';
import { FaqItem } from '@/components/ui/FaqItem';

const communes78 = require('@/data/communes/78-yvelines.json');
const communes92 = require('@/data/communes/92-hauts-de-seine.json');
const communes95 = require('@/data/communes/95-val-doise.json');

const topVilles = [
  ...communes78.slice(0, 10),
  ...communes92.slice(0, 10),
  ...communes95.slice(0, 10),
];

const faqs = [
  {
    q: 'Combien coute un depannage de plomberie ?',
    a: 'Le cout depend de la nature de l\'intervention. Nous etablissons un devis transparent et detaille avant chaque intervention.',
  },
  {
    q: 'Quelle est la reglementation Qualigaz ?',
    a: 'La certification Qualigaz impose des regles strictes d\'installation et de maintenance des equipements gaz.',
  },
  {
    q: 'La climatisation reversible est-elle adaptee ?',
    a: 'Oui. Nous proposons des solutions compacts specialement concues pour les espaces reduits.',
  },
  {
    q: 'Intervenez-vous le week-end ?',
    a: 'Oui, nous assurons une permanence 24h/24 et 7j/7.',
  },
  {
    q: 'Quelle est votre zone de couverture ?',
    a: 'Nous intervenons dans l\'ensemble des 8 departements d\'Ile-de-France.',
  },
];

export default function HomePage() {
  return (
    <>
      <EmergencyBanner />

      {/* Hero with glassmorphism */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        {/* Floating blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400/30 rounded-full blur-[100px] animate-float-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Intervention 24h/24</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground mb-6">
                  Plombier &<br />Chauffagiste
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-md">
                  Artisan certifie Qualigaz en Ile-de-France.
                  Chatou, Versailles, Nanterre et toute l&apos;IDF.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-3">
                  <Button href="#devis" variant="primary" size="lg">
                    Demander un devis
                  </Button>
                  <Button href="tel:+33102030405" variant="secondary" size="lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    01 02 03 04 05
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="glass-card rounded-3xl p-2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src="/images/hero-plumber.jpg"
                      alt="Artisan plombier"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">30 min</div>
                      <div className="text-sm text-muted">Temps de reponse</div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 glass-card rounded-full px-5 py-2">
                  <span className="text-sm font-semibold text-accent">Qualigaz</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services — Glass cards */}
      <section id="services" className="relative py-24 md:py-32">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Nos services</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Ce qu&apos;on fait
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 100}>
                <Link
                  href={`/${s.slug}/chatou`}
                  className="group block glass-card rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl font-bold text-accent/30 group-hover:text-accent/60 transition-colors">0{i + 1}</span>
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <ServiceIcon icon={s.icon} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{s.label}</h3>
                  <p className="text-muted leading-relaxed">{s.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zone — Dark glass section */}
      <section id="zone" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Zone d&apos;intervention</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Ou intervenons-nous ?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <GlassDeptColumn code="78" name="Yvelines" communes={communes78.slice(0, 10)} />
            <GlassDeptColumn code="92" name="Hauts-de-Seine" communes={communes92.slice(0, 10)} />
            <GlassDeptColumn code="95" name="Val-d&apos;Oise" communes={communes95.slice(0, 10)} />
          </div>
        </div>
      </section>

      {/* Engagements — Glass cards */}
      <section id="confiance" className="relative py-24 md:py-32">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-xl mx-auto">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Nos engagements</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Pourquoi nous choisir
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'clock', title: '24h/24', text: 'Joignable a toute heure, tous les jours.' },
              { icon: 'file', title: 'Devis transparent', text: 'Prix annonce avant intervention.' },
              { icon: 'shield', title: 'Certifie Qualigaz', text: 'Habilite pour toute intervention gaz.' },
              { icon: 'zap', title: 'Rapide', text: 'Intervention le jour meme.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="glass-card rounded-3xl p-8 text-center hover:scale-[1.03] transition-transform">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <EngagementIcon name={item.icon} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — Glass row */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '15+', label: 'Annees' },
                { number: '2000+', label: 'Clients' },
                { number: '30 min', label: 'Reponse' },
                { number: '24/7', label: 'Dispo' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.number}</div>
                  <div className="text-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — Glass cards on gradient */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <ScrollReveal>
            <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3 text-center">Temoignages</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-16">
              Ils nous ont fait confiance
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass-card-dark rounded-3xl p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-accent"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                      {t.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{t.author}</div>
                      <div className="text-white/40 text-xs">{t.ville}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Questions frequentes
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="glass rounded-3xl p-2">
              <div className="divide-y divide-white/20">
                {faqs.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section id="devis" className="relative py-24 md:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Devis gratuit</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                Parlons de votre projet
              </h2>
              <p className="text-muted text-lg">
                Decrivez votre besoin, nous vous recontactons sous 24h.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900" />
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400/20 rounded-full blur-[100px] animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Une urgence ?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-xl mx-auto">
              Disponible 24h/24 et 7j/7 pour tous vos depannages.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button href="tel:+33102030405" variant="primary" size="lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              01 02 03 04 05
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Top villes */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h3 className="text-lg font-bold tracking-tight text-foreground mb-6">
              Interventions par ville
            </h3>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {topVilles.map((ville: any) => (
              <Link
                key={ville.slug}
                href={`/plombier/${ville.slug}`}
                className="glass px-4 py-2 rounded-full text-sm text-foreground hover:bg-white/60 transition-colors"
              >
                {ville.nom}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactElement> = {
    droplet: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
    flame: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
    snowflake: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="2" x2="12" y2="22"/><line x1="12" y1="2" x2="12" y2="22" transform="rotate(60 12 12)"/><line x1="12" y1="2" x2="12" y2="22" transform="rotate(120 12 12)"/></svg>,
    'alert-triangle': <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  };
  return icons[icon] || null;
}

function EngagementIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactElement> = {
    clock: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    file: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    zap: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  };
  return icons[name] || null;
}

function GlassDeptColumn({ code, name, communes }: { code: string; name: string; communes: any[] }) {
  return (
    <div className="glass-card-dark rounded-3xl p-8">
      <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
        {name} ({code})
      </h3>
      <ul className="space-y-2.5">
        {communes.map((c) => (
          <li key={c.slug}>
            <Link href={`/plombier/${c.slug}`} className="text-sm text-white/50 hover:text-white transition-colors">
              {c.nom}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
