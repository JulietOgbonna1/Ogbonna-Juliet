import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, intro, align = "left", as: H = "h2" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-brand" aria-hidden />
        {eyebrow}
      </p>
      <H className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">{title}</H>
      {intro && <p className="mt-5 text-pretty leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
