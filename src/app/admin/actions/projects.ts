"use server";

import type {
  PublishStatus,
} from "@prisma/client";

import {
  revalidatePath,
} from "next/cache";

import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import {
  projectSchema,
} from "@/lib/validation";

function createSlug(
  title: string
) {
  return title
    .toLowerCase()
    .trim()
    .replace(
      /[^a-z0-9]+/g,
      "-"
    )
    .replace(
      /^-+|-+$/g,
      ""
    );
}

function getPublishStatus(
  value:
    | FormDataEntryValue
    | null
): PublishStatus {
  const status = String(
    value ?? ""
  );

  if (
    status === "DRAFT" ||
    status === "PUBLISHED" ||
    status === "ARCHIVED"
  ) {
    return status;
  }

  return "DRAFT";
}

function optionalString(
  value:
    | FormDataEntryValue
    | null
): string | null {
  const result = String(
    value ?? ""
  ).trim();

  return result.length > 0
    ? result
    : null;
}

function getTechnologies(
  value:
    | FormDataEntryValue
    | null
): string[] {
  return String(
    value ?? ""
  )
    .split(",")
    .map(
      (technology) =>
        technology.trim()
    )
    .filter(Boolean);
}

function getGalleryImages(
  value:
    | FormDataEntryValue
    | null
): string[] {
  return String(
    value ?? ""
  )
    .split(/\r?\n/)
    .map(
      (image) =>
        image.trim()
    )
    .filter(Boolean);
}

function getProjectData(
  formData: FormData
) {
  return {
    title: String(
      formData.get("title") ??
        ""
    ).trim(),

    description: String(
      formData.get(
        "description"
      ) ?? ""
    ).trim(),

    overview: String(
      formData.get(
        "overview"
      ) ?? ""
    ).trim(),

    category: String(
      formData.get(
        "category"
      ) ?? ""
    ).trim(),

    status: String(
      formData.get("status") ??
        ""
    ).trim(),

    year: Number(
      formData.get("year")
    ),

    displayOrder: Number(
      formData.get(
        "displayOrder"
      ) ?? 0
    ),

    technologies:
      getTechnologies(
        formData.get(
          "technologies"
        )
      ),

    githubUrl:
      optionalString(
        formData.get(
          "githubUrl"
        )
      ),

    liveUrl:
      optionalString(
        formData.get(
          "liveUrl"
        )
      ),

    imageUrl:
      optionalString(
        formData.get(
          "imageUrl"
        )
      ),

    galleryImages:
      getGalleryImages(
        formData.get(
          "galleryImages"
        )
      ),

    challenge:
      optionalString(
        formData.get(
          "challenge"
        )
      ),

    solution:
      optionalString(
        formData.get(
          "solution"
        )
      ),

    result:
      optionalString(
        formData.get(
          "result"
        )
      ),
  };
}

export async function createProject(
  formData: FormData
) {
  await requireAdmin();

  const validation =
    projectSchema.safeParse(
      getProjectData(
        formData
      )
    );

  if (
    !validation.success
  ) {
    throw new Error(
      validation.error
        .issues[0]?.message ??
        "Invalid project data."
    );
  }

  const data =
    validation.data;

  const featured =
    formData.get(
      "featured"
    ) === "on";

  const publishStatus =
    getPublishStatus(
      formData.get(
        "publishStatus"
      )
    );

  const slug =
    createSlug(data.title);

  await prisma.project.create({
    data: {
      ...data,
      slug,
      featured,
      publishStatus,
    },
  });

  revalidatePath("/");
  revalidatePath(
    "/projects"
  );

  revalidatePath(
    "/admin/projects"
  );

  redirect(
    "/admin/projects"
  );
}

export async function updateProject(
  id: number,
  formData: FormData
) {
  await requireAdmin();

  if (
    !Number.isInteger(id) ||
    id <= 0
  ) {
    throw new Error(
      "Invalid project ID."
    );
  }

  const existingProject =
    await prisma.project.findUnique(
      {
        where: {
          id,
        },
      }
    );

  if (!existingProject) {
    throw new Error(
      "Project not found."
    );
  }

  const validation =
    projectSchema.safeParse(
      getProjectData(
        formData
      )
    );

  if (
    !validation.success
  ) {
    throw new Error(
      validation.error
        .issues[0]?.message ??
        "Invalid project data."
    );
  }

  const data =
    validation.data;

  const featured =
    formData.get(
      "featured"
    ) === "on";

  const publishStatus =
    getPublishStatus(
      formData.get(
        "publishStatus"
      )
    );

  const slug =
    createSlug(data.title);

  await prisma.project.update({
    where: {
      id,
    },

    data: {
      ...data,
      slug,
      featured,
      publishStatus,
    },
  });

  revalidatePath("/");
  revalidatePath(
    "/projects"
  );

  revalidatePath(
    `/projects/${existingProject.slug}`
  );

  revalidatePath(
    `/projects/${slug}`
  );

  revalidatePath(
    "/admin/projects"
  );

  redirect(
    "/admin/projects"
  );
}

export async function deleteProject(
  id: number
) {
  await requireAdmin();

  if (
    !Number.isInteger(id) ||
    id <= 0
  ) {
    throw new Error(
      "Invalid project ID."
    );
  }

  const project =
    await prisma.project.findUnique(
      {
        where: {
          id,
        },
      }
    );

  if (!project) {
    throw new Error(
      "Project not found."
    );
  }

  await prisma.project.delete(
    {
      where: {
        id,
      },
    }
  );

  revalidatePath("/");
  revalidatePath(
    "/projects"
  );

  revalidatePath(
    `/projects/${project.slug}`
  );

  revalidatePath(
    "/admin/projects"
  );

  redirect(
    "/admin/projects"
  );
}