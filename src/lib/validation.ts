import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is too short.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(254, "Email is too long."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject is too short.")
    .max(150, "Subject is too long."),

  message: z
    .string()
    .trim()
    .min(10, "Message is too short.")
    .max(5000, "Message is too long."),
});

export const siteSettingsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is too short.")
    .max(100, "Name is too long."),

  title: z
    .string()
    .trim()
    .min(2, "Title is too short.")
    .max(150, "Title is too long."),

  bio: z
    .string()
    .trim()
    .min(10, "Bio is too short.")
    .max(2000, "Bio is too long."),

  location: z
    .string()
    .trim()
    .max(150)
    .optional(),

  contactEmail: z
    .union([
      z.literal(""),
      z
        .string()
        .trim()
        .email("Please enter a valid email address.")
        .max(254),
    ])
    .optional(),

  availability: z
    .string()
    .trim()
    .max(150)
    .optional(),

  githubUrl: z
    .union([
      z.literal(""),
      z.string().url("Invalid GitHub URL."),
    ])
    .optional(),

  linkedinUrl: z
    .union([
      z.literal(""),
      z.string().url("Invalid LinkedIn URL."),
    ])
    .optional(),

  siteLabel: z
    .string()
    .trim()
    .max(80)
    .optional(),
});

export const projectSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Project title is too short.")
    .max(150, "Project title is too long."),

  description: z
    .string()
    .trim()
    .min(10, "Description is too short.")
    .max(500, "Description is too long."),

  overview: z
    .string()
    .trim()
    .min(20, "Overview is too short.")
    .max(5000, "Overview is too long."),

  category: z
    .string()
    .trim()
    .min(2, "Category is required.")
    .max(100),

  status: z
    .string()
    .trim()
    .min(2, "Status is required.")
    .max(100),

  year: z
    .number()
    .int()
    .min(2000)
    .max(2100),

  displayOrder: z
    .number()
    .int()
    .min(0)
    .max(9999),

  technologies: z.array(
    z
      .string()
      .trim()
      .min(1)
      .max(80)
  ),

  githubUrl: z
    .string()
    .url("Invalid GitHub URL.")
    .nullable(),

  liveUrl: z
    .string()
    .url("Invalid live URL.")
    .nullable(),

  imageUrl: z
    .string()
    .trim()
    .max(500)
    .nullable(),

  galleryImages: z.array(
    z
      .string()
      .trim()
      .max(500)
  ),

  challenge: z
    .string()
    .trim()
    .max(5000)
    .nullable(),

  solution: z
    .string()
    .trim()
    .max(5000)
    .nullable(),

  result: z
    .string()
    .trim()
    .max(5000)
    .nullable(),
});