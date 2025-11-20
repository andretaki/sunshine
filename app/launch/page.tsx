'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SignupModal } from '@/components/signup-modal';

export default function LaunchPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-sunshine-yellow flex items-center justify-center px-4 py-12 relative overflow-hidden">
        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-sunshine-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sunshine-purple/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-sunshine-blue/20 rounded-full blur-2xl animate-pulse delay-500" />

        <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
          {/* Headline */}
          <h1 className="font-bebas text-[clamp(3.5rem,12vw,7rem)] leading-none tracking-tight text-sunshine-brown">
            RADIANCE IS YOURS
          </h1>

          {/* Brand name */}
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-sunshine-purple">
            The Sunshine Effect
          </h2>

          {/* Poppy image with decorations */}
          <div className="max-w-sm mx-auto relative">
            {/* Decorative glow rings */}
            <div className="absolute inset-0 rounded-full bg-sunshine-orange/30 blur-xl scale-110 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-sunshine-purple/20 blur-2xl scale-125 animate-pulse delay-700" />

            {/* Main image */}
            <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl shadow-sunshine-purple/40 border-4 border-white transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/poppy.jpg"
                alt="Red poppy flower"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Floating decorative petals */}
            <div className="absolute -top-4 -right-4 text-4xl animate-bounce delay-300">🌸</div>
            <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce delay-500">🌺</div>
            <div className="absolute top-1/4 -left-8 text-2xl animate-bounce delay-700">✨</div>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl max-w-xl mx-auto text-sunshine-brown font-body leading-relaxed">
            Move from burnout to alignment through simple rituals that build confidence, clarity, and momentum towards your most radiant life.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-sunshine-purple text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-sunshine-orange transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Sign Up
          </button>

          {/* Small tagline under button */}
          <p className="text-sm text-sunshine-brown/70 font-body">
            Join the waitlist and be the first to know when we launch
          </p>
        </div>
      </div>

      {/* Sign Up Modal */}
      <SignupModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
