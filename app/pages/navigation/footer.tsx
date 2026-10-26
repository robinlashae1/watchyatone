
import { Link } from "react-router";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Weddings",
  "Private Events",
  "Nightlife & Clubs",
  "Corporate Events",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05040b] text-white">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-purple-700/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main CTA */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-fuchsia-400">
              Got a date in mind?
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              Let's Set
              <br />
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                The Tone.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
              Big celebration or intimate gathering, let's make your event
              sound like something special.
            </p>
          </div>

          <Link
            to="/booking"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-7 py-4 text-sm font-black uppercase tracking-wide transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20"
          >
            Book DJ WATCHYATONE
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Footer columns */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10 lg:py-16">
          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label="DJ WATCHYATONE home"
              className="inline-block text-2xl font-black uppercase tracking-tight"
            >
              DJ
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}WATCHYATONE
              </span>
              <span className="ml-1 inline-block h-2 w-2 rounded-full bg-fuchsia-500 shadow-[0_0_12px_rgba(217,70,239,0.9)]" />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-white/45">
              Your event. Your vibe. My sound. Creating memorable experiences
              through music, energy, and the right atmosphere.
            </p>

            {/* Replace # with your actual social profile URLs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-white/70 transition hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 hover:text-fuchsia-300"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-white/70 transition hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 hover:text-fuchsia-300"
              >
                TT
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-white/70 transition hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 hover:text-fuchsia-300"
              >
                YT
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              Explore
            </h3>

            <ul className="mt-5 space-y-4">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/50 transition hover:text-fuchsia-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              Services
            </h3>

            <ul className="mt-5 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-white/50 transition hover:text-fuchsia-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              Get in Touch
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/50">
              Have an event coming up? Start with a booking inquiry and share
              your vision.
            </p>

            <Link
              to="/booking"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-300 transition hover:text-white"
            >
              Start an Inquiry <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} DJ WATCHYATONE. All rights reserved.</p>

          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex w-fit items-center gap-2 transition hover:text-white"
          >
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
