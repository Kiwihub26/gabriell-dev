import type { Metadata } from "next";

import { sendMessage } from "./actions";

import { getSiteSettings } from "@/lib/site-settings";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Get in touch with Gabriell Montero for software engineering opportunities, development projects, collaborations, or technical discussions.",
};

type ContactPageProps = {
  searchParams: Promise<{
    sent?: string;
  }>;
};

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const { sent } =
    await searchParams;

  const settings =
    await getSiteSettings();

  return (
    <main className="px-6 py-20 md:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
              Contact / Let&apos;s Talk
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#F4F4F2] md:text-7xl">
              Have something
              <br />
              in mind?
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-7 text-neutral-400 md:text-base">
              Whether it&apos;s a
              software project,
              collaboration, development
              opportunity, or just a
              conversation about
              technology, feel free to
              send a message.
            </p>

            {/* STATUS */}
            <div className="mt-12 border-t border-neutral-800 pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                Current Status
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#A3FF12]" />

                <p className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-300">
                  {settings?.availability ??
                    "Open to opportunities"}
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="mt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                Location
              </p>

              <p className="mt-2 text-sm text-neutral-300">
                {settings?.location ??
                  "Cavite, Philippines"}
              </p>
            </div>

            {/* EMAIL */}
            {settings?.contactEmail && (
              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                  Email
                </p>

                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="mt-2 inline-block text-sm text-neutral-300 transition hover:text-[#A3FF12]"
                >
                  {
                    settings.contactEmail
                  }
                </a>
              </div>
            )}

            {/* SOCIALS */}
            {(settings?.githubUrl ||
              settings?.linkedinUrl) && (
              <div className="mt-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                  Elsewhere
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {settings.githubUrl && (
                    <a
                      href={
                        settings.githubUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="border border-neutral-700 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition hover:border-[#A3FF12] hover:bg-[#A3FF12] hover:text-black"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {settings.linkedinUrl && (
                    <a
                      href={
                        settings.linkedinUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="border border-neutral-700 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-400 transition hover:border-[#A3FF12] hover:bg-[#A3FF12] hover:text-black"
                    >
                      LinkedIn ↗
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div>
            {sent === "true" && (
              <div className="mb-8 border border-[#A3FF12]/40 bg-[#A3FF12]/5 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#A3FF12]">
                  Message sent successfully.
                </p>

                <p className="mt-2 text-sm text-neutral-400">
                  Thanks for reaching
                  out. Your message has
                  been received.
                </p>
              </div>
            )}

            <form
              action={sendMessage}
              className="space-y-7"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  required
                  className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  className="mt-3 w-full resize-y border border-neutral-800 bg-transparent px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#A3FF12] px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-white"
              >
                Send Message
              </button>
            <div
  aria-hidden="true"
  className="absolute -left-[9999px] h-px w-px overflow-hidden"
>
  <label htmlFor="website">
    Website
  </label>

  <input
    id="website"
    name="website"
    type="text"
    tabIndex={-1}
    autoComplete="off"
  />
</div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}