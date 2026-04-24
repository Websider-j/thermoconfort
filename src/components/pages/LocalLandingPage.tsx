import React from 'react';
import Link from 'next/link';
import { LocalPageData, ServiceData, Testimonial } from '@/types';
import { EmergencyBanner } from '@/components/ui/EmergencyBanner';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/ui/ContactForm';
import { FaqItem } from '@/components/ui/FaqItem';

interface Props {
  data: LocalPageData;
  content: {
    intro: string;
    context: string;
    intervention: string;
    voisins: string;
    logement: string;
    faqs: { q: string; a: string }[];
    selectedTestimonials: Testimonial[];
  };
  allServices: ServiceData[];
}

function deptName(code: string): string {
  const map: Record<string, string> = { '78': 'Yvelines', '92': 'Hauts-de-Seine', '95': 'Val-d\'Oise' };
  return map[code] || code;
}

export default function LocalLandingPage({ data, content, allServices }: Props) {
  const { commune, service, tempsIntervention } = data;

  return (
    <>
      <EmergencyBanner text={`Urgence ${service.label.toLowerCase()} en ${deptName(commune.departement)} ? Intervention 24h/24`} />

      {/* Hero with image */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">
                  {commune.nom} ({commune.codePostal})
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05] text-foreground mb-6">
                  {service.labelSingulier.charAt(0).toUpperCase() + service.labelSingulier.slice(1)} a {commune.nom}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-md">
                  {content.intro}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-3">
                  <Button href="#devis" variant="primary" size="lg">Demander un devis</Button>
                  <Button href="tel:+33102030405" variant="secondary" size="lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    01 02 03 04 05
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-border-light">
                  <img
                    src="/images/hero-plumber.jpg"
                    alt={`${service.label} a ${commune.nom}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-6 bg-white rounded-lg px-4 py-3 shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-semibold text-foreground">Intervention en {tempsIntervention} min</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Context */}
      {(content.context || content.intervention) && (
        <section className="bg-border-light">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
            <ScrollReveal>
              {content.context && <p className="text-muted text-lg leading-relaxed mb-4">{content.context}</p>}
              {content.intervention && <p className="text-muted text-lg leading-relaxed">{content.intervention}</p>}
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Nos services</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Nos prestations a {commune.nom}
              </h2>
            </div>
          </ScrollReveal>

          <div className="divide-y divide-border">
            {allServices.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 80}>
                <div className={`flex items-start md:items-center gap-6 md:gap-10 py-8 md:py-10 ${s.slug === service.slug ? 'bg-accent/5 -mx-6 px-6 rounded-lg' : ''}`}>
                  <span className="text-3xl md:text-4xl font-bold text-border tabular-nums">0{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{s.label}</h3>
                    <p className="text-muted text-sm md:text-base max-w-2xl">{s.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logement */}
      {content.logement && (
        <section className="bg-border-light">
          <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                {service.label} adapte a {commune.nom}
              </h2>
              <p className="text-muted text-lg leading-relaxed">{content.logement}</p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Engagements */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="mb-16 max-w-xl">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Pourquoi nous choisir</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Un artisan de proximite
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-10 md:gap-16">
            {[
              { title: '24h/24, 7j/7', text: 'Joignable a toute heure, tous les jours de l\'annee.' },
              { title: 'Devis transparent', text: 'Diagnostic clair et prix annonce avant intervention.' },
              { title: 'Certifie Qualigaz', text: 'Habilite pour toute installation gaz.' },
              { title: 'Intervention rapide', text: `En moyenne ${tempsIntervention} minutes a ${commune.nom}.` },
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

      {/* Stats */}
      <section className="bg-accent">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: '15+', label: 'Annees d\'experience' },
              { number: '2000+', label: 'Clients satisfaits' },
              { number: `${tempsIntervention} min`, label: 'Temps de reponse' },
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

      {/* Testimonials */}
      {content.selectedTestimonials.length > 0 && (
        <section className="bg-dark text-white">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            <ScrollReveal>
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Avis clients</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
                Retours d&apos;experience
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {content.selectedTestimonials.map((t, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-white/80 text-lg leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
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
      )}

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">FAQ</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Questions frequentes</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="border-b border-border">
                {content.faqs.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Form */}
      <section id="devis" className="bg-border-light">
        <div className="max-w-2xl mx-auto px-6 py-24 md:py-32">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Devis gratuit</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">Parlons de votre projet</h2>
              <p className="text-muted text-lg">Decrivez votre besoin, nous vous recontactons sous 24h.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ContactForm defaultCp={commune.codePostal} defaultService={service.slug} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA with background image */}
      <section className="bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/plumbing.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark/80" />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-40 text-center relative">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Besoin d&apos;une intervention a {commune.nom} ?
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

      {/* Nearby */}
      {data.voisines.length > 0 && (
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <ScrollReveal>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-6">
                Interventions aux alentours de {commune.nom}
              </h3>
            </ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {data.voisines.slice(0, 12).map((v) => (
                <Link key={v.slug} href={`/${service.slug}/${v.slug}`} className="px-4 py-2 bg-border-light rounded-md text-sm text-foreground hover:bg-foreground hover:text-white transition-colors">
                  {v.nom}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
