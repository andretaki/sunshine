import { Hero } from '@/components/sections/hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Flawless Project & Event Production | Clear Light Creative',
  description: 'For when you have a million moving parts. We handle the timelines, vendors, and complex logistics so you can show up and shine.',
  alternates: { canonical: '/services/logistics' },
};

export default function LogisticsPage() {
  return (
    <main>
      <Hero
        headline="Flawless Project & Event Production"
        subheadline="For when you have a million moving parts. We handle the timelines, vendors, and complex logistics so you can show up and shine. No more late-night spreadsheet panic."
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
                Whether it's a 12-city tour, a festival run, or a cross-border production,
                we handle every moving piece so you don't have to. No detail overlooked,
                no late-night scrambles—just smooth execution from start to finish.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/festival-crowd.png"
                alt="Festival production"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Project planning & timeline management',
                'Venue & vendor coordination',
                'International logistics (visas, carnets, permits)',
                'Budget tracking & expense reports',
                'Production support & on-site coordination',
                'Risk mitigation & contingency planning',
                'Post-project debrief & documentation',
                'Vendor database & relationship management'
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

      {/* Process */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-12 text-center">
            How It Works
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Discovery & Timeline',
                description: 'Map the full scope: dates, cities, venues, crew, gear. Build a master timeline with all dependencies.'
              },
              {
                step: '02',
                title: 'Advancing & Coordination',
                description: 'Contact every venue, vendor, and partner. Lock contracts, riders, stage plots, and load-in schedules.'
              },
              {
                step: '03',
                title: 'Budget & Documentation',
                description: 'Track every expense against projections. Maintain up-to-date itineraries, contact sheets, and paperwork.'
              },
              {
                step: '04',
                title: 'Execution & Support',
                description: 'On-site coordination or remote support. Handle changes, solve problems, keep everything on track.'
              },
              {
                step: '05',
                title: 'Debrief & Archive',
                description: 'Post-project review, vendor feedback, and documentation for next time. Learn and improve.'
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
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-6 text-center">
            Pricing
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Project-based or retainer, depending on scope and duration.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Project-Based
              </h3>
              <p className="text-muted-foreground mb-6">
                Single tours, events, or productions. Fixed scope, clear deliverables.
              </p>
              <div className="text-3xl font-display font-semibold mb-6">
                Custom Quote
              </div>
              <Link href="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Request Quote
                </Button>
              </Link>
            </Card>

            <Card className="p-8 border-accent">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Retainer
              </h3>
              <p className="text-muted-foreground mb-6">
                Ongoing support for multiple projects, planning, and coordination.
              </p>
              <div className="text-3xl font-display font-semibold mb-6">
                Starting at $3k/mo
              </div>
              <Link href="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book a Call
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-semibold mb-6">
            Ready to launch your next project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a call to discuss your timeline, scope, and how I can help.
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
