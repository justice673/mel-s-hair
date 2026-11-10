import {
  PiDropLight,
  PiSealCheckLight,
  PiSparkleLight,
  PiTruckLight,
} from "react-icons/pi";

const pillars = [
  {
    title: "Melt-ready lace",
    copy: "Soft HD and transparent lace that blends clean for installs that look lived-in, not costume.",
    icon: PiSealCheckLight,
  },
  {
    title: "True-to-feel textures",
    copy: "Straight, wavy, and curly units selected for movement, soft hand-feel, and natural density.",
    icon: PiDropLight,
  },
  {
    title: "Glam without stress",
    copy: "Glueless options and beginner-friendly units so you can switch looks without the salon wait.",
    icon: PiSparkleLight,
  },
  {
    title: "Carefully shipped",
    copy: "Packed with care and tracked to your door — because luxury starts before the box opens.",
    icon: PiTruckLight,
  },
];

export default function WhyMels() {
  return (
    <section className="bg-cocoa px-5 py-24 text-pearl sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne">
            The Mel&apos;s standard
          </p>
          <h2 className="mt-4 font-heading text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.02em]">
            Why women stay with Mel&apos;s
          </h2>
          <p className="mt-5 max-w-lg text-[1.02rem] font-light leading-relaxed text-pearl/70">
            Quiet luxury details in every unit — so your hair feels as refined as
            it looks.
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title}>
                <Icon size={26} className="text-champagne" />
                <h3 className="mt-5 font-heading text-2xl font-medium tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[0.95rem] font-light leading-relaxed text-pearl/65">
                  {pillar.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
