import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
export default function ContactCTA(){return <section className="px-6 py-32"><div className="mx-auto max-w-7xl"><SectionLabel number="06" label="Contact"/><div className="mt-10 border-t border-neutral-800 pt-16"><h2 className="text-6xl font-bold uppercase leading-[.85] md:text-8xl">Let's build<br/>something<br/>useful.</h2><Link href="/contact" className="mt-12 inline-flex rounded-full bg-[#A3FF12] px-8 py-5 font-mono text-xs uppercase text-black">Contact →</Link></div></div></section>}
