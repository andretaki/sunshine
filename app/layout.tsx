import type { Metadata } from 'next';
import { Playfair_Display, Manrope, Poppins, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import { Footer } from '@/components/footer';

const headline = Playfair_Display({
  variable: '--font-headline',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const subhead = Manrope({
  variable: '--font-subhead',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
});

const body = Poppins({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const bebas = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'women wellness coach',
    'somatic coaching',
    'burnout recovery',
    'women life coach',
    'burnout to alignment',
    'women coaching',
    'nervous system healing',
    'alignment coach',
    'mindfulness coach',
    'life coach for women',
    'business strategy for women',
  ],
  authors: [{ name: 'The Sunshine Effect' }],
  creator: 'The Sunshine Effect',
  publisher: 'The Sunshine Effect',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Sunshine Effect - From Burnout to Alignment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon-192.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headline.variable} ${subhead.variable} ${body.variable} ${bebas.variable} font-body bg-background text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-sunshine-yellow focus:text-sunshine-brown focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
