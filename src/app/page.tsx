import React from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { EmergencyBanner } from '@/components/ui/EmergencyBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { FaqItem } from '@/components/ui/FaqItem';
import { ContactForm } from '@/components/ui/ContactForm';
import { TrustBar } from '@/components/ui/TrustBar';
import { StatItem } from '@/components/ui/StatItem';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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
    q: 'Combien coute un depannage de plomberie en Ile-de-France ?',
    a: 'Le cout depend de la nature de l\'intervention et de l\'urgence. Nous etablissons un devis transparent et detaille avant chaque intervention. Pas de frais caches.',
  },
  {
    q: 'Quelle est la reglementation Qualigaz pour une chaudiere gaz ?',
    a: 'La certification Qualigaz impose des regles strictes d\'installation et de maintenance des equipements gaz. Notre habilitation vous garantit le respect des normes de securite en vigueur.',
  },
  {
    q: 'La climatisation reversible est-elle adaptee aux appartements parisiens ?',
    a: 'Oui. Nous proposons des solutions compacts specialement concues pour les espaces reduits. Le systeme split mural est ideal : silencieux, esthetique et sans travaux lourds.',
  },
  {
    q: 'Intervenez-vous le week-end et les jours feries ?',
    a: 'Oui, nous assurons une permanence 24 heures sur 24, 7 jours sur 7, y compris les week-ends et jours feries. En cas d\'urgence, nous intervenons dans les plus brefs delais.',
  },
  {
    q: 'Quelle est votre zone de couverture exacte ?',
    a: 'Nous intervenons dans l\'ensemble des 8 departements d\'Ile-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d\'Oise (95).',
  },
  {
    q: 'Comment savoir si ma chaudiere doit etre remplacee ?',
    a: 'Plusieurs signes doivent vous alerter : age superieur a 15 ans, hausse de la facture d\'energie, bruits anormaux, fuite d\'eau. Lors de notre visite, nous realisons un diagnostic complet.',
  },
];

export default function HomePage() {
  return (
    <>
      <EmergencyBanner />

      {/* Hero — Asymmetric split with warm editorial feel */}
      <section className="relative bg-foreground overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[20rem] md:text-[30rem] font-serif text-white/[0.025] leading-none tracking-tighter">
            IDF
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex min-h-[85vh]">
            {/* Main content */}
            <div className="flex-1 px-6 py-20 md:py-28 lg:py-32 flex flex-col justify-center">
              <ScrollReveal>
                <p className="text-white/50 text-sm font-medium mb-5 tracking-[0.12em] uppercase">
                  Artisan certifie Qualigaz — Chatou, IDF
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight leading-[1.1] mb-6 text-white">
                  Plombier, chauffagiste et climaticien en Ile-de-France
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-base md:text-lg text-white/55 leading-relaxed mb-10 max-w-lg">
                  Intervention rapide dans les Yvelines, les Hauts-de-Seine et le Val-d&apos;Oise.
                  Installation, depannage et entretien par un artisan certifie.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4 mb-12">
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

            {/* Accent strip */}
            <div className="hidden lg:block w-24 xl:w-32 bg-accent/90 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-accent via-accent/80 to-accent/60" />
            </div>
          </div>
        </div>

        {/* Trust pill overlapping into next section */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 hidden md:block">
          <div className="bg-surface border border-border rounded-full px-8 py-3 shadow-tactile flex items-center gap-6 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              Qualigaz
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              15 ans d&apos;exp.
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              30 min de reponse
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section id="services" padding="lg" className="pt-20 md:pt-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <ScrollReveal>
                <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">Nos metiers</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight mb-4 text-foreground">
                  Ce qu&apos;on fait
                </h2>
                <p className="text-muted leading-relaxed">
                  Trois corps de metier, une seule equipe. Nous intervenons sur toutes vos installations
                  de confort thermique et sanitaire en Ile-de-France.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <ScrollReveal key={s.slug} delay={i * 80}>
                  <ServiceCard
                    slug={s.slug}
                    label={s.label}
                    description={s.description}
                    icon={s.icon}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <SectionDivider />

      {/* Zone d'intervention */}
      <Section id="zone" padding="lg" background="surface">
        <Container>
          <ScrollReveal>
            <div className="max-w-xl mb-12">
              <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">Zone d&apos;intervention</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight mb-4 text-foreground">
                Ou intervenons-nous ?
              </h2>
              <p className="text-muted leading-relaxed">
                Base a Chatou dans les Yvelines, nous couvrons l&apos;ensemble de l&apos;Ile-de-France
                avec une reactivite optimale sur l&apos;ouest parisien.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <DeptColumn code="78" name="Yvelines" communes={communes78.slice(0, 10)} />
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <DeptColumn code="92" name="Hauts-de-Seine" communes={communes92.slice(0, 10)} />
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <DeptColumn code="95" name="Val-d&apos;Oise" communes={communes95.slice(0, 10)} />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <SectionDivider />

      {/* Engagements */}
      <Section id="confiance" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Text content */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">Nos engagements</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight mb-6 text-foreground">
                  Un artisan, pas une plateforme
                </h2>
                <p className="text-muted leading-relaxed mb-10">
                  Pas d&apos;intermediaire, pas de commissionnaire. Vous appelez, c&apos;est moi qui reponds
                  et qui interviens. C&apos;est la difference entre un artisan et une plateforme.
                </p>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
                {[
                  { title: 'Disponible 24h/24', text: 'Une urgence ne previent pas. Joignable a toute heure, tous les jours.' },
                  { title: 'Devis transparent', text: 'Diagnostic clair et devis detaille avant toute intervention.' },
                  { title: 'Certifie Qualigaz', text: 'Habilite pour toute intervention sur vos installations gaz.' },
                  { title: 'Intervention rapide', text: 'Souvent le jour meme de votre appel, partout en IDF.' },
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

            {/* Stats card — overlapping editorial feel */}
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
                        Cette certification est votre garantie de securite pour toute intervention sur
                        vos installations gaz. Nos techniciens sont habilites en conformite avec la reglementation.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-8 grid grid-cols-2 gap-8">
                    <StatItem number="15+" label="Annees d&apos;experience" />
                    <StatItem number="2000+" label="Clients en IDF" />
                    <StatItem number="30 min" label="Temps de reponse" />
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
      <Section padding="lg" background="surface">
        <Container>
          <ScrollReveal>
            <div className="max-w-xl mb-12">
              <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">Temoignages</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-normal tracking-tight text-foreground">
                Ils nous ont fait confiance
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
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

      <SectionDivider />

      {/* FAQ */}
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
                {faqs.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

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
              <ContactForm />
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
                Une urgence ?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base md:text-lg text-white/60 mb-10">
                Notre equipe est disponible 24h/24 et 7j/7 pour tous vos depannages en Ile-de-France.
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

      {/* Top villes liens */}
      <Section padding="md">
        <Container>
          <ScrollReveal>
            <div className="mb-8">
              <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">Interventions par ville</p>
              <h2 className="font-serif text-2xl font-normal tracking-tight text-foreground">
                Nos zones d&apos;intervention
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {topVilles.map((ville: any, i: number) => (
              <ScrollReveal key={ville.slug} delay={i * 30}>
                <Link
                  href={`/plombier/${ville.slug}`}
                  className="flex items-center justify-between px-4 py-3 bg-surface border border-border rounded-md hover:border-foreground/20 hover:-translate-y-0.5 transition-all duration-200 shadow-tactile hover:shadow-tactile-hover"
                >
                  <span className="text-sm font-medium text-foreground">Plombier {ville.nom}</span>
                  <span className="text-xs text-muted">{ville.codePostal}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

function DeptColumn({ code, name, communes }: { code: string; name: string; communes: any[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
        {name} ({code})
      </h3>
      <ul className="space-y-2">
        {communes.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/plombier/${c.slug}`}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {c.nom}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
