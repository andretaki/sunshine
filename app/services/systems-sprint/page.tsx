import { Hero } from '@/components/sections/hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Smart Growth & Automation - Systems Sprint | Clear Light Creative',
  description: 'Ready to grow, but hate the admin work? Automating repetitive tasks to free up your schedule with clear, easy-to-read reports.',
  alternates: { canonical: '/services/systems-sprint' },
};

export default function SystemsSprintPage() {
  return (
    <main>
      <Hero
        headline="Smart Growth & Automation"
        subheadline="Ready to grow, but hate the admin work? We'll set up simple, effective systems that save you time and bring in consistent opportunities."
        variant="landing"
      />

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="/planning-notebook.png"
                alt="Systems and planning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-4xl font-semibold mb-6">
                What This Looks Like
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Growing teams drown in admin work. You're reinventing processes, losing track of leads,
                and wasting time on tasks that should be automated. We build the systems that scale:
                SOPs, templates, automations, and dashboards that reduce admin time and increase accountability.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Systems audit & process mapping',
                'SOP documentation (Notion/Airtable)',
                'Template library (briefs, checklists, trackers)',
                'Workflow automations (Zapier/Make)',
                'CRM setup & lead pipeline',
                'Project management system (Asana/ClickUp)',
                'Dashboard reporting & KPI tracking',
                'Bi-weekly check-ins & accountability cadence'
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

      {/* Common Pain Points */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-12 text-center">
            Common Pain Points
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                problem: 'Leads fall through cracks',
                solution: 'CRM pipeline with automated follow-ups'
              },
              {
                problem: 'Repeating same tasks weekly',
                solution: 'Templates + checklists + automations'
              },
              {
                problem: 'No visibility into project status',
                solution: 'Dashboard with real-time KPIs'
              },
              {
                problem: 'Training new team members takes forever',
                solution: 'SOPs with video walkthroughs'
              },
              {
                problem: 'Email chaos and missed deadlines',
                solution: 'Project management system with notifications'
              },
              {
                problem: 'No accountability or progress tracking',
                solution: 'Weekly check-ins with clear metrics'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6">
                <div className="text-sm text-accent font-medium mb-2">
                  Problem
                </div>
                <h3 className="font-semibold mb-3">
                  {item.problem}
                </h3>
                <div className="text-sm text-muted-foreground mb-2">
                  Solution
                </div>
                <p className="text-sm text-foreground">
                  {item.solution}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Week Sprint */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-12 text-center">
            4-Week Sprint
          </h2>

          <div className="space-y-8">
            {[
              {
                week: 'Week 1',
                title: 'Audit & Map',
                description: 'Interview team, map current processes, identify bottlenecks and time sinks. Define priorities.'
              },
              {
                week: 'Week 2',
                title: 'Build & Document',
                description: 'Create SOPs, templates, and workflows. Set up tools (Notion, CRM, automations).'
              },
              {
                week: 'Week 3',
                title: 'Implement & Train',
                description: 'Roll out systems, train team, configure integrations. Test and refine.'
              },
              {
                week: 'Week 4',
                title: 'Measure & Iterate',
                description: 'Set up dashboards, establish check-in cadence, and document improvements.'
              }
            ].map((phase) => (
              <Card key={phase.week} className="p-6">
                <div className="flex items-start gap-6">
                  <div className="text-2xl font-display font-semibold text-accent min-w-[100px]">
                    {phase.week}
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
                4-Week Sprint
              </h3>
              <p className="text-muted-foreground mb-6">
                Complete systems audit, SOP build, tool setup, and training. One-time project.
              </p>
              <div className="text-3xl font-display font-semibold mb-6">
                $5,500
              </div>
              <Link href="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Started
                </Button>
              </Link>
            </Card>

            <Card className="p-8 border-accent">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Ongoing Support
              </h3>
              <p className="text-muted-foreground mb-6">
                Retainer for systems maintenance, optimization, and accountability check-ins.
              </p>
              <div className="text-3xl font-display font-semibold mb-6">
                $1,200/mo
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
            Ready to stop drowning in admin?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a call to discuss your biggest bottlenecks and how we can fix them.
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