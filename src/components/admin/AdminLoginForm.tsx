"use client";

import { useActionState } from "react";

import { login } from "@/app/admin/login/actions";

type LoginState = {
  error?: string;
};

const initialState: LoginState = {};

export default function AdminLoginForm() {
  const [state, formAction, pending] =
    useActionState(login, initialState);

  return (
    <form
      action={formAction}
      className="mt-10 space-y-6"
    >
      <div>
        <label
          htmlFor="email"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-3 w-full border border-neutral-800 bg-transparent px-4 py-4 text-white outline-none transition focus:border-[#A3FF12]"
        />
      </div>

      {state.error && (
        <p className="font-mono text-xs text-red-400">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#A3FF12] px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.15em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending
          ? "Authenticating..."
          : "Sign In"}
      </button>
    </form>
  );
}