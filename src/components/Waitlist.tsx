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
    <div className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg border border-gray-800 bg-black text-white focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all duration-200"
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`px-6 py-3 rounded-lg bg-blue-800 text-white font-medium hover:text-black hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ${
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
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col items-center m-0 p-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-2xl mx-auto mt-20 p-6 bg-gradient-to-br from-black to-gray-900 rounded-2xl shadow-lg border border-gray-800"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white">
          Want to create your own? 
        </h2>
        <p className="text-gray-400 pt-2">
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
    <div className="w-1 h-10 bg-white/10 mx-auto" />
    <div className="w-full max-w-2xl mx-auto p-4 bg-gradient-to-br from-white/50 to-white rounded-2xl shadow-lg border border-gray-800">
      <p className="text-black font-bold text-xs text-center">
        I don't know if this is funny or bad to make my own website a waitlist.
        Follow me on <a href="https://x.com/aayushbuilds" className="text-blue-500">X</a> for updates.
      </p>
    </div>
    </div>
  );
}