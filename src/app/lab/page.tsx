"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ─── animation helpers ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Aegis AI data ─────────────────────────────────────────────── */
const aegisArchRows = [
  {
    layer: "Frontend",
    tech: "React 18, Vite",
    purpose: "Landing, Auth, Dashboard, and Alert Detail Drawer",
  },
  {
    layer: "Backend",
    tech: "Python 3.11+, SQLAlchemy",
    purpose: "REST API, JWT/API Key Auth, Tenant Isolation",
  },
  {
    layer: "Agents",
    tech: "pywin32, scapy",
    purpose: "Windows Event Log Tailer, Passive Packet Monitor",
  },
];

const aegisDetectionRules = [
  "Brute Force & Impossible Travel",
  "Privilege Escalation",
  "Port Scan & Connection Volume",
  "SYN Flood & DNS Tunneling",
];

const aegisAiOutputFields = [
  { prefix: "+", label: "Summary", detail: "Plain-English explanation" },
  { prefix: "+", label: "Severity", detail: "Low / Medium / High / Critical" },
  {
    prefix: "+",
    label: "MITRE ATT&CK",
    detail: "Technique ID and name mapping",
  },
  {
    prefix: "+",
    label: "Recommended Action",
    detail: "Specific next steps",
  },
];

const aegisStackCards = [
  {
    title: "SOAR",
    items: [
      "Human-in-the-Loop Workflow",
      "Analyst approval triggers a simulated firewall IP block",
    ],
  },
  {
    title: "Database",
    items: [
      "SQLite (Dev) / PostgreSQL (Prod)",
      "Multi-tenant isolation via owner_id",
    ],
  },
  {
    title: "Log Generation",
    items: [
      "Synthetic Log Generator",
      "5 attack scenarios with IP geolocation simulation",
    ],
  },
];

/* ─── Splunk data ───────────────────────────────────────────────── */
const agents = [
  {
    name: "Network Agent",
    tag: "main thread",
    role: "Polls Splunk for threats, sends to LLM, blocks IPs",
    interval: "Every 15s",
  },
  {
    name: "File Integrity Agent",
    tag: null,
    role: "Monitors critical system files (/etc/passwd, /etc/shadow, etc.) for unauthorized changes via SHA-256 hashing",
    interval: "Every 60s",
  },
  {
    name: "Self-Healing Agent",
    tag: null,
    role: "Automatically unbans IPs after a 5-minute cooldown to prevent permanent lockouts",
    interval: "Every 60s",
  },
];

const detectionItems = [
  "SSH Brute Force (≥5 failed attempts)",
  "Failed Login (≥3 auth failures)",
  "Port Scan (SYN/Nmap probe traffic)",
  "Web App Attacks (SQLi, XSS, path traversal in Nginx)",
];

const techCards = [
  {
    title: "Benchmarking",
    items: [
      "generate_dataset.py — synthetic threat dataset generation",
      "evaluate_benchmark.py — Precision / Recall / F1-Score evaluation",
    ],
  },
  {
    title: "Stack",
    items: [
      "Python 3.8+",
      "Splunk Enterprise (Docker)",
      "Groq API (Llama 3.3 70B)",
      "SQLite",
      "iptables",
    ],
  },
  {
    title: "Safety Constraints",
    items: [
      "IP Whitelist (localhost / WSL)",
      "Self-healing (5m auto-expire)",
      "SQLite Deduplication",
      "Full Audit Trail",
    ],
  },
];

/* ─── TCN-LSTM data ───────────────────────────────────────────────── */
const tcnModels = [
  {
    model: "Standalone GRU",
    type: "Recurrent (2 gates)",
    params: "29,761",
    mae: "1.8458 °C",
    note: "Best Quantitative",
  },
  {
    model: "Standalone LSTM",
    type: "Recurrent (3 gates)",
    params: "4,897",
    mae: "1.8890 °C",
    note: null,
  },
  {
    model: "TCN-LSTM Hybrid",
    type: "CNN frontend → LSTM backend",
    params: "105,505",
    mae: "1.9978 °C",
    note: "Best Qualitative",
  },
];

const tcnPipelineSteps = [
  "Dataset: Jena Climate Archive (14 meteorological variables)",
  "Windowing: 72-hour input window predicting 12 hours ahead",
  "Feature Engineering: Standardized variables with cyclical encoding for wind direction",
  "Optimization: Systematic hyperparameter search via KerasTuner",
];

const tcnFindings = [
  {
    prefix: "+",
    label: 'The "Sweet Spot"',
    detail:
      "The moderately complex GRU achieved the lowest MAE by balancing capacity and generalization.",
  },
  {
    prefix: "+",
    label: "The Hybrid Advantage",
    detail:
      "The TCN-LSTM hybrid excelled qualitatively at capturing the high-frequency texture and rapid oscillations of the data, which the smoother GRU/LSTM models missed entirely.",
  },
];

const tcnStackCards = [
  {
    title: "Stack",
    items: ["TensorFlow / Keras", "Python", "Jupyter Notebooks"],
  },
  {
    title: "Hardware / Tools",
    items: ["NVIDIA T4 GPU (Google Colab)", "KerasTuner"],
  },
  {
    title: "Paper Output",
    items: [
      "Typeset in LaTeX (IEEE conference format)",
      "Published to TechRxiv",
    ],
  },
];

/* ─── Weather Dashboard data ──────────────────────────────────────── */
const weatherArchRows = [
  {
    layer: "Frontend",
    tech: "React 19, Framer Motion, Leaflet",
    purpose: "Interactive maps with dynamic opacity sliders and animated forecasts",
  },
  {
    layer: "Backend",
    tech: "FastAPI, Pydantic, Python",
    purpose: "Aggregates 3 distinct WeatherAPI endpoints into a unified payload",
  },
  {
    layer: "AI Engine",
    tech: "OpenAI GPT-3.5-turbo",
    purpose: "Parses numerical weather data into contextual fashion advice",
  },
];

const weatherPipelineSteps = [
  "WeatherAPI Aggregation: Pre-slices hourly data (±2/+4 hours) for optimized frontend payloads",
  "Map Overlays: Four OpenWeatherMap tile layers (Precipitation, Clouds, Temp, Wind) mapped over Esri dark tiles",
  "Smooth Panning: Custom React hook (useMap + useEffect) prevents expensive map remounts during city searches",
];

const weatherDiagnostics = [
  {
    severity: "YELLOW",
    label: "DOM Conflict",
    colorClass: "text-yellow-500/90",
    description:
      "The outfit suggestion flow updates the DOM via both document.getElementById and React state (setOutfitSuggestion) simultaneously, risking render cycle inconsistencies.",
  },
  {
    severity: "RED",
    label: "Credential Exposure",
    colorClass: "text-rose-500/90",
    description:
      "OpenWeatherMap API key is hardcoded directly in the frontend App.js source. Requires immediate rotation and migration to environment variables.",
  },
];

const weatherStackCards = [
  {
    title: "Stack",
    items: ["React 19", "MUI", "Tailwind CSS"],
  },
  {
    title: "APIs",
    items: ["WeatherAPI.com", "OpenWeatherMap Tiles", "OpenAI API"],
  },
  {
    title: "Python",
    items: ["FastAPI", "Uvicorn", "python-dotenv"],
  },
];

/* ─── Task Management System data ──────────────────────────────────────── */
const taskArchRows = [
  {
    layer: "Frontend",
    tech: "Jinja2, HTML, Vanilla CSS",
    purpose: "Dynamic template rendering with a responsive sidebar and persistent dark mode overrides",
  },
  {
    layer: "Backend",
    tech: "Python Flask, Flask-Login",
    purpose: "Manages 9 REST endpoints, Werkzeug password hashing, and user session states",
  },
  {
    layer: "Database",
    tech: "SQLite, SQLAlchemy",
    purpose: "Relational storage isolating tasks per user with foreign key constraints",
  },
];

const taskFeatures = [
  "Auth & Security: Registration with duplicate-username checks and hashed password verification",
  "Priority Triage: Tasks tagged with color-coded priority pills (High/Medium/Low) for visual sorting",
  "State Management: Real-time sidebar widget tracking pending, completed, and high-priority task counts",
];

const taskDiagnostics = [
  {
    severity: "YELLOW",
    label: "Orphaned Assets",
    colorClass: "text-yellow-500/90",
    description:
      "Legacy templates (base.html, form.html, about.html) remain in the directory structure without active route bindings, causing repository bloat.",
  },
  {
    severity: "RED",
    label: "CSS Syntax Collision",
    colorClass: "text-rose-500/90",
    description:
      "A structural syntax error exists near line 485 of style.css where a .form-group block abruptly interrupts a .edit-profile-btn declaration, breaking profile UI rendering.",
  },
];

const taskStackCards = [
  {
    title: "Stack",
    items: ["Python", "Flask", "Werkzeug"],
  },
  {
    title: "Database",
    items: ["SQLite", "Flask-SQLAlchemy"],
  },
  {
    title: "UI",
    items: ["Jinja2 Templates", "Inter Font", "Vanilla CSS"],
  },
];

export default function LabPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-[#E5D3B3] font-mono selection:bg-[#E5D3B3]/20">
      {/* ─── Navbar ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#E5D3B3]/10 py-4 px-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="hover:text-white transition-colors text-sm"
          >
            [ &lt;= Return ]
          </Link>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="text-[#E5D3B3] hover:text-white transition-colors cursor-pointer text-sm font-mono focus:outline-none"
          >
            {isNavOpen ? "[ X CLOSE ]" : "[ MENU ]"}
          </button>
        </div>

        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col items-end gap-3 mt-4 overflow-hidden text-sm"
            >
              <Link
                href="#aegis"
                onClick={() => setIsNavOpen(false)}
                className="hover:text-white transition-colors"
              >
                [ Aegis AI ]
              </Link>
              <Link
                href="#splunk"
                onClick={() => setIsNavOpen(false)}
                className="hover:text-white transition-colors"
              >
                [ Splunk Agent ]
              </Link>
              <Link
                href="#tcn-lstm"
                onClick={() => setIsNavOpen(false)}
                className="hover:text-white transition-colors"
              >
                [ TCN-LSTM ]
              </Link>
              <Link
                href="#weather"
                onClick={() => setIsNavOpen(false)}
                className="hover:text-white transition-colors"
              >
                [ Weather Dashboard ]
              </Link>
              <Link
                href="#task-system"
                onClick={() => setIsNavOpen(false)}
                className="hover:text-white transition-colors"
              >
                [ Task System ]
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ─── Content ────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto py-12 px-6">

        {/* ================================================================
            AEGIS AI — Full-Stack Autonomous SIEM Platform
            ================================================================ */}
        <div id="aegis" className="mb-24 border-b border-[#E5D3B3]/10 pb-16 mb-16">

          {/* ── Aegis Header ──────────────────────────────────── */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="text-2xl font-bold mb-2 text-[#E5D3B3]"
            >
              &gt;_ Aegis AI&nbsp;
              <span className="text-[#E5D3B3]/50 font-normal">
                : Full-Stack Autonomous SIEM Platform
              </span>
            </motion.h1>

            <motion.div
              custom={1}
              variants={fadeUp}
              className="text-xs text-[#E5D3B3]/50 font-mono mb-4 flex items-center gap-2"
            >
              <span>[ Lead Contributor ]</span>
              <span className="text-[#E5D3B3]/30">|</span>
              <span>[ Co-developed ]</span>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              className="text-sm text-[#E5D3B3]/70 mb-8 border-l-2 border-[#E5D3B3]/30 pl-4 space-y-2"
            >
              <p>
                A full-stack, hosted SIEM platform designed to reduce analyst
                fatigue by automating the first-pass investigation of security
                alerts.
              </p>
              <p>
                It utilizes a custom 10-rule threat detection engine and
                leverages an AI analyst agent to automatically investigate and
                triage security alerts.
              </p>
            </motion.div>
          </motion.section>

          {/* ── Aegis Architecture Table ──────────────────────── */}
          <motion.section
            id="aegis-architecture"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mb-12"
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-3"
            >
              [ Core Architecture ]
            </motion.h2>

            <motion.div
              custom={1}
              variants={fadeUp}
              className="border border-[#E5D3B3]/20 rounded-md overflow-hidden text-sm"
            >
              {/* header */}
              <div className="grid grid-cols-3 bg-[#E5D3B3]/10 p-3 font-bold">
                <span>Layer</span>
                <span>Technology</span>
                <span>Purpose</span>
              </div>

              {/* rows */}
              {aegisArchRows.map((row, i) => (
                <motion.div
                  key={row.layer}
                  custom={i + 2}
                  variants={fadeUp}
                  className="grid grid-cols-3 p-3 border-t border-[#E5D3B3]/20 hover:bg-[#E5D3B3]/5 transition-colors items-center"
                >
                  <span className="font-semibold">{row.layer}</span>
                  <span className="text-[#E5D3B3]/70">{row.tech}</span>
                  <span className="text-[#E5D3B3]/70">{row.purpose}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Detection & AI Analyst ────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {/* Left — 10-Rule Detection Engine */}
            <motion.div custom={0} variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4">
                [ Threat Detection Engine ]
              </h3>
              <p className="text-sm text-[#E5D3B3]/70 mb-4">
                Custom Python polling loop executing every 10 seconds across
                identity, network, and packet-capture rules.
              </p>
              <ul className="space-y-2 text-sm">
                {aegisDetectionRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-2">
                    <span className="text-[#E5D3B3]/40 select-none shrink-0">
                      $
                    </span>
                    <span className="text-[#E5D3B3]/80">{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right — AI Analyst Agent */}
            <motion.div custom={1} variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4">
                [ AI Analyst Agent ]
              </h3>
              <p className="text-sm text-[#E5D3B3]/70 mb-4">
                Powered by Groq API (LLaMA 3.3 70B), triggered on-demand to
                gather context from the 20 most recent related logs.
              </p>
              <div className="space-y-2 text-sm border-l-2 border-[#E5D3B3]/20 pl-4">
                {aegisAiOutputFields.map((field) => (
                  <p key={field.label} className="text-[#E5D3B3]/80">
                    <span className="text-green-400/80 mr-1">
                      {field.prefix}
                    </span>
                    <span className="font-bold">{field.label}:</span>{" "}
                    <span className="text-[#E5D3B3]/60">{field.detail}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ── SOAR & Stack Grid ─────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4"
            >
              [ Platform Capabilities ]
            </motion.h2>

            <div className="flex flex-wrap gap-4 text-xs">
              {aegisStackCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="flex-1 min-w-[220px] border border-[#E5D3B3]/20 rounded-md p-4 hover:border-[#E5D3B3]/40 transition-colors"
                >
                  <h4 className="font-bold text-sm mb-3 text-[#E5D3B3]/90">
                    {card.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="text-[#E5D3B3]/60 flex items-start gap-1.5"
                      >
                        <span className="text-[#E5D3B3]/30 select-none shrink-0">
                          ›
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* ================================================================
            SPLUNK-AGENTIC-AI — Autonomous SIEM Agent
            ================================================================ */}
        <div id="splunk">

        {/* ── Project Header ──────────────────────────────────── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1
            custom={0}
            variants={fadeUp}
            className="text-2xl font-bold mb-4 text-[#E5D3B3]"
          >
            &gt;_ Splunk-Agentic-AI&nbsp;
            <span className="text-[#E5D3B3]/50 font-normal">
              : Autonomous SIEM Agent
            </span>
          </motion.h1>

          <motion.div
            custom={1}
            variants={fadeUp}
            className="text-sm text-[#E5D3B3]/70 mb-8 border-l-2 border-[#E5D3B3]/30 pl-4"
          >
            An AI-powered, autonomous Security Operations Center (SOC) analyst
            implementing a full OODA loop (Observe → Orient → Decide → Act) for
            real-time cybersecurity threat detection and automated response
            without human intervention.
          </motion.div>
        </motion.section>

        {/* ── Architecture Table ──────────────────────────────── */}
        <motion.section
          id="architecture"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mb-12"
        >
          <motion.h2
            custom={0}
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-3"
          >
            [ 3 Concurrent Agents ]
          </motion.h2>

          <motion.div
            custom={1}
            variants={fadeUp}
            className="border border-[#E5D3B3]/20 rounded-md overflow-hidden text-sm"
          >
            {/* header */}
            <div className="grid grid-cols-4 bg-[#E5D3B3]/10 p-3 font-bold">
              <span>Agent</span>
              <span className="col-span-2">Role</span>
              <span>Interval</span>
            </div>

            {/* rows */}
            {agents.map((a, i) => (
              <motion.div
                key={a.name}
                custom={i + 2}
                variants={fadeUp}
                className="grid grid-cols-4 p-3 border-t border-[#E5D3B3]/20 hover:bg-[#E5D3B3]/5 transition-colors items-center"
              >
                <span className="font-semibold">
                  {a.name}
                  {a.tag && (
                    <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-[#E5D3B3]/10 text-[#E5D3B3]/60">
                      {a.tag}
                    </span>
                  )}
                </span>
                <span className="col-span-2 text-[#E5D3B3]/70">{a.role}</span>
                <span className="text-[#E5D3B3]/50 font-mono text-xs">
                  {a.interval}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Detection & Decision Engine ─────────────────────── */}
        <motion.section
          id="detection"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Left — Detection Capabilities */}
          <motion.div custom={0} variants={fadeUp}>
            <h3 className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4">
              [ Splunk Search Protocols ]
            </h3>
            <ul className="space-y-2 text-sm">
              {detectionItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#E5D3B3]/40 select-none shrink-0">
                    $
                  </span>
                  <span className="text-[#E5D3B3]/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — LLM Decision Making */}
          <motion.div custom={1} variants={fadeUp}>
            <h3 className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4">
              [ Llama 3.3 Triage Logic ]
            </h3>
            <p className="text-sm text-[#E5D3B3]/70 mb-4">
              Replaces rigid regex-based alert rules with nuanced, context-aware
              threat classification via the Groq API.
            </p>
            <div className="space-y-2 text-sm border-l-2 border-[#E5D3B3]/20 pl-4">
              <p className="text-[#E5D3B3]/80">
                <span className="text-green-400/80">TRUE THREATS</span>{" "}
                <span className="text-[#E5D3B3]/40">(External brute-force)</span>{" "}
                → <span className="font-bold">[ ACTION: BLOCK ]</span>
              </p>
              <p className="text-[#E5D3B3]/80">
                <span className="text-yellow-400/80">BENIGN NOISE</span>{" "}
                <span className="text-[#E5D3B3]/40">(Internal typos)</span> →{" "}
                <span className="font-bold">[ ACTION: IGNORE ]</span>
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Tech Stack & Safety Constraints ─────────────────── */}
        <motion.section
          id="stack"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mb-16"
        >
          <motion.h2
            custom={0}
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4"
          >
            [ System Specifications ]
          </motion.h2>

          <div className="flex flex-wrap gap-4 text-xs">
            {techCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i + 1}
                variants={fadeUp}
                className="flex-1 min-w-[220px] border border-[#E5D3B3]/20 rounded-md p-4 hover:border-[#E5D3B3]/40 transition-colors"
              >
                <h4 className="font-bold text-sm mb-3 text-[#E5D3B3]/90">
                  {card.title}
                </h4>
                <ul className="space-y-1.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="text-[#E5D3B3]/60 flex items-start gap-1.5"
                    >
                      <span className="text-[#E5D3B3]/30 select-none shrink-0">
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
        </div>

        {/* ================================================================
            TCN-LSTM COMPARATIVE STUDY — Time-Series Forecasting
            ================================================================ */}
        <div
          id="tcn-lstm"
          className="border-t border-[#E5D3B3]/10 pt-16 mt-16"
        >
          {/* ── Header ──────────────────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="text-2xl font-bold mb-2 text-[#E5D3B3]"
            >
              &gt;_ TCN-LSTM Comparative Study&nbsp;
              <span className="text-[#E5D3B3]/50 font-normal">
                : Time-Series Forecasting
              </span>
            </motion.h1>

            <motion.div
              custom={1}
              variants={fadeUp}
              className="text-xs text-[#E5D3B3]/50 font-mono mb-4 flex items-center gap-2"
            >
              <span>[ Published Research ]</span>
              <span className="text-[#E5D3B3]/30">|</span>
              <span>[ TechRxiv Preprint ]</span>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              className="text-sm text-[#E5D3B3]/70 mb-8 border-l-2 border-[#E5D3B3]/30 pl-4"
            >
              A rigorous empirical investigation analyzing whether
              architectural complexity (hybrid TCN-LSTM) yields better
              forecasting performance than simpler standalone recurrent
              models (GRU, LSTM) on the Jena Climate dataset.
            </motion.div>
          </motion.section>

          {/* ── Comparison Table ────────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="border border-[#E5D3B3]/20 rounded-md overflow-hidden text-sm"
            >
              {/* header */}
              <div className="grid grid-cols-4 bg-[#E5D3B3]/10 p-3 font-bold">
                <span>Model</span>
                <span>Type</span>
                <span>Parameters</span>
                <span>Test MAE</span>
              </div>

              {/* rows */}
              {tcnModels.map((row, i) => (
                <motion.div
                  key={row.model}
                  custom={i + 1}
                  variants={fadeUp}
                  className="grid grid-cols-4 p-3 border-t border-[#E5D3B3]/20 hover:bg-[#E5D3B3]/5 transition-colors items-center"
                >
                  <span className="font-semibold">{row.model}</span>
                  <span className="text-[#E5D3B3]/70">{row.type}</span>
                  <span className="text-[#E5D3B3]/70 font-mono">
                    {row.params}
                  </span>
                  <span className="text-[#E5D3B3]/70">
                    {row.mae}
                    {row.note && (
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-[#E5D3B3]/10 text-[#E5D3B3]/60">
                        {row.note}
                      </span>
                    )}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Methodology & Findings ──────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {/* Left — Data Pipeline */}
            <motion.div custom={0} variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4">
                [ Methodology Pipeline ]
              </h3>
              <ul className="space-y-2 text-sm">
                {tcnPipelineSteps.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="text-[#E5D3B3]/40 select-none shrink-0">
                      $
                    </span>
                    <span className="text-[#E5D3B3]/80">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right — Key Findings */}
            <motion.div custom={1} variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4">
                [ Quantitative vs. Qualitative ]
              </h3>
              <p className="text-sm text-[#E5D3B3]/70 mb-4">
                Model selection depends entirely on the task objective
                rather than simply maximizing parameters.
              </p>
              <div className="space-y-2 text-sm border-l-2 border-[#E5D3B3]/20 pl-4">
                {tcnFindings.map((f) => (
                  <p key={f.label} className="text-[#E5D3B3]/80">
                    <span className="text-green-400/80 mr-1">
                      {f.prefix}
                    </span>
                    <span className="font-bold">{f.label}:</span>{" "}
                    <span className="text-[#E5D3B3]/60">{f.detail}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ── Tech Stack Grid ─────────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mb-16"
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4"
            >
              [ Research Stack ]
            </motion.h2>

            <div className="flex flex-wrap gap-4 text-xs">
              {tcnStackCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="flex-1 min-w-[220px] border border-[#E5D3B3]/20 rounded-md p-4 hover:border-[#E5D3B3]/40 transition-colors"
                >
                  <h4 className="font-bold text-sm mb-3 text-[#E5D3B3]/90">
                    {card.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="text-[#E5D3B3]/60 flex items-start gap-1.5"
                      >
                        <span className="text-[#E5D3B3]/30 select-none shrink-0">
                          ›
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* ================================================================
            WEATHER DASHBOARD — Full-Stack AI Integration
            ================================================================ */}
        <div
          id="weather"
          className="border-t border-[#E5D3B3]/10 pt-16 mt-16"
        >
          {/* ── Header ──────────────────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="text-2xl font-bold mb-2 text-[#E5D3B3]"
            >
              &gt;_ Weather_Dashboard&nbsp;
              <span className="text-[#E5D3B3]/50 font-normal">
                : Full-Stack AI Integration
              </span>
            </motion.h1>

            <motion.div
              custom={1}
              variants={fadeUp}
              className="text-xs text-[#E5D3B3]/50 font-mono mb-4 flex items-center gap-2"
            >
              <span>[ FastAPI + React ]</span>
              <span className="text-[#E5D3B3]/30">|</span>
              <span>[ LLM Prompt Engineering ]</span>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              className="text-sm text-[#E5D3B3]/70 mb-8 border-l-2 border-[#E5D3B3]/30 pl-4"
            >
              A full-stack meteorological dashboard featuring real-time data
              aggregation, interactive Leaflet map overlays, and an OpenAI
              GPT-3.5 engine that translates raw weather variables into
              natural-language outfit recommendations.
            </motion.div>
          </motion.section>

          {/* ── Architecture Table ──────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="border border-[#E5D3B3]/20 rounded-md overflow-hidden text-sm"
            >
              {/* header */}
              <div className="grid grid-cols-3 bg-[#E5D3B3]/10 p-3 font-bold">
                <span>Layer</span>
                <span>Technology</span>
                <span>Purpose</span>
              </div>

              {/* rows */}
              {weatherArchRows.map((row, i) => (
                <motion.div
                  key={row.layer}
                  custom={i + 1}
                  variants={fadeUp}
                  className="grid grid-cols-3 p-3 border-t border-[#E5D3B3]/20 hover:bg-[#E5D3B3]/5 transition-colors items-center"
                >
                  <span className="font-semibold">{row.layer}</span>
                  <span className="text-[#E5D3B3]/70">{row.tech}</span>
                  <span className="text-[#E5D3B3]/70">{row.purpose}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Features & Diagnostics ─────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {/* Left — Integration Pipeline */}
            <motion.div custom={0} variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4">
                [ Integration Pipeline ]
              </h3>
              <ul className="space-y-2 text-sm">
                {weatherPipelineSteps.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="text-[#E5D3B3]/40 select-none shrink-0">
                      $
                    </span>
                    <span className="text-[#E5D3B3]/80">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right — Diagnostics & Technical Debt */}
            <motion.div custom={1} variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4">
                [ System Diagnostics & Debt ]
              </h3>
              <p className="text-sm text-[#E5D3B3]/70 mb-4">
                Known architectural flaws scheduled for refactoring:
              </p>
              <div className="space-y-4 text-sm">
                {weatherDiagnostics.map((diag) => (
                  <div
                    key={diag.label}
                    className="border-l-2 border-[#E5D3B3]/20 pl-4"
                  >
                    <p className={`font-bold mb-1 ${diag.colorClass}`}>
                      [ {diag.severity} ALERT : {diag.label} ]
                    </p>
                    <p className="text-[#E5D3B3]/60">{diag.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ── Tech Stack Grid ─────────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mb-16"
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4"
            >
              [ System Stack ]
            </motion.h2>

            <div className="flex flex-wrap gap-4 text-xs">
              {weatherStackCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="flex-1 min-w-[220px] border border-[#E5D3B3]/20 rounded-md p-4 hover:border-[#E5D3B3]/40 transition-colors"
                >
                  <h4 className="font-bold text-sm mb-3 text-[#E5D3B3]/90">
                    {card.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="text-[#E5D3B3]/60 flex items-start gap-1.5"
                      >
                        <span className="text-[#E5D3B3]/30 select-none shrink-0">
                          ›
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* ================================================================
            TASK MANAGEMENT SYSTEM — Flask Full-Stack CRUD
            ================================================================ */}
        <div
          id="task-system"
          className="border-t border-[#E5D3B3]/10 pt-16 mt-16"
        >
          {/* ── Header ──────────────────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="text-2xl font-bold mb-2 text-[#E5D3B3]"
            >
              &gt;_ Task_Management_System&nbsp;
              <span className="text-[#E5D3B3]/50 font-normal">
                : Flask Full-Stack CRUD
              </span>
            </motion.h1>

            <motion.div
              custom={1}
              variants={fadeUp}
              className="text-xs text-[#E5D3B3]/50 font-mono mb-4 flex items-center gap-2"
            >
              <span>[ Python + Flask ]</span>
              <span className="text-[#E5D3B3]/30">|</span>
              <span>[ Multi-Tenant Architecture ]</span>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              className="text-sm text-[#E5D3B3]/70 mb-8 border-l-2 border-[#E5D3B3]/30 pl-4"
            >
              A lightweight, multi-user task management platform featuring
              session-based authentication, priority-based organization, and
              dynamic Jinja2 server-side rendering.
            </motion.div>
          </motion.section>

          {/* ── Architecture Table ──────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mb-12"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="border border-[#E5D3B3]/20 rounded-md overflow-hidden text-sm"
            >
              {/* header */}
              <div className="grid grid-cols-3 bg-[#E5D3B3]/10 p-3 font-bold">
                <span>Layer</span>
                <span>Technology</span>
                <span>Purpose</span>
              </div>

              {/* rows */}
              {taskArchRows.map((row, i) => (
                <motion.div
                  key={row.layer}
                  custom={i + 1}
                  variants={fadeUp}
                  className="grid grid-cols-3 p-3 border-t border-[#E5D3B3]/20 hover:bg-[#E5D3B3]/5 transition-colors items-center"
                >
                  <span className="font-semibold">{row.layer}</span>
                  <span className="text-[#E5D3B3]/70">{row.tech}</span>
                  <span className="text-[#E5D3B3]/70">{row.purpose}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── Features & Diagnostics ─────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {/* Left — Application Features */}
            <motion.div custom={0} variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4">
                [ Application Features ]
              </h3>
              <ul className="space-y-2 text-sm">
                {taskFeatures.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="text-[#E5D3B3]/40 select-none shrink-0">
                      $
                    </span>
                    <span className="text-[#E5D3B3]/80">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right — Diagnostics & Technical Debt */}
            <motion.div custom={1} variants={fadeUp}>
              <h3 className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4">
                [ System Diagnostics & Debt ]
              </h3>
              <p className="text-sm text-[#E5D3B3]/70 mb-4">
                Known architectural flaws scheduled for refactoring:
              </p>
              <div className="space-y-4 text-sm">
                {taskDiagnostics.map((diag) => (
                  <div
                    key={diag.label}
                    className="border-l-2 border-[#E5D3B3]/20 pl-4"
                  >
                    <p className={`font-bold mb-1 ${diag.colorClass}`}>
                      [ {diag.severity} ALERT : {diag.label} ]
                    </p>
                    <p className="text-[#E5D3B3]/60">{diag.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ── Tech Stack Grid ─────────────────────────────────── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="mb-16"
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="text-xs uppercase tracking-widest text-[#E5D3B3]/50 mb-4"
            >
              [ System Stack ]
            </motion.h2>

            <div className="flex flex-wrap gap-4 text-xs">
              {taskStackCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="flex-1 min-w-[220px] border border-[#E5D3B3]/20 rounded-md p-4 hover:border-[#E5D3B3]/40 transition-colors"
                >
                  <h4 className="font-bold text-sm mb-3 text-[#E5D3B3]/90">
                    {card.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="text-[#E5D3B3]/60 flex items-start gap-1.5"
                      >
                        <span className="text-[#E5D3B3]/30 select-none shrink-0">
                          ›
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
