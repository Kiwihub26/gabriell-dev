import Link from "next/link";

type NavbarProps = {
  settings: {
    siteLabel: string | null;
  } | null;
};

export default function Navbar({
  settings,
}: NavbarProps) {
  const siteLabel =
    settings?.siteLabel ??
    "GM/";

  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        {/* BRAND */}
        <Link
          href="/"
          className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#F4F4F2] transition hover:text-[#A3FF12]"
        >
          {siteLabel}
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            href="/projects"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 transition hover:text-[#A3FF12]"
          >
            01 Work
          </Link>

          <Link
            href="/about"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 transition hover:text-[#A3FF12]"
          >
            02 About
          </Link>

          <Link
            href="/contact"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 transition hover:text-[#A3FF12]"
          >
            03 Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}