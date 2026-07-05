import Link from "next/link";

export default function AiCybersecurityReviewPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#3E2723] font-serif">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#D4C4A8] text-[#3E2723] py-4 px-8 flex justify-between items-center shadow-sm">
        <Link href="/library" className="hover:opacity-70 transition-opacity">
          &lt;- Back to Library
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto py-16 px-6">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          A Comprehensive Review of Artificial Intelligence for Proactive and Adaptive Cybersecurity
        </h1>

        <div className="italic text-[#3E2723]/70 mb-8">
          <p>Author: Divesh Shyamkant Bari</p>
        </div>

        <hr className="border-t border-[#3E2723]/20 my-8" />

        {/* Abstract */}
        <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#3E2723]/10 pb-2">Abstract</h2>

        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          The traditional, reactive security measures have been rendered inadequate by the escalating sophistication and frequency of cyber threats. This paper reviews recent research on the integration of Artificial Intelligence (AI), Machine Learning (ML), Deep Learning (DL) into the domain of cybersecurity.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          Foundational principles of current cybersecurity systems along with their limitations against modern, large-scale attacks is outlined in this paper. Then the paradigm shift towards proactive threat hunting and the adoption of advanced architectures is examined. These architectures include Heterogeneous and Hierarchical Graph Neural Networks (HGNNs), for robust intrusion and anomaly detection.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          Furthermore, we explore the transformative role played by Large Language Models (LLMs) in threat intelligence and scam detection, highlighting novel approaches such as Retrieval-Augmented Generation (RAG) for temporal adaptation and multi-model voting systems for adversarial robustness.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          This review also considers and addresses the threat of offensive AI, the critical need for privacy preserving techniques like Federated Learning, and specific applications in IoT/OT environments.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          Finally, we discuss critical challenges, including model interpretability and adversarial vulnerabilities, outlining future research directions for creating resilient, self-adaptive security ecosystems.
        </p>

        {/* DOI Link */}
        <a
          href="https://doi.org/10.36227/techrxiv.176339197.78312572/v1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 border border-[#3E2723]/30 rounded-full text-sm font-sans tracking-wide hover:bg-[#3E2723] hover:text-[#F4F1EA] transition-colors"
        >
          [ Read Full Preprint on TechRxiv ]
        </a>
      </article>
    </main>
  );
}
