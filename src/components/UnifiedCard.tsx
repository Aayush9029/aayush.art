import Image from 'next/image';
import { CardContentProps } from '../types';
import { BaseCard } from './BaseCard';

const IconComponent = ({ icon }: { icon: CardContentProps['icon'] }) => {
  if (!icon) return null;

  if (typeof icon === 'string') {
    return (
      <span className="text-[24px] block mb-3 transform transition-transform duration-300 group-hover:scale-105 max-w-[24px] max-h-[24px]">
        {icon}
      </span>
    );
  }

  return (
    <Image
      src={icon.src}
      alt={icon.alt || 'icon'}
      width={24}
      height={24}
      className="mb-3 transform transition-transform duration-300 group-hover:scale-110 max-w-[24px] max-h-[24px]"
    />
  );
};

const ContentSection = ({ title, description }: Pick<CardContentProps, 'title' | 'description'>) => {
  if (!title && !description) return null;

  return (
    <div className="text-md text-white leading-relaxed px-1 py-1 rounded-xl">
      {title && <div className="mb-2 pr-24">{title}</div>}
      {description && (
        <p className="text-sm text-white/80 pr-24">{description}</p>
      )}
    </div>
  );
};

const FooterLink = ({ text, link }: { text?: string, link?: string }) => {
  if (!text || !link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        absolute top-2 right-2
        text-sm font-semibold 
        py-1.5 px-4 rounded-xl 
        bg-white/90 text-black
        transition-all duration-300
        hover:bg-white hover:scale-105
      "
    >
      {text}
    </a>
  );
};

export const UnifiedCard = ({
  backgroundUrl,
  icon,
  title,
  description,
  footerText,
  footerLink,
  children,
  className = '',
  animationDelay = 0,
}: CardContentProps) => (
  <BaseCard
    className={`group overflow-hidden ${className}`}
    style={{
      backgroundImage: backgroundUrl ? `url('${backgroundUrl}')` : undefined,
      animationDelay: `${animationDelay}ms`,
    }}
  >
    <div className="space-y-3">
      <div>
        <IconComponent icon={icon} />
        <ContentSection title={title} description={description} />
        {children}
        <FooterLink text={footerText} link={footerLink} />
      </div>
    </div>
  </BaseCard>
);