'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PolicyBanner } from './policy-banner';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          {/* <span className="text-xl font-semibold tracking-tight text-slate-900">
            Helen&apos;s Massage & Wellness
          </span> */}
           <header className="px-4 py-6 sm:px-8">
        <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
          Camberley · Surrey
        </p>
        <p className="mt-2 font-heading text-xl font-semibold">
          Helen&apos;s Massage &amp; Wellness
        </p>
      </header>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/#treatments" className="hover:text-slate-900 transition-colors">
            Treatments
          </Link>
          <Link href="/#policy" className="hover:text-slate-900 transition-colors">
            Deposit Policy
          </Link>
          <Link href="/#contact" className="hover:text-slate-900 transition-colors">
            Location
          </Link>
        </nav>

        <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
          <Link href="/book">Book Treatment</Link>
        </Button>
      </div>
    </header>
  );
}