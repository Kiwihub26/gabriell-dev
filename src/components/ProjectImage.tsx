"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageProps = {
  src: string | null;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function ProjectImage({
  src,
  alt,
  className = "",
  priority = false,
}: ProjectImageProps) {
  const [hasError, setHasError] =
    useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-neutral-950 ${className}`}
      >
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-700">
            Project Media
          </p>

          <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-neutral-500">
            No image available
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      className={`object-cover transition duration-500 ${className}`}
      onError={() => setHasError(true)}
    />
  );
}