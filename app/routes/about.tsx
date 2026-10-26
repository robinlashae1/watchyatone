
import { Link } from "react-router";

const values = [
  {
    number: "01",
    title: "Read the Room",
    description:
      "Every crowd is different. The goal is to understand the energy and choose music that fits the moment.",
  },
  {
    number: "02",
    title: "Make It Personal",
    description:
      "Your event should feel like yours. Music and atmosphere should reflect your vision, your style, and your people.",
  },
  {
    number: "03",
    title: "Create the Moment",
    description:
      "It's more than a playlist. It's the build-up, the transitions, the singalongs, and the memories made on the dance floor.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080611] text-white">
      {/* ABOUT HERO */}
      <section className="relative isolate overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[120px]"
        />

        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-fuchsia-400 sm:text-sm">
            Behind the Sound
          </p>

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
            More Than a DJ.
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              It's an Experience.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Every event has a story. Every crowd has a vibe. Get to know
            the approach behind DJ WATCHYATONE and the sound that brings
            people together.
          </p>
        </div>
      </section>

      {/* DJ STORY */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-purple-600/30 via-fuchsia-500/10 to-blue-500/30 blur-xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1571266028243-d220c9c3b4c7?auto=format&fit=crop&w=1200&q=90"
                alt="DJ performing behind a mixing console"
                className="aspect-[4/5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080611]/90 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-300">
                  DJ WATCHYATONE
                </p>
                <p className="mt-2 text-2xl font-black uppercase sm:text-3xl">
                  Feel the sound.
                  <br />
                  Own the moment.
                </p>
              </div>
            </div>
          </div>

          {/* Story copy */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-blue-300">
              The Story
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              The Right Sound
              <br />
              Changes{" "}
              <span className="text-fuchsia-400">Everything.</span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-white/65">
              <p>
                DJ WATCHYATONE is built around one idea: music can
                change the entire energy of a room.
              </p>

              <p>
                From the first song to the final track, every moment is
                an opportunity to bring people together, create a
                connection, and make an event feel unforgettable.
              </p>

              <p>
                Whether it's a celebration with family and friends or a
                packed dance floor, the mission stays the same: bring
                the right sound, respect the vibe, and make the moment
                count.
              </p>
            </div>

            <Link
              to="/booking"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-fuchsia-500/25"
            >
              Let's Plan Your Event <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="relative border-y border-white/10 bg-[#0d0918] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-fuchsia-400">
              The Philosophy
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              The Vibe Is
              <br />
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Never an Accident.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
              The best experiences come from paying attention to the
              details and knowing what makes a moment special.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-500/40 hover:bg-white/[0.05] sm:p-8"
              >
                <p className="text-sm font-bold tracking-widest text-fuchsia-400">
                  / {value.number}
                </p>

                <h3 className="mt-8 text-2xl font-black uppercase">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {value.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 transition-all duration-300 group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[110px]"
        />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-fuchsia-400">
            Your Event. Your Vibe.
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight sm:text-6xl">
            Let's Make
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              It Unforgettable.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60">
            Have an event in mind? Let's talk about the sound,
            the atmosphere, and the experience you want to create.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-8 py-4 text-sm font-bold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20"
          >
            Book DJ WATCHYATONE <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
