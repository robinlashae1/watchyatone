
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-black text-white">

      {/* Galaxy background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/dj-watchyatone-hero.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      <div className="mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">

        {/* Availability label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-500" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-300 sm:text-sm">
            Music / Energy / Experience
          </p>
        </div>

        {/* Main headline */}
        <h1 className="max-w-5xl font-black uppercase leading-[0.85] tracking-tight">
          <span className="block text-4xl italic text-fuchsia-500 sm:text-6xl lg:text-7xl">
            DJ
          </span>

          <span className="mt-2 block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl">
            <span className="bg-gradient-to-r from-white via-fuchsia-100 to-blue-400 bg-clip-text text-transparent">
              WATCHYATONE
            </span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] sm:text-base sm:tracking-[0.3em]">
          Your event. Your vibe. My sound.
        </p>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          From intimate gatherings to massive dance floors,
          I bring the right energy to every occasion.
        </p>

        {/* Calls to action */}
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/booking"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-sm bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 px-7 py-4 text-sm font-bold uppercase tracking-widest shadow-lg shadow-fuchsia-950/40 transition duration-300 hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-400"
          >
            Book your event
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>

          <Link
            to="/services"
            className="inline-flex min-h-14 items-center justify-center gap-3 border border-fuchsia-500/60 bg-black/40 px-7 py-4 text-sm font-bold uppercase tracking-widest transition hover:border-blue-400 hover:bg-purple-950/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Explore services
            <span aria-hidden="true">↓</span>
          </Link>
        </div>

        {/* Event types */}
        <div className="mt-14 border-t border-white/15 pt-5">
          <p className="text-xs font-medium uppercase leading-7 tracking-[0.15em] text-slate-300 sm:tracking-[0.22em]">
            Weddings <span className="px-2 text-fuchsia-500">•</span>
            Private Events <span className="px-2 text-purple-400">•</span>
            Nightlife <span className="px-2 text-blue-400">•</span>
            Corporate <span className="px-2 text-fuchsia-500">•</span>
            More
          </p>
        </div>
      </div>

      {/* Ambient neon accents */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-64 w-64 rounded-full bg-purple-700/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-48 w-48 rounded-full bg-blue-600/20 blur-[100px]"
        aria-hidden="true"
      />
    </section>
  );
}
