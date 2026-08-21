import type { Metadata } from "next";

import ProjectCard from "@/components/ProjectCard";

import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Projects",

  description:
    "Selected software engineering, web development, mobile application, database, and system design projects by Gabriell Montero.",
};

export default async function ProjectsPage() {
  const projects =
    await prisma.project.findMany({
      where: {
        publishStatus:
          "PUBLISHED",
      },

      orderBy: [
        {
          displayOrder: "asc",
        },

        {
          createdAt: "desc",
        },
      ],
    });

  return (
    <main className="px-6 py-20 md:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
            Selected Work / Projects
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#F4F4F2] md:text-7xl lg:text-8xl">
            Things I&apos;ve
            <br />
            built.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">
            A collection of software
            systems, web applications,
            mobile applications,
            academic projects, and
            experiments I&apos;ve
            designed and developed.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="mt-20">
          {projects.length === 0 ? (
            <div className="border-t border-neutral-800 py-16">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-600">
                No published projects
                yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map(
                (project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                )
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}