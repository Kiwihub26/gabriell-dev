"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function sendMessage(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  const subject = String(
    formData.get("subject") ?? ""
  ).trim();

  const message = String(
    formData.get("message") ?? ""
  ).trim();

  if (!name || !email || !subject || !message) {
    throw new Error("Please complete all fields.");
  }

  if (!email.includes("@")) {
    throw new Error(
      "Please enter a valid email address."
    );
  }

  await prisma.message.create({
    data: {
      name,
      email,
      subject,
      message,
    },
  });

  redirect("/contact?sent=true");
}