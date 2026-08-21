"use client";

import {
  useCallback,
  useState,
} from "react";

import BootLoader from "@/components/BootLoader";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({
  children,
}: PageShellProps) {
  const [booting, setBooting] =
    useState(true);

  const finishBoot =
    useCallback(() => {
      setBooting(false);
    }, []);

  return (
    <>
      {booting && (
        <BootLoader
          onComplete={finishBoot}
        />
      )}

      {children}
    </>
  );
}