import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Cross-Border Tour Production Case Study | Clear Light Creative',
  description: '12-city European tour with zero delays and 100% on-time execution. See how we handled complex international logistics.',
  alternates: { canonical: '/work/tour-production' },
};

export default function TourProductionCase() {
  return (
    <main>
      {/* Back Link */}
      <div className="border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs uppercase tracking-wider text-accent mb-4 font-medium">
            Logistics · Case Study
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
            Cross-Border Tour Production
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            A 12-city European tour with complex logistics, tight deadlines, and international coordination — delivered with zero delays.
          </p>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12">
            <Image
              src="/festival-crowd.png"
              alt="Festival crowd at live music event"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-3 gap-8 py-8 border-y border-border">
            <div>
              <div className="text-4xl font-display font-semibold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">On-time delivery</div>
            </div>
            <div>
              <div className="text-4xl font-display font-semibold text-accent mb-2">12</div>
              <div className="text-sm text-muted-foreground">Cities coordinated</div>
            </div>
            <div>
              <div className="text-4xl font-display font-semibold text-accent mb-2">0</div>
              <div className="text-sm text-muted-foreground">Delays or cancellations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            01. The Problem
          </h2>
          <h3 className="font-display text-3xl font-semibold mb-6">
            Managing Chaos Across 12 Cities
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              An emerging artist needed to execute a 12-city European tour spanning Germany, France, Netherlands, and UK. The challenge was complex: coordinating venues across multiple countries, managing different languages and currencies, handling visa requirements, shipping gear internationally, and maintaining a tight timeline with zero margin for error.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The artist's team had never managed international logistics at this scale. Previous attempts at multi-city tours had resulted in missed soundchecks, lost equipment, and strained vendor relationships. They needed someone who could handle the operational complexity so they could focus on the performance.
            </p>
          </div>
        </div>
      </section>

      {/* Constraints */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            02. Constraints
          </h2>
          <h3 className="font-display text-3xl font-semibold mb-8">
            What We Were Working With
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Tight 6-week timeline from kickoff to first show',
              'Limited budget requiring precise vendor negotiation',
              'Visa requirements across multiple EU countries',
              'Equipment shipping with customs clearance',
              'Different load-in protocols per venue',
              'Language barriers with local vendors',
              'No existing vendor relationships in Europe',
              'Variable venue capacities (200-1,500 attendees)'
            ].map((constraint, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-muted-foreground">{idx + 1}</span>
                </div>
                <span className="text-foreground">{constraint}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            03. Actions Taken
          </h2>
          <h3 className="font-display text-3xl font-semibold mb-8">
            How We Executed
          </h3>

          <div className="space-y-8">
            {[
              {
                phase: 'Planning & Mapping',
                duration: 'Week 1-2',
                actions: [
                  'Created master timeline with all dependencies',
                  'Researched and contacted 40+ potential vendors',
                  'Mapped visa requirements for each country',
                  'Designed equipment shipping strategy with customs broker'
                ]
              },
              {
                phase: 'Advancing & Coordination',
                duration: 'Week 3-4',
                actions: [
                  'Negotiated contracts with venues and local vendors',
                  'Secured visas and work permits',
                  'Coordinated gear shipping with tracking',
                  'Created detailed load-in schedules per venue'
                ]
              },
              {
                phase: 'Execution & Support',
                duration: 'Week 5-10',
                actions: [
                  'Daily check-ins with venues and vendors',
                  'On-site coordination for first 3 shows',
                  'Real-time problem solving for logistics changes',
                  'Budget tracking and expense management'
                ]
              },
              {
                phase: 'Debrief & Documentation',
                duration: 'Week 11',
                actions: [
                  'Post-tour review with artist and team',
                  'Vendor feedback and relationship notes',
                  'Documented best practices for future tours',
                  'Created vendor database for repeat bookings'
                ]
              }
            ].map((phase, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start gap-6">
                  <div className="text-3xl font-display font-semibold text-accent">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-display text-xl font-semibold">{phase.phase}</h4>
                      <span className="text-sm text-muted-foreground">{phase.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {phase.actions.map((action, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            04. Outcomes
          </h2>
          <h3 className="font-display text-3xl font-semibold mb-8">
            Results That Matter
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <h4 className="font-semibold mb-3">Flawless Execution</h4>
              <p className="text-muted-foreground text-sm">
                All 12 shows launched on time with zero delays, missed soundchecks, or equipment issues. Every venue advance completed perfectly.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3">Budget Efficiency</h4>
              <p className="text-muted-foreground text-sm">
                Came in 8% under budget through strategic vendor negotiation and efficient routing.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3">Vendor Relationships</h4>
              <p className="text-muted-foreground text-sm">
                Built lasting relationships with 15+ European vendors for future tours and referrals.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3">Artist Focus</h4>
              <p className="text-muted-foreground text-sm">
                Artist and team could focus 100% on performance, knowing logistics were handled.
              </p>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="p-8 border-accent bg-accent/5">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-semibold">SC</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">Tour Manager</div>
              </div>
            </div>
            <blockquote className="text-xl leading-relaxed text-foreground/90 font-display">
              &ldquo;Turned chaos into a seamless tour. Every advance handled, every detail locked down. I don't know how we would have pulled this off without this level of precision and professionalism.&rdquo;
            </blockquote>
          </Card>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            05. What We'd Do Next
          </h2>
          <h3 className="font-display text-3xl font-semibold mb-8">
            Building on Success
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With the foundation established, the next phase would focus on expanding reach and optimizing operations:
          </p>
          <ul className="space-y-4">
            {[
              'Expand to 20-city tour across Eastern Europe',
              'Implement tour management software for real-time tracking',
              'Develop merchandise logistics and fulfillment',
              'Create sponsorship packages and coordinate brand partnerships',
              'Build Asia-Pacific vendor network for global expansion'
            ].map((next, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-accent mt-0.5">→</span>
                <span className="text-foreground">{next}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-semibold mb-6">
            Need logistics handled?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether it's a tour, festival, or multi-city production, let's make it flawless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Book a Free Discovery Call
              </Button>
            </Link>
            <Link href="/services/logistics">
              <Button size="lg" variant="outline" className="border-background/30 text-accent-foreground hover:bg-background/10">
                View Logistics Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}