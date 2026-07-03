import Link from "next/link";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#3E2723] font-serif">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#D4C4A8] text-[#3E2723] py-4 px-8 flex justify-between items-center shadow-sm">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          &lt;- Home
        </Link>
        <div className="flex gap-6">
          <Link href="#research" className="hover:opacity-70 transition-opacity">Research</Link>
          <Link href="#publications" className="hover:opacity-70 transition-opacity">Publications</Link>
          <Link href="#notes" className="hover:opacity-70 transition-opacity">Notes</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="p-12 max-w-6xl mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">The Library</h1>
        <p className="opacity-70 italic mb-12">Academic Research & Formal Neural Network Analysis.</p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <Link href="/library/capstone" className="bg-white p-8 border border-[#3E2723]/10 shadow-[4px_4px_0px_0px_rgba(62,39,35,0.05)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(62,39,35,0.08)] transition-all duration-300 flex flex-col justify-between group cursor-pointer">
            <div>
              <div className="text-[10px] font-sans tracking-widest text-[#3E2723]/50 mb-4 uppercase">[ CAPSTONE REPORT ]</div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-[#3E2723]/80 transition-colors">Security Threat Prevention using AI agents</h2>
              <p className="text-[#3E2723]/80 leading-relaxed text-sm">
                An AI-driven cybersecurity platform integrating Wazuh and the Isolation Forest algorithm within a multi-agent framework for automated threat response.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/library/tcn-lstm" className="bg-white p-8 border border-[#3E2723]/10 shadow-[4px_4px_0px_0px_rgba(62,39,35,0.05)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(62,39,35,0.08)] transition-all duration-300 flex flex-col justify-between group cursor-pointer">
            <div>
              <div className="text-[10px] font-sans tracking-widest text-[#3E2723]/50 mb-4 uppercase">[ RESEARCH PAPER ]</div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-[#3E2723]/80 transition-colors">A Comparative Study of TCN-LSTM, LSTM, and GRU Models for Weather Forecasting</h2>
              <p className="text-[#3E2723]/80 leading-relaxed text-sm">
                Comparative analysis of standalone vs. hybrid recurrent networks using multivariate time-series forecasting.
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/library/ai-cybersecurity-review" className="bg-white p-8 border border-[#3E2723]/10 shadow-[4px_4px_0px_0px_rgba(62,39,35,0.05)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(62,39,35,0.08)] transition-all duration-300 flex flex-col justify-between group cursor-pointer">
            <div>
              <div className="text-[10px] font-sans tracking-widest text-[#3E2723]/50 mb-4 uppercase">[ REVIEW PAPER ]</div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-[#3E2723]/80 transition-colors">A Comprehensive Review of Artificial Intelligence for Proactive and Adaptive Cybersecurity</h2>
              <p className="text-[#3E2723]/80 leading-relaxed text-sm">
                Examining the shift from reactive defenses to proactive threat hunting using HGNNs, LLMs, and Federated Learning.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
