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
      <EmergencyBanner text={`Urgence ${service.label.toLowerCase()} en ${deptName(commune.departement)} ?`} />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400/30 rounded-full blur-[100px] animate-float-slow pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-semibold text-foreground">{commune.nom} ({commune.codePostal})</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground mb-6">
                  {service.labelSingulier.charAt(0).toUpperCase() + service.labelSingulier.slice(1)} a {commune.nom}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-md">{content.intro}</p>
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
                <div className="glass-card rounded-3xl p-2">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src="/images/hero-plumber.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{tempsIntervention} min</div>
                      <div className="text-sm text-muted">Temps de reponse</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Context */}
      {(content.context || content.intervention) && (
        <section className="relative py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="glass rounded-3xl p-8 md:p-10 text-center">
              <ScrollReveal>
                {content.context && <p className="text-muted text-lg leading-relaxed mb-4">{content.context}</p>}
                {content.intervention && <p className="text-muted text-lg leading-relaxed">{content.intervention}</p>}
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Nos services</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Nos prestations a {commune.nom}</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {allServices.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 100}>
                <div className={`glass-card rounded-3xl p-8 ${s.slug === service.slug ? 'ring-2 ring-accent/30' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl font-bold text-accent/30">0{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{s.label}</h3>
                  <p className="text-muted leading-relaxed">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logement */}
      {content.logement && (
        <section className="relative py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="glass rounded-3xl p-8 md:p-10 text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">{service.label} adapte a {commune.nom}</h2>
                <p className="text-muted text-lg leading-relaxed">{content.logement}</p>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Engagements */}
      <section className="relative py-24 md:py-32">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-xl mx-auto">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Pourquoi nous choisir</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">Un artisan de proximite</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '24h/24', text: 'Joignable a toute heure.' },
              { title: 'Devis transparent', text: 'Prix annonce avant intervention.' },
              { title: 'Certifie Qualigaz', text: 'Habilite pour toute intervention gaz.' },
              { title: 'Rapide', text: `En moyenne ${tempsIntervention} min.` },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="glass-card rounded-3xl p-8 text-center hover:scale-[1.03] transition-transform">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '15+', label: 'Annees' },
                { number: '2000+', label: 'Clients' },
                { number: `${tempsIntervention} min`, label: 'Reponse' },
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

      {/* Testimonials */}
      {content.selectedTestimonials.length > 0 && (
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900" />
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-6xl mx-auto px-6 relative">
            <ScrollReveal>
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3 text-center">Avis clients</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-16">Retours d&apos;experience</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {content.selectedTestimonials.map((t, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="glass-card-dark rounded-3xl p-8">
                    <p className="text-white/80 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">{t.author.split(' ').map(n => n[0]).join('')}</div>
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
      )}

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <section className="relative py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">FAQ</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Questions frequentes</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="glass rounded-3xl p-2">
                <div className="divide-y divide-white/20">
                  {content.faqs.map((faq, i) => (
                    <FaqItem key={i} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Form */}
      <section id="devis" className="relative py-24 md:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Devis gratuit</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">Parlons de votre projet</h2>
              <p className="text-muted text-lg">Decrivez votre besoin, nous vous recontactons sous 24h.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <ContactForm defaultCp={commune.codePostal} defaultService={service.slug} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900" />
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400/20 rounded-full blur-[100px] animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Besoin d&apos;une intervention ?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-xl mx-auto">Disponible 24h/24 et 7j/7 a {commune.nom} et aux alentours.</p>
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
        <section className="relative py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-6">Interventions aux alentours de {commune.nom}</h3>
            </ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {data.voisines.slice(0, 12).map((v) => (
                <Link key={v.slug} href={`/${service.slug}/${v.slug}`} className="glass px-4 py-2 rounded-full text-sm text-foreground hover:bg-white/60 transition-colors">
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
