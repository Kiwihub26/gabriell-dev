import Link from "next/link";
import ProjectCard, { type ProjectCardData } from "@/components/ProjectCard";
import SectionLabel from "@/components/SectionLabel";

export default function Projects({ projects, showViewAll = true }: { projects: ProjectCardData[]; showViewAll?: boolean }) {
  return <section className="bg-[#0A0A0A] px-6 py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="01" label="Selected Work" />
    <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="text-5xl font-bold uppercase leading-[0.95] md:text-7xl">Things I've<br />built.</h2><p className="max-w-sm text-sm text-neutral-500">Selected projects covering software development, engineering, databases, and UI/UX.</p></div>
    <div className="mt-20 border-b border-neutral-800">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index + 1} />)}</div>
    {showViewAll && <div className="mt-10 flex justify-end"><Link href="/projects" className="font-mono text-xs uppercase text-neutral-500 hover:text-[#A3FF12]">View All Projects →</Link></div>}
  </div></section>;
}
