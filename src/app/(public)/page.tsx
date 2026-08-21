import AboutPreview from "@/components/AboutPreview";
import Capabilities from "@/components/Capabilities";
import ContactCTA from "@/components/ContactCTA";
import ExperiencePreview from "@/components/ExperiencePreview";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

import { prisma } from "@/lib/prisma";
import { getSiteSettings } from "@/lib/site-settings";

export default async function HomePage() {
  const settings = await getSiteSettings();

  const projects = await prisma.project.findMany({
    where: {
      featured: true,
      publishStatus: "PUBLISHED",
    },
    orderBy: {
      displayOrder: "asc",
    },
  });

  return (
    <main>
      <Hero settings={settings} />

      <Projects projects={projects} />

      <AboutPreview />

      <Capabilities />

      <TechStack />

      <ExperiencePreview />

      <ContactCTA />
    </main>
  );
}