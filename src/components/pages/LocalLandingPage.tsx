import React from 'react';
import Link from 'next/link';
import { LocalPageData, ServiceData, Testimonial } from '@/types';
import { EmergencyBanner } from '@/components/ui/EmergencyBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { FaqItem } from '@/components/ui/FaqItem';
import { ContactForm } from '@/components/ui/ContactForm';
import { StatItem } from '@/components/ui/StatItem';
import { TrustBar } from '@/components/ui/TrustBar';

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
  const map: Record<string, string> = {
    '78': 'Yvelines',
    '92': 'Hauts-de-Seine',
    '95': 'Val-d\'Oise',
  };
  return map[code] || code;
}

export default function LocalLandingPage({ data, content, allServices }: Props) {
  const { commune, service, tempsIntervention } = data;

  return (
    <>
      <EmergencyBanner
        text={`Urgence ${service.label.toLowerCase()} en ${deptName(commune.departement)} ? Intervention 24h/24 et 7j/7`}
      />

      {/* Hero */}
      <section className="bg-foreground text-white">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/50 text-sm font-medium mb-4 tracking-wide uppercase">
              {commune.nom} ({commune.codePostal}) — {deptName(commune.departement)}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              {service.labelSingulier.charAt(0).toUpperCase() + service.labelSingulier.slice(1)} a {commune.nom}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Button href="#devis" variant="primary" size="lg">
                Demander un devis gratuit
              </Button>
              <Button href="tel:+33102030405" variant="secondary" size="lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                01 02 03 04 05
              </Button>
            </div>
            <TrustBar />
          </div>
        </Container>
      </section>

      {/* Context */}
      {(content.context || content.intervention) && (
        <Section padding="md" background="surface">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              {content.context && (
                <p className="text-muted text-base leading-relaxed mb-4">{content.context}</p>
              )}
              {content.intervention && (
                <p className="text-muted text-base leading-relaxed mb-4">{content.intervention}</p>
              )}
              {content.voisins && (
                <p className="text-muted text-sm">{content.voisins}</p>
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* Services */}
      <Section padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-medium text-accent mb-2">Nos prestations</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Nos services a {commune.nom}
              </h2>
              <p className="text-muted leading-relaxed">
                Des solutions completes pour votre habitation ou votre local professionnel
                dans le {deptName(commune.departement)}.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {allServices.map((s) => (
                <ServiceCard
                  key={s.slug}
                  slug={s.slug}
                  label={s.label}
                  description={s.description}
                  icon={s.icon}
                  active={s.slug === service.slug}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Logement type */}
      {content.logement && (
        <Section padding="md" background="surface">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                {service.label} adapte a {commune.nom}
              </h2>
              <p className="text-muted leading-relaxed">{content.logement}</p>
            </div>
          </Container>
        </Section>
      )}

      {/* Engagements */}
      <Section padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent mb-2">Pourquoi nous choisir</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Un artisan de proximite
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-1">Disponible 24h/24</h4>
                  <p className="text-sm text-muted">Joignable a toute heure, tous les jours de l&apos;annee.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Devis transparent</h4>
                  <p className="text-sm text-muted">Diagnostic clair et prix annonce avant intervention.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Certifie Qualigaz</h4>
                  <p className="text-sm text-muted">Habilite pour toute installation et reparation gaz.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Intervention rapide</h4>
                  <p className="text-sm text-muted">En moyenne {tempsIntervention} minutes a {commune.nom}.</p>
                </div>
              </div>
            </div>
            <div className="bg-warm border border-border rounded-lg p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-md bg-foreground text-background flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Certification Qualigaz</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Votre garantie de securite pour toute intervention gaz. Nos techniciens
                    sont habilites en conformite avec la reglementation en vigueur.
                  </p>
                </div>
              </div>
              <div className="border-t border-border pt-6 grid grid-cols-2 gap-6">
                <StatItem number="15+" label="Annees d&apos;experience" />
                <StatItem number="2000+" label="Clients satisfaits" />
                <StatItem number={`${tempsIntervention} min`} label="Temps de reponse" />
                <StatItem number="24/7" label="Disponibilite" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      {content.selectedTestimonials.length > 0 && (
        <Section padding="lg" background="surface">
          <Container>
            <div className="max-w-xl mb-12">
              <p className="text-sm font-medium text-accent mb-2">Avis clients</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Retours d&apos;experience
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {content.selectedTestimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  text={t.text}
                  author={t.author}
                  location={t.ville}
                  rating={t.rating}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <Section padding="lg">
          <Container>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-medium text-accent mb-2">FAQ</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Questions frequentes
                </h2>
              </div>
              <div className="border-b border-border">
                {content.faqs.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Form */}
      <Section id="devis" padding="lg" background="surface">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <p className="text-sm font-medium text-accent mb-2">Devis gratuit</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Parlons de votre projet
              </h2>
              <p className="text-muted">
                Decrivez votre besoin, nous vous recontactons sous 24h avec un devis detaille.
              </p>
            </div>
            <ContactForm defaultCp={commune.codePostal} defaultService={service.slug} />
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section padding="xl" background="primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Besoin d&apos;une intervention a {commune.nom} ?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Notre equipe est disponible 24h/24 et 7j/7 pour tous vos depannages.
            </p>
            <Button href="tel:+33102030405" variant="inverse" size="lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              01 02 03 04 05
            </Button>
          </div>
        </Container>
      </Section>

      {/* Nearby communes */}
      {data.voisines.length > 0 && (
        <Section padding="md">
          <Container>
            <div className="mb-6">
              <p className="text-sm font-medium text-accent mb-2">A proximite</p>
              <h2 className="text-xl font-bold tracking-tight">
                Interventions aux alentours de {commune.nom}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.voisines.slice(0, 12).map((v) => (
                <Link
                  key={v.slug}
                  href={`/${service.slug}/${v.slug}`}
                  className="px-3 py-1.5 bg-surface border border-border rounded-md text-sm text-muted hover:text-foreground hover:border-foreground/20 transition-colors"
                >
                  {v.nom}
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
