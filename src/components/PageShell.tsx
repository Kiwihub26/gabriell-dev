"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import BootLoader from "@/components/BootLoader";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false);
  const [booting, setBooting] = useState(false);

  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem("gabriell-portfolio-booted") === "true";
    setBooting(!alreadyBooted);
    setChecked(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = booting ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [booting]);

  const finishBoot = useCallback(() => {
    sessionStorage.setItem("gabriell-portfolio-booted", "true");
    setBooting(false);
  }, []);

  if (!checked) return <div className="min-h-screen bg-[#0A0A0A]" />;

  return (
    <>
      <AnimatePresence>{booting && <BootLoader onComplete={finishBoot} />}</AnimatePresence>
      <motion.div animate={{ opacity: booting ? 0 : 1, y: booting ? 12 : 0 }} transition={{ duration: 0.45 }}>
        {children}
      </motion.div>
    </>
  );
}
