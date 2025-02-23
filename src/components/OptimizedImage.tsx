import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const OptimizedImage = ({ src, alt, className }: OptimizedImageProps) => {
  return (
    <div className={`relative h-[300px] w-full shadow-[0_0_10px_rgba(255,255,255,0.05)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-xl"
        priority
      />
    </div>
  );
};
