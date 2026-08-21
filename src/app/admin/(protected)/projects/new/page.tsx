import Link from "next/link";
import ProjectForm from "@/components/admin/ProjectForm";
import { createProject } from "@/app/admin/actions/projects";

export default function NewProjectPage() {
  return (
    <div>
      <Link
        href="/admin/projects"
        className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500 transition hover:text-[#A3FF12]"
      >
        ← Back to Projects
      </Link>

      <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
        Admin / Projects / New
      </p>

      <h1 className="mt-3 text-4xl font-semibold text-white">
        Add Project
      </h1>

      <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
        Create a new project entry for your portfolio.
      </p>

      <ProjectForm
        action={createProject}
        submitLabel="Create Project"
      />
    </div>
  );
}