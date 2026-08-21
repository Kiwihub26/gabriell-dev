import type { Metadata } from "next";

import Link from "next/link";

import { redirect } from "next/navigation";

import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Admin",

  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session =
    await auth();

  if (!session?.user) {
    redirect(
      "/admin/login"
    );
  }

  if (
    session.user.role !==
    "ADMIN"
  ) {
    redirect(
      "/admin/login"
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="grid min-h-screen lg:grid-cols-[240px_1fr]">
        {/* SIDEBAR */}
        <aside className="border-b border-neutral-800 p-6 lg:border-b-0 lg:border-r">
          <Link
            href="/admin"
            className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#A3FF12]"
          >
            GM / Admin
          </Link>

          <nav className="mt-10 flex flex-col gap-2">
            <Link
              href="/admin"
              className="border border-transparent px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-neutral-800 hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/projects"
              className="border border-transparent px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-neutral-800 hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="/admin/messages"
              className="border border-transparent px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-neutral-800 hover:text-white"
            >
              Messages
            </Link>

            <Link
              href="/admin/settings"
              className="border border-transparent px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-neutral-800 hover:text-white"
            >
              Settings
            </Link>

            <Link
              href="/"
              target="_blank"
              className="mt-6 border border-neutral-800 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
            >
              View Portfolio ↗
            </Link>
          </nav>
        </aside>

        {/* CONTENT */}
        <main className="p-6 md:p-10 lg:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}