"use client";

import { useTransition } from "react";

type ConfirmActionButtonProps = {
  action: () => void | Promise<void>;
  message: string;
  label: string;
  pendingLabel?: string;
  className?: string;
};

export default function ConfirmActionButton({
  action,
  message,
  label,
  pendingLabel = "Processing...",
  className = "",
}: ConfirmActionButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    const confirmed = window.confirm(message);

    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      await action();
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      className={`
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {isPending ? pendingLabel : label}
    </button>
  );
}