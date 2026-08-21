import Link from "next/link";

import ProjectImage from "@/components/ProjectImage";

export type ProjectCardData = {
  id: number;
  title: string;
  slug: string;
  description: string;
  year: number;
  status: string;
  category: string;
  imageUrl: string | null;
  technologies: string[];
};

type ProjectCardProps = {
  project: ProjectCardData;
  index?: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const isMobile =
    project.category === "Mobile Application";

  const isFirstProject = index === 1;

  return (
    <article className="group overflow-hidden border border-neutral-800 transition duration-300 hover:border-neutral-600">
      <Link
        href={`/projects/${project.slug}`}
        className={`
          relative
          block
          overflow-hidden
          bg-neutral-950
          ${
            isMobile
              ? "min-h-[620px] py-10"
              : "aspect-[16/10]"
          }
        `}
      >
        {isMobile ? (
          <div className="relative flex min-h-[540px] w-full items-center justify-center">
            <div
              className="
                relative
                aspect-[9/19.5]
                w-full
                max-w-[270px]
                overflow-hidden
                rounded-[34px]
                border
                border-neutral-700
                bg-neutral-950
                p-1.5
                transition
                duration-500
                group-hover:-translate-y-2
              "
            >
              <div className="relative h-full w-full overflow-hidden rounded-[29px]">
                <ProjectImage
                  src={project.imageUrl}
                  alt={project.title}
                  priority={isFirstProject}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            <ProjectImage
              src={project.imageUrl}
              alt={project.title}
              priority={isFirstProject}
              className="object-cover group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
      </Link>

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {index !== undefined && (
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-700">
                {String(index).padStart(2, "0")}
              </span>
            )}

            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#A3FF12]">
              {project.category}
            </p>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
            {project.year}
          </p>
        </div>

        <Link href={`/projects/${project.slug}`}>
          <h3 className="mt-5 text-2xl font-medium tracking-tight text-[#F4F4F2] transition group-hover:text-[#A3FF12]">
            {project.title}
          </h3>
        </Link>

        <p className="mt-4 text-sm leading-7 text-neutral-400">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies
              .slice(0, 4)
              .map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-neutral-700
                    px-3
                    py-1.5
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.1em]
                    text-neutral-500
                    transition
                    hover:border-[#A3FF12]
                    hover:bg-[#A3FF12]
                    hover:text-black
                  "
                >
                  {technology}
                </span>
              ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between border-t border-neutral-800 pt-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-600">
            {project.status}
          </p>

          <Link
            href={`/projects/${project.slug}`}
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition hover:text-[#A3FF12]"
          >
            View Project ↗
          </Link>
        </div>
      </div>
    </article>
  );
}