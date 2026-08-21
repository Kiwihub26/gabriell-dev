type FooterProps = {
  settings: {
    name: string;
    title: string;
    contactEmail: string | null;
    githubUrl: string | null;
    linkedinUrl: string | null;
    siteLabel: string | null;
    availability: string | null;
  } | null;
};

export default function Footer({
  settings,
}: FooterProps) {
  const name =
    settings?.name ??
    "Gabriell Montero";

  const title =
    settings?.title ??
    "Software Engineer";

  const siteLabel =
    settings?.siteLabel ??
    "GM/";

  const availability =
    settings?.availability ??
    "Open to opportunities";

  return (
    <footer className="border-t border-neutral-800 px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_auto]">
          {/* LEFT */}
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F4F4F2]">
              {siteLabel}
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500">
              {name} — {title}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#A3FF12]" />

              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                {availability}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap items-start gap-3 md:justify-end">
            {settings?.githubUrl && (
              <a
                href={settings.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-neutral-800 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
              >
                GitHub ↗
              </a>
            )}

            {settings?.linkedinUrl && (
              <a
                href={settings.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-neutral-800 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
              >
                LinkedIn ↗
              </a>
            )}

            {settings?.contactEmail && (
              <a
                href={`mailto:${settings.contactEmail}`}
                className="border border-neutral-800 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
              >
                Email ↗
              </a>
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-700">
            © {new Date().getFullYear()} {name}
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-700">
            Built with Next.js / TypeScript / PostgreSQL
          </p>
        </div>
      </div>
    </footer>
  );
}