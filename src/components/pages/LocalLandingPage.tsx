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
import { SectionDivider } from '@/components/ui/SectionDivider';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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
      <section className="relative bg-foreground overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[16rem] md:text-[24rem] font-serif text-white/[0.02] leading-none tracking-tighter">
            {commune.codePostal.slice(0, 2)}
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex min-h-[75vh] md:min-h-[80vh]">
            <div className="flex-1 px-6 py-20 md:py-24 flex flex-col justify-center text-center">
              <ScrollReveal>
                <p className="text-white/40 text-sm font-medium mb-4 tracking-[0.12em] uppercase">
                  {commune.nom} ({commune.codePostal}) — {deptName(commune.departement)}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-[3.25rem] font-normal tracking-tight leading-[1.1] mb-6 text-white">
                  {service.labelSingulier.charAt(0).toUpperCase() + service.labelSingulier.slice(1)} a {commune.nom}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-base md:text-lg text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
                  {content.intro}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 justify-center mb-10">
                  <Button href="#devis" variant="primary" size="lg">
                    Demander un devis gratuit
                  </Button>
                  <Button href="tel:+33102030405" variant="secondary" size="lg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    01 02 03 04 05
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <TrustBar />
              </ScrollReveal>
            </div>

            <div className="hidden lg:block w-20 xl:w-28 bg-accent/80 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/70 via-accent/50 to-accent/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      {(content.context || content.intervention) && (
        <Section padding="md" background="surface">
          <Container>
            <ScrollReveal>
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
            </ScrollReveal>
          </Container>
        </Section>
      )}

      <SectionDivider />

      {/* Services */}
      <Section padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <ScrollReveal>
                <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">Nos prestations</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight mb-4 text-foreground">
                  Nos services a {commune.nom}
                </h2>
                <p className="text-muted leading-relaxed">
                  Des solutions completes pour votre habitation ou votre local professionnel
                  dans le {deptName(commune.departement)}.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {allServices.map((s, i) => (
                <ScrollReveal key={s.slug} delay={i * 80}>
                  <ServiceCard
                    slug={s.slug}
                    label={s.label}
                    description={s.description}
                    icon={s.icon}
                    active={s.slug === service.slug}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <SectionDivider />

      {/* Logement type */}
      {content.logement && (
        <Section padding="md" background="surface">
          <Container>
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-tight mb-4 text-foreground">
                  {service.label} adapte a {commune.nom}
                </h2>
                <p className="text-muted leading-relaxed">{content.logement}</p>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      )}

      <SectionDivider />

      {/* Engagements */}
      <Section padding="lg">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">Pourquoi nous choisir</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight mb-6 text-foreground">
                  Un artisan de proximite
                </h2>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Disponible 24h/24', text: 'Joignable a toute heure, tous les jours de l\'annee.' },
                  { title: 'Devis transparent', text: 'Diagnostic clair et prix annonce avant intervention.' },
                  { title: 'Certifie Qualigaz', text: 'Habilite pour toute installation et reparation gaz.' },
                  { title: 'Intervention rapide', text: `En moyenne ${tempsIntervention} minutes a ${commune.nom}.` },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 80}>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 lg:-mr-6 xl:-mr-12">
              <ScrollReveal delay={200}>
                <div className="bg-warm border border-border rounded-lg p-8 md:p-10 shadow-tactile">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-11 h-11 rounded-md bg-foreground text-background flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-foreground">Certification Qualigaz</h4>
                      <p className="text-sm text-muted leading-relaxed">
                        Votre garantie de securite pour toute intervention gaz. Nos techniciens
                        sont habilites en conformite avec la reglementation.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-8 grid grid-cols-2 gap-8">
                    <StatItem number="15+" label="Annees d&apos;experience" />
                    <StatItem number="2000+" label="Clients satisfaits" />
                    <StatItem number={`${tempsIntervention} min`} label="Temps de reponse" />
                    <StatItem number="24/7" label="Disponibilite" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>

      <SectionDivider />

      {/* Testimonials */}
      {content.selectedTestimonials.length > 0 && (
        <Section padding="lg" background="surface">
          <Container>
            <ScrollReveal>
              <div className="max-w-xl mb-12">
                <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">Avis clients</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight text-foreground">
                  Retours d&apos;experience
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {content.selectedTestimonials.map((t, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="bg-surface border border-border rounded-lg px-6 py-2 h-full">
                    <TestimonialCard
                      text={t.text}
                      author={t.author}
                      location={t.ville}
                      rating={t.rating}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <SectionDivider />

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <Section padding="lg">
          <Container>
            <div className="max-w-2xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">FAQ</p>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight text-foreground">
                    Questions frequentes
                  </h2>
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
          </Container>
        </Section>
      )}

      <SectionDivider />

      {/* Form */}
      <Section id="devis" padding="lg" background="surface">
        <Container>
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="mb-10">
                <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">Devis gratuit</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight mb-3 text-foreground">
                  Parlons de votre projet
                </h2>
                <p className="text-muted">
                  Decrivez votre besoin, nous vous recontactons sous 24h avec un devis detaille.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ContactForm defaultCp={commune.codePostal} defaultService={service.slug} />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section padding="xl" background="primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight mb-4 text-white">
                Besoin d&apos;une intervention a {commune.nom} ?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base md:text-lg text-white/60 mb-10">
                Notre equipe est disponible 24h/24 et 7j/7 pour tous vos depannages.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button href="tel:+33102030405" variant="inverse" size="lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                01 02 03 04 05
              </Button>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Nearby communes */}
      {data.voisines.length > 0 && (
        <Section padding="md">
          <Container>
            <ScrollReveal>
              <div className="mb-6">
                <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">A proximite</p>
                <h2 className="font-serif text-xl font-normal tracking-tight text-foreground">
                  Interventions aux alentours de {commune.nom}
                </h2>
              </div>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {data.voisines.slice(0, 12).map((v, i) => (
                <ScrollReveal key={v.slug} delay={i * 40}>
                  <Link
                    href={`/${service.slug}/${v.slug}`}
                    className="px-3 py-1.5 bg-surface border border-border rounded-md text-sm text-muted hover:text-foreground hover:border-foreground/20 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {v.nom}
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
