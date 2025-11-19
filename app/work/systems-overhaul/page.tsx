import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Systems Overhaul Case Study | Clear Light Creative',
  description: '40% reduction in admin time for an indie label. See how we built systems that freed up 15 hours per week for creative work.',
  alternates: { canonical: '/work/systems-overhaul' },
};

export default function SystemsOverhaulCase() {
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
            Systems · Case Study
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
            Systems Overhaul for Indie Label
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Turning administrative chaos into streamlined efficiency — saving 15 hours per week and giving the team their creative time back.
          </p>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12">
            <Image
              src="/planning-notebook.png"
              alt="Planning and systems organization"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-3 gap-8 py-8 border-y border-border">
            <div>
              <div className="text-4xl font-display font-semibold text-accent mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Admin time reduced</div>
            </div>
            <div>
              <div className="text-4xl font-display font-semibold text-accent mb-2">15hrs</div>
              <div className="text-sm text-muted-foreground">Hours saved per week</div>
            </div>
            <div>
              <div className="text-4xl font-display font-semibold text-accent mb-2">8</div>
              <div className="text-sm text-muted-foreground">Systems implemented</div>
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
            Drowning in Admin Work
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              An independent music label was spending more time on administrative tasks than on developing their artists. Email inquiries were getting lost, contracts were tracked in random folders, and the team was constantly scrambling to remember what needed to be done next.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The founder was working 60+ hour weeks, with most of that time spent on repetitive admin tasks instead of A&R, artist development, or strategic growth. They needed systems that could run without constant manual intervention — but didn't know where to start.
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
              'Limited budget for expensive software or consultants',
              'No dedicated operations or admin staff',
              'Team scattered across different time zones',
              'Existing workflows ingrained in daily habits',
              'No documentation of current processes',
              'Resistance to change from team members',
              'Multiple tools being used inconsistently',
              'Time-sensitive need — team was burning out'
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
                phase: 'Audit & Discovery',
                duration: 'Week 1',
                actions: [
                  'Shadowed team for a week to understand current workflows',
                  'Documented all repetitive tasks and pain points',
                  'Interviewed each team member about their biggest frustrations',
                  'Mapped out ideal future state based on team input'
                ]
              },
              {
                phase: 'System Design',
                duration: 'Week 2',
                actions: [
                  'Selected lightweight, affordable tools (Notion, Zapier, Gmail)',
                  'Designed simple SOPs for common tasks',
                  'Built centralized artist database with all key info',
                  'Created email templates for frequent inquiries'
                ]
              },
              {
                phase: 'Implementation & Training',
                duration: 'Week 3-4',
                actions: [
                  'Set up CRM with automated workflows for artist outreach',
                  'Built project management system for release planning',
                  'Created shared inbox with automatic routing',
                  'Trained team with video tutorials and office hours'
                ]
              },
              {
                phase: 'Optimization & Handoff',
                duration: 'Week 5-6',
                actions: [
                  'Monitored adoption and gathered feedback',
                  'Refined workflows based on real-world usage',
                  'Created maintenance playbook for ongoing updates',
                  'Set up monthly check-ins for continued improvement'
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
              <h4 className="font-semibold mb-3">15 Hours Saved Per Week</h4>
              <p className="text-muted-foreground text-sm">
                Team reclaimed 15+ hours weekly by automating repetitive tasks and streamlining workflows.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3">40% Reduction in Admin Time</h4>
              <p className="text-muted-foreground text-sm">
                Admin work dropped from consuming 60% of the week to just 20%, freeing up creative capacity.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3">Zero Missed Follow-Ups</h4>
              <p className="text-muted-foreground text-sm">
                Automated reminders and tracking ensured no artist inquiries or opportunities fell through the cracks.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3">Happier, Healthier Team</h4>
              <p className="text-muted-foreground text-sm">
                Team morale improved dramatically with clear processes and less manual busy work.
              </p>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="p-8 border-accent bg-accent/5">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-semibold">JM</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Jordan Martinez</div>
                <div className="text-sm text-muted-foreground">Label Manager</div>
              </div>
            </div>
            <blockquote className="text-xl leading-relaxed text-foreground/90 font-display">
              &ldquo;We finally have systems that work. The time we save goes straight back into creative work. I'm not drowning in emails anymore — I'm actually able to focus on developing our artists.&rdquo;
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
            With core operations running smoothly, the next phase would focus on scaling and advanced automation:
          </p>
          <ul className="space-y-4">
            {[
              'Build automated royalty tracking and payment system',
              'Implement advanced analytics dashboard for label performance',
              'Create artist onboarding portal with self-service resources',
              'Set up automated social media scheduling and reporting',
              'Develop investor reporting templates and automation'
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
            Ready to get your time back?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether it's systems, automation, or just getting organized, let's free you up to do what you do best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Book a Free Discovery Call
              </Button>
            </Link>
            <Link href="/services/systems">
              <Button size="lg" variant="outline" className="border-background/30 text-accent-foreground hover:bg-background/10">
                View Systems Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
