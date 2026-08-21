import Link from "next/link";

type HeroProps = {
  settings: {
    name: string;
    title: string;
    bio: string;
    location: string | null;
    availability: string | null;
  } | null;
};

function formatHeroTitle(title: string) {
  const normalized = title
    .replace(/full[- ]?stack/gi, "SOFTWARE")
    .replace(/developer/gi, "ENGINEER")
    .trim();

  return normalized;
}

export default function Hero({
  settings,
}: HeroProps) {
  const title = formatHeroTitle(
    settings?.title ??
      "UI/UX & Software Engineer"
  );

  const availability =
    settings?.availability ??
    "Available for opportunities";

  const bio =
    settings?.bio ??
    "I design and build software from interface to database, focusing on usability, maintainability, and practical engineering.";

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-66px)] items-center px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* AVAILABILITY */}
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#A3FF12]" />

          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-neutral-500">
            {availability}
          </p>
        </div>

        {/* HERO TITLE */}
        <div className="mt-10">
          <h1
            className="
              max-w-5xl
              whitespace-pre-line
              text-[clamp(4rem,8vw,8rem)]
              font-semibold
              uppercase
              leading-[0.78]
              tracking-[-0.055em]
              text-[#F4F4F2]
            "
          >
            {title}
          </h1>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-neutral-800" />

        {/* LOWER CONTENT */}
        <div className="grid gap-10 pt-8 md:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}
          <div>
            <div>
  <p className="font-mono text-[20px] uppercase tracking-[0.22em] text-neutral-500">
    {settings?.name ?? "Gabriell Montero"}
  </p>

 
</div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="
                  bg-[#A3FF12]
                  px-6
                  py-3.5
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-black
                  transition
                  hover:bg-white
                "
              >
                Explore Work →
              </Link>

              <Link
                href="/about"
                className="
                  border
                  border-neutral-700
                  px-6
                  py-3.5
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-neutral-300
                  transition
                  hover:border-[#A3FF12]
                  hover:text-[#A3FF12]
                "
              >
                About Me
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:flex md:justify-end">
            <p className="max-w-md text-sm leading-7 text-neutral-400">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}