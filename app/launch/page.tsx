'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SignupModal } from '@/components/signup-modal';

export default function LaunchPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Full-screen hero with woman-with-flame image */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0">
          <Image
            src="/ID_LOVE_THIS_PHOTO_ON_THE_SIGN_UP_PAGE.jpg"
            alt="Woman with flame - The Sunshine Effect"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-sunshine-orange/60 via-sunshine-yellow/50 to-sunshine-purple/40" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
          <div className="max-w-3xl w-full text-center space-y-8">
            {/* Headline - per brandSpec: H1 uses Belvare, uppercase, weight 700 */}
            <h1 className="font-headline text-[clamp(3.5rem,12vw,8rem)] leading-none tracking-normal text-white uppercase font-bold drop-shadow-2xl">
              RADIANCE IS YOURS
            </h1>

            {/* Subheadline - per brandSpec: H2 uses Laro Soft, weight 700, no transform */}
            <h2 className="font-subhead text-4xl md:text-5xl lg:text-6xl text-white font-bold drop-shadow-lg">
              The Sunshine Effect
            </h2>

            {/* Body copy - per brandSpec.layout.landingPage.sections.hero.body */}
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-white font-body leading-relaxed drop-shadow-md">
              Move from burnout to alignment through simple rituals that build confidence, clarity, and momentum towards your most radiant life.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-sunshine-purple text-sunshine-white px-12 py-5 rounded-full text-xl font-subhead font-bold uppercase hover:bg-sunshine-white hover:text-sunshine-purple transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-sunshine-yellow/50"
            >
              I Want In
            </button>

            {/* Small tagline under button */}
            <p className="text-base text-white/90 font-body drop-shadow-md">
              Join the inner circle • Be the first to know
            </p>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      <SignupModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
