export default function SectionLabel({ number, label }: { number: string; label: string }) {
  return <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500"><span className="text-[#A3FF12]">{number}</span><span className="mx-2 text-neutral-700">/</span>{label}</p>;
}
