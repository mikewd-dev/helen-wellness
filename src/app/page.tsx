'use client'
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { featuredTreatments } from "@/data/treatments";
import { formatGbp } from "@/lib/currency";
import type { Treatment } from "@/types/treatment";
import { Button } from '@/components/ui/button';
import { PolicyBanner } from "@/components/policy-banner";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


interface TreatmentPreviewProps {
  treatment: Treatment;
}

function TreatmentPreview({ treatment }: TreatmentPreviewProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative aspect-4/3 w-full bg-accent">
        <Image
          src={treatment.imageSrc}
          alt={treatment.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-heading text-xl font-semibold tracking-tight">
          {treatment.name}
        </h3>

        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          {treatment.options.map((option) => (
            <p key={option.durationMinutes}>
              {option.durationMinutes} minutes · {formatGbp(option.priceGbp)}
            </p>
          ))}
        </div>

        <p className="mt-auto text-sm leading-6 text-foreground/80">
          {treatment.summary}
        </p>
        <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
          <Link href="/book">Book Treatment</Link>
        </Button>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <PolicyBanner />
      </main>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-4 pb-20 sm:px-8">

        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              Space to unwind, restore and feel like yourself again.
            </h1>
            <p className="max-w-md text-lg leading-8 text-muted-foreground">
              A calm, high-end practice offering therapeutic massage in the heart
              of Camberley. Treatments from {formatGbp(50)}.
            </p>
            <a
              href="#treatments"
              className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-primary px-6 text-sm tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              View treatments
            </a>
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-accent sm:aspect-5/4 lg:aspect-4/5">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {featuredTreatments.map((treatment) => (
              <TreatmentPreview key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </section>
        <Footer />

      </main>
      <div className="flex w-full justify-end px-3 py-6">
        <Link href="/#" className="hover:text-slate-900 transition-colors">


          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >

            <FontAwesomeIcon
              icon={faChevronUp}
              className="text-slate-600 hover:text-slate-900 transition-colors"
              size="6x"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}