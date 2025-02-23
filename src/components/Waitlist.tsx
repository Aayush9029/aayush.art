'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface WaitlistFormProps {
  email: string;
  setEmail: (email: string) => void;
  status: 'idle' | 'loading' | 'success' | 'error';
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

const WaitlistForm = ({ email, setEmail, status, onSubmit }: WaitlistFormProps) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-3 rounded-lg border border-gray-800 bg-black text-white focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all duration-200"
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-800 text-white font-medium hover:text-black hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ${
          status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>
    </div>
  </form>
);

const StatusMessage = ({ status }: { status: 'success' | 'error' }) => {
  const messages = {
    success: {
      text: "Thanks for joining! We'll be in touch soon.",
      className: "text-green-600"
    },
    error: {
      text: "Oops! Something went wrong. Please try again.",
      className: "text-red-600"
    }
  };

  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${messages[status].className}`}
    >
      {messages[status].text}
    </motion.p>
  );
};

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/addToWaitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to add to waitlist');
      }

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col items-center m-0 p-4 sm:p-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-2xl mx-auto mt-10 sm:mt-20 p-4 sm:p-6 bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-lg border border-gray-800"
    >
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Want to create your own? 
        </h2>
        <p className="text-sm sm:text-base text-gray-400 pt-2">
          Join the waitlist to be one of the first to create your own x-style page blog thing.
        </p>
      </div>

      {status !== 'success' && (
        <WaitlistForm
          email={email}
          setEmail={setEmail}
          status={status}
          onSubmit={handleSubmit}
        />
      )}

      {(status === 'success' || status === 'error') && (
        <StatusMessage status={status} />
      )}
    </motion.div>
    <div className="w-1 h-6 sm:h-10 bg-white/10 mx-auto" />
    <div className="w-full max-w-2xl mx-auto p-3 sm:p-4 bg-gradient-to-br from-white/50 to-white rounded-2xl shadow-lg border border-gray-800">
      <p className="text-black font-bold text-[10px] sm:text-xs text-center">
        I don&apos;t know if this is funny or bad to make my own website a waitlist.
        Follow me on <a href="https://x.com/aayushbuilds" className="text-blue-500">X</a> for updates.
      </p>
    </div>
    </div>
  );
}