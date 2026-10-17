import { Navbar } from '@/components/navbar';
import { PolicyBanner } from '@/components/policy-banner';

export default function BookPage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Book Your Treatment</h1>
          <p className="mt-2 text-slate-600">Select a date and time that suits you best.</p>
        </div>
        
        <PolicyBanner />

        <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex min-h-[500px] w-full items-center justify-center rounded border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <div className="space-y-2">
              <p className="font-semibold text-slate-700">Square Appointments Calendar Embed Container</p>
              <p className="max-w-md text-sm text-slate-500">
                Paste your Square Appointments widget snippet or iframe code here to enable live scheduling and £20 deposit processing.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}