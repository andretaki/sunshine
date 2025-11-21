import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with The Sunshine Effect. Book a free 20-minute clarity call or send us a message about coaching, retreats, and events.',
  keywords: ['contact', 'book coaching call', 'contact life coach', 'schedule consultation', 'get in touch'],
  openGraph: {
    title: 'Contact | The Sunshine Effect',
    description: 'Get in touch with The Sunshine Effect. Book a free 20-minute clarity call or send us a message about coaching, retreats, and events.',
    url: '/contact',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact The Sunshine Effect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | The Sunshine Effect',
    description: 'Get in touch with The Sunshine Effect. Book a free 20-minute clarity call or send us a message about coaching, retreats, and events.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
