'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS, HOME_SECTIONS } from '@/lib/constants';
import { ThemeToggle } from '@/components/theme-toggle';
import { useActiveSection } from '@/lib/hooks/use-active-section';

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(HOME_SECTIONS);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <Image
              src="/logo.png"
              alt="Clear Light Creative"
              width={40}
              height={40}
              className="transition-transform group-hover:scale-105"
            />
            <span className="font-display text-2xl font-semibold text-foreground group-hover:text-accent transition-colors hidden sm:inline">
              Clear Light Creative
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isPageActive = pathname === link.href;
              const isSectionActive = isHomePage && link.section && activeSection === link.section;
              const active = isPageActive || isSectionActive;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors relative group ${
                    active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-accent transition-all duration-300 ${
                    active ? 'w-full left-0' : 'w-0 group-hover:w-full group-hover:left-0'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* CTA + Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="hidden sm:block">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Let&apos;s Chat
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] p-8">
                <div className="flex items-center gap-2 mb-10 mt-4">
                  <Image
                    src="/logo.png"
                    alt="Clear Light Creative"
                    width={28}
                    height={28}
                  />
                  <span className="font-display text-lg font-semibold text-foreground">
                    Clear Light Creative
                  </span>
                </div>
                <nav className="flex flex-col gap-5 pl-2">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-6"
                  >
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Let&apos;s Chat
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
