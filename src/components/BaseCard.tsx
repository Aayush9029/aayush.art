import { ReactNode, CSSProperties } from 'react';

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  animationDelay?: number;
}

const commonStyle = `
  bg-cover bg-center 
  rounded-2xl
  border border-white/10
  hover:border-white/20
  transition-all duration-500
  animate-scale-in
  backdrop-filter
`;

export const BaseCard = ({ children, className, style, animationDelay = 0 }: BaseCardProps) => (
  <div 
    className={`${commonStyle} ${className}`}
    style={{
      ...style,
      animationDelay: `${animationDelay}ms`
    }}
  >
    <div className="relative p-6">
      {children}
    </div>
  </div>
); 