import { updateSiteSettings } from "@/app/admin/actions/settings";
import { prisma } from "@/lib/prisma";

export default async function AdminSettingsPage() {
  const settings =
    await prisma.siteSettings.findUnique({
      where: {
        id: 1,
      },
    });

  return (
    <div>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
          Admin / Settings
        </p>

        <h1 className="mt-3 text-4xl font-semibold text-white">
          Portfolio Settings
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500">
          Manage the profile information used throughout
          your public portfolio.
        </p>
      </div>

      <form
        action={updateSiteSettings}
        className="mt-10 max-w-4xl space-y-8"
      >
        {/* NAME */}
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
            defaultValue={
              settings?.name ??
              "Gabriell Montero"
            }
            className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>

        {/* TITLE */}
        <div>
          <label
            htmlFor="title"
            className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
          >
            Professional Title
          </label>

          <input
            id="title"
            name="title"
            required
            defaultValue={
              settings?.title ??
              "Full-Stack Developer"
            }
            className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>

        {/* BIO */}
        <div>
          <label
            htmlFor="bio"
            className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
          >
            Short Bio
          </label>

          <textarea
            id="bio"
            name="bio"
            required
            rows={6}
            defaultValue={
              settings?.bio ??
              "Computer Engineering graduate focused on building practical software systems, full-stack web applications, and digital tools that solve real problems."
            }
            className="mt-3 w-full resize-y border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>

        {/* LOCATION + EMAIL */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="location"
              className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
            >
              Location
            </label>

            <input
              id="location"
              name="location"
              defaultValue={
                settings?.location ??
                "Cavite, Philippines"
              }
              className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          <div>
            <label
              htmlFor="contactEmail"
              className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
            >
              Contact Email
            </label>

            <input
              id="contactEmail"
              name="contactEmail"
              type="email"
              defaultValue={
                settings?.contactEmail ?? ""
              }
              className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
            />
          </div>
        </div>

        {/* AVAILABILITY */}
        <div>
          <label
            htmlFor="availability"
            className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
          >
            Availability
          </label>

          <input
            id="availability"
            name="availability"
            defaultValue={
              settings?.availability ??
              "Open to opportunities"
            }
            placeholder="Open to opportunities"
            className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>

        {/* SOCIAL LINKS */}
        <div className="border-t border-neutral-800 pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
            Social Links
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="githubUrl"
              className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
            >
              GitHub URL
            </label>

            <input
              id="githubUrl"
              name="githubUrl"
              type="url"
              defaultValue={
                settings?.githubUrl ?? ""
              }
              placeholder="https://github.com/..."
              className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          <div>
            <label
              htmlFor="linkedinUrl"
              className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
            >
              LinkedIn URL
            </label>

            <input
              id="linkedinUrl"
              name="linkedinUrl"
              type="url"
              defaultValue={
                settings?.linkedinUrl ?? ""
              }
              placeholder="https://linkedin.com/in/..."
              className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
            />
          </div>
        </div>

        {/* SITE LABEL */}
        <div>
          <label
            htmlFor="siteLabel"
            className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
          >
            Site Label
          </label>

          <input
            id="siteLabel"
            name="siteLabel"
            defaultValue={
              settings?.siteLabel ??
              "GABRIELL.DEV"
            }
            placeholder="GABRIELL.DEV"
            className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#A3FF12] px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-white"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}