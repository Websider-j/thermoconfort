import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ThermoConfort — Plombier Chauffagiste Climaticien en Ile-de-France",
  description: "Artisan plombier, chauffagiste et climaticien certifie Qualigaz en Ile-de-France. Intervention rapide 24h/24 a Chatou, Versailles, Nanterre et partout en IDF. Devis gratuit.",
  keywords: "plombier Ile-de-France, chauffagiste IDF, climatisation Paris, depannage plomberie 24h, Qualigaz, Chatou",
  openGraph: {
    title: "ThermoConfort — Plombier Chauffagiste Climaticien en Ile-de-France",
    description: "Intervention rapide 24h/24. Certifie Qualigaz. Devis gratuit en Ile-de-France.",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://www.thermoconfort.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%23b45309' stroke-width='2'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/%3E%3C/svg%3E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "ThermoConfort",
              description: "Plomberie, chauffage et climatisation en Ile-de-France. Certifie Qualigaz. Intervention 24h/24.",
              url: "https://www.thermoconfort.fr",
              telephone: "+33102030405",
              email: "Bisignano.julien@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "57 Boulevard de la Republique",
                addressLocality: "Chatou",
                postalCode: "78400",
                addressRegion: "Ile-de-France",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "48.8899",
                longitude: "2.1586",
              },
              areaServed: {
                "@type": "State",
                name: "Ile-de-France",
              },
              hasCredential: "Qualigaz",
              priceRange: "€€",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
