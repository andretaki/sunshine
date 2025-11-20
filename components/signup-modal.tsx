'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

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
      <div
        className="relative w-full max-w-lg rounded-3xl p-0 overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #FCF6F2 0%, #95D7E6 50%, #FFC619 100%)',
          padding: '3px',
        }}
      >
        <div className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 rounded-3xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-sunshine-yellow" />
          </button>

          {!submitted ? (
            <>
              {/* Lifestyle Photo at Top */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src="/modal-lifestyle.jpg"
                  alt="Radiant woman"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Floral overlay decoration */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-800/80" />
              </div>

              {/* Form Content */}
              <div className="p-8">
                {/* Heading */}
                <div className="text-center mb-6">
                  <h3 className="font-bebas text-5xl md:text-6xl text-sunshine-yellow mb-2 tracking-wide drop-shadow-lg">
                    DON&apos;T MISS OUT
                  </h3>
                  <p className="font-body text-lg text-sunshine-white/90">
                    Stay Connected To The Fire
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
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="w-full px-6 py-4 rounded-full bg-white text-gray-800 border-2 border-transparent focus:border-sunshine-yellow focus:outline-none transition-colors placeholder:text-gray-400 text-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className="w-full px-6 py-4 rounded-full bg-white text-gray-800 border-2 border-transparent focus:border-sunshine-yellow focus:outline-none transition-colors placeholder:text-gray-400 text-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 rounded-full bg-white text-gray-800 border-2 border-transparent focus:border-sunshine-yellow focus:outline-none transition-colors placeholder:text-gray-400 text-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 rounded-full bg-white text-gray-800 border-2 border-transparent focus:border-sunshine-yellow focus:outline-none transition-colors placeholder:text-gray-400 text-lg"
                />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-300 to-sunshine-yellow text-gray-900 font-bold py-4 rounded-full hover:from-sunshine-yellow hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-xl tracking-wider shadow-lg"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'I WANT IN'}
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="text-center py-12 px-8">
              <div className="text-7xl mb-6">✨</div>
              <h3 className="font-bebas text-5xl text-sunshine-yellow mb-4 tracking-wide drop-shadow-lg">
                YOU&apos;RE IN!
              </h3>
              <p className="font-body text-lg text-white mb-6 max-w-md mx-auto">
                Welcome to The Sunshine Effect! Check your email for a warm welcome message and all the radiant details about what&apos;s coming next.
              </p>
              <button
                onClick={onClose}
                className="bg-sunshine-yellow text-gray-900 px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors font-bold"
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
