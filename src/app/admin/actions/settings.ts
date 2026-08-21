"use server";

import {
  revalidatePath,
} from "next/cache";

import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import {
  siteSettingsSchema,
} from "@/lib/validation";

function emptyToUndefined(
  value:
    | FormDataEntryValue
    | null
) {
  const result = String(
    value ?? ""
  ).trim();

  return result || undefined;
}

export async function updateSiteSettings(
  formData: FormData
) {
  await requireAdmin();

  const validation =
    siteSettingsSchema.safeParse(
      {
        name: formData.get(
          "name"
        ),

        title:
          formData.get(
            "title"
          ),

        bio: formData.get(
          "bio"
        ),

        location:
          emptyToUndefined(
            formData.get(
              "location"
            )
          ),

        contactEmail:
          emptyToUndefined(
            formData.get(
              "contactEmail"
            )
          ),

        availability:
          emptyToUndefined(
            formData.get(
              "availability"
            )
          ),

        githubUrl:
          emptyToUndefined(
            formData.get(
              "githubUrl"
            )
          ),

        linkedinUrl:
          emptyToUndefined(
            formData.get(
              "linkedinUrl"
            )
          ),

        siteLabel:
          emptyToUndefined(
            formData.get(
              "siteLabel"
            )
          ),
      }
    );

  if (
    !validation.success
  ) {
    throw new Error(
      validation.error
        .issues[0]?.message ??
        "Invalid settings."
    );
  }

  const data =
    validation.data;

  await prisma.siteSettings.upsert(
    {
      where: {
        id: 1,
      },

      update: {
        name: data.name,

        title:
          data.title,

        bio: data.bio,

        location:
          data.location ??
          null,

        contactEmail:
          data.contactEmail ??
          null,

        availability:
          data.availability ??
          null,

        githubUrl:
          data.githubUrl ??
          null,

        linkedinUrl:
          data.linkedinUrl ??
          null,

        siteLabel:
          data.siteLabel ??
          null,
      },

      create: {
        id: 1,

        name: data.name,

        title:
          data.title,

        bio: data.bio,

        location:
          data.location ??
          null,

        contactEmail:
          data.contactEmail ??
          null,

        availability:
          data.availability ??
          null,

        githubUrl:
          data.githubUrl ??
          null,

        linkedinUrl:
          data.linkedinUrl ??
          null,

        siteLabel:
          data.siteLabel ??
          null,
      },
    }
  );

  revalidatePath(
    "/",
    "layout"
  );

  revalidatePath(
    "/about"
  );

  revalidatePath(
    "/contact"
  );

  revalidatePath(
    "/admin/settings"
  );
}