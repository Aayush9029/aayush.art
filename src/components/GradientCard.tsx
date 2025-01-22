import { ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  animationDelay?: number;
}

export const GradientCard = ({ children, className = '', animationDelay = 0 }: GradientCardProps) => {
  const style = {
    '--animation-delay': `${animationDelay}ms`,
  } as React.CSSProperties;

  return (
    <div
      className={`gradient-card ${className}`}
      style={style}
    >
      <div className="gradient-card-content bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 h-full w-full relative z-10">
        {children}
      </div>
    </div>
  );
}; 