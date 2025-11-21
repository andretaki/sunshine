'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SignupModal } from '@/components/signup-modal';

export default function LaunchPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-sunshine-white">
        {/* Elegant header spacing */}
        <div className="pt-12 md:pt-20"></div>

        {/* Main container - contained and centered */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-20">

          {/* Hero Section - Image and Content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Hero Image - Contained and tasteful */}
            <div className="relative order-2 md:order-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/ID_LOVE_THIS_PHOTO_ON_THE_SIGN_UP_PAGE.jpg"
                  alt="Woman with flame - The Sunshine Effect"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
                {/* Subtle warm glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sunshine-orange/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Content - Clean and spacious */}
            <div className="space-y-8 order-1 md:order-2">
              {/* Small brand tagline */}
              <p className="font-subhead text-sm md:text-base text-sunshine-orange uppercase tracking-wider">
                Glow from the heart
              </p>

              {/* Headline - per brandSpec: H1 uses Belvare, uppercase, weight 700 */}
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-tight text-sunshine-brown uppercase font-bold">
                Radiance<br />is Yours
              </h1>

              {/* Subheadline - per brandSpec: H2 uses Laro Soft, weight 700 */}
              <h2 className="font-subhead text-2xl md:text-3xl text-sunshine-purple font-bold">
                The Sunshine Effect
              </h2>

              {/* Body copy - per brandSpec */}
              <p className="text-base md:text-lg text-sunshine-brown/80 font-body leading-relaxed max-w-md">
                Move from burnout to alignment through simple rituals that build confidence, clarity, and momentum towards your most radiant life.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-sunshine-purple text-sunshine-white px-10 py-4 rounded-full text-lg font-subhead font-bold uppercase hover:bg-sunshine-orange transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  I Want In
                </button>
                <p className="text-sm text-sunshine-brown/60 font-body mt-3">
                  Join the inner circle
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Sign Up Modal */}
      <SignupModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
