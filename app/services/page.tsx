import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Flawless Project & Event Production',
    slug: 'logistics',
    promise: 'For when you have a million moving parts.',
    description: 'We handle the timelines, vendors, and complex logistics so you can show up and shine. No more late-night spreadsheet panic.',
    deliverables: [
      'Mapping out your entire project, from start to finish',
      'Coordinating with venues, agents, and other partners',
      'Managing budgets to keep you on track',
      'Handling the nitty-gritty of touring and events'
    ],
    ideal: 'Tours, festivals, multi-city productions, cross-border projects'
  },
  {
    title: 'A Beautiful Website That Wins You Clients',
    slug: 'web-seo-sprint',
    promise: 'Your digital home base, built to perform.',
    description: 'We\'ll build you a stunning, modern website that not only looks incredible but is also designed to show up on Google and attract your dream clients.',
    deliverables: [
      'A gorgeous, fast website that reflects your unique brand',
      'Guidance on what to write so people find you on Google',
      'A clear way for visitors to hire you or buy from you',
      'Simple analytics so you can see what\'s working'
    ],
    ideal: 'Bands, labels, studios, agencies, lean teams needing a modern web presence'
  },
  {
    title: 'Smart Growth & Automation',
    slug: 'ppc-campaigns',
    promise: 'Ready to grow, but hate the admin work?',
    description: 'We\'ll set up simple, effective systems and marketing campaigns that save you time and bring in consistent opportunities.',
    deliverables: [
      'Targeted ad campaigns that reach the right people',
      'Automating repetitive tasks to free up your schedule',
      'Clear, easy-to-read reports on your growth',
      'Creating simple templates and guides for your team'
    ],
    ideal: 'Service launches, ticket sales, course/workshop promotion, lead generation'
  },
  {
    title: 'Coaching & Personal Development',
    slug: 'coaching',
    promise: 'Navigate change with clarity and confidence.',
    description: 'One-on-one coaching for creative professionals navigating transitions, growth, and leadership. Build the mindset and habits that sustain your work.',
    deliverables: [
      'Bi-weekly coaching sessions focused on your goals',
      'Accountability and progress tracking',
      'Strategic planning for career transitions',
      'Tools for stress management and sustainable growth'
    ],
    ideal: 'Artists, founders, and creative leaders seeking personal growth'
  }
];

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="py-20 px-6 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
            Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Four core offerings to handle logistics, growth, and systems.
            <br />
            Choose one or combine them for full-spectrum support.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, idx) => (
            <Card key={service.slug} className="p-8 md:p-12 hover:border-accent transition-all">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="text-sm uppercase tracking-wider text-accent mb-2">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-display text-3xl font-semibold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-accent italic mb-6">
                    {service.promise}
                  </p>
                  <Link href={`/services/${service.slug}`}>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                      What's Included
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-accent mt-0.5">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Ideal for:</strong> {service.ideal}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-semibold mb-6">
            Not sure which service fits?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a call and we'll figure out the right approach for your project.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Book a Call
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
