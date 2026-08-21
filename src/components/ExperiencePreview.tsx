const experiences = [
  {
    period: "2026 — Present",
    role: "Computer Science Faculty",
    company: "PHINMA Saint Jude College Dasmariñas",
    description:
      "Teaching software development and computer science subjects including Information Management, Object-Oriented Programming, Data Structures and Algorithms, Algorithms and Complexity, and Software Engineering.",
    technologies: [
      "Java",
      "Python",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
    ],
  },
  {
    period: "2024 — 2026",
    role: "Customer Service Officer",
    company: "MobileCare Phils. Inc. — Power Mac Center",
    description:
      "Handled customer concerns, device service coordination, documentation, technical service workflows, and communication between customers and technical teams.",
    technologies: [
      "Customer Support",
      "Technical Support",
      "Documentation",
      "Service Management",
    ],
  },
  {
    period: "Internship",
    role: "Software / Technical Intern",
    company: "Professional Internship Experience",
    description:
      "Supported technical operations, software-related tasks, documentation, troubleshooting, and day-to-day technology workflows in a professional environment.",
    technologies: [
      "Technical Support",
      "Troubleshooting",
      "Documentation",
      "Team Collaboration",
    ],
  },
];

export default function ExperiencePreview() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-800 px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-14 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
              04 / Experience
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#F4F4F2] md:text-5xl">
              Where I&apos;ve
              <br />
              worked.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-sm leading-7 text-neutral-400 md:text-base">
              A mix of software development, technical work, education, and
              customer-facing experience that shapes how I approach building
              practical systems.
            </p>
          </div>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="border-t border-neutral-800">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.role}-${index}`}
              className="
                group
                grid
                gap-6
                border-b
                border-neutral-800
                py-10
                transition-colors
                duration-300
                md:grid-cols-[0.35fr_0.65fr]
              "
            >
              {/* PERIOD */}
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500 transition-colors duration-300 group-hover:text-[#A3FF12]">
                  {experience.period}
                </p>
              </div>

              {/* DETAILS */}
              <div>
                <h3 className="text-xl font-medium text-[#F4F4F2] transition-colors duration-300 md:text-2xl">
                  {experience.role}
                </h3>

                <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">
                  {experience.company}
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">
                  {experience.description}
                </p>

                {/* PILLS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
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
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}