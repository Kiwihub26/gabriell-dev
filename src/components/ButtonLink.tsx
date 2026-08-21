import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  const styles = variant === "primary" ? "bg-[#A3FF12] text-black hover:bg-white" : "border border-neutral-700 text-white hover:border-white";
  return <Link href={href} className={`inline-flex px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] transition ${styles}`}>{children}</Link>;
}
