"use client";

import type { SiteSettings } from "@prisma/client";

import ConfirmForm from "@/components/ConfirmForm";

type SiteSettingsFormProps = {
  settings: SiteSettings;

  action: (
    formData: FormData
  ) => void | Promise<void>;
};

export default function SiteSettingsForm({
  settings,
  action,
}: SiteSettingsFormProps) {
  return (
    <ConfirmForm
      action={action}
      message="Save these changes to the portfolio site settings?"
      className="space-y-8"
    >
      {/* PROFILE */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
            01 / Profile
          </p>

          <h2 className="mt-3 text-2xl font-medium tracking-tight text-[#F4F4F2]">
            Portfolio identity
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-500">
            Manage the primary profile information displayed throughout the
            public portfolio.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* NAME */}
          <div>
            <label
              htmlFor="name"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              required
              minLength={2}
              maxLength={100}
              defaultValue={settings.name}
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          {/* TITLE */}
          <div>
            <label
              htmlFor="title"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Professional Title
            </label>

            <input
              id="title"
              name="title"
              required
              minLength={2}
              maxLength={150}
              defaultValue={settings.title}
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>
        </div>

        {/* BIO */}
        <div className="mt-6">
          <label
            htmlFor="bio"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
          >
            Biography
          </label>

          <textarea
            id="bio"
            name="bio"
            required
            rows={8}
            minLength={10}
            maxLength={3000}
            defaultValue={settings.bio}
            className="mt-3 w-full resize-y border border-neutral-800 bg-transparent px-4 py-4 leading-7 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
          02 / Contact
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* LOCATION */}
          <div>
            <label
              htmlFor="location"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Location
            </label>

            <input
              id="location"
              name="location"
              maxLength={150}
              defaultValue={settings.location ?? ""}
              placeholder="Cavite, Philippines"
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="contactEmail"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Contact Email
            </label>

            <input
              id="contactEmail"
              name="contactEmail"
              type="email"
              maxLength={254}
              defaultValue={settings.contactEmail ?? ""}
              placeholder="email@example.com"
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          {/* AVAILABILITY */}
          <div className="md:col-span-2">
            <label
              htmlFor="availability"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Availability
            </label>

            <input
              id="availability"
              name="availability"
              maxLength={200}
              defaultValue={settings.availability ?? ""}
              placeholder="Open to opportunities"
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
          03 / Social Links
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* GITHUB */}
          <div>
            <label
              htmlFor="githubUrl"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              GitHub URL
            </label>

            <input
              id="githubUrl"
              name="githubUrl"
              type="url"
              defaultValue={settings.githubUrl ?? ""}
              placeholder="https://github.com/..."
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          {/* LINKEDIN */}
          <div>
            <label
              htmlFor="linkedinUrl"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              LinkedIn URL
            </label>

            <input
              id="linkedinUrl"
              name="linkedinUrl"
              type="url"
              defaultValue={settings.linkedinUrl ?? ""}
              placeholder="https://linkedin.com/in/..."
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>
        </div>
      </section>

      {/* SITE LABEL */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
          04 / Branding
        </p>

        <div className="mt-8">
          <label
            htmlFor="siteLabel"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
          >
            Site Label
          </label>

          <input
            id="siteLabel"
            name="siteLabel"
            maxLength={100}
            defaultValue={settings.siteLabel ?? ""}
            placeholder="Gabriell.dev"
            className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
          />

          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-neutral-700">
            Used for portfolio branding and interface labels.
          </p>
        </div>
      </section>

      {/* SAVE */}
      <div className="flex flex-wrap items-center justify-between gap-6 border-t border-neutral-800 pt-8">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600">
            Site Configuration
          </p>

          <p className="mt-2 text-sm text-neutral-500">
            You will be asked to confirm before the settings are saved.
          </p>
        </div>

        <button
          type="submit"
          className="
            bg-[#A3FF12]
            px-7
            py-4
            font-mono
            text-xs
            font-semibold
            uppercase
            tracking-[0.15em]
            text-black
            transition
            hover:bg-white
          "
        >
          Save Settings
        </button>
      </div>
    </ConfirmForm>
  );
}