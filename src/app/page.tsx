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

      {/* Hero */}
      <section className="bg-foreground text-white">
        <Container className="py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-white/60 text-sm font-medium mb-4 tracking-wide uppercase">
              Artisan certifie Qualigaz — Chatou, IDF
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Plombier, chauffagiste et climaticien en Ile-de-France
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              Intervention rapide dans les Yvelines, les Hauts-de-Seine et le Val-d&apos;Oise.
              Installation, depannage et entretien par un artisan certifie.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
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

      {/* Services */}
      <Section id="services" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-medium text-accent mb-2">Nos metiers</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ce qu&apos;on fait
              </h2>
              <p className="text-muted leading-relaxed">
                Trois corps de metier, une seule equipe. Nous intervenons sur toutes vos installations
                de confort thermique et sanitaire en Ile-de-France.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <ServiceCard
                  key={s.slug}
                  slug={s.slug}
                  label={s.label}
                  description={s.description}
                  icon={s.icon}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Zone d'intervention */}
      <Section id="zone" padding="lg" background="surface">
        <Container>
          <div className="max-w-xl mb-12">
            <p className="text-sm font-medium text-accent mb-2">Zone d&apos;intervention</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ou intervenons-nous ?
            </h2>
            <p className="text-muted leading-relaxed">
              Base a Chatou dans les Yvelines, nous couvrons l&apos;ensemble de l&apos;Ile-de-France
              avec une reactivite optimale sur l&apos;ouest parisien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <DeptColumn code="78" name="Yvelines" communes={communes78.slice(0, 10)} />
            <DeptColumn code="92" name="Hauts-de-Seine" communes={communes92.slice(0, 10)} />
            <DeptColumn code="95" name="Val-d&apos;Oise" communes={communes95.slice(0, 10)} />
          </div>
        </Container>
      </Section>

      {/* Engagements */}
      <Section id="confiance" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent mb-2">Nos engagements</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Un artisan, pas une plateforme
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Pas d&apos;intermediaire, pas de commissionnaire. Vous appelez, c&apos;est moi qui reponds
                et qui interviens. C&apos;un la difference entre un artisan et une plateforme.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-1">Disponible 24h/24</h4>
                  <p className="text-sm text-muted">Une urgence ne previent pas. Joignable a toute heure, tous les jours.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Devis transparent</h4>
                  <p className="text-sm text-muted">Diagnostic clair et devis detaille avant toute intervention.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Certifie Qualigaz</h4>
                  <p className="text-sm text-muted">Habilite pour toute intervention sur vos installations gaz.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Intervention rapide</h4>
                  <p className="text-sm text-muted">Souvent le jour meme de votre appel, partout en IDF.</p>
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
                    Cette certification est votre garantie de securite pour toute intervention sur
                    vos installations gaz. Nos techniciens sont habilites a travailler sur les reseaux
                    et appareils alimentes en gaz naturel, en conformite avec la reglementation.
                  </p>
                </div>
              </div>
              <div className="border-t border-border pt-6 grid grid-cols-2 gap-6">
                <StatItem number="15+" label="Annees d&apos;experience" />
                <StatItem number="2000+" label="Clients en IDF" />
                <StatItem number="30 min" label="Temps de reponse" />
                <StatItem number="24/7" label="Disponibilite" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section padding="lg" background="surface">
        <Container>
          <div className="max-w-xl mb-12">
            <p className="text-sm font-medium text-accent mb-2">Temoignages</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ils nous ont fait confiance
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
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

      {/* FAQ */}
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
              {faqs.map((faq, i) => (
                <FaqItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

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
            <ContactForm />
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section padding="xl" background="primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Une urgence ?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Notre equipe est disponible 24h/24 et 7j/7 pour tous vos depannages en Ile-de-France.
            </p>
            <Button href="tel:+33102030405" variant="inverse" size="lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              01 02 03 04 05
            </Button>
          </div>
        </Container>
      </Section>

      {/* Top villes liens */}
      <Section padding="md">
        <Container>
          <div className="mb-8">
            <p className="text-sm font-medium text-accent mb-2">Interventions par ville</p>
            <h2 className="text-2xl font-bold tracking-tight">
              Nos zones d&apos;intervention
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {topVilles.map((ville: any) => (
              <Link
                key={ville.slug}
                href={`/plombier/${ville.slug}`}
                className="flex items-center justify-between px-4 py-3 bg-surface border border-border rounded-md hover:border-foreground/20 transition-colors"
              >
                <span className="text-sm font-medium">Plombier {ville.nom}</span>
                <span className="text-xs text-muted">{ville.codePostal}</span>
              </Link>
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
      <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-4">
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
