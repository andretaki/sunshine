import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/fade-in';

export const metadata = {
  title: 'About | Clear Light Creative',
  description: 'A guiding hand for ambitious creators. Learn about the person behind Clear Light Creative and how I help artists and founders bring their visions to life.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <FadeIn>
        <section className="py-20 px-6 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-semibold mb-6">
              We're here to help.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Clear Light Creative is a team of creative producers and operational specialists dedicated to helping artists, founders, and lean teams make their mark on the world.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Story */}
      <FadeIn>
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed text-foreground/90">
            <p>
              We know what it's like to have a brilliant vision and feel completely overwhelmed by the logistics, tech, and admin work standing between you and bringing it to life.
            </p>
            <p>
              That's where our team comes in. We handle the operational chaos—tour logistics, website builds, marketing systems, project timelines—so you can focus on what you do best: creating.
            </p>
            <p>
              We've worked with touring artists, independent labels, creative studios, and solopreneurs who are tired of wearing all the hats and just want experienced partners to take the reins on the stuff that drains their energy.
            </p>
            <p>
              Our approach is simple: listen deeply, plan thoroughly, execute flawlessly, and communicate clearly every step of the way. No jargon, no surprises, just real support from a team that genuinely cares about your success.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Image Break */}
      <FadeIn>
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/bass-guitar-live.png"
                  alt="Live music performance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/megaphone-marketing.png"
                  alt="Amplifying your message"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* What I Believe */}
      <FadeIn>
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-12 text-center">
              What We Believe
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Your Time is Sacred',
                  description: 'Every hour you spend on admin is an hour you could be creating. We protect your creative time fiercely.'
                },
                {
                  title: 'Clear Beats Complicated',
                  description: "The best systems are simple, repeatable, and don't require a PhD to understand. We build solutions that just work."
                },
                {
                  title: 'Details Define Success',
                  description: "The difference between good and great is in the follow-through. We obsess over the little things so you don't have to."
                },
                {
                  title: 'Partnership Over Transactions',
                  description: "We're not here to check boxes—we're here to help you build something meaningful. Your wins are our wins."
                }
              ].map((belief, idx) => (
                <Card key={idx} className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                    {belief.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {belief.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Skills & Experience */}
      <FadeIn>
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-12 text-center">
              How We Can Support You
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-accent">Logistics & Production</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Tour management & routing</li>
                  <li>• Event production & coordination</li>
                  <li>• Vendor negotiation & contracts</li>
                  <li>• Budget tracking & reconciliation</li>
                  <li>• Travel & accommodation planning</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-accent">Web & Growth</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Next.js website development</li>
                  <li>• SEO strategy & implementation</li>
                  <li>• Google Ads & Meta campaigns</li>
                  <li>• Conversion optimization</li>
                  <li>• Analytics & reporting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-accent">Systems & Automation</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Process design & SOPs</li>
                  <li>• CRM setup & management</li>
                  <li>• Email automation workflows</li>
                  <li>• Project management systems</li>
                  <li>• Team training & documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Let's work together.
          </h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            If you're ready to stop juggling everything alone and bring in a team that truly gets it, we'd love to chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 px-8">
                Start Your Project
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="outline" className="border-background/30 bg-transparent text-accent-foreground hover:bg-background/10 px-8">
                See Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
