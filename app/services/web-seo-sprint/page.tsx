import { Hero } from '@/components/sections/hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'A Beautiful Website That Wins You Clients | Clear Light Creative',
  description: 'Your digital home base, built to perform. A gorgeous, fast website that reflects your unique brand and shows up on Google.',
  alternates: { canonical: '/services/web-seo-sprint' },
};

export default function WebSEOSprintPage() {
  return (
    <main>
      <Hero
        headline="A Beautiful Website That Wins You Clients"
        subheadline="Your digital home base, built to perform. We'll build you a stunning, modern website that not only looks incredible but is also designed to show up on Google and attract your dream clients."
        variant="landing"
      />

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src="/la-skyline.png"
                alt="Modern website design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-4xl font-semibold mb-6">
                What This Looks Like
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern, fast, findable websites built with Next.js. From information architecture
                to launch, we handle design, development, SEO foundations, and conversion tracking.
                Your site ships in weeks, not months—and it's built to attract and convert visitors.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Information architecture & wireframes',
                'Next.js development (App Router, RSC)',
                'Responsive design & accessibility (WCAG AA)',
                'On-page SEO (titles, meta, schema, links)',
                'Content strategy & optimization briefs',
                'Performance optimization (Core Web Vitals)',
                'GA4 + conversion tracking setup',
                'Deployment & hosting (Vercel/AWS)'
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

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-6 text-center">
            Tech Stack
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Modern, performant, SEO-friendly tools that scale.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Framework',
                items: ['Next.js 15', 'React Server Components', 'TypeScript']
              },
              {
                title: 'Styling',
                items: ['Tailwind CSS', 'shadcn/ui', 'Responsive design']
              },
              {
                title: 'SEO & Analytics',
                items: ['Schema.org markup', 'GA4 tracking', 'Sitemap & robots.txt']
              }
            ].map((stack) => (
              <Card key={stack.title} className="p-6">
                <h3 className="font-semibold mb-4 text-accent">
                  {stack.title}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold mb-12 text-center">
            4-Week Sprint
          </h2>

          <div className="space-y-8">
            {[
              {
                week: 'Week 1',
                title: 'Discovery & IA',
                description: 'Competitive analysis, sitemap, wireframes. Define pages, messaging, and SEO targets.'
              },
              {
                week: 'Week 2',
                title: 'Design & Content',
                description: 'Design system, component builds, and content strategy. Review and iterate.'
              },
              {
                week: 'Week 3',
                title: 'Development & SEO',
                description: 'Build pages, implement schema markup, optimize images, and set up analytics.'
              },
              {
                week: 'Week 4',
                title: 'Testing & Launch',
                description: 'QA, performance testing, accessibility audit, and deployment. Handoff and training.'
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
                Starter Site
              </h3>
              <p className="text-muted-foreground mb-6">
                3-5 pages, basic SEO, GA4 tracking. Perfect for bands, portfolios, or small studios.
              </p>
              <div className="text-3xl font-display font-semibold mb-6">
                $4,500
              </div>
              <Link href="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Started
                </Button>
              </Link>
            </Card>

            <Card className="p-8 border-accent">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Full Site + SEO
              </h3>
              <p className="text-muted-foreground mb-6">
                8-12 pages, advanced SEO, content strategy, conversion optimization.
              </p>
              <div className="text-3xl font-display font-semibold mb-6">
                $8,500+
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
            Ready to ship your site?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a call to discuss your goals, timeline, and how we can build something great.
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
