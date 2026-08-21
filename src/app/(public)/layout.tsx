import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageShell from "@/components/PageShell";

import { getSiteSettings } from "@/lib/site-settings";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings =
    await getSiteSettings();

  return (
    <PageShell>
      <Navbar settings={settings} />

      {children}

      <Footer settings={settings} />
    </PageShell>
  );
}