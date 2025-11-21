'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BrandCard } from '@/components/brand-card';
import { FadeIn } from '@/components/fade-in';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email }),
      });
      setSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-sunshine-purple text-sunshine-white px-4 sm:px-6 py-12 md:py-20 lg:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hidden md:block absolute -top-24 -left-16 w-96 h-96 bg-sunshine-yellow rounded-full opacity-30" />
          <div className="hidden md:block absolute -bottom-32 -right-20 w-[500px] h-[500px] bg-sunshine-blue rounded-full opacity-20" />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center relative">
          <div className="space-y-5">
            <p className="font-subhead uppercase tracking-[0.15em] font-bold text-xs text-sunshine-yellow">
              Glow from the heart
            </p>
            <h1 className="font-headline text-[clamp(2.8rem,7vw,4.8rem)] uppercase leading-[0.9] tracking-tight">
              A source of light for women meant for more
            </h1>
            <p className="font-body text-lg md:text-xl leading-relaxed">
              The Sunshine Effect blends somatic wellness, mindset work, and foundational business strategy to help women move from burnout to alignment. You are allowed to want more ease.
            </p>
            <p className="font-body text-base leading-relaxed">
              Real power does not have to push or prove. Let&apos;s build the habits, community, and courage that carry you forward.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute -top-6 -left-6 w-24 h-24 rounded-full bg-sunshine-yellow" aria-hidden />
            <div className="relative rounded-t-[12rem] rounded-b-[3rem] overflow-hidden border-4 border-sunshine-white shadow-2xl shadow-sunshine-purple/40">
              <Image
                src="/portrait-female-professional.png"
                alt="Sunshine Rae portrait"
                width={640}
                height={760}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Sunshine Section */}
      <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 bg-sunshine-white overflow-hidden">
        <FadeIn>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="font-subhead uppercase tracking-[0.15em] font-bold text-xs text-sunshine-orange">
                About Sunshine Rae
              </p>
              <h2 className="font-headline text-[clamp(2rem,5vw,3rem)] md:text-5xl leading-[0.9] tracking-tight text-sunshine-purple uppercase">
                From burnout to alignment
              </h2>
            </div>

            <div className="space-y-6 font-body text-lg leading-relaxed text-sunshine-brown">
              <p>
                I&apos;m Sunshine Rae, and I&apos;m here to be a source of light for women who know they&apos;re meant for more—even when they&apos;re not quite sure what that &quot;more&quot; looks like yet.
              </p>

              <p>
                I&apos;ve lived a lot of lives before this one. I was a cheerleader who thrived on discipline and team energy. A double major in broadcasting journalism who learned how to tell stories that matter. A production specialist who toured the world with bands and worked on film sets—the kind of high-octane, high-stakes environments where you learn to execute under pressure or go home.
              </p>

              <p>
                And I was good at it. Really good. But here&apos;s the thing nobody tells you about being really good at grinding: eventually, your body speaks up. You wake up exhausted in hotel rooms that all look the same, your shoulders tight, your nervous system wired, wondering when &quot;making it&quot; started feeling so… hollow.
              </p>

              <BrandCard variant="yellow" className="p-6 md:p-8 my-8">
                <p className="font-headline text-2xl md:text-3xl uppercase text-sunshine-purple leading-tight">
                  &quot;Discipline without self-love is just burnout with a schedule&quot;
                </p>
              </BrandCard>

              <p>
                I had to learn the hard way that discipline without self-love is just burnout with a schedule. That being capable doesn&apos;t mean you have to carry everything. That the version of success I was chasing wasn&apos;t actually mine—it was built on old patterns, people-pleasing, and proving myself over and over again.
              </p>

              <p>
                My body was keeping score, even when my mind tried to push through.
              </p>

              <p>
                So I did something that terrified me: I chose peace instead.
              </p>

              <p>
                I rebuilt my life from the ground up, this time with intention. I learned to honor my body&apos;s wisdom, to recognize where trauma lived in my tight chest and clenched jaw. I discovered that healing wasn&apos;t just about thinking differently—it was about feeling safe in my own skin again. About reconnecting with the signals my body had been sending all along.
              </p>

              <p>
                And I discovered something powerful: when you create from alignment instead of exhaustion, everything changes.
              </p>

              <BrandCard variant="orange" className="p-6 md:p-8 my-8">
                <p className="font-subhead uppercase tracking-[0.12em] text-xs mb-3">My Work Today</p>
                <p className="font-body text-base leading-relaxed">
                  Now, through a blend of somatic wellness practices, mindset work, and foundational business strategy, I help women do the same. I work with women who are tired of betraying themselves to keep everyone else comfortable. Women whose bodies are whispering (or screaming) that something needs to shift. Women who know they&apos;re meant for more but feel stuck, scattered, or scared to take the first step.
                </p>
              </BrandCard>

              <p>
                Because here&apos;s what I know for sure: you already have everything you need inside you. You just need the right guidance, the right community, and the permission to trust yourself—and your body—enough to move.
              </p>

              <p>
                My work is rooted in a belief that became my lifeline: caring for yourself is how you best serve the world. You can&apos;t carry your blessings to others when your nervous system is fried. Real power doesn&apos;t have to push or prove. And the most radiant version of you isn&apos;t found in perfection—it&apos;s found in peace, in aligned action, and in the daily discipline of honoring what your body and spirit actually need.
              </p>

              <p>
                I still know how to get things done—I just do it differently now. With spaciousness. With love. From a place that feels sustainable, alive, and true.
              </p>

              <BrandCard variant="purple" className="p-6 md:p-8 my-8">
                <p className="font-subhead uppercase tracking-[0.12em] text-xs mb-3 text-sunshine-yellow">My Mission</p>
                <p className="font-body text-base leading-relaxed">
                  Whether we&apos;re working together one-on-one, gathering at The Golden Hour, finding stillness in The Lunar Room, or connecting at a retreat, my mission is the same: to be a source of tireless love and encouragement as you return to your power and step into a life that actually feels like yours.
                </p>
              </BrandCard>

              <p>
                This isn&apos;t about having it all figured out. It&apos;s about being resourced, rooted, and ready to glow from the heart.
              </p>

              <p className="font-headline text-2xl uppercase text-sunshine-purple leading-tight pt-4">
                Let&apos;s walk this path together.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Email Signup Section */}
      <section id="email-signup" className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 bg-sunshine-yellow text-sunshine-brown overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <FadeIn>
            <div className="space-y-3">
              <p className="font-subhead uppercase tracking-[0.15em] font-bold text-xs text-sunshine-purple">
                Stay Connected
              </p>
              <h2 className="font-headline text-[clamp(2rem,5vw,3rem)] md:text-5xl uppercase text-sunshine-purple leading-[0.9] tracking-tight">
                Join the journey
              </h2>
              <p className="font-body text-lg leading-relaxed max-w-2xl mx-auto">
                Get warmth, wisdom, and gentle reminders delivered to your inbox. Be the first to know about new offerings, events, and resources for your alignment journey.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 pt-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                    className="w-full text-center"
                    aria-label="Email address for newsletter"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sunshine-purple text-sunshine-white hover:bg-sunshine-orange transition-colors"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
                <p className="text-sm font-body leading-relaxed">
                  Warm, uplifting notes only. Unsubscribe anytime. <Link href="/privacy" className="underline hover:text-sunshine-purple transition-colors">Privacy Policy</Link>
                </p>
              </form>
            ) : (
              <BrandCard variant="white" className="p-6 md:p-8 max-w-md mx-auto">
                <p className="font-headline text-2xl uppercase text-sunshine-purple mb-3">
                  Welcome to the journey!
                </p>
                <p className="font-body text-base leading-relaxed">
                  Thank you for subscribing. Check your inbox for a warm welcome from Sunshine. Your alignment journey starts now.
                </p>
              </BrandCard>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
