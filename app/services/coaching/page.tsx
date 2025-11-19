import { Hero } from '@/components/sections/hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Coaching & Personal Development | Clear Light Creative',
  description: 'Navigate change with clarity and confidence. One-on-one coaching for creative professionals navigating transitions, growth, and leadership.',
  alternates: { canonical: '/services/coaching' },
};

export default function CoachingPage() {
  return (
    <main>
      <Hero
        headline="Coaching & Personal Development"
        subheadline="Navigate change with clarity and confidence. One-on-one coaching for creative professionals navigating transitions, growth, and leadership. Build the mindset and habits that sustain your work."
        variant="landing"
      />

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-6">
            What This Looks Like
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Creative work is demanding. Whether you're scaling a business, navigating a career transition,
            or leading a team, the internal work matters just as much as the external execution. Through
            one-on-one coaching, we'll build the clarity, resilience, and strategic thinking you need to
            sustain your creative practice and grow with intention.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Bi-weekly coaching sessions (60 minutes)',
              'Accountability and progress tracking',
              'Strategic planning for career transitions',
              'Leadership development for creative teams',
              'Tools for stress management and burnout prevention',
              'Goal setting and habit design',
              'Communication and boundary setting',
              'Navigating creative blocks and self-doubt'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-12 text-center">
            Who This Is For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Artists & Musicians',
                description: 'Navigating creative blocks, building sustainable practices, and growing your career intentionally.'
              },
              {
                title: 'Founders & Leaders',
                description: 'Scaling your business, managing team dynamics, and maintaining balance as you grow.'
              },
              {
                title: 'Career Transitioners',
                description: 'Making strategic pivots, exploring new directions, and building confidence in change.'
              }
            ].map((type) => (
              <Card key={type.title} className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-12 text-center">
            How We Work Together
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Discovery Session',
                description: 'We start with a free 30-minute call to understand where you are, where you want to go, and if we\'re a good fit.'
              },
              {
                step: '02',
                title: 'Goal Setting & Framework',
                description: 'Define clear goals, establish success metrics, and create a framework for our work together.'
              },
              {
                step: '03',
                title: 'Bi-Weekly Sessions',
                description: '60-minute coaching sessions focused on progress, obstacles, insights, and next steps. Mix of strategic planning and mindset work.'
              },
              {
                step: '04',
                title: 'Ongoing Support',
                description: 'Between sessions: email check-ins, resources, and accountability. You\'re not alone between calls.'
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

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Monthly Coaching
              </h3>
              <p className="text-muted-foreground mb-6">
                Two 60-minute sessions per month, email support, and progress tracking.
              </p>
              <div className="text-3xl font-display font-semibold mb-6">
                $800/mo
              </div>
              <Link href="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book Discovery Call
                </Button>
              </Link>
            </Card>

            <Card className="p-8 border-accent">
              <h3 className="font-display text-2xl font-semibold mb-4">
                3-Month Program
              </h3>
              <p className="text-muted-foreground mb-6">
                Committed engagement with deeper goal work. Includes six sessions and ongoing support.
              </p>
              <div className="text-3xl font-display font-semibold mb-6">
                $2,200
              </div>
              <Link href="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book Discovery Call
                </Button>
              </Link>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All programs start with a free 30-minute discovery call to ensure we\'re the right fit.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-semibold mb-6">
            Ready to invest in your growth?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free discovery call to explore how coaching can support your journey.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Book Discovery Call
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
