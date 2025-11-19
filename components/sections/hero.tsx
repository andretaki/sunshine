import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  variant?: 'home' | 'landing';
}

export function Hero({
  headline,
  subheadline,
  primaryCTA = { text: 'Book a Call', href: '/contact' },
  secondaryCTA,
  variant = 'home',
}: HeroProps) {
  return (
    <section
      className={
        variant === 'landing'
          ? "relative min-h-[60vh] flex items-center justify-center px-6 py-12 md:py-16"
          : "relative min-h-[60vh] md:min-h-[85vh] flex items-center justify-center px-6 py-12 md:py-24"
      }
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[1.1] tracking-tight mb-6 text-foreground">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={primaryCTA.href}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              {primaryCTA.text}
            </Button>
          </Link>
          {secondaryCTA && (
            <Link href={secondaryCTA.href}>
              <Button size="lg" variant="outline">
                {secondaryCTA.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
