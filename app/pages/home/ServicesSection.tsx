
import { Link } from "react-router";

const eventTypes = [
  {
    number: "01",
    title: "Weddings",
    description:
      "Elegant celebrations, unforgettable moments, and a dance floor that stays alive.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    alt: "Elegant wedding celebration",
  },
  {
    number: "02",
    title: "Nightlife & Clubs",
    description:
      "High-energy sets, club anthems, and nonstop movement.",
    image:
      "https://images.unsplash.com/photo-1571266028243-d220c9c3b4c7?auto=format&fit=crop&w=900&q=85",
    alt: "DJ and nightlife atmosphere",
  },
  {
    number: "03",
    title: "Private Events",
    description:
      "Birthdays, graduations, anniversaries, and celebrations made personal.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=85",
    alt: "Guests enjoying a private party",
  },
  {
    number: "04",
    title: "Corporate Events",
    description:
      "Professional sound and an atmosphere that brings people together.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85",
    alt: "Professional event venue",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080611] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
    >
      {/* Ambient galaxy glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-700/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-pink-600/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-fuchsia-400 sm:text-sm">
            The Experience
          </p>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
            Sound for
            <br />
            Every{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Occasion.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            From intimate celebrations to packed dance floors, every
            event deserves its own energy. Tell me the vibe, and let's
            make it unforgettable.
          </p>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((event) => (
            <Link
              key={event.number}
              to="/services"
              className="group relative isolate min-h-[380px] overflow-hidden rounded-2xl border border-white/10 bg-[#130d20] transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-500/50 hover:shadow-[0_20px_60px_-20px_rgba(217,70,239,0.35)] sm:min-h-[440px]"
            >
              {/* Background image */}
              <img
                src={event.image}
                alt={event.alt}
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080611] via-[#080611]/40 to-black/10 transition-colors duration-500 group-hover:from-[#16091f]/95" />

              {/* Neon accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Card content */}
              <div className="flex h-full min-h-[380px] flex-col justify-between p-5 sm:min-h-[440px] sm:p-6">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold tracking-widest text-white/70">
                    / {event.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-lg transition-all duration-300 group-hover:border-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:rotate-45">
                    ↗
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                    {event.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                    {event.description}
                  </p>

                  <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300 transition-colors group-hover:text-white">
                    Explore Services
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-6 text-white/60 sm:text-base">
            Have something different in mind? Let's create the right
            atmosphere for your event.
          </p>

          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-fuchsia-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-fuchsia-500/30"
          >
            Book Your Event
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
