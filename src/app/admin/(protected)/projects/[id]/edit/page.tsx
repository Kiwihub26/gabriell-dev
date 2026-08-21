import Link from "next/link";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";
import ProjectForm from "@/components/admin/ProjectForm";
import { updateProject } from "@/app/admin/actions/projects";

type EditProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProjectPage({
  params,
}: EditProjectPageProps) {
  const { id } = await params;

  const projectId = Number(id);

  if (Number.isNaN(projectId)) {
    notFound();
  }

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  });

  if (!project) {
    notFound();
  }

  const updateAction = updateProject.bind(
    null,
    project.id
  );

  return (
    <div>
      <Link
        href="/admin/projects"
        className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500 transition hover:text-[#A3FF12]"
      >
        ← Back to Projects
      </Link>

      <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
        Admin / Projects / Edit
      </p>

      <h1 className="mt-3 text-4xl font-semibold text-white">
        Edit Project
      </h1>

      <p className="mt-3 font-mono text-xs text-neutral-600">
        ID #{project.id} / {project.slug}
      </p>

      <ProjectForm
        project={project}
        action={updateAction}
        submitLabel="Save Changes"
      />
    </div>
  );
}