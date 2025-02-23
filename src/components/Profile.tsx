'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Social, SocialPlatform, Author } from '../types/allTypes';
import Link from 'next/link';
import { BsYoutube, BsGithub, BsInstagram, BsLink, BsTwitterX, BsPatchCheckFill } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface ProfileHeaderProps {
  name: string;
  handle: string;
  avatar: string;
}

const ProfileHeader = ({ name, handle, avatar }: ProfileHeaderProps) => (
  <div className="flex items-center space-x-4">
    <div className="relative w-16 h-16 rounded-full overflow-hidden">
      <Image
        src={avatar}
        alt={name}
        fill
        className="object-cover"
        sizes="64px"
      />
    </div>
    <div>
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-gray-100 dark:text-white">
          {name}
        </h1>
        <BsPatchCheckFill className="text-blue-500" size={16} />
      </div>
      <p className="text-gray-200 dark:text-gray-400">{handle}</p>
    </div>
  </div>
);

const ProfileBio = ({ bio }: { bio: string }) => (
  <p className="mt-4 text-gray-300 dark:text-gray-300 leading-relaxed">
    {bio}
  </p>
);

const socialIcons: Record<SocialPlatform, IconType> = {
  TWITTER: BsTwitterX,
  YOUTUBE: BsYoutube,
  GITHUB: BsGithub,
  INSTAGRAM: BsInstagram,
  WEBSITE: BsLink
};

const SocialLink = ({ platform, url }: Social) => {
  const Icon = socialIcons[platform];
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Get the cursor position relative to the viewport
    setTooltipPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onMouseMove={handleMouseMove}
    >
      {showTooltip && (
        <div 
          className="fixed z-50 px-4 py-1 bg-gray-800 rounded-full text-xs text-gray-300 whitespace-nowrap pointer-events-none"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y - 32}px`, // Offset above cursor
            transform: 'translateX(-50%)',
          }}
        >
          {url}
        </div>
      )}
      <div className="relative w-4 h-4 mr-2">
        <Icon color="white" />
      </div>
      <span className="text-sm text-gray-300 capitalize">
        {platform.toLowerCase()}
      </span>
    </Link>
  );
};

const SocialLinks = ({ socials }: { socials: Social[] }) => (
  socials.length > 0 && (
    <div className="mt-4 flex flex-wrap gap-2">
      {socials.map((social) => (
        <SocialLink key={social.platform} {...social} />
      ))}
    </div>
  )
);

export default function Profile({ name, handle, avatar, bio, socials = [] }: Author) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 rounded-2xl p-6 mb-8 shadow-sm border border-gray-700"
    >
      <ProfileHeader name={name} handle={handle} avatar={avatar} />
      <ProfileBio bio={bio} />
      <SocialLinks socials={socials} />
    </motion.div>
  );
}