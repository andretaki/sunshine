import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Next.js Site + SEO Sprint Case Study | Clear Light Creative',
  description: "3x organic traffic growth and 247% increase in qualified leads within 60 days. See how we rebuilt a record label's website with SEO at its core.",
  alternates: { canonical: '/work/seo-sprint' },
};

export default function SEOSprintCase() {
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
            Web & Growth · Case Study
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
            Next.js Site + SEO Sprint
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            A complete website rebuild with SEO at its core — transforming an underperforming site into a lead-generating machine in 60 days.
          </p>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12">
            <Image
              src="/business-analytics.png"
              alt="Business analytics and growth metrics"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-3 gap-8 py-8 border-y border-border">
            <div>
              <div className="text-4xl font-display font-semibold text-accent mb-2">+300%</div>
              <div className="text-sm text-muted-foreground">Organic traffic increase</div>
            </div>
            <div>
              <div className="text-4xl font-display font-semibold text-accent mb-2">+247%</div>
              <div className="text-sm text-muted-foreground">Qualified leads increase</div>
            </div>
            <div>
              <div className="text-4xl font-display font-semibold text-accent mb-2">21</div>
              <div className="text-sm text-muted-foreground">Days to launch</div>
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
            A Website That Wasn't Working
          </h3>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              An independent record label had invested years building their roster and reputation, but their website wasn't pulling its weight. Organic traffic was nearly non-existent, the site was slow and clunky, and there was no way to track which visitors were actually turning into clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              They were relying entirely on word-of-mouth and social media to find new artists and booking opportunities. Meanwhile, competitors were ranking on Google for critical search terms like &quot;indie label Nashville&quot; and &quot;artist development services.&quot; They needed a modern, fast site built with SEO fundamentals baked in from day one.
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
              'Tight 3-week deadline before major music conference',
              'Limited budget — no room for expensive agency fees',
              'Existing content needed to be migrated and optimized',
              'No prior SEO strategy or keyword research',
              'Zero conversion tracking or analytics setup',
              'Needed to maintain brand identity during rebuild',
              'Site had to be fast and mobile-optimized',
              'No in-house technical expertise for maintenance'
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
                phase: 'Research & Foundation',
                duration: 'Week 1',
                actions: [
                  'Conducted competitor SEO analysis and keyword research',
                  'Audited existing content for optimization opportunities',
                  'Designed site architecture optimized for search intent',
                  'Set up Google Analytics 4 and Search Console'
                ]
              },
              {
                phase: 'Build & Optimization',
                duration: 'Week 2-3',
                actions: [
                  'Built site in Next.js 14 with App Router for maximum performance',
                  'Implemented semantic HTML and structured data markup',
                  'Optimized all images with WebP format and lazy loading',
                  'Created SEO-optimized title tags, meta descriptions, and headings'
                ]
              },
              {
                phase: 'Content & Launch',
                duration: 'Week 3',
                actions: [
                  'Rewrote and optimized all service pages for target keywords',
                  'Created artist showcase pages with proper schema markup',
                  'Set up conversion tracking for contact forms and email signups',
                  'Deployed to Vercel with proper redirects and sitemap'
                ]
              },
              {
                phase: 'Growth & Monitoring',
                duration: 'Week 4-8',
                actions: [
                  'Monitored Google Search Console for indexing issues',
                  'Created high-value blog content targeting long-tail keywords',
                  'Built backlinks through music industry partnerships',
                  'A/B tested CTAs and conversion paths'
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
              <h4 className="font-semibold mb-3">300% Traffic Growth</h4>
              <p className="text-muted-foreground text-sm">
                Organic search traffic tripled in the first 60 days, with sustained growth continuing through month 6.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3">247% More Qualified Leads</h4>
              <p className="text-muted-foreground text-sm">
                Contact form submissions more than doubled, with higher-quality inquiries from serious artists and bookers.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3">Page 1 Rankings</h4>
              <p className="text-muted-foreground text-sm">
                Ranked on page 1 of Google for 12 target keywords, including high-intent terms like &quot;Nashville record label.&quot;
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-3">Lightning-Fast Performance</h4>
              <p className="text-muted-foreground text-sm">
                98+ Lighthouse score across all metrics — fast load times that keep visitors engaged and improve SEO.
              </p>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="p-8 border-accent bg-accent/5">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-semibold">MW</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Marcus Williams</div>
                <div className="text-sm text-muted-foreground">Founder, Studio Sessions</div>
              </div>
            </div>
            <blockquote className="text-xl leading-relaxed text-foreground/90 font-display">
              &ldquo;Our site went from a placeholder to a powerhouse in 3 weeks. SEO traffic tripled, and our leads doubled. We're finally showing up where our clients are searching.&rdquo;
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
            With the foundation in place and organic traffic growing, the next phase would focus on scaling content and conversion optimization:
          </p>
          <ul className="space-y-4">
            {[
              'Launch content marketing strategy targeting long-tail music industry keywords',
              'Build artist resource hub with downloadable guides to capture more leads',
              'Implement programmatic SEO for artist showcase pages',
              'Set up email nurture sequences to convert visitors into clients',
              'Expand to Google Ads and retargeting campaigns for high-intent searches'
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
            Need a website that actually works?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether it's a rebuild or starting fresh, let's create something fast, beautiful, and built to convert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Book a Free Discovery Call
              </Button>
            </Link>
            <Link href="/services/web">
              <Button size="lg" variant="outline" className="border-background/30 text-accent-foreground hover:bg-background/10">
                View Web Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
