
import { useState } from "react";
import { Link } from "react-router";

const eventTypes = [
  "Wedding",
  "Private Party",
  "Birthday Celebration",
  "Nightclub / Lounge",
  "Corporate Event",
  "School Event",
  "Festival / Community Event",
  "Other",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Front-end demo only.
    // Connect a form service or backend to receive real inquiries.
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080611] text-white">
      {/* HERO */}
      <section className="relative isolate px-5 pb-14 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-purple-700/25 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-pink-600/15 blur-[120px]"
        />

        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-fuchsia-400 sm:text-sm">
            Let's Make It Happen
          </p>

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
            Your Event.
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Your Soundtrack.
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Tell me what you're planning, the vibe you're going for, and
              the moments you want people to remember. Let's set the tone.
            </p>

            <p className="shrink-0 text-sm text-white/40">
              Weddings · Parties · Nightlife · More
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING CONTENT */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#100b20] p-7 sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl"
              />

              <p className="relative text-xs font-bold uppercase tracking-[0.3em] text-blue-300">
                The Booking Process
              </p>

              <h2 className="relative mt-5 text-3xl font-black uppercase leading-tight">
                Let's Get
                <br />
                The Party
                <br />
                <span className="text-fuchsia-400">Started.</span>
              </h2>

              <div className="relative mt-8 space-y-6">
                {[
                  {
                    number: "01",
                    title: "Tell Me the Details",
                    description:
                      "Share your event date, location, and what you have in mind.",
                  },
                  {
                    number: "02",
                    title: "Let's Connect",
                    description:
                      "We'll discuss your vision, availability, and event needs.",
                  },
                  {
                    number: "03",
                    title: "Set the Tone",
                    description:
                      "Once the details are confirmed, we can work toward your event.",
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-xs font-bold text-fuchsia-300">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/50">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-9 border-t border-white/10 pt-6">
                <p className="text-sm text-white/50">
                  Want to explore services first?
                </p>
                <Link
                  to="/services"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-300 transition hover:text-white"
                >
                  Explore DJ Services <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <div
            id="booking-form"
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-9 lg:p-10"
          >
            {submitted ? (
              <div
                role="status"
                className="flex min-h-[420px] flex-col items-start justify-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia-500/15 text-2xl text-fuchsia-300">
                  ✓
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-400">
                  Inquiry Form Demo
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
                  Looking Good.
                </h2>
                <p className="mt-4 max-w-lg leading-7 text-white/60">
                  The form passed its front-end submission step. This demo
                  has not sent or saved your inquiry. Connect a form service
                  or backend before publishing so booking requests reach you.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-white/15 px-6 py-3 text-sm font-bold transition hover:border-fuchsia-400"
                >
                  Back to Form
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 border-b border-white/10 pb-7">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-400">
                    Booking Inquiry
                  </p>
                  <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
                    Tell Me About It.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    Fill out the details below to get the conversation
                    started. Fields marked with * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* CONTACT */}
                  <fieldset>
                    <legend className="mb-5 text-lg font-bold">
                      <span className="mr-3 text-fuchsia-400">01 /</span>
                      Your Details
                    </legend>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-sm text-white/75">
                        Full Name *
                        <input
                          className={inputClass}
                          name="name"
                          autoComplete="name"
                          placeholder="Your name"
                          required
                        />
                      </label>

                      <label className="block text-sm text-white/75">
                        Email Address *
                        <input
                          className={inputClass}
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          required
                        />
                      </label>

                      <label className="block text-sm text-white/75 sm:col-span-2">
                        Phone Number
                        <input
                          className={inputClass}
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="Your preferred contact number"
                        />
                      </label>
                    </div>
                  </fieldset>

                  {/* EVENT DETAILS */}
                  <fieldset>
                    <legend className="mb-5 text-lg font-bold">
                      <span className="mr-3 text-fuchsia-400">02 /</span>
                      Event Details
                    </legend>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-sm text-white/75 sm:col-span-2">
                        Type of Event *
                        <select
                          className={inputClass}
                          name="eventType"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled className="bg-[#100b20]">
                            Select your event
                          </option>
                          {eventTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                              className="bg-[#100b20]"
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="block text-sm text-white/75">
                        Event Date *
                        <input
                          className={inputClass}
                          type="date"
                          name="eventDate"
                          min={new Date().toLocaleDateString("en-CA")}
                          required
                        />
                      </label>

                      <label className="block text-sm text-white/75">
                        Estimated Guest Count
                        <input
                          className={inputClass}
                          type="number"
                          name="guestCount"
                          min="1"
                          placeholder="e.g. 100"
                        />
                      </label>

                      <label className="block text-sm text-white/75 sm:col-span-2">
                        Venue or Event Location *
                        <input
                          className={inputClass}
                          name="location"
                          placeholder="Venue name, city, or address"
                          required
                        />
                      </label>

                      <label className="block text-sm text-white/75">
                        Event Start Time
                        <input
                          className={inputClass}
                          type="time"
                          name="startTime"
                        />
                      </label>

                      <label className="block text-sm text-white/75">
                        Event End Time
                        <input
                          className={inputClass}
                          type="time"
                          name="endTime"
                        />
                      </label>
                    </div>
                  </fieldset>

                  {/* VISION & BUDGET */}
                  <fieldset>
                    <legend className="mb-5 text-lg font-bold">
                      <span className="mr-3 text-fuchsia-400">03 /</span>
                      Your Vision
                    </legend>

                    <div className="space-y-5">
                      <label className="block text-sm text-white/75">
                        Estimated DJ Budget
                        <select
                          className={inputClass}
                          name="budget"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-[#100b20]">
                            Select a budget range
                          </option>
                          <option value="under-500" className="bg-[#100b20]">
                            Under $500
                          </option>
                          <option value="500-1000" className="bg-[#100b20]">
                            $500–$1,000
                          </option>
                          <option value="1000-2000" className="bg-[#100b20]">
                            $1,000–$2,000
                          </option>
                          <option value="2000-plus" className="bg-[#100b20]">
                            $2,000+
                          </option>
                          <option value="discuss" className="bg-[#100b20]">
                            Let's discuss
                          </option>
                        </select>
                      </label>

                      <label className="block text-sm text-white/75">
                        Describe Your Event *
                        <textarea
                          className={`${inputClass} min-h-32 resize-y`}
                          name="eventDescription"
                          placeholder="What's the occasion? What kind of atmosphere are you imagining?"
                          rows={5}
                          required
                        />
                      </label>

                      <label className="block text-sm text-white/75">
                        Music Preferences or Special Requests
                        <textarea
                          className={`${inputClass} min-h-24 resize-y`}
                          name="musicPreferences"
                          placeholder="Favorite genres, must-play songs, do-not-play songs..."
                          rows={3}
                        />
                      </label>

                      <label className="flex items-start gap-3 text-sm leading-6 text-white/60">
                        <input
                          type="checkbox"
                          name="contactConsent"
                          required
                          className="mt-1 h-4 w-4 shrink-0 accent-fuchsia-500"
                        />
                        <span>
                          I agree to be contacted about this event inquiry. *
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 px-7 py-4 text-sm font-black uppercase tracking-wider transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20"
                  >
                    Submit Booking Inquiry
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </button>

                  <p className="text-center text-xs leading-5 text-white/35">
                    Submitting this demo form does not send your information.
                    Booking requests will need a connected form handler.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
