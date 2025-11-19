import { cn } from '@/lib/utils';

type SeparatorType = 'marquee' | 'wavy';

interface SectionSeparatorProps {
  type?: SeparatorType;
  text?: string;
  className?: string;
}

export function SectionSeparator({
  type = 'marquee',
  text = 'RADIANCE IS YOURS ✦ GLOW FROM THE HEART ✦ DISCIPLINE IS SELF LOVE IN MOTION ✦ ',
  className = ''
}: SectionSeparatorProps) {
  if (type === 'wavy') {
    return (
      <div className={cn('w-full py-8 overflow-hidden', className)}>
        <svg
          className="w-full h-8 text-sunshine-yellow"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  // Marquee type
  return (
    <div className={cn('w-full py-6 overflow-hidden bg-sunshine-purple', className)}>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="font-subhead uppercase tracking-[0.2em] text-sunshine-yellow text-sm px-4">
            {text}
          </span>
          <span className="font-subhead uppercase tracking-[0.2em] text-sunshine-yellow text-sm px-4">
            {text}
          </span>
        </div>
        <div className="absolute top-0 flex animate-marquee whitespace-nowrap" aria-hidden="true">
          <span className="font-subhead uppercase tracking-[0.2em] text-sunshine-yellow text-sm px-4">
            {text}
          </span>
          <span className="font-subhead uppercase tracking-[0.2em] text-sunshine-yellow text-sm px-4">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
