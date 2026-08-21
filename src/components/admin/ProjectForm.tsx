"use client";

import type {
  Project,
  PublishStatus,
} from "@prisma/client";

import { useState } from "react";

import ConfirmForm from "@/components/ConfirmForm";

type ProjectFormProps = {
  project?: Project | null;

  action: (
    formData: FormData
  ) => void | Promise<void>;

  submitLabel?: string;
};

export default function ProjectForm({
  project,
  action,
  submitLabel,
}: ProjectFormProps) {
  const [imageUrl, setImageUrl] =
    useState(project?.imageUrl ?? "");

  const galleryValue =
    project?.galleryImages.join("\n") ?? "";

  const technologiesValue =
    project?.technologies.join(", ") ?? "";

  const publishStatus: PublishStatus =
    project?.publishStatus ?? "DRAFT";

  const buttonLabel =
    submitLabel ??
    (project
      ? "Save Changes"
      : "Create Project");

  const confirmationMessage =
    project
      ? `Save changes to "${project.title}"?`
      : "Create this new project?";

  return (
    <ConfirmForm
      action={action}
      message={confirmationMessage}
      className="space-y-10"
    >
      {/* BASIC INFORMATION */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
            01 / Basic Information
          </p>

          <h2 className="mt-3 text-2xl font-medium tracking-tight text-[#F4F4F2]">
            Project details
          </h2>
        </div>

        <div className="mt-8 grid gap-6">
          {/* TITLE */}
          <div>
            <label
              htmlFor="title"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Title
            </label>

            <input
              id="title"
              name="title"
              required
              minLength={2}
              maxLength={150}
              defaultValue={
                project?.title ?? ""
              }
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-neutral-700">
              2–150 characters
            </p>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label
              htmlFor="description"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Short Description
            </label>

            <textarea
              id="description"
              name="description"
              required
              minLength={10}
              maxLength={500}
              rows={4}
              defaultValue={
                project?.description ?? ""
              }
              className="mt-3 w-full resize-y border border-neutral-800 bg-transparent px-4 py-4 leading-7 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-neutral-700">
              10–500 characters
            </p>
          </div>

          {/* OVERVIEW */}
          <div>
            <label
              htmlFor="overview"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Overview
            </label>

            <textarea
              id="overview"
              name="overview"
              required
              minLength={20}
              maxLength={5000}
              rows={8}
              defaultValue={
                project?.overview ?? ""
              }
              className="mt-3 w-full resize-y border border-neutral-800 bg-transparent px-4 py-4 leading-7 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-neutral-700">
              20–5000 characters
            </p>
          </div>
        </div>
      </section>

      {/* CLASSIFICATION */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
          02 / Classification
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* CATEGORY */}
          <div>
            <label
              htmlFor="category"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Category
            </label>

            <input
              id="category"
              name="category"
              required
              minLength={2}
              maxLength={100}
              placeholder="Web Application"
              defaultValue={
                project?.category ?? ""
              }
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          {/* STATUS */}
          <div>
            <label
              htmlFor="status"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Development Status
            </label>

            <input
              id="status"
              name="status"
              required
              minLength={2}
              maxLength={100}
              placeholder="Completed"
              defaultValue={
                project?.status ?? ""
              }
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          {/* YEAR */}
          <div>
            <label
              htmlFor="year"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Year
            </label>

            <input
              id="year"
              name="year"
              type="number"
              required
              min={2000}
              max={2100}
              step={1}
              defaultValue={
                project?.year ??
                new Date().getFullYear()
              }
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          {/* DISPLAY ORDER */}
          <div>
            <label
              htmlFor="displayOrder"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Display Order
            </label>

            <input
              id="displayOrder"
              name="displayOrder"
              type="number"
              required
              min={0}
              max={9999}
              step={1}
              defaultValue={
                project?.displayOrder ?? 0
              }
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
          03 / Technology
        </p>

        <div className="mt-8">
          <label
            htmlFor="technologies"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
          >
            Technologies
          </label>

          <input
            id="technologies"
            name="technologies"
            placeholder="Next.js, TypeScript, PostgreSQL, Prisma"
            defaultValue={
              technologiesValue
            }
            className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
          />

          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-neutral-700">
            Separate technologies using commas
          </p>
        </div>
      </section>

      {/* LINKS */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
          04 / Links
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
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
              placeholder="https://github.com/..."
              defaultValue={
                project?.githubUrl ?? ""
              }
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          <div>
            <label
              htmlFor="liveUrl"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Live URL
            </label>

            <input
              id="liveUrl"
              name="liveUrl"
              type="url"
              placeholder="https://..."
              defaultValue={
                project?.liveUrl ?? ""
              }
              className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
          05 / Project Media
        </p>

        <div className="mt-8">
          <label
            htmlFor="imageUrl"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
          >
            Main Image
          </label>

          <input
            id="imageUrl"
            name="imageUrl"
            maxLength={500}
            value={imageUrl}
            onChange={(event) =>
              setImageUrl(
                event.target.value
              )
            }
            placeholder="/images/projects/project-name/home.png"
            className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
          />

          {imageUrl && (
            <div className="mt-6 overflow-hidden border border-neutral-800 bg-neutral-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="Project preview"
                className="max-h-[420px] w-full object-contain"
              />
            </div>
          )}
        </div>

        <div className="mt-8">
          <label
            htmlFor="galleryImages"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
          >
            Gallery Images
          </label>

          <textarea
            id="galleryImages"
            name="galleryImages"
            rows={10}
            defaultValue={
              galleryValue
            }
            placeholder={`/images/projects/example/screen-1.png
/images/projects/example/screen-2.png
/images/projects/example/screen-3.png`}
            className="mt-3 w-full resize-y border border-neutral-800 bg-transparent px-4 py-4 font-mono text-xs leading-7 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
          />

          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-neutral-700">
            One image path per line
          </p>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
          06 / Case Study
        </p>

        <div className="mt-8 grid gap-8">
          <div>
            <label
              htmlFor="challenge"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Challenge
            </label>

            <textarea
              id="challenge"
              name="challenge"
              rows={7}
              maxLength={5000}
              defaultValue={
                project?.challenge ?? ""
              }
              className="mt-3 w-full resize-y border border-neutral-800 bg-transparent px-4 py-4 leading-7 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          <div>
            <label
              htmlFor="solution"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Solution
            </label>

            <textarea
              id="solution"
              name="solution"
              rows={7}
              maxLength={5000}
              defaultValue={
                project?.solution ?? ""
              }
              className="mt-3 w-full resize-y border border-neutral-800 bg-transparent px-4 py-4 leading-7 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>

          <div>
            <label
              htmlFor="result"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Result / Outcome
            </label>

            <textarea
              id="result"
              name="result"
              rows={7}
              maxLength={5000}
              defaultValue={
                project?.result ?? ""
              }
              className="mt-3 w-full resize-y border border-neutral-800 bg-transparent px-4 py-4 leading-7 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            />
          </div>
        </div>
      </section>

      {/* PUBLISHING */}
      <section className="border border-neutral-800 p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
          07 / Publishing
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="publishStatus"
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500"
            >
              Publish Status
            </label>

            <select
              id="publishStatus"
              name="publishStatus"
              defaultValue={
                publishStatus
              }
              className="mt-3 w-full border border-neutral-800 bg-[#0A0A0A] px-4 py-4 text-[#F4F4F2] outline-none transition focus:border-[#A3FF12]"
            >
              <option value="DRAFT">
                Draft
              </option>

              <option value="PUBLISHED">
                Published
              </option>

              <option value="ARCHIVED">
                Archived
              </option>
            </select>
          </div>

          <div className="flex items-end">
            <label className="flex w-full cursor-pointer items-center gap-4 border border-neutral-800 px-4 py-4 transition hover:border-neutral-700">
              <input
                name="featured"
                type="checkbox"
                defaultChecked={
                  project?.featured ?? false
                }
                className="h-4 w-4 accent-[#A3FF12]"
              />

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                  Featured Project
                </p>

                <p className="mt-1 text-xs text-neutral-600">
                  Display this project prominently on the homepage.
                </p>
              </div>
            </label>
          </div>
        </div>
      </section>

      {/* SAVE */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-8">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600">
            {project
              ? "Editing existing project"
              : "Creating new project"}
          </p>

          <p className="mt-2 text-sm text-neutral-500">
            Browser validation runs before the confirmation and server validation.
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
          {buttonLabel}
        </button>
      </div>
    </ConfirmForm>
  );
}