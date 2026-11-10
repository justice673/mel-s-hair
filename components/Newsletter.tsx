"use client";

import { FormEvent, useState } from "react";
import { PiPaperPlaneTiltLight } from "react-icons/pi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  }

  return (
    <section className="bg-blush/50 px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
            Stay in the loop
          </p>
          <h2 className="mt-4 font-heading text-[clamp(2.4rem,5vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cocoa">
            New drops, soft launches, early access
          </h2>
          <p className="mt-5 max-w-md text-[1.02rem] font-light leading-relaxed text-cocoa-muted">
            Join the Mel&apos;s list for texture drops and styling notes — no
            noise, just hair you&apos;ll actually want.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="w-full max-w-md border-b border-cocoa/25 pb-3"
        >
          {sent ? (
            <p className="py-2 font-heading text-2xl font-medium text-cocoa">
              You&apos;re on the list. Welcome in.
            </p>
          ) : (
            <div className="flex items-center gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent py-3 text-[1rem] text-cocoa outline-none placeholder:text-cocoa-muted/70"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex items-center gap-2 py-3 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-cocoa transition-opacity hover:opacity-70"
              >
                Join
                <PiPaperPlaneTiltLight size={18} />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
