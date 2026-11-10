"use client";

import { FormEvent, useState } from "react";
import { PiPaperPlaneTiltLight } from "react-icons/pi";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line px-6 py-12 text-center">
        <p className="font-heading text-3xl font-medium text-cocoa">
          Message received
        </p>
        <p className="mt-3 text-[1rem] font-light text-cocoa-muted">
          Mel’s team will get back to you soon — usually within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
            Name
          </span>
          <input
            required
            name="name"
            className="mt-2 w-full border-b border-line-strong bg-transparent py-3 text-cocoa outline-none placeholder:text-cocoa-muted/60"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
            Phone / WhatsApp
          </span>
          <input
            required
            name="phone"
            className="mt-2 w-full border-b border-line-strong bg-transparent py-3 text-cocoa outline-none placeholder:text-cocoa-muted/60"
            placeholder="+237…"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full border-b border-line-strong bg-transparent py-3 text-cocoa outline-none placeholder:text-cocoa-muted/60"
          placeholder="you@email.com"
        />
      </label>

      <label className="block">
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-y border-b border-line-strong bg-transparent py-3 text-cocoa outline-none placeholder:text-cocoa-muted/60"
          placeholder="How can we help?"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center gap-2.5 bg-cocoa px-6 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-pearl transition-colors hover:bg-cocoa-soft"
      >
        Send message
        <PiPaperPlaneTiltLight size={16} />
      </button>
    </form>
  );
}
