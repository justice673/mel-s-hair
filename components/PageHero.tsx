type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <div className="border-b border-line px-5 pb-10 pt-10 sm:px-8 lg:px-10 lg:pb-12 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cocoa">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-[1.05rem] font-light leading-relaxed text-cocoa-muted">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
