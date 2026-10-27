
import { useState } from "react";
import { Link, NavLink } from "react-router";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Tone", to: "/about" },
  { label: "Services", to: "/services" },
  // { label: "The Experience", to: "/experience" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-fuchsia-500/20 bg-black/95 text-white shadow-[0_4px_30px_rgba(217,70,239,0.08)] backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-3"
          aria-label="WatchYaTone Experience home"
        >
          <img
            src="/logo.png"
            alt="WatchYaTone Experience logo"
            className="h-12 w-auto max-w-[180px] object-contain transition duration-300 group-hover:scale-105 sm:h-14"
          />

          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-black uppercase tracking-[0.16em]">
              WATCHYATONE
            </span>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-fuchsia-400">
              Experience
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 ${
                  isActive
                    ? "text-fuchsia-400"
                    : "text-white/70 hover:text-cyan-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop booking CTA */}
        <Link
          to="/booking"
          className="hidden rounded-full border border-fuchsia-400 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-6 py-3 text-xs font-black uppercase tracking-[0.12em] shadow-[0_0_20px_rgba(217,70,239,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(217,70,239,0.5)] lg:inline-flex"
        >
          Book Tone <span className="ml-2" aria-hidden="true">↗</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-500/40 text-fuchsia-300 transition hover:border-cyan-400 hover:text-cyan-300 lg:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-fuchsia-500/20 bg-black px-5 pb-6 pt-3 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-colors ${
                    isActive
                      ? "text-fuchsia-400"
                      : "text-white/75 hover:text-cyan-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-6 py-4 text-sm font-black uppercase tracking-[0.15em] shadow-[0_0_20px_rgba(217,70,239,0.2)] transition hover:shadow-[0_0_28px_rgba(217,70,239,0.4)]"
            >
              Book Tone <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
