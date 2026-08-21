import Link from "next/link";

import {
  deleteProject,
} from "@/app/admin/actions/projects";

import { prisma } from "@/lib/prisma";

function PublishBadge({
  status,
}: {
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
}) {
  if (status === "PUBLISHED") {
    return (
      <span className="rounded-full border border-[#A3FF12]/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#A3FF12]">
        Published
      </span>
    );
  }

  if (status === "ARCHIVED") {
    return (
      <span className="rounded-full border border-red-900 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-red-500">
        Archived
      </span>
    );
  }

  return (
    <span className="rounded-full border border-yellow-800 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-yellow-500">
      Draft
    </span>
  );
}

export default async function AdminProjectsPage() {
  const projects =
    await prisma.project.findMany({
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
    <div>
      {/* HEADER */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
            Admin / Projects
          </p>

          <h1 className="mt-3 text-4xl font-semibold text-white">
            Projects
          </h1>

          <p className="mt-3 text-sm text-neutral-500">
            Create, edit and control the
            visibility of your portfolio
            projects.
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="bg-[#A3FF12] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-white"
        >
          + Add Project
        </Link>
      </div>

      {/* COUNTERS */}
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        <div className="border border-neutral-800 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
            Total
          </p>

          <p className="mt-3 text-3xl font-semibold text-white">
            {projects.length}
          </p>
        </div>

        <div className="border border-neutral-800 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
            Published
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#A3FF12]">
            {
              projects.filter(
                (project) =>
                  project.publishStatus ===
                  "PUBLISHED"
              ).length
            }
          </p>
        </div>

        <div className="border border-neutral-800 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
            Draft / Archived
          </p>

          <p className="mt-3 text-3xl font-semibold text-white">
            {
              projects.filter(
                (project) =>
                  project.publishStatus !==
                  "PUBLISHED"
              ).length
            }
          </p>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="mt-8 overflow-hidden border border-neutral-800">
        {projects.length === 0 ? (
          <div className="p-10 text-sm text-neutral-500">
            No projects found.
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="grid gap-6 border-b border-neutral-800 p-6 last:border-b-0 lg:grid-cols-[1fr_auto]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-medium text-white">
                    {project.title}
                  </h2>

                  <PublishBadge
                    status={
                      project.publishStatus
                    }
                  />

                  {project.featured && (
                    <span className="rounded-full border border-neutral-700 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-600">
                  {project.category} /{" "}
                  {project.year} /{" "}
                  {project.status}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-400">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {project.publishStatus ===
                  "PUBLISHED" && (
                  <Link
                    href={`/projects/${project.slug}`}
                    target="_blank"
                    className="border border-neutral-700 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition hover:border-white hover:text-white"
                  >
                    View
                  </Link>
                )}

                <Link
                  href={`/admin/projects/${project.id}/edit`}
                  className="border border-neutral-700 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
                >
                  Edit
                </Link>

                <form
                  action={deleteProject.bind(
                    null,
                    project.id
                  )}
                >
                  <button
                    type="submit"
                    className="border border-red-900/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-black"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}