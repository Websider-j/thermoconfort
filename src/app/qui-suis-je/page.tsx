import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';

const timeline = [
  { year: '2010', title: 'Formation', text: 'Obtention du CAP Plombier Chauffagiste et premiere experience en entreprise.' },
  { year: '2015', title: 'Certification Qualigaz', text: 'Habilitation pour toute intervention sur installations gaz. Garantie de securite pour mes clients.' },
  { year: '2018', title: 'Creation ThermoConfort', text: 'Lancement de mon activite d\'artisan independant a Chatou, dans les Yvelines.' },
  { year: '2024', title: '2000+ clients', text: 'Plus de 2000 interventions realisees en Ile-de-France. Une confiance qui se construit au quotidien.' },
];

const stats = [
  { number: '15+', label: 'Annees d\'experience' },
  { number: '2000+', label: 'Clients satisfaits' },
  { number: '30 min', label: 'Temps de reponse' },
  { number: '24/7', label: 'Disponibilite' },
];

export default function QuiSuisJePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
        <div className="blob top-20 right-10 w-[500px] h-[500px] bg-indigo-600/20" />
        <div className="blob bottom-20 left-10 w-[400px] h-[400px] bg-teal-600/15" />
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">ThermoConfort</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6">
                  Qui suis-je ?
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="text-lg text-white/50 leading-relaxed mb-8">
                  Je suis Julien, plombier chauffagiste climaticien certifie Qualigaz, base a Chatou dans les Yvelines. 
                  Je mets mon savoir-faire au service des particuliers et professionnels en Ile-de-France depuis plus de 15 ans.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="flex flex-wrap gap-3">
                  <Button href="/#devis" variant="primary" size="lg">Demander un devis</Button>
                  <Button href="tel:+33102030405" variant="secondary" size="lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    01 02 03 04 05
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="relative">
                {/* Avatar placeholder */}
                <div className="glass-card rounded-3xl p-2 card-shine">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-indigo-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-5xl font-bold text-white/80">JB</span>
                      </div>
                      <p className="text-white/40 text-sm">Julien Bisignano</p>
                      <p className="text-accent text-sm font-semibold">Artisan certifie Qualigaz</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Qualigaz</div>
                      <div className="text-xs text-white/50">Certifie</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="glass-card rounded-3xl p-8 text-center card-shine">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.number}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 md:py-32">
        <div className="blob top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Mon parcours</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                15 ans d&apos;experience
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 100}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block flex-1" />
                  <div className="relative z-10">
                    <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    </div>
                  </div>
                  <div className="flex-1 ml-12 md:ml-0">
                    <div className="glass-card rounded-3xl p-6 md:p-8 card-shine">
                      <span className="text-sm font-bold text-accent">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zone */}
      <section className="relative py-24 md:py-32">
        <div className="blob bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-600/10" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Zone d&apos;intervention</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Base a Chatou, reactive sur l&apos;IDF
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Je me deplace dans l&apos;ensemble des departements d&apos;Ile-de-France avec une reactivite optimale sur l&apos;ouest parisien.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="glass-card rounded-3xl p-8 md:p-12 card-shine max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {['Paris 75', 'Yvelines 78', 'Hauts-de-Seine 92', 'Val-d\'Oise 95', 'Seine-et-Marne 77', 'Essonne 91', 'Seine-Saint-Denis 93', 'Val-de-Marne 94'].map((dept) => (
                  <div key={dept} className="text-white/60 text-sm font-medium">{dept}</div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="blob top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15" />
        <div className="blob bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-600/15" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Une question ?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-xl mx-auto">
              Je suis disponible 24h/24 pour vos urgences. N&apos;hesitez pas a m&apos;appeler.
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
    </>
  );
}
