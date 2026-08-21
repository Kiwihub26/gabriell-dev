import ConfirmActionButton from "@/components/ConfirmActionButton";

import { prisma } from "@/lib/prisma";

import {
  deleteMessage,
  markMessageRead,
  markMessageUnread,
} from "@/app/admin/actions/messages";

export default async function AdminMessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const unreadCount = messages.filter(
    (message) => !message.isRead
  ).length;

  return (
    <div>
      {/* HEADER */}
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A3FF12]">
          Admin / Messages
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#F4F4F2] md:text-5xl">
          Contact Messages
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-500">
          Review messages submitted through the public portfolio contact form.
        </p>
      </div>

      {/* STATS */}
      <div className="mt-10 grid gap-px border border-neutral-800 bg-neutral-800 sm:grid-cols-3">
        <div className="bg-[#0A0A0A] p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-600">
            Total Messages
          </p>

          <p className="mt-3 text-3xl font-medium text-[#F4F4F2]">
            {messages.length}
          </p>
        </div>

        <div className="bg-[#0A0A0A] p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-600">
            Unread
          </p>

          <p className="mt-3 text-3xl font-medium text-[#A3FF12]">
            {unreadCount}
          </p>
        </div>

        <div className="bg-[#0A0A0A] p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-600">
            Read
          </p>

          <p className="mt-3 text-3xl font-medium text-[#F4F4F2]">
            {messages.length - unreadCount}
          </p>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="mt-10">
        {messages.length === 0 ? (
          <div className="border border-neutral-800 p-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-600">
              No messages yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <article
                key={message.id}
                className={`
                  border p-6 md:p-8
                  ${
                    message.isRead
                      ? "border-neutral-800 bg-[#0A0A0A]"
                      : "border-[#A3FF12]/30 bg-[#A3FF12]/[0.02]"
                  }
                `}
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      {!message.isRead && (
                        <span className="h-2 w-2 rounded-full bg-[#A3FF12]" />
                      )}

                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-600">
                        {message.isRead ? "Read" : "Unread"}
                      </p>

                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-700">
                        {message.createdAt.toLocaleString()}
                      </p>
                    </div>

                    <h2 className="mt-5 text-2xl font-medium tracking-tight text-[#F4F4F2]">
                      {message.subject}
                    </h2>

                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      <p className="text-sm text-neutral-400">
                        {message.name}
                      </p>

                      <a
                        href={`mailto:${message.email}`}
                        className="text-sm text-neutral-500 transition hover:text-[#A3FF12]"
                      >
                        {message.email}
                      </a>
                    </div>

                    <div className="mt-7 border-t border-neutral-800 pt-6">
                      <p className="whitespace-pre-wrap text-sm leading-7 text-neutral-400">
                        {message.message}
                      </p>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-wrap items-start gap-3 lg:flex-col">
                    {message.isRead ? (
                      <form
                        action={markMessageUnread.bind(null, message.id)}
                      >
                        <button
                          type="submit"
                          className="min-w-[140px] border border-neutral-700 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400 transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
                        >
                          Mark Unread
                        </button>
                      </form>
                    ) : (
                      <form
                        action={markMessageRead.bind(null, message.id)}
                      >
                        <button
                          type="submit"
                          className="min-w-[140px] border border-neutral-700 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400 transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
                        >
                          Mark Read
                        </button>
                      </form>
                    )}

                    <a
                      href={`mailto:${message.email}?subject=Re: ${encodeURIComponent(
                        message.subject
                      )}`}
                      className="min-w-[140px] border border-neutral-800 px-4 py-3 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500 transition hover:border-neutral-600 hover:text-white"
                    >
                      Reply ↗
                    </a>

                    <ConfirmActionButton
                      action={deleteMessage.bind(null, message.id)}
                      message={`Delete the message from ${message.name}?\n\nThis action cannot be undone.`}
                      label="Delete"
                      pendingLabel="Deleting..."
                      className="min-w-[140px] border border-red-950 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-white"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}