"use server";

import {
  revalidatePath,
} from "next/cache";

import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

function validateId(
  id: number
) {
  if (
    !Number.isInteger(id) ||
    id <= 0
  ) {
    throw new Error(
      "Invalid message ID."
    );
  }
}

export async function markMessageRead(
  id: number
) {
  await requireAdmin();

  validateId(id);

  await prisma.message.update({
    where: {
      id,
    },

    data: {
      isRead: true,
    },
  });

  revalidatePath(
    "/admin/messages"
  );
}

export async function markMessageUnread(
  id: number
) {
  await requireAdmin();

  validateId(id);

  await prisma.message.update({
    where: {
      id,
    },

    data: {
      isRead: false,
    },
  });

  revalidatePath(
    "/admin/messages"
  );
}

export async function deleteMessage(
  id: number
) {
  await requireAdmin();

  validateId(id);

  await prisma.message.delete({
    where: {
      id,
    },
  });

  revalidatePath(
    "/admin/messages"
  );
}