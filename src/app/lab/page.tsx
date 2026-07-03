import Link from "next/link";

export default function LabPage() {
  return (
    <main className="min-h-screen bg-[var(--color-pure-black)] text-[var(--color-champagne-gold)] font-mono">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black text-[#E5D3B3] border-b border-[#E5D3B3]/10 py-4 px-8 flex justify-between items-center">
        <Link href="/" className="hover:text-white transition-colors">
          [ &lt;= Return ]
        </Link>
        <div className="flex gap-6">
          <Link href="#architecture" className="hover:text-white transition-colors">[ Architecture ]</Link>
          <Link href="#models" className="hover:text-white transition-colors">[ Models ]</Link>
          <Link href="#security" className="hover:text-white transition-colors">[ Security ]</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="p-8 max-w-7xl mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-[var(--color-lcars-neon-orange)]">The Lab</h1>
        <p className="opacity-70">Applied Engineering & Autonomous Security Orchestration.</p>
      </div>
    </main>
  );
}
