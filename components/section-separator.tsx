import { cn } from '@/lib/utils';

type SeparatorType = 'marquee' | 'wavy';

interface SectionSeparatorProps {
  type?: SeparatorType;
  className?: string;
}

export function SectionSeparator({ type = 'marquee', className }: SectionSeparatorProps) {
  if (type === 'wavy') {
    return (
      <div
        className={cn(
          'w-full h-12 flex items-center justify-center bg-sunshine-yellow text-sunshine-brown font-subhead uppercase tracking-[0.14em]',
          className
        )}
        aria-hidden
      >
        ~ pockets of peace ~
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-full h-12 bg-sunshine-purple text-sunshine-yellow overflow-hidden flex items-center',
        className
      )}
      aria-hidden
    >
      <div className="animate-marquee whitespace-nowrap font-subhead uppercase tracking-[0.14em]">
        <span className="mx-8">
          Radiance is yours ✦ Glow from the heart ✦ Move like it is already yours ✦
        </span>
        <span className="mx-8">
          Radiance is yours ✦ Glow from the heart ✦ Move like it is already yours ✦
        </span>
      </div>
    </div>
  );
}
