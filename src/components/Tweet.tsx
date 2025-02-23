'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TweetProps {
  content: string;
  timestamp: string;
  image?: string | null;
  location?: string;
  url?: string;
}

export default function Tweet({ content, timestamp, image, location, url }: TweetProps) {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    
    return `${month} ${day}, ${year} at ${formattedHours}:${minutes} ${ampm}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass glass-hover rounded-2xl p-6 mb-6 relative overflow-hidden group ${
        url ? 'cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all duration-300' : ''
      }`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-noise"></div>
      <div className="relative z-10 space-y-4">
        <p className="text-white/90 text-lg leading-relaxed font-light">
          {content}
        </p>
        {image && (
          <div className="relative h-64 w-full overflow-hidden rounded-xl">
            <Image
              src={image}
              alt="Tweet image"
              width={2000}
              height={2000}
              loading="lazy"
            />
          </div>
        )}
        <div className="flex flex-col gap-2 text-sm text-white/60">
          <div className="flex items-center space-x-4">
            <time dateTime={timestamp} className="font-mono">
              {formatDate(timestamp)}
            </time>
            {location && (
              <span className="font-mono">• {location}</span>
            )}
          </div>
          {url && (
            <div className="font-mono text-xs text-white/40 truncate hidden group-hover:block">
              {url}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}