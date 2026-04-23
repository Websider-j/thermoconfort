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
    a: 'Le cout depend de la nature de l\'intervention. Nous etablissons un devis transparent et detaille avant chaque intervention. Pas de frais caches.',
  },
  {
    q: 'Quelle est la reglementation Qualigaz ?',
    a: 'La certification Qualigaz impose des regles strictes d\'installation et de maintenance des equipements gaz. Notre habilitation garantit le respect des normes de securite.',
  },
  {
    q: 'La climatisation reversible est-elle adaptee aux appartements ?',
    a: 'Oui. Nous proposons des solutions compacts specialement concues pour les espaces reduits. Le systeme split mural est ideal : silencieux et sans travaux lourds.',
  },
  {
    q: 'Intervenez-vous le week-end et les jours feries ?',
    a: 'Oui, nous assurons une permanence 24h/24 et 7j/7, y compris les week-ends et jours feries.',
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

      {/* Hero — Bold, white, massive typography */}
      <section className="relative bg-white overflow-hidden">
        {/* Decorative blur shape */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 relative">
          <ScrollReveal>
            <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-6">
              Certifie Qualigaz — Ile-de-France
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground max-w-4xl mb-8">
              Plombier & Chauffagiste en Ile-de-France
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">
              Intervention rapide a Chatou, Versailles, Nanterre et partout en IDF.
              Installation, depannage et entretien par un artisan certifie.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4">
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
      </section>

      {/* Services — Numbered list, editorial */}
      <section id="services" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Nos services</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Ce qu&apos;on fait
              </h2>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-border">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/${s.slug}/chatou`}
                  className="group flex items-start md:items-center gap-6 md:gap-10 py-8 md:py-10 transition-colors hover:bg-border-light/50 -mx-6 px-6 rounded-lg"
                >
                  <span className="text-3xl md:text-4xl font-bold text-border group-hover:text-accent transition-colors tabular-nums">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {s.label}
                    </h3>
                    <p className="text-muted text-sm md:text-base max-w-2xl">{s.description}</p>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-border group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1 md:mt-0"
                  >
                    <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zone — Dark section */}
      <section id="zone" className="bg-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Zone d&apos;intervention</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Ou intervenons-nous ?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            <DeptColumn code="78" name="Yvelines" communes={communes78.slice(0, 10)} />
            <DeptColumn code="92" name="Hauts-de-Seine" communes={communes92.slice(0, 10)} />
            <DeptColumn code="95" name="Val-d&apos;Oise" communes={communes95.slice(0, 10)} />
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section id="confiance" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="mb-16 max-w-xl">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Nos engagements</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Un artisan, pas une plateforme
              </h2>
              <p className="text-muted text-lg">
                Vous appelez, c&apos;est moi qui reponds. Pas d&apos;intermediaire, pas de surprise.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-10 md:gap-16">
            {[
              { title: '24h/24, 7j/7', text: 'Joignable a toute heure, tous les jours de l&apos;annee. Une urgence ne previent pas.' },
              { title: 'Devis transparent', text: 'Diagnostic clair et prix annonce avant toute intervention. Pas de frais caches.' },
              { title: 'Certifie Qualigaz', text: 'Habilite pour toute intervention sur vos installations gaz. Conformite garantie.' },
              { title: 'Intervention rapide', text: 'Souvent le jour meme de votre appel. Base a Chatou, reactive sur tout l&apos;ouest parisien.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="border-t-2 border-accent pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — Orange section */}
      <section className="bg-accent">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: '15+', label: 'Annees d\'experience' },
              { number: '2000+', label: 'Clients en IDF' },
              { number: '30 min', label: 'Temps de reponse' },
              { number: '24/7', label: 'Disponibilite' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — Dark */}
      <section className="bg-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <ScrollReveal>
            <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Temoignages</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
              Ils nous ont fait confiance
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.slice(0, 3).map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="text-sm">
                    <span className="font-semibold text-white">{t.author}</span>
                    <span className="text-white/40"> — {t.ville}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Questions frequentes
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="border-b border-border">
              {faqs.map((faq, i) => (
                <FaqItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section id="devis" className="bg-border-light">
        <div className="max-w-2xl mx-auto px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="mb-12">
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
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA — Massive dark section */}
      <section className="bg-dark text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-40 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Une urgence ?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-xl mx-auto">
              Disponible 24h/24 et 7j/7 pour tous vos depannages en Ile-de-France.
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
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
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
                className="px-4 py-2 bg-border-light rounded-md text-sm text-foreground hover:bg-foreground hover:text-white transition-colors"
              >
                {ville.nom} ({ville.codePostal})
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DeptColumn({ code, name, communes }: { code: string; name: string; communes: any[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
        {name} ({code})
      </h3>
      <ul className="space-y-2.5">
        {communes.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/plombier/${c.slug}`}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {c.nom}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
