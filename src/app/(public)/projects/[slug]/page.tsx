import type { Metadata } from "next";

import Link from "next/link";

import { notFound } from "next/navigation";

import ProjectImage from "@/components/ProjectImage";

import { prisma } from "@/lib/prisma";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project =
    await prisma.project.findFirst({
      where: {
        slug,

        publishStatus:
          "PUBLISHED",
      },
    });

  if (!project) {
    return {
      title:
        "Project Not Found",
    };
  }

  return {
    title: project.title,

    description:
      project.description,

    openGraph: {
      title: project.title,

      description:
        project.description,

      images: project.imageUrl
        ? [
            {
              url:
                project.imageUrl,

              alt:
                project.title,
            },
          ]
        : [
            "/images/og-cover.png",
          ],
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        project.title,

      description:
        project.description,

      images: project.imageUrl
        ? [project.imageUrl]
        : [
            "/images/og-cover.png",
          ],
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project =
    await prisma.project.findFirst({
      where: {
        slug,

        publishStatus:
          "PUBLISHED",
      },
    });

  if (!project) {
    notFound();
  }

  const isMobile =
    project.category ===
    "Mobile Application";

  return (
    <main className="px-6 py-20 md:px-10 lg:px-16">
      <article className="mx-auto max-w-7xl">
        {/* BACK */}
        <Link
          href="/projects"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500 transition hover:text-[#A3FF12]"
        >
          ← All Projects
        </Link>

        {/* HERO */}
        <header className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
            {project.category} /{" "}
            {project.year}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight text-[#F4F4F2] md:text-7xl lg:text-8xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            {
              project.description
            }
          </p>

          {/* TECH */}
          {project.technologies
            .length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map(
                (technology) => (
                  <span
                    key={
                      technology
                    }
                    className="rounded-full border border-neutral-700 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition hover:border-[#A3FF12] hover:bg-[#A3FF12] hover:text-black"
                  >
                    {
                      technology
                    }
                  </span>
                )
              )}
            </div>
          )}

          {/* LINKS */}
          <div className="mt-10 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={
                  project.liveUrl
                }
                target="_blank"
                rel="noreferrer"
                className="bg-[#A3FF12] px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-black transition hover:bg-white"
              >
                Live Project ↗
              </a>
            )}

            {project.githubUrl && (
              <a
                href={
                  project.githubUrl
                }
                target="_blank"
                rel="noreferrer"
                className="border border-neutral-700 px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-neutral-300 transition hover:border-white hover:text-white"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </header>

        {/* PROJECT SHOWCASE */}
        {isMobile ? (
          <section className="mt-16">
            <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
                  Mobile Experience
                </p>

                <h2 className="mt-5 text-3xl font-medium tracking-tight text-[#F4F4F2] md:text-5xl">
                  Designed for
                  everyday use.
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-400 md:text-base">
                  The interface is
                  designed around quick
                  daily interactions,
                  prioritizing clarity,
                  fast input, and a
                  consistent mobile
                  experience.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative aspect-[9/19.5] w-full max-w-[360px] overflow-hidden rounded-[42px] border border-neutral-700 bg-neutral-950 p-2 shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-[34px]">
                    <ProjectImage
                      src={
                        project.imageUrl
                      }
                      alt={
                        project.title
                      }
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="relative mt-16 aspect-[16/9] overflow-hidden border border-neutral-800 bg-neutral-950">
            <ProjectImage
              src={
                project.imageUrl
              }
              alt={
                project.title
              }
              priority
              className="object-contain"
            />
          </div>
        )}

        {/* OVERVIEW */}
        <section className="mt-24 grid gap-10 border-t border-neutral-800 pt-12 lg:grid-cols-[0.35fr_0.65fr]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
            01 / Overview
          </p>

          <p className="max-w-3xl whitespace-pre-line text-lg leading-9 text-neutral-300">
            {project.overview}
          </p>
        </section>

        {/* CHALLENGE */}
        {project.challenge && (
          <section className="mt-20 grid gap-10 border-t border-neutral-800 pt-12 lg:grid-cols-[0.35fr_0.65fr]">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
              02 / Challenge
            </p>

            <p className="max-w-3xl whitespace-pre-line text-base leading-8 text-neutral-400">
              {
                project.challenge
              }
            </p>
          </section>
        )}

        {/* SOLUTION */}
        {project.solution && (
          <section className="mt-20 grid gap-10 border-t border-neutral-800 pt-12 lg:grid-cols-[0.35fr_0.65fr]">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
              03 / Solution
            </p>

            <p className="max-w-3xl whitespace-pre-line text-base leading-8 text-neutral-400">
              {
                project.solution
              }
            </p>
          </section>
        )}

        {/* OUTCOME */}
        {project.result && (
          <section className="mt-20 grid gap-10 border-t border-neutral-800 pt-12 lg:grid-cols-[0.35fr_0.65fr]">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
              04 / Outcome
            </p>

            <p className="max-w-3xl whitespace-pre-line text-base leading-8 text-neutral-400">
              {project.result}
            </p>
          </section>
        )}

        {/* GALLERY */}
        {project.galleryImages
          .length > 0 && (
          <section className="mt-24 border-t border-neutral-800 pt-12">
            <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
                  05 / Interface
                  Gallery
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-medium tracking-tight text-[#F4F4F2] md:text-5xl">
                  Inside the
                  project.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">
                  Screens from the
                  application showing
                  important workflows,
                  features, and
                  interface states.
                </p>
              </div>
            </div>

            <div
              className={
                isMobile
                  ? "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                  : "mt-12 grid gap-6 md:grid-cols-2"
              }
            >
              {project.galleryImages.map(
                (
                  image,
                  index
                ) => (
                  <div
                    key={`${image}-${index}`}
                    className={
                      isMobile
                        ? "relative mx-auto aspect-[9/19.5] w-full max-w-[300px] overflow-hidden rounded-[32px] border border-neutral-800 bg-neutral-950 p-1.5"
                        : "relative aspect-[16/10] overflow-hidden border border-neutral-800 bg-neutral-950"
                    }
                  >
                    <div
                      className={
                        isMobile
                          ? "relative h-full w-full overflow-hidden rounded-[26px]"
                          : "relative h-full w-full"
                      }
                    >
                      <ProjectImage
                        src={
                          image
                        }
                        alt={`${project.title} screenshot ${
                          index +
                          1
                        }`}
                        className={
                          isMobile
                            ? "object-cover"
                            : "object-contain"
                        }
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* END */}
        <section className="mt-24 border-t border-neutral-800 pt-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                End of case study
              </p>

              <p className="mt-2 text-xl text-[#F4F4F2]">
                Explore more work.
              </p>
            </div>

            <Link
              href="/projects"
              className="border border-neutral-700 px-5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-neutral-300 transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
            >
              All Projects →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}