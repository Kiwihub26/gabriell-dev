"use client";

import { useTransition } from "react";

import { logoutAdmin } from "@/app/admin/actions/auth";

export default function LogoutButton() {
  const [isPending, startTransition] =
    useTransition();

  function handleLogout() {
    const confirmed =
      window.confirm(
        "Are you sure you want to sign out of the administration dashboard?"
      );

    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      await logoutAdmin();
    });
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isPending}
      className="
        border
        border-neutral-800
        px-4
        py-3
        font-mono
        text-[9px]
        uppercase
        tracking-[0.14em]
        text-neutral-500
        transition
        hover:border-red-500
        hover:bg-red-500
        hover:text-white
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {isPending
        ? "Signing Out..."
        : "Sign Out"}
    </button>
  );
}