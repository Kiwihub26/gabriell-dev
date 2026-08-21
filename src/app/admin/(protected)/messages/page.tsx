import {
  deleteMessage,
  markMessageRead,
  markMessageUnread,
} from "@/app/admin/actions/messages";

import { prisma } from "@/lib/prisma";

export default async function AdminMessagesPage() {
  const messages =
    await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  const unreadCount =
    messages.filter(
      (message) => !message.isRead
    ).length;

  return (
    <div>
      {/* HEADER */}
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A3FF12]">
          Admin / Messages
        </p>

        <h1 className="mt-3 text-4xl font-semibold text-white">
          Messages
        </h1>

        <p className="mt-3 text-sm text-neutral-500">
          Messages submitted through your portfolio contact form.
        </p>
      </div>

      {/* STATS */}
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        <div className="border border-neutral-800 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
            Total Messages
          </p>

          <p className="mt-3 text-3xl font-semibold text-white">
            {messages.length}
          </p>
        </div>

        <div className="border border-neutral-800 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">
            Unread
          </p>

          <p className="mt-3 text-3xl font-semibold text-[#A3FF12]">
            {unreadCount}
          </p>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="mt-8 space-y-4">
        {messages.length === 0 ? (
          <div className="border border-neutral-800 p-10">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-600">
              No messages yet.
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <article
              key={message.id}
              className={`
                border
                p-6
                ${
                  message.isRead
                    ? "border-neutral-800 bg-transparent"
                    : "border-[#A3FF12]/30 bg-[#A3FF12]/[0.03]"
                }
              `}
            >
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-lg font-medium text-white">
                      {message.subject}
                    </h2>

                    {!message.isRead && (
                      <span className="rounded-full bg-[#A3FF12] px-2 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-black">
                        New
                      </span>
                    )}
                  </div>

                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-600">
                    {message.name} /{" "}
                    {message.email}
                  </p>

                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-neutral-700">
                    {message.createdAt.toLocaleString()}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {message.isRead ? (
                    <form
                      action={markMessageUnread.bind(
                        null,
                        message.id
                      )}
                    >
                      <button
                        type="submit"
                        className="border border-neutral-700 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400 transition hover:border-white hover:text-white"
                      >
                        Mark Unread
                      </button>
                    </form>
                  ) : (
                    <form
                      action={markMessageRead.bind(
                        null,
                        message.id
                      )}
                    >
                      <button
                        type="submit"
                        className="border border-[#A3FF12]/40 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#A3FF12] transition hover:bg-[#A3FF12] hover:text-black"
                      >
                        Mark Read
                      </button>
                    </form>
                  )}

                  <form
                    action={deleteMessage.bind(
                      null,
                      message.id
                    )}
                  >
                    <button
                      type="submit"
                      className="border border-red-900 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-red-500 transition hover:border-red-500 hover:bg-red-500 hover:text-black"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-800 pt-6">
                <p className="whitespace-pre-wrap text-sm leading-7 text-neutral-400">
                  {message.message}
                </p>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}