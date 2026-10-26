
import { Link } from "react-router";

const services = [
  {
    number: "01",
    title: "Weddings",
    description:
      "From cocktail hour to the last dance, create a soundtrack that makes your celebration unforgettable.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
    alt: "Elegant wedding celebration",
    tags: ["Ceremony", "Reception", "Dance floor"],
  },
  {
    number: "02",
    title: "Private Events",
    description:
      "Birthdays, graduations, anniversaries, and special celebrations deserve their own energy.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=85",
    alt: "Guests celebrating at a private event",
    tags: ["Birthdays", "Graduations", "Celebrations"],
  },
  {
    number: "03",
    title: "Nightlife & Clubs",
    description:
      "Big energy, seamless mixes, and music that keeps the room moving.",
    image:
      "https://images.unsplash.com/photo-1571266028243-d220c9c3b4c7?auto=format&fit=crop&w=1000&q=85",
    alt: "DJ performing in a nightclub",
    tags: ["Clubs", "Lounge events", "Nightlife"],
  },
  {
    number: "04",
    title: "Corporate Events",
    description:
      "Set the right tone for company celebrations, networking events, and professional gatherings.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional event setup",
    tags: ["Company parties", "Networking", "Brand events"],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080611] text-white">
      {/* HERO */}
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden px-5 py-24 sm:px-8 lg:min-h-[600px] lg:px-12">
        <img
          src="https://images.unsplash.com/photo-1571266028243-d220c9c3b4c7?auto=format&fit=crop&w=2000&q=90"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080611] via-[#080611]/85 to-[#080611]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080611] via-transparent to-black/20" />

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-fuchsia-400 sm:text-sm">
              The Soundtrack Starts Here
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
              Your Event.
              <br />
              Your Vibe.
              <br />
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                My Sound.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Every event has a different energy. Find the DJ experience
              that fits yours, and let's make it a moment worth remembering.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-fuchsia-500/25"
              >
                Book Your Event <span>↗</span>
              </Link>

              <a
                href="#event-services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold transition hover:border-fuchsia-400/70 hover:bg-white/10"
              >
                Explore Services ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT SERVICES */}
      <section
        id="event-services"
        className="relative px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-purple-700/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-fuchsia-400">
                What I Do
              </p>
              <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                One DJ.
                <br />
                <span className="text-white/45">Every Kind of Energy.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/60 sm:text-base">
              Whether you're planning an intimate gathering or a packed
              dance floor, the music should feel right for your event.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative isolate min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#130d20] sm:min-h-[480px]"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080611] via-[#080611]/65 to-black/10" />

                <div className="flex min-h-[420px] flex-col justify-between p-6 sm:min-h-[480px] sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-white/65">
                      / {service.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-lg transition group-hover:border-fuchsia-400 group-hover:bg-fuchsia-500">
                      ↗
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black uppercase sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs text-white/75 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/booking"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-300 transition hover:text-white"
                    >
                      Enquire About This Service <span>↗</span>
                    </Link>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500 opacity-60 transition group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE */}
      <section className="border-y border-white/10 bg-[#0d0918] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-blue-300">
              The WATCHYATONE Experience
            </p>
            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              It's Not Just
              <br />
              <span className="bg-gradient-to-r from-fuchsia-500 to-blue-400 bg-clip-text text-transparent">
                About the Music.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/65">
              It's about understanding the crowd, matching the moment,
              and building an atmosphere that feels right. Your event
              deserves a soundtrack that reflects your vision.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-bold">Your Style</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Music shaped around your event and preferences.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-bold">Your Energy</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  A soundtrack made for the atmosphere you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/15 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-fuchsia-400">
            Let's Make It Happen
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight sm:text-6xl">
            Ready to Set
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              The Tone?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60">
            Tell me what you're planning, and let's find the right
            sound for your event.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-8 py-4 text-sm font-bold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20"
          >
            Start Your Booking <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
