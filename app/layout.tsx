import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { SITE_CONFIG } from '@/lib/constants';

const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-display',
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ['creative production', 'tour logistics', 'web development', 'SEO', 'PPC campaigns', 'business systems'],
  authors: [{ name: 'Clear Light Creative' }],
  creator: 'Clear Light Creative',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
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
        className={`${dmSans.variable} ${dmSerifDisplay.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <footer className="border-t border-border py-12 px-6 bg-muted/20">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="font-display text-lg font-semibold mb-3">Clear Light Creative</h3>
                  <p className="text-sm text-muted-foreground">
                    Your creative vision, brought to light.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="/services" className="hover:text-foreground transition-colors">Services</a></li>
                    <li><a href="/work" className="hover:text-foreground transition-colors">Work</a></li>
                    <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                    <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Get in Touch</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ready to start your project?
                  </p>
                  <a
                    href="/contact"
                    className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    Book a call →
                  </a>
                </div>
              </div>
              <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Clear Light Creative. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                  <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}