'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { OptimizedImage } from './OptimizedImage';

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

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass glass-hover rounded-2xl p-6 mb-6 relative overflow-hidden group ${
        url ? 'cursor-none hover:ring-2 hover:ring-blue-500/50 transition-all duration-300' : ''
      }`}
      onClick={handleClick}
      onMouseMove={url ? handleMouseMove : undefined}
    >
      <div className="absolute inset-0 bg-noise"></div>
      <div className="relative z-10 space-y-4">
        <p className="text-white/90 text-lg leading-relaxed font-light">
          {content}
        </p>
        {image && (
          <OptimizedImage
            src={image}
            alt="Tweet media"
            className="mt-2 rounded-lg"
          />
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
        </div>
        {url && (
          <div 
            className="absolute font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ 
              left: `${mousePosition.x}px`, 
              top: `${mousePosition.y - 60}px`,
              transform: 'translateX(-50%)',
              pointerEvents: 'none'
            }}
          >
            <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/5 whitespace-nowrap">
              {url}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}