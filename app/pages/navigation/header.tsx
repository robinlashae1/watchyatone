
import { useState } from "react";
import { Link } from "react-router";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#080611]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* Logo */}
        <Link
          to="/"
          aria-label="DJ WATCHYATONE home"
          className="group flex shrink-0 flex-col leading-none"
          onClick={() => setMenuOpen(false)}
        >
          <span className="mb-1 text-[9px] font-bold uppercase tracking-[0.45em] text-fuchsia-400">
            DJ
          </span>
          <span className="text-xl font-black tracking-tight sm:text-2xl">
            WATCHYA
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              TONE
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-white/70 transition-colors hover:text-fuchsia-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop booking button */}
        <Link
          to="/booking"
          className="hidden rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-fuchsia-900/30 transition-all hover:-translate-y-0.5 hover:shadow-fuchsia-500/30 md:inline-flex"
        >
          Book Your Event <span className="ml-2">↗</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl transition-colors hover:border-fuchsia-500/60 hover:text-fuchsia-400 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#080611] px-5 pb-6 pt-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-4 text-sm font-medium text-white/80 transition-colors hover:text-fuchsia-400"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="mt-5 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-6 py-3.5 text-center text-sm font-bold text-white"
            >
              Book Your Event ↗
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
