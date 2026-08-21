const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PHP",
  "Python",
  "Java",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "Git",
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="border-t border-neutral-800 px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          {/* LEFT */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
              03 / Stack
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#F4F4F2] md:text-5xl">
              Tools I use
              <br />
              to build.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-400 md:text-base">
              Technologies I use across front-end development, back-end
              systems, databases, and software engineering projects.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex content-start flex-wrap gap-3">
            {stack.map((technology) => (
              <span
                key={technology}
                className="
                  relative
                  inline-flex
                  cursor-default
                  items-center
                  rounded-full
                  border
                  border-neutral-700
                  bg-transparent
                  px-4
                  py-2
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.12em]
                  text-neutral-300
                  transition-all
                  duration-200
                  ease-out
                  hover:-translate-y-0.5
                  hover:border-[#A3FF12]
                  hover:bg-[#A3FF12]
                  hover:text-black
                  hover:shadow-[0_0_20px_rgba(163,255,18,0.18)]
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}