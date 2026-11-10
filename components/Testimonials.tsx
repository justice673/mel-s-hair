import { PiQuotesLight } from "react-icons/pi";

const testimonials = [
  {
    quote:
      "The lace melted so clean I forgot I was wearing a unit. Soft, full, and somehow still lightweight.",
    name: "Amina K.",
    detail: "Espresso Body Wave",
  },
  {
    quote:
      "I ordered the bob for a last-minute event and it arrived packaged like a gift. Install took minutes.",
    name: "Jordan M.",
    detail: "Soft Glam Bob",
  },
  {
    quote:
      "Finally a store that feels elevated without the attitude. Texture is real, density is right, and Mel gets it.",
    name: "Sade O.",
    detail: "Cocoa Soft Curl",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-pearl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
            Love notes
          </p>
          <h2 className="mt-4 font-heading text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cocoa">
            Worn, loved, reordered
          </h2>
        </div>

        <div className="mt-14 grid gap-10 border-t border-line pt-14 md:grid-cols-3 md:gap-12">
          {testimonials.map((item) => (
            <figure key={item.name} className="flex flex-col">
              <PiQuotesLight size={28} className="text-champagne-deep" />
              <blockquote className="mt-5 flex-1 font-heading text-[1.55rem] font-medium leading-snug tracking-tight text-cocoa">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <p className="text-[0.9rem] font-medium text-cocoa">{item.name}</p>
                <p className="mt-1 text-[0.78rem] tracking-[0.06em] text-cocoa-muted">
                  {item.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
