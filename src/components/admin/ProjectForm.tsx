"use client";

import { useState } from "react";

import type {
  Project,
  PublishStatus,
} from "@prisma/client";

type ProjectFormProps = {
  project?: Project;
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
};

const publishOptions: {
  value: PublishStatus;
  label: string;
}[] = [
  {
    value: "DRAFT",
    label: "Draft",
  },
  {
    value: "PUBLISHED",
    label: "Published",
  },
  {
    value: "ARCHIVED",
    label: "Archived",
  },
];

export default function ProjectForm({
  project,
  action,
  submitLabel,
}: ProjectFormProps) {
  const [imagePreview, setImagePreview] =
    useState(project?.imageUrl ?? "");

  return (
    <form
      action={action}
      className="mt-10 max-w-4xl space-y-8"
    >
      {/* TITLE */}
      <div>
        <label
          htmlFor="title"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Title
        </label>

        <input
          id="title"
          name="title"
          required
          defaultValue={project?.title ?? ""}
          className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
        />
      </div>

      {/* SHORT DESCRIPTION */}
      <div>
        <label
          htmlFor="description"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Short Description
        </label>

        <textarea
          id="description"
          name="description"
          required
          rows={3}
          defaultValue={project?.description ?? ""}
          className="mt-3 w-full resize-none border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
        />
      </div>

      {/* OVERVIEW */}
      <div>
        <label
          htmlFor="overview"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Project Overview
        </label>

        <textarea
          id="overview"
          name="overview"
          required
          rows={7}
          defaultValue={project?.overview ?? ""}
          className="mt-3 w-full resize-y border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
        />
      </div>

      {/* TECHNOLOGIES */}
      <div>
        <label
          htmlFor="technologies"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Technologies
        </label>

        <input
          id="technologies"
          name="technologies"
          defaultValue={
            project?.technologies.join(", ") ?? ""
          }
          placeholder="Next.js, TypeScript, PostgreSQL, Prisma"
          className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
        />

        <p className="mt-2 text-xs text-neutral-600">
          Separate technologies with commas.
        </p>
      </div>

      {/* CATEGORY + STATUS */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="category"
            className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
          >
            Category
          </label>

          <input
            id="category"
            name="category"
            required
            defaultValue={project?.category ?? ""}
            className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
          >
            Development Status
          </label>

          <input
            id="status"
            name="status"
            required
            defaultValue={
              project?.status ?? "In Development"
            }
            className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>
      </div>

      {/* YEAR + DISPLAY ORDER */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="year"
            className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
          >
            Year
          </label>

          <input
            id="year"
            name="year"
            type="number"
            required
            defaultValue={
              project?.year ??
              new Date().getFullYear()
            }
            className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>

        <div>
          <label
            htmlFor="displayOrder"
            className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
          >
            Display Order
          </label>

          <input
            id="displayOrder"
            name="displayOrder"
            type="number"
            defaultValue={
              project?.displayOrder ?? 0
            }
            className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>
      </div>

      {/* LINKS */}
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
            defaultValue={project?.githubUrl ?? ""}
            placeholder="https://github.com/..."
            className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>

        <div>
          <label
            htmlFor="liveUrl"
            className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
          >
            Live Demo URL
          </label>

          <input
            id="liveUrl"
            name="liveUrl"
            type="url"
            defaultValue={project?.liveUrl ?? ""}
            placeholder="https://..."
            className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
          />
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div>
        <label
          htmlFor="imageUrl"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Main Project Image
        </label>

        <input
          id="imageUrl"
          name="imageUrl"
          defaultValue={project?.imageUrl ?? ""}
          placeholder="/images/projects/pulsedaily/midnight/today.png"
          onChange={(event) =>
            setImagePreview(event.target.value)
          }
          className="mt-3 w-full border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
        />

        <p className="mt-2 text-xs text-neutral-600">
          This image is used as the main project thumbnail and hero image.
        </p>

        {imagePreview && (
          <div className="mt-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
              Main Image Preview
            </p>

            <div className="relative aspect-[16/9] overflow-hidden border border-neutral-800 bg-neutral-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePreview}
                alt="Project preview"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        )}
      </div>

      {/* GALLERY */}
      <div>
        <label
          htmlFor="galleryImages"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Gallery Images
        </label>

        <textarea
          id="galleryImages"
          name="galleryImages"
          rows={8}
          defaultValue={
            project?.galleryImages.join("\n") ?? ""
          }
          placeholder={`/images/projects/pulsedaily/midnight/today.png
/images/projects/pulsedaily/midnight/plan.png
/images/projects/pulsedaily/daylight/today.png`}
          className="mt-3 w-full resize-y border border-neutral-800 bg-neutral-950 px-4 py-4 font-mono text-xs text-white outline-none transition focus:border-[#A3FF12]"
        />

        <p className="mt-2 text-xs leading-5 text-neutral-600">
          Enter one image path per line. These images appear on the project
          case-study page.
        </p>
      </div>

      {/* CASE STUDY */}
      <div className="border-t border-neutral-800 pt-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
          Case Study
        </p>
      </div>

      <div>
        <label
          htmlFor="challenge"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Challenge
        </label>

        <textarea
          id="challenge"
          name="challenge"
          rows={5}
          defaultValue={project?.challenge ?? ""}
          className="mt-3 w-full resize-y border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
        />
      </div>

      <div>
        <label
          htmlFor="solution"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Solution
        </label>

        <textarea
          id="solution"
          name="solution"
          rows={5}
          defaultValue={project?.solution ?? ""}
          className="mt-3 w-full resize-y border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
        />
      </div>

      <div>
        <label
          htmlFor="result"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Result / Outcome
        </label>

        <textarea
          id="result"
          name="result"
          rows={5}
          defaultValue={project?.result ?? ""}
          className="mt-3 w-full resize-y border border-neutral-800 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
        />
      </div>

      {/* PUBLISH STATUS */}
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500">
          Publishing Status
        </p>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {publishOptions.map((option) => (
            <label
              key={option.value}
              className="cursor-pointer border border-neutral-800 p-4 transition hover:border-[#A3FF12]"
            >
              <div className="flex items-center gap-3">
                <input
                  name="publishStatus"
                  type="radio"
                  value={option.value}
                  defaultChecked={
                    project
                      ? project.publishStatus ===
                        option.value
                      : option.value === "DRAFT"
                  }
                  className="accent-[#A3FF12]"
                />

                <span className="font-mono text-xs uppercase tracking-[0.12em] text-white">
                  {option.label}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* FEATURED */}
      <label className="flex cursor-pointer items-center gap-3 border border-neutral-800 p-4">
        <input
          name="featured"
          type="checkbox"
          defaultChecked={
            project?.featured ?? false
          }
          className="h-4 w-4 accent-[#A3FF12]"
        />

        <div>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-neutral-300">
            Featured Project
          </span>

          <p className="mt-1 text-xs text-neutral-600">
            Show this project in the homepage featured section when published.
          </p>
        </div>
      </label>

      {/* SUBMIT */}
      <div className="border-t border-neutral-800 pt-8">
        <button
          type="submit"
          className="bg-[#A3FF12] px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-white"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}