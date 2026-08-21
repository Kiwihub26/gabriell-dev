"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import {
  contactMessageSchema,
} from "@/lib/validation";

export async function sendMessage(
  formData: FormData
) {
  /*
  |--------------------------------------------------------------------------
  | Honeypot
  |--------------------------------------------------------------------------
  |
  | Real users will never fill this field.
  | Basic bots frequently fill every input.
  |
  */

  const website = String(
    formData.get("website") ?? ""
  ).trim();

  if (website) {
    redirect("/contact?sent=true");
  }

  const result =
    contactMessageSchema.safeParse({
      name: formData.get("name"),

      email:
        formData.get("email"),

      subject:
        formData.get("subject"),

      message:
        formData.get("message"),
    });

  if (!result.success) {
    throw new Error(
      result.error.issues[0]
        ?.message ??
        "Invalid form submission."
    );
  }

  await prisma.message.create({
    data: result.data,
  });

  redirect("/contact?sent=true");
}