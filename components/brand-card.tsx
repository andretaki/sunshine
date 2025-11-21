import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'purple' | 'orange' | 'yellow' | 'white';
type Decoration = 'none' | 'tape' | 'sticker';

const variants: Record<Variant, string> = {
  purple: 'bg-sunshine-purple text-sunshine-white border-2 border-sunshine-yellow',
  orange: 'bg-sunshine-orange text-sunshine-white border-2 border-sunshine-blue',
  yellow: 'bg-sunshine-yellow text-sunshine-brown border-2 border-sunshine-purple',
  white: 'bg-sunshine-white text-sunshine-brown border-2 border-sunshine-purple',
};

interface BrandCardProps {
  variant?: Variant;
  decoration?: Decoration;
  className?: string;
  children: ReactNode;
}

export function BrandCard({
  variant = 'purple',
  decoration = 'none',
  className = '',
  children
}: BrandCardProps) {
  return (
    <div className={cn(
      'rounded-[2rem] p-10 transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] relative overflow-hidden',
      variants[variant],
      className
    )}>
      {/* Optional tape decoration */}
      {decoration === 'tape' && (
        <div className="absolute top-4 right-4 w-20 h-6 bg-sunshine-yellow/40 -rotate-12 rounded-sm border border-sunshine-brown/10" />
      )}

      {/* Optional sticker decoration */}
      {decoration === 'sticker' && (
        <div className="absolute top-2 right-2 w-10 h-10 rounded-full bg-sunshine-blue border-2 border-sunshine-white" />
      )}

      {children}
    </div>
  );
}
