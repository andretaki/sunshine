import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Case Studies | Clear Light Creative',
  description: 'Real results for creative professionals and lean teams. See how we handle logistics, build websites, and streamline systems.',
  alternates: { canonical: '/work' },
};

const caseStudies = [
  {
    title: 'Cross-Border Tour Production',
    slug: 'tour-production',
    type: 'Logistics',
    client: 'European Music Tour',
    challenge: 'A 12-city European tour with complex logistics, tight deadlines, visa requirements, and international vendor coordination.',
    result: 'Zero delays, 100% on-time execution across all venues, seamless cross-border coordination.',
    metrics: [
      { label: 'On-time delivery', value: '100%' },
      { label: 'Cities coordinated', value: '12' },
      { label: 'Delays', value: '0' }
    ],
    testimonial: {
      quote: "Turned chaos into a seamless tour. Every advance handled, every detail locked down.",
      author: "Sarah Chen",
      role: "Tour Manager"
    }
  },
  {
    title: 'Next.js Site + SEO Sprint',
    slug: 'seo-sprint',
    type: 'Web & Growth',
    client: 'Independent Record Label',
    challenge: 'An underperforming website with low organic traffic, poor SEO fundamentals, and no conversion tracking.',
    result: 'A fully rebuilt Next.js site with strong SEO foundations, 3x organic traffic growth, and 247% increase in qualified leads within 60 days.',
    metrics: [
      { label: 'Organic traffic increase', value: '+300%' },
      { label: 'Lead increase', value: '+247%' },
      { label: 'Launch timeline', value: '21 days' }
    ],
    testimonial: {
      quote: "Our site went from a placeholder to a powerhouse in 3 weeks. SEO traffic tripled, and our leads doubled.",
      author: "Marcus Williams",
      role: "Founder, Studio Sessions"
    }
  },
  {
    title: 'Systems Overhaul for Indie Label',
    slug: 'systems-overhaul',
    type: 'Systems',
    client: 'Independent Music Label',
    challenge: 'Administrative bottlenecks consuming valuable creative time, no standardized processes, and inconsistent client communication.',
    result: '40% reduction in admin time, saving the team 15 hours per week. Implemented SOPs, CRM, and automated workflows.',
    metrics: [
      { label: 'Admin time reduced', value: '40%' },
      { label: 'Hours saved per week', value: '15hrs' },
      { label: 'Systems implemented', value: '8' }
    ],
    testimonial: {
      quote: "We finally have systems that work. The time we save goes straight back into creative work.",
      author: "Jordan Martinez",
      role: "Label Manager"
    }
  }
];

export default function WorkPage() {
  return (
    <main>
      {/* Header */}
      <section className="py-20 px-6 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
            Real Results for Fellow Creatives
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stories from artists and founders who found their clear path forward.
            <br />
            See how we handle the chaos so you can focus on your craft.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {caseStudies.map((study) => (
            <div key={study.slug} className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Story */}
              <div>
                <div className="text-xs uppercase tracking-wider text-accent mb-3 font-medium">
                  {study.type}
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-foreground">
                  {study.title}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {study.challenge}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-3xl font-display font-semibold text-accent mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link href={`/work/${study.slug}`}>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                    Read the Full Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Right: Testimonial */}
              <Card className="p-8 bg-muted/30">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={study.slug === 'tour-production' ? "/portrait-sarah.png" : study.slug === 'seo-sprint' ? "/portrait-marcus.png" : "/portrait-jordan.png"}
                      alt={study.testimonial.author}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">{study.testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-xl leading-relaxed text-foreground/90 italic">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">The Result</div>
                  <p className="text-sm text-foreground leading-relaxed">{study.result}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Ready to bring your project to light?
          </h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Let's have a friendly chat about your vision and how I can help clear the path for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 px-8">
                Start Your Project
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-background/30 text-accent-foreground hover:bg-background/10 px-8">
                Learn About Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}