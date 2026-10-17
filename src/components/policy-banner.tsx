'use client'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldAlert } from 'lucide-react';
import { BOOKING_POLICY } from '@/data/services';

export function PolicyBanner() {
  return (
    <section id="policy" className="w-full py-4">
      <Alert className="border-amber-200 bg-amber-50/50 text-amber-900">
        <ShieldAlert className="h-5 w-5 text-amber-700" />
        <AlertTitle className="font-semibold text-amber-950">
          Booking & Cancellation Terms
        </AlertTitle>
        <AlertDescription className="text-sm text-amber-800">
          All appointments require a non-refundable £{BOOKING_POLICY.depositAmountGBP} deposit at booking. 
          Rescheduling or cancellations require at least {BOOKING_POLICY.cancellationNoticeHours} hours notice.
        </AlertDescription>
      </Alert>
    </section>
  );
}