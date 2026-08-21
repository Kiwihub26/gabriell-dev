"use client";

import {
  useEffect,
  useState,
} from "react";

type BootLoaderProps = {
  onComplete?: () => void;
};

export default function BootLoader({
  onComplete,
}: BootLoaderProps) {
  const [leaving, setLeaving] =
    useState(false);

  useEffect(() => {
    const leaveTimer =
      window.setTimeout(() => {
        setLeaving(true);
      }, 1700);

    const completeTimer =
      window.setTimeout(() => {
        if (
          typeof onComplete ===
          "function"
        ) {
          onComplete();
        }
      }, 2400);

    return () => {
      window.clearTimeout(
        leaveTimer
      );

      window.clearTimeout(
        completeTimer
      );
    };
  }, [onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        min-h-screen w-screen
        overflow-hidden
        bg-[#0A0A0A]
        transition-all duration-700 ease-in-out
        ${
          leaving
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      {/* GRID BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.055]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* TOP BAR */}
      <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-10 md:right-10 md:top-8">
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-600 md:text-[10px]">
          Gabriell.dev
        </p>

        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#A3FF12]" />

          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500 md:text-[10px]">
            Portfolio System
          </p>
        </div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-10 lg:px-16">
        <div className="w-full">
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            {/* LEFT */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A3FF12] md:text-xs">
                Initializing Experience
              </p>

              <div className="mt-6 flex items-end">
                <h1 className="text-[24vw] font-semibold leading-[0.78] tracking-[-0.09em] text-[#F4F4F2] sm:text-[20vw] md:text-[17vw] lg:text-[13vw] xl:text-[11vw]">
                  G-MONTERO
                </h1>

                <span className="mb-[2vw] ml-3 h-4 w-4 rounded-full bg-[#A3FF12] md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="pb-2 lg:pb-5">
              <p className="max-w-sm text-sm leading-7 text-neutral-500 md:text-base">
                Loading software engineering,
                full-stack systems, mobile
                applications, and selected work.
              </p>

              <div className="mt-8 border-t border-neutral-800 pt-5">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-600">
                    System Status
                  </p>

                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#A3FF12]">
                    Ready
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-12 md:mt-16">
            <div className="h-px w-full overflow-hidden bg-neutral-800">
              <div className="boot-loader-progress h-full bg-[#A3FF12]" />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-700 md:text-[9px]">
                Boot Sequence
              </p>

              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-700 md:text-[9px]">
                2026 / Portfolio
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DECORATION */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between md:bottom-8 md:left-10 md:right-10">
        <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-700">
          Full-Stack / Mobile / Systems
        </p>

        <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-700">
          PH
        </p>
      </div>
    </div>
  );
}