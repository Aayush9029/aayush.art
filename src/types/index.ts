import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

interface ImageIcon {
  src: string | StaticImageData;
  alt?: string;
}

export interface BaseCardProps {
  backgroundUrl?: string;
  className?: string;
  style?: React.CSSProperties;
  animationDelay?: number;
}

export interface CardContentProps extends BaseCardProps {
  icon?: string | ImageIcon;
  title?: string;
  description?: string;
  footerText?: string;
  footerLink?: string;
  children?: ReactNode;
}

export interface GitHubAppStoreProps extends BaseCardProps {
  iconUrl?: string;
  title: string;
  description: string;
  footerText: string;
  footerLink: string;
}

export interface LocationAppsProps extends BaseCardProps {
  icon: string;
  text: string;
  bottomComponent?: ReactNode;
}

export interface MailRaycastProps extends BaseCardProps {
  text: string;
  footerText: string;
  footerLink: string;
} 