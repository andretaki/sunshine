'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'launch',
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Unable to connect. Please check your internet and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Modal card - per brandSpec.layout.signupPage.hero */}
      <div
        className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundColor: 'rgba(252, 246, 242, 0.96)', // whiteCloud with 96% opacity
        }}
      >
        {/* Background image overlay - will add signupHeroFlame image later */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-sunshine-orange/20 via-sunshine-purple/10 to-sunshine-yellow/20" />

        {/* Content container with relative positioning */}
        <div className="relative z-10">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-sunshine-purple/10 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-sunshine-purple" />
          </button>

          {!submitted ? (
            <>
              {/* Form Content - per brandSpec.layout.signupPage */}
              <div className="p-8">
                {/* Heading - per brandSpec.layout.signupPage.copyOptions */}
                <div className="text-center mb-6">
                  <h3 className="font-subhead text-4xl md:text-5xl text-sunshine-purple mb-3 font-bold uppercase">
                    STAY CONNECTED TO THE FIRE
                  </h3>
                  <p className="font-body text-base text-sunshine-brown/80 max-w-sm mx-auto leading-relaxed">
                    Enter your info to receive rituals, reflections, and invitations that keep you close to your own light.
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-400 rounded-full text-center">
                    <p className="text-white text-sm">{error}</p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Form fields - per brandSpec.layout.signupPage.form.fields */}
                  <input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="w-full px-6 py-3.5 rounded-full bg-white text-sunshine-brown border-2 border-sunshine-brown/10 focus:border-sunshine-purple focus:outline-none transition-colors placeholder:text-sunshine-brown/40 font-body"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-6 py-3.5 rounded-full bg-white text-sunshine-brown border-2 border-sunshine-brown/10 focus:border-sunshine-purple focus:outline-none transition-colors placeholder:text-sunshine-brown/40 font-body"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-6 py-3.5 rounded-full bg-white text-sunshine-brown border-2 border-sunshine-brown/10 focus:border-sunshine-purple focus:outline-none transition-colors placeholder:text-sunshine-brown/40 font-body"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-6 py-3.5 rounded-full bg-white text-sunshine-brown border-2 border-sunshine-brown/10 focus:border-sunshine-purple focus:outline-none transition-colors placeholder:text-sunshine-brown/40 font-body"
                  />

                  {/* Submit button - per brandSpec.layout.signupPage.form.submitButton */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sunshine-purple text-sunshine-white font-subhead font-bold py-4 rounded-full hover:bg-sunshine-purple/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg tracking-wide shadow-lg uppercase"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'I WANT IN'}
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="text-center py-12 px-8">
              <div className="text-7xl mb-6">✨</div>
              <h3 className="font-headline text-4xl text-sunshine-purple mb-4 font-bold uppercase">
                YOU&apos;RE IN
              </h3>
              {/* Success message - per brandSpec.layout.signupPage.form.successMessage */}
              <p className="font-body text-base text-sunshine-brown mb-6 max-w-md mx-auto leading-relaxed">
                You are in. Watch your inbox for your first ritual and a little extra light.
              </p>
              <button
                onClick={onClose}
                className="bg-sunshine-purple text-sunshine-white px-8 py-3 rounded-full hover:bg-sunshine-purple/90 transition-colors font-subhead font-bold uppercase"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
