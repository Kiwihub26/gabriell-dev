"use client";

import type {
  FormEvent,
  ReactNode,
} from "react";

type ConfirmFormProps = {
  action: (
    formData: FormData
  ) => void | Promise<void>;

  message: string;

  children: ReactNode;

  className?: string;
};

export default function ConfirmForm({
  action,
  message,
  children,
  className = "",
}: ConfirmFormProps) {
  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    const confirmed =
      window.confirm(message);

    if (!confirmed) {
      event.preventDefault();
    }
  }

  return (
    <form
      action={action}
      onSubmit={handleSubmit}
      className={className}
    >
      {children}
    </form>
  );
}