import Link from "next/link";

export default function CapstoneReport() {
  return (
    <main className="min-h-screen overflow-y-auto bg-[#F4F1EA] text-[#3E2723] font-serif">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#D4C4A8] text-[#3E2723] py-4 px-8 flex justify-between items-center shadow-sm">
        <Link href="/library" className="hover:opacity-70 transition-opacity">
          &lt;- Back to Library
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto py-16 px-6">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Security Threat Prevention using AI agents
        </h1>

        <hr className="border-t border-[#3E2723]/20 my-8" />

        {/* Content Formatting (The Article) */}
        
        <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#3E2723]/10 pb-2">Abstract</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          CyberWatch is an advanced AI-driven cybersecurity platform designed to automate the end-to-end process of log analysis, threat detection, and incident response. The system supports Security Operations Center (SOC) teams by delivering a hybrid detection strategy that combines rule-based techniques for known threats with the Isolation Forest machine learning algorithm to detect anomalous, zero-day system behavior.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#3E2723]/10 pb-2">I. Introduction &amp; Threat Landscape</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          Modern computing infrastructures generate immense volumes of heterogeneous log data, making manual analysis by SOC teams infeasible. Traditional cybersecurity solutions are predominantly rule-based, relying on static signatures that leave critical infrastructure vulnerable to advanced persistent threats (APTs). This reliance results in severe alert fatigue, high false-positive rates, and critically delayed incident response times.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#3E2723]/10 pb-2">II. System Architecture &amp; SIEM Integration</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          The platform is built on a modern web stack utilizing a Next.js frontend and a high-performance FastAPI Python backend, connected via WebSocket protocols for real-time, low-latency data streaming. To ensure the system operates on high-quality, normalized security streams, it is seamlessly integrated with the industry-standard Wazuh SIEM tool for centralized log collection.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#3E2723]/10 pb-2">III. The Multi-Agent Orchestration Framework</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          To prevent heavy machine learning inference from bottlenecking real-time log ingestion, CyberWatch utilizes a distributed, asynchronous multi-agent framework. This microservices architecture is divided into five specialized entities: a Monitoring Agent for log collection, an Analysis Agent for NLP feature extraction, a Detection Agent for threat identification, a Prevention Agent for mitigation, and a Reporting Agent.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#3E2723]/10 pb-2">IV. Machine Learning &amp; Automated Mitigation</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          The core intelligence engine leverages the Isolation Forest algorithm to mathematically isolate anomalous data points in high-dimensional space without requiring labeled attack datasets. When strict mathematical confidence thresholds are met, the Prevention Agent autonomously executes predefined mitigation actions on the host system, such as dynamically updating iptables to block malicious IP addresses or terminating suspicious processes.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#3E2723]/10 pb-2">V. Conclusion</h2>
        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          By bridging the gap between raw log collection and intelligent automation, CyberWatch fundamentally enhances network security posture. The platform successfully reduces the Mean Time to Respond (MTTR) from hours to milliseconds, minimizes false positives, and utilizes Large Language Models (LLMs) to generate natural-language PDF summaries, drastically reducing the cognitive load on human analysts.
        </p>

      </article>
    </main>
  );
}
