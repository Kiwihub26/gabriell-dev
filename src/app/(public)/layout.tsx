import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { getSiteSettings } from "@/lib/site-settings";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();

  return (
    <>
      <Navbar settings={settings} />

      {children}

      <Footer settings={settings} />
    </>
  );
}