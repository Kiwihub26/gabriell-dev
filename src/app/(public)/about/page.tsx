import type { Metadata } from "next";
import Image from "next/image";

import { getSiteSettings } from "@/lib/site-settings";

export const metadata: Metadata = {
  title: "About",

  description:
    "Learn more about Gabriell Montero, a software engineer and Computer Engineering graduate focused on full-stack development, system design, databases, and practical software engineering.",
};

export default async function AboutPage() {
  const settings =
    await getSiteSettings();

  return (
    <main className="px-6 py-20 md:px-10 lg:px-16">
      {/* HERO */}
      <section className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
              About /{" "}
              {settings?.name ??
                "Gabriell Montero"}
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-[#F4F4F2] md:text-7xl lg:text-8xl">
              I build systems
              <br />
              that make sense.
            </h1>

            <div className="mt-10 max-w-2xl space-y-6 text-sm leading-7 text-neutral-400 md:text-base">
              <p>
                {settings?.bio ??
                  "Computer Engineering graduate focused on building practical software systems, full-stack web applications, and digital tools that solve real problems."}
              </p>

              <p>
                My background combines
                software development,
                system analysis, database
                design, technical support,
                and teaching computer
                science subjects. That mix
                shaped the way I approach
                software: understand the
                problem first, design
                intentionally, then build
                something maintainable.
              </p>

              <p>
                I work across front-end
                development, back-end
                systems, databases, and
                software engineering
                workflows using
                technologies such as
                Next.js, React,
                TypeScript, PHP, Python,
                Java, MySQL, PostgreSQL,
                and Prisma.
              </p>
            </div>

            {/* PILLS */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Full-Stack Development",
                "Software Engineering",
                "Database Design",
                "System Analysis",
                "UI Implementation",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-neutral-700
                    px-4
                    py-2
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    text-neutral-400
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-[#A3FF12]
                    hover:bg-[#A3FF12]
                    hover:text-black
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* SOCIALS */}
            {(settings?.githubUrl ||
              settings?.linkedinUrl) && (
              <div className="mt-10 flex flex-wrap gap-3">
                {settings.githubUrl && (
                  <a
                    href={
                      settings.githubUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="border border-neutral-700 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
                  >
                    GitHub ↗
                  </a>
                )}

                {settings.linkedinUrl && (
                  <a
                    href={
                      settings.linkedinUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="border border-neutral-700 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            )}
          </div>

          {/* PORTRAIT */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A3FF12]/15 blur-[90px]" />

            <div className="absolute inset-x-8 bottom-4 top-16 border border-neutral-800" />

            <div className="relative z-10 flex min-h-[680px] items-end justify-center">
              <Image
                src="/images/about-portrait.png"
                alt={
                  settings?.name ??
                  "Gabriell Montero"
                }
                width={1086}
                height={1448}
                priority
                className="h-auto w-full max-w-[600px] object-contain drop-shadow-[0_0_70px_rgba(163,255,18,0.10)]"
              />
            </div>

            <div className="absolute bottom-8 left-2 z-20 border border-neutral-800 bg-[#0A0A0A]/90 px-4 py-3 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                {settings?.title ??
                  "Full-Stack Developer"}
              </p>

              <p className="mt-1 font-mono text-xs text-[#A3FF12]">
                {settings?.location ??
                  "Cavite, Philippines"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto mt-28 max-w-7xl border-t border-neutral-800 pt-16">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
              01 / Approach
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-medium tracking-tight text-[#F4F4F2] md:text-5xl">
              Engineering before
              decoration.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">
              I like interfaces that look
              intentional, but the system
              behind them matters just as
              much. I focus on structure,
              maintainability, usability,
              database integrity, and clear
              application logic before
              adding visual polish.
            </p>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="mx-auto mt-24 max-w-7xl border-t border-neutral-800 pt-16">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
              02 / Profile
            </p>
          </div>

          <div className="grid gap-px border-l border-t border-neutral-800 bg-neutral-800 sm:grid-cols-2">
            <div className="bg-[#0A0A0A] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                Role
              </p>

              <p className="mt-3 text-sm text-neutral-300">
                {settings?.title ??
                  "Full-Stack Developer"}
              </p>
            </div>

            <div className="bg-[#0A0A0A] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                Location
              </p>

              <p className="mt-3 text-sm text-neutral-300">
                {settings?.location ??
                  "Cavite, Philippines"}
              </p>
            </div>

            <div className="bg-[#0A0A0A] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                Availability
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#A3FF12]" />

                <p className="text-sm text-neutral-300">
                  {settings?.availability ??
                    "Open to opportunities"}
                </p>
              </div>
            </div>

            <div className="bg-[#0A0A0A] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                Contact
              </p>

              {settings?.contactEmail ? (
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="mt-3 inline-block text-sm text-neutral-300 transition hover:text-[#A3FF12]"
                >
                  {
                    settings.contactEmail
                  }
                </a>
              ) : (
                <p className="mt-3 text-sm text-neutral-600">
                  Available through
                  contact form
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}