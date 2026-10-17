import Image from "next/image";
import { featuredTreatments } from "@/data/treatments";
import { formatGbp } from "@/lib/currency";
import type { Treatment } from "@/types/treatment";

interface TreatmentPreviewProps {
  treatment: Treatment;
}

function TreatmentPreview({ treatment }: TreatmentPreviewProps) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="font-heading text-2xl font-semibold tracking-tight">
        {treatment.name}
      </h3>
      <p className="text-sm text-muted-foreground">
        {treatment.durationMinutes} minutes · {formatGbp(treatment.priceGbp)}
      </p>
      <p className="text-base leading-7 text-foreground/80">{treatment.summary}</p>
    </article>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="px-4 py-6 sm:px-8">
        <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase">
          Camberley · Surrey
        </p>
        <p className="mt-2 font-heading text-xl font-semibold">
          Helen&apos;s Massage &amp; Wellness
        </p>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-4 pb-20 sm:px-8">
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              Space to unwind, restore and feel like yourself again.
            </h1>
            <p className="max-w-md text-lg leading-8 text-muted-foreground">
              A calm, high-end practice offering therapeutic massage in the heart
              of Camberley. Treatments from {formatGbp(65)}.
            </p>
            <a
              href="#treatments"
              className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-primary px-6 text-sm tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              View treatments
            </a>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-accent sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/spa-still-life.svg"
              alt="Soft towels, warm light and botanicals in a quiet treatment room"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        <section id="treatments" className="flex flex-col gap-8">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Featured treatments
            </h2>
            <p className="mt-3 text-muted-foreground">
              All prices in pounds sterling. Book a visit or enquire for a
              personalised recommendation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTreatments.map((treatment) => (
              <TreatmentPreview key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
