"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

type BootLoaderProps = { onComplete: () => void };

export default function BootLoader({ onComplete }: BootLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(100, current + Math.floor(Math.random() * 12) + 5);
        if (next === 100) {
          window.clearInterval(interval);
          window.setTimeout(onComplete, 250);
        }
        return next;
      });
    }, 200);
    return () => window.clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] bg-[#0A0A0A] px-6 text-[#F4F4F2]">
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-between py-10">
        <div className="flex justify-between font-mono text-xs uppercase tracking-[0.2em]">
          <span>GM/</span><span className="text-neutral-600">System Boot</span>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#A3FF12]">Initializing Portfolio</p>
          <h1 className="mt-6 text-5xl font-bold uppercase leading-none md:text-7xl">Gabriell<br />Montero.</h1>
        </div>
        <div>
          <div className="flex items-end justify-between">
            <span className="font-mono text-xs uppercase text-neutral-500">Loading Interface</span>
            <span className="font-mono text-5xl font-semibold md:text-7xl">{String(progress).padStart(3, "0")}</span>
          </div>
          <div className="mt-5 h-px bg-neutral-800">
            <motion.div className="h-full bg-[#A3FF12]" animate={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
