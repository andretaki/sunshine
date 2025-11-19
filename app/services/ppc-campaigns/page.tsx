import { Hero } from '@/components/sections/hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Smart Growth & Automation | Clear Light Creative',
  description: 'Ready to grow, but hate the admin work? Targeted ad campaigns that reach the right people and automations to free up your schedule.',
  alternates: { canonical: '/services/ppc-campaigns' },
};

export default function PPCCampaignsPage() {
  return (
    <main>
      <Hero
        headline="Smart Growth & Automation"
        subheadline="Ready to grow, but hate the admin work? We'll set up simple, effective systems and marketing campaigns that save you time and bring in consistent opportunities."
        variant="landing"
      />

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="font-display text-4xl font-semibold mb-6">
                What This Looks Like
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PPC is how you test messages, reach new audiences, and scale what works. We build
                campaigns that match search intent, optimize for conversions, and report on what
                matters. Combined with smart automations, you'll spend less time on admin and more
                time doing what you love.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/business-analytics.png"
                alt="Growth analytics and campaigns"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Ad account setup & structure',
                'Keyword research & competitive analysis',
                'Ad copy variants & A/B testing',
                'Landing page builds (funnel-optimized)',
                'Conversion tracking (GA4 + Enhanced Conversions)',
                'Bid strategy & budget optimization',
                'Monthly reporting & performance reviews',
                'Campaign refinement & scaling'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-12 text-center">
            Campaign Types
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Search Campaigns',
                description: 'Target high-intent keywords. Appear when people search for what you offer.',
                use: 'Service launches, ticket sales, workshops'
              },
              {
                title: 'Display & Retargeting',
                description: 'Visual ads to build awareness and re-engage site visitors.',
                use: 'Brand awareness, event promotion'
              },
              {
                title: 'Performance Max',
                description: 'Automated campaigns across Google properties. Optimized for conversions.',
                use: 'E-commerce, lead gen, broad reach'
              }
            ].map((type) => (
              <Card key={type.title} className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {type.description}
                </p>
                <div className="text-xs text-accent font-medium">
                  Best for: {type.use}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-12 text-center">
            How It Works
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Research & Strategy',
                description: 'Define goals, audience, and keywords. Analyze competitors and identify opportunities.'
              },
              {
                step: '02',
                title: 'Campaign Build',
                description: 'Set up account structure, write ad copy, build landing pages, and configure tracking.'
              },
              {
                step: '03',
                title: 'Launch & Test',
                description: 'Go live with A/B tests on headlines, copy, and landing page variants. Monitor daily.'
              },
              {
                step: '04',
                title: 'Optimize & Scale',
                description: 'Adjust bids, pause underperformers, double down on winners. Monthly reporting and strategy calls.'
              }
            ].map((phase) => (
              <Card key={phase.step} className="p-6">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-display font-semibold text-accent">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-6 text-center">
            Pricing
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Setup fee + monthly management. Ad spend managed separately.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Campaign Setup
              </h3>
              <p className="text-muted-foreground mb-6">
                Account structure, ad copy, landing page, conversion tracking. One-time fee.
              </p>
              <div className="text-3xl font-display font-semibold mb-6">
                $2,500
              </div>
              <Link href="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Started
                </Button>
              </Link>
            </Card>

            <Card className="p-8 border-accent">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Monthly Management
              </h3>
              <p className="text-muted-foreground mb-6">
                Ongoing optimization, reporting, and strategy. Billed monthly.
              </p>
              <div className="text-3xl font-display font-semibold mb-6">
                $1,500/mo
              </div>
              <Link href="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book a Call
                </Button>
              </Link>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Ad spend budget managed separately. Typical minimum: $2k/month.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-semibold mb-6">
            Ready to scale your campaigns?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a call to discuss your goals, budget, and how we can drive results.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Book a Call
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
