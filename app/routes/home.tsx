
import { Link } from "react-router";

const packages = [
  {
    name: "Standard",
    price: "$265",
    color: "orange",
    description: "Straight vibes. No extras. Still goin' crazy.",
    features: ["5 hours", "DJ performance"],
  },
  {
    name: "Performance",
    price: "$350",
    color: "pink",
    description: "For hosts, rappers, birthdays, and more.",
    features: ["5 hours", "2 microphones", "2 speakers"],
  },
  {
    name: "Deluxe",
    price: "$400",
    color: "cyan",
    description: "Now the party lookin' and soundin' right.",
    features: ["5 hours", "3 microphones", "3 speakers", "2 LED lights"],
  },
  {
    name: "Premium",
    price: "$450",
    color: "yellow",
    description: 'The full setup. The "Don\'t Play With Me" package.',
    features: ["5 hours", "5 microphones", "4 speakers", "6 LED lights"],
  },
];

const colorStyles: Record<string, string> = {
  orange:
    "border-orange-400/60 text-orange-400 hover:shadow-orange-500/20",
  pink: "border-fuchsia-400/60 text-fuchsia-400 hover:shadow-fuchsia-500/20",
  cyan: "border-cyan-400/60 text-cyan-300 hover:shadow-cyan-500/20",
  yellow:
    "border-yellow-300/60 text-yellow-300 hover:shadow-yellow-400/20",
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative isolate flex min-h-[680px] items-center border-b border-fuchsia-500/20 sm:min-h-[760px]">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_20%_30%,rgba(147,51,234,0.25),transparent_45%),radial-gradient(ellipse_at_85%_65%,rgba(6,182,212,0.16),transparent_40%)]" />

        <div className="absolute right-[-100px] top-20 -z-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-[-100px] -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="relative z-10">
            {/* <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-fuchsia-300 sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              North Philly to your event
            </div> */}

            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
              DJ WATCHYATONE
            </p>

            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.86] tracking-[-0.065em] sm:text-7xl md:text-8xl xl:text-9xl">
              YOUR EVENT.
              <span className="mt-3 block bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                YOUR VIBE.
              </span>
              <span className="mt-3 block">MY SOUND.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              From birthday parties to packed dance floors, I bring the
              sound, the energy, and the experience. You bring the people.
              I’ll handle the vibe.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-8 py-4 text-sm font-black uppercase tracking-wider shadow-[0_0_30px_rgba(217,70,239,0.25)] transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(217,70,239,0.45)]"
              >
                Book Your Experience <span aria-hidden="true">↗</span>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Explore Packages
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold uppercase tracking-widest text-white/45">
              <span>✳ Good Music</span>
              <span>✳ Real Energy</span>
              <span>✳ Your Kind of Party</span>
            </div>
          </div>

          {/* Replace this src with your actual DJ photo filename. */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-[45%] bg-fuchsia-500/20 blur-[75px]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-3xl border border-fuchsia-400/50 bg-gradient-to-b from-purple-950 via-black to-cyan-950 shadow-[0_0_50px_rgba(217,70,239,0.15)]">
              <img
                src="/spin1.jpeg"
                alt="DJ Tone performing behind the decks"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                  More than a DJ
                </p>
                <p className="mt-2 text-4xl font-black uppercase italic tracking-tight sm:text-5xl">
                  It’s an
                  <span className="block text-fuchsia-400">Experience.</span>
                </p>
              </div>
            </div>

            <div className="absolute -right-2 top-12 rounded-2xl border border-cyan-400/50 bg-black/90 px-4 py-3 shadow-[0_0_25px_rgba(34,211,238,0.15)] sm:-right-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                The mission
              </p>
              <p className="mt-1 text-sm font-black uppercase text-cyan-300">
                Keep it moving.
              </p>
            </div>

            <div className="absolute -left-2 bottom-24 rounded-2xl border border-fuchsia-400/50 bg-black/90 px-4 py-3 shadow-[0_0_25px_rgba(217,70,239,0.15)] sm:-left-5">
              <p className="text-xs font-black uppercase text-fuchsia-400">
                If it ain’t lit...
              </p>
              <p className="text-xs font-bold uppercase text-white">
                It ain’t booked.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
      </section>

      {/* BRAND STATEMENT */}
      <section className="border-b border-white/10 bg-[#080808] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-white/50">
            Your crowd. Your occasion. Your soundtrack.
          </p>
          <p className="text-sm font-black uppercase tracking-widest">
            <span className="text-orange-400">SPIN DAT SHI.</span>
            <span className="mx-2 text-fuchsia-400">✳</span>
            <span className="text-cyan-300">MAKE IT SHAKE.</span>
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                Choose your setup
              </p>
              <h2 className="mt-4 text-5xl font-black uppercase tracking-tight sm:text-7xl">
                THE <span className="text-fuchsia-400">PACKAGES.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/55">
              Different events call for different setups. Pick your package
              and let’s get your date on the calendar.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`group flex flex-col rounded-3xl border bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.04] hover:shadow-2xl ${colorStyles[pkg.color]}`}
              >
                <p className="text-xs font-black uppercase tracking-[0.25em]">
                  {pkg.name}
                </p>

                <p className="mt-5 text-5xl font-black tracking-tighter text-white sm:text-6xl">
                  {pkg.price}
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white/40">
                  5-hour package
                </p>

                <div className="my-6 h-px bg-white/10" />

                <ul className="flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-white/75"
                    >
                      <span className="mt-0.5 font-black">✳</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mb-6 mt-6 text-sm italic leading-6 text-white/55">
                  {pkg.description}
                </p>

                <Link
                  to="/booking"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-current px-5 py-3 text-xs font-black uppercase tracking-wider transition hover:bg-white/10"
                >
                  Choose Package <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-7 text-center text-xs leading-6 text-white/40">
            A $50 non-refundable booking deposit is listed on the current
            service flyer. Confirm availability and final details when booking.
          </p>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-fuchsia-400/30 bg-gradient-to-r from-purple-950/50 via-black to-fuchsia-950/30 p-6 sm:flex-row sm:p-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-400">
                Need something different?
              </p>
              <p className="mt-2 text-xl font-black uppercase sm:text-2xl">
                Let’s talk about your event.
              </p>
            </div>
            <Link
              to="/booking"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-wider text-black transition hover:bg-cyan-300"
            >
              Request a Booking <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT TONE */}
      <section className="border-y border-white/10 bg-[#080808] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl border border-cyan-400/20" />
            <img
              src="/headshot.jpeg"
              alt="Tone bringing energy to an event"
              className="relative aspect-[5/4] w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-5 right-5 rounded-xl border border-fuchsia-400/50 bg-black px-5 py-3">
              <p className="text-xs font-black uppercase tracking-widest text-fuchsia-400">
                North Philly
              </p>
              <p className="text-sm font-bold uppercase">Built different.</p>
            </div>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-fuchsia-400">
              Meet the mind behind the music
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
              NOT YOUR
              <span className="block text-cyan-300">TYPICAL DJ.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-white/60">
              I’m Tone, a North Philadelphia native, entrepreneur, and
              creative. My journey started with music production and took an
              unexpected turn behind the decks. Now I bring that background,
              my own taste, and a willingness to keep learning into every
              event I play.
            </p>

            <p className="mt-4 text-base font-bold leading-7 text-white">
              I might love the music I love, but when I’m booked, the mission
              is simple: read the room and make your event rock.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 border-b border-fuchsia-400 pb-2 text-sm font-black uppercase tracking-wider text-fuchsia-400 transition hover:text-cyan-300"
            >
              Get to know Tone <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE GALLERY */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                No talk. Just energy.
              </p>
              <h2 className="mt-4 text-5xl font-black uppercase tracking-tight sm:text-6xl">
                FEEL THE <span className="text-fuchsia-400">VIBE.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/50">
              Every crowd has its own rhythm. Here’s a look behind the decks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            <img
              src="/spin2.jpeg"
              alt="DJ Tone working the decks"
              className="aspect-[3/4] w-full rounded-2xl border border-white/10 object-cover transition duration-500 hover:scale-[1.02] hover:border-fuchsia-400/60"
              loading="lazy"
            />
            <img
              src="/spin3.jpeg"
              alt="DJ Tone performing live"
              className="aspect-[3/4] w-full rounded-2xl border border-white/10 object-cover transition duration-500 hover:scale-[1.02] hover:border-cyan-400/60"
              loading="lazy"
            />
            <img
              src="/dj-action-3.jpg"
              alt="DJ Tone bringing the sound to an event"
              className="col-span-2 aspect-[16/9] w-full rounded-2xl border border-white/10 object-cover transition duration-500 hover:border-fuchsia-400/60 md:col-span-1 md:aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      
<section className="relative isolate overflow-hidden border-t border-fuchsia-500/30 bg-[#050505] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
  {/* Neon background effects */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_50%,rgba(217,70,239,0.16),transparent_40%),radial-gradient(ellipse_at_85%_30%,rgba(6,182,212,0.12),transparent_40%)]" />

  <div className="absolute -right-24 top-10 -z-10 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-[100px]" />
  <div className="absolute -bottom-24 -left-24 -z-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.65fr] lg:gap-16">
      {/* Headline */}
      <div>
        <div className="inline-flex items-center gap-3 border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-fuchsia-300 sm:text-xs">
            Now accepting bookings
          </span>
        </div>

        <h2 className="mt-8 text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] sm:text-7xl md:text-8xl xl:text-9xl">
          YOU BRING
          <span className="mt-3 block text-white">THE CROWD.</span>
          <span className="mt-3 block bg-gradient-to-r from-orange-400 via-fuchsia-500 to-cyan-300 bg-clip-text text-transparent">
            I BRING
          </span>
          <span className="mt-3 block text-white">THE SOUND.</span>
        </h2>

        <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
          Birthdays. Private parties. Special occasions. Whatever you’re
          celebrating, let’s build the vibe around you. Tell me what you’re
          planning and let’s make it a night worth talking about.
        </p>

        <Link
          to="/booking"
          className="group mt-8 inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-7 py-5 text-xs font-black uppercase tracking-[0.16em] shadow-[0_0_30px_rgba(217,70,239,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(217,70,239,0.45)] sm:px-9 sm:text-sm"
        >
          Lock In Your Date
          <span className="text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">
            ↗
          </span>
        </Link>

        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
          Your event. Your vibe. My sound.
        </p>
      </div>

      {/* Booking information panel */}
      <div className="relative">
        <div className="absolute -inset-3 border border-cyan-400/20" />

        <div className="relative border border-fuchsia-400/50 bg-black/90 p-6 shadow-[0_0_35px_rgba(217,70,239,0.1)] sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
            The next move
          </p>

          <h3 className="mt-4 text-3xl font-black uppercase leading-tight sm:text-4xl">
            LET’S MAKE
            <span className="block text-fuchsia-400">SOMETHING SHAKE.</span>
          </h3>

          <div className="my-7 h-px bg-gradient-to-r from-fuchsia-500 via-purple-500 to-transparent" />

          <div className="space-y-6">
            <a
              href="mailto:djwatchyatone@gmail.com"
              className="group flex items-start gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-cyan-400/40 text-2xl text-cyan-300 transition group-hover:bg-cyan-400/10">
                @
              </span>
              <span className="min-w-0 pt-1">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  Email for bookings
                </span>
                <span className="mt-1 block break-all text-sm font-bold text-white transition group-hover:text-cyan-300 sm:text-base">
                  djwatchyatone@gmail.com
                </span>
              </span>
            </a>

            <a
              href="tel:+12674383363"
              className="group flex items-start gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-fuchsia-400/40 text-2xl text-fuchsia-400 transition group-hover:bg-fuchsia-400/10">
                ↗
              </span>
              <span className="pt-1">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                  Call or text
                </span>
                <span className="mt-1 block text-base font-bold text-white transition group-hover:text-fuchsia-300">
                  (267) 438-3363
                </span>
              </span>
            </a>
          </div>

          <div className="mt-8 border border-orange-400/40 bg-orange-400/5 p-4">
            <p className="text-xs font-black uppercase tracking-wider text-orange-400">
              Before we get started
            </p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Have your event date, location, and preferred package ready.
              A $50 deposit is listed in the booking terms to secure your date.
            </p>
          </div>

          <Link
            to="/booking"
            className="mt-6 flex w-full items-center justify-between border border-white/20 px-5 py-4 text-xs font-black uppercase tracking-[0.15em] transition hover:border-cyan-300 hover:bg-cyan-300/5 hover:text-cyan-300"
          >
            Start Your Booking
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom tagline */}
    <div className="mt-16 border-t border-white/10 pt-6 sm:mt-20">
      <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-white/40">
          DJ WATCHYATONE · WATCHYATONE EXPERIENCE
        </p>
        <p className="text-xs font-black uppercase italic tracking-wider text-fuchsia-400 sm:text-sm">
          If it ain’t lit, it ain’t booked.
        </p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
