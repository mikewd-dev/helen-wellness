'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold tracking-tight text-slate-900">
            Helen&apos;s Massage & Wellness
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/#services" className="hover:text-slate-900 transition-colors">
            Services
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