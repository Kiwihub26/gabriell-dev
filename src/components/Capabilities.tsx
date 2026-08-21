const capabilities = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "Building complete web applications from interface design to server-side logic, authentication, database integration, and deployment.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "PHP",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    number: "02",
    title: "Front-End Engineering",
    description:
      "Creating responsive, accessible, and interactive user interfaces with a strong focus on usability, structure, and visual consistency.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "UI Implementation",
    ],
  },
  {
    number: "03",
    title: "Back-End & Database",
    description:
      "Developing application logic, data models, authentication workflows, CRUD operations, and relational database systems.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "PDO",
      "Authentication",
      "Database Design",
    ],
  },
  {
    number: "04",
    title: "Software Engineering",
    description:
      "Applying structured software development practices including requirements analysis, system design, testing, documentation, and maintainable architecture.",
    skills: [
      "SDLC",
      "System Analysis",
      "UML",
      "Testing",
      "Documentation",
      "Git",
    ],
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-neutral-800 px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
              02 / Capabilities
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#F4F4F2] md:text-5xl">
              What I can
              <br />
              build.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-sm leading-7 text-neutral-400 md:text-base">
              My work combines interface development, application logic,
              database design, and software engineering practices to create
              practical and maintainable digital systems.
            </p>
          </div>
        </div>

        {/* CAPABILITY GRID */}
        <div className="grid border-l border-t border-neutral-800 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="
                group
                relative
                border-b
                border-r
                border-neutral-800
                p-7
                transition-all
                duration-300
                md:p-9
                lg:p-10
                hover:bg-neutral-900/50
              "
            >
              {/* TOP ROW */}
              <div className="flex items-start justify-between gap-6">
                <span
                  className="
                    font-mono
                    text-xs
                    tracking-[0.15em]
                    text-neutral-600
                    transition-colors
                    duration-300
                    group-hover:text-[#A3FF12]
                  "
                >
                  {capability.number}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    text-xl
                    text-neutral-700
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:text-[#A3FF12]
                  "
                >
                  ↗
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-12 max-w-sm text-2xl font-medium tracking-tight text-[#F4F4F2] md:text-3xl">
                {capability.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-400 md:text-base">
                {capability.description}
              </p>

              {/* SKILLS */}
              <div className="mt-8 flex flex-wrap gap-2">
                {capability.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      relative
                      inline-flex
                      cursor-default
                      items-center
                      rounded-full
                      border
                      border-neutral-700
                      bg-transparent
                      px-3
                      py-1.5
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-neutral-400
                      transition-all
                      duration-200
                      ease-out
                      hover:-translate-y-0.5
                      hover:border-[#A3FF12]
                      hover:bg-[#A3FF12]
                      hover:text-black
                      hover:shadow-[0_0_18px_rgba(163,255,18,0.16)]
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}