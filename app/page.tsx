import { Hero } from '@/components/sections/hero';
import { Pillars } from '@/components/sections/pillars';
import { ProofBar } from '@/components/sections/proof-bar';
import { FadeIn } from '@/components/fade-in';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const caseHighlights = [
  {
    title: 'Cross-Border Tour Production',
    metric: '12 cities, zero delays',
    href: '/work/tour-production'
  },
  {
    title: 'Next.js Site + SEO Sprint',
    metric: '+300% organic traffic in 60 days',
    href: '/work/seo-sprint'
  },
  {
    title: 'Systems Overhaul',
    metric: '40% reduction in admin time',
    href: '/work/systems-overhaul'
  }
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <FadeIn>
        <Hero
          headline="From idea to encore."
          subheadline="We handle logistics, build modern websites, and streamline your operations—so you can focus on the creative work that matters."
          primaryCTA={{ text: 'Book a Call', href: '/contact' }}
          secondaryCTA={{ text: 'View Our Work', href: '/work' }}
        />
      </FadeIn>

      {/* Proof Bar */}
      <FadeIn>
        <ProofBar />
      </FadeIn>

      {/* Services (Pillars) */}
      <FadeIn>
        <Pillars />
      </FadeIn>

      {/* Work Highlights */}
      <FadeIn>
        <section id="work" className="py-20 px-6 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-center text-foreground">
              Recent Work
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Real results for creative professionals and lean teams.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {caseHighlights.map((project) => (
                <Link key={project.title} href={project.href}>
                  <Card className="p-8 hover:border-accent transition-all hover:shadow-md group cursor-pointer h-full">
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-accent font-medium">
                      {project.metric}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/work">
                <Button variant="outline" size="lg">
                  See All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 text-foreground">
              Ready to bring your project to light?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether it&apos;s tour logistics, a website rebuild, or streamlining your systems—let&apos;s have a conversation about how we can help.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                Book a Free Call
              </Button>
            </Link>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}