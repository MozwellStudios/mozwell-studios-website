import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";
import ROICalculator from "@/components/studio/ROICalculator.jsx";

/* ── Fade on scroll ─────────────────────────────────────── */
function Fade({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.9s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.9s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ── Section eyebrow label ──────────────────────────────── */
const Label = ({ text, dark = false }) => (
  <p style={{
    fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase",
    color: dark ? "rgba(255,255,255,0.3)" : "#999",
    margin: "0 0 1.5rem", fontWeight: 600,
  }}>{text}</p>
);

/* ── Service accordion row ──────────────────────────────── */
const systemBlocks = [
  {
    num: "01",
    title: "Content Systems",
    tagline: "One shoot. Months of content.",
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/e0996cf67_Cocktail_Shoot_-7.jpg",
  },
  {
    num: "02",
    title: "Performance Engine",
    tagline: "Paid media tuned to convert, not just reach.",
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/f2c43e6f6_0423_GroupShots_-17.jpg",
  },
  {
    num: "03",
    title: "Systems That Compound",
    tagline: "Infrastructure that gets sharper with every cycle.",
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/82d28c8f0_MaChaCha-14.jpg",
  },
];

function ServiceRow({ s, i }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      style={{
        borderTop: "1px solid #e0e0dd",
        backgroundColor: hov ? "#F97316" : "transparent",
        transition: "background-color 0.4s cubic-bezier(0.25,0.1,0.25,1)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ maxWidth: "88rem", margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ padding: "4rem 0", display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }} className="svc-row-btn">
          <div style={{ display: "flex", alignItems: "baseline", gap: "2rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 900, color: hov ? "rgba(255,255,255,0.5)" : "#F97316", letterSpacing: "-0.01em", flexShrink: 0, transition: "color 0.4s" }}>{s.num}</span>
            <div>
              <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: hov ? "#fff" : "#111", lineHeight: 0.95, textTransform: "uppercase", margin: "0 0 0.75rem", transform: hov ? "translateX(8px)" : "translateX(0)", transition: "transform 0.35s cubic-bezier(0.25,0.1,0.25,1), color 0.4s" }}>{s.title}</h2>
              <p style={{ fontSize: "1.0625rem", color: hov ? "rgba(255,255,255,0.7)" : "#888", margin: 0, lineHeight: 1.5, transition: "color 0.4s" }}>{s.tagline}</p>
            </div>
          </div>
          <div style={{ overflow: "hidden", aspectRatio: "16/9", width: "clamp(180px, 20vw, 280px)", flexShrink: 0, opacity: hov ? 1 : 0, transition: "opacity 0.4s ease" }}>
            <img src={s.image} alt={s.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Steps ──────────────────────────────────────────────── */
const steps = [
  { num: "01", title: "Align", desc: "Audit the business, define the audience, build the strategy." },
  { num: "02", title: "Build", desc: "Content systems and paid infrastructure built to scale." },
  { num: "03", title: "Scale", desc: "Campaigns deployed against measurable outcomes. Actively managed." },
  { num: "04", title: "Systemize", desc: "Growth loops and automations that make every cycle sharper." },
];

/* ── How We Work engagements ────────────────────────────── */
const howWeWork = [
  {
    num: "01",
    title: "Foundation",
    descriptor: "Strategy, positioning, direction.",
    bullets: [
      "Brand and audience audit",
      "Positioning and messaging framework",
      "Campaign strategy and roadmap",
      "Creative direction brief",
    ],
    bestFor: "New concepts. Unclear positioning. Pre-launch.",
    arrow: "→ Walk away with a system, not a deck.",
    tag: "4–6 Weeks",
  },
  {
    num: "02",
    title: "Content System",
    descriptor: "Production + distribution built to scale.",
    bullets: [
      "One shoot day, months of platform-native content",
      "Photo, video, and short-form deliverables",
      "Distribution mapped across channels",
      "Organic + paid-ready assets",
    ],
    bestFor: "Brands with no consistent content engine.",
    arrow: "→ One day of shooting becomes 90 days of content.",
    tag: "Project-based",
  },
  {
    num: "03",
    title: "Performance Engine",
    descriptor: "Paid media campaigns built to convert.",
    bullets: [
      "Meta, Google, and TikTok campaign management",
      "Creative testing and iteration",
      "Conversion tracking and reporting",
      "Active optimization — not set-and-forget",
    ],
    bestFor: "Brands ready to spend with accountability.",
    arrow: "→ Every dollar is tracked. Every decision is data-led.",
    tag: "Ongoing",
  },
  {
    num: "04",
    title: "Growth Partner",
    descriptor: "Full-stack ongoing engagement.",
    bullets: [
      "Content system + paid media + growth infrastructure",
      "Monthly strategy and performance reviews",
      "CRM, automations, and retention systems",
      "Dedicated team embedded in your operation",
    ],
    bestFor: "Operators serious about compounding growth.",
    arrow: "→ We operate like a partner, not a vendor.",
    tag: "Retainer",
  },
];

/* ════════════════════════════════════════════════════════ */
export default function Services() {
  useEffect(() => { document.title = "Services — Mozwell Studios"; }, []);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "16rem clamp(1.5rem,4vw,4rem) 12rem", minHeight: "80vh", display: "flex", alignItems: "flex-end" }}>
        <div style={{ maxWidth: "88rem", margin: "0 auto", width: "100%" }}>
          <Fade>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 3rem", fontWeight: 600 }}>
              Services
            </p>
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 8rem)", fontWeight: 900, letterSpacing: "-0.05em", color: "#fff", lineHeight: 0.88, margin: "0 0 2.5rem", maxWidth: "14ch", textTransform: "uppercase" }}>
              We build hospitality brands that grow.
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "rgba(255,255,255,0.7)", margin: 0, maxWidth: "36rem", lineHeight: 1.6 }}>
              Content, paid media, and growth infrastructure — built as one system.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── 2. MODEL SECTION ────────────────────────────── */}
      <section style={{ backgroundColor: "#000", borderTop: "1px solid #111", padding: "10rem clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: "88rem", margin: "0 auto" }}>
          <Fade>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 3rem", fontWeight: 600 }}>The Model</p>
            <h2 style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)", fontWeight: 900, letterSpacing: "-0.05em", color: "#fff", textTransform: "uppercase", lineHeight: 0.9, margin: "0 0 5rem" }}>
              Attention → Conversion<br />→ Systems → Scale.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0" }} className="model-grid">
              {[
                { label: "Content", sub: "brings attention." },
                { label: "Paid", sub: "captures demand." },
                { label: "Systems", sub: "convert and retain." },
                { label: "Scale", sub: "compounds over time." },
              ].map((step, i) => (
                <div key={i} style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none", paddingLeft: i > 0 ? "2.5rem" : 0, paddingRight: "2.5rem" }}>
                  <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.02em", margin: "0 0 0.5rem", lineHeight: 1 }}>{step.label}</p>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>{step.sub}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ── 3. SERVICES ─────────────────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", paddingTop: "clamp(4rem,8vw,10rem)", paddingBottom: "6rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "88rem", margin: "0 auto", padding: "0 clamp(1.5rem,4vw,4rem)" }}>
          <Fade>
            <Label text="What We Build" />
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", marginBottom: "0" }} />
          </Fade>
        </div>
        {systemBlocks.map((s, i) => (
          <Fade key={i} delay={i * 0.06}>
            <ServiceRow s={s} i={i} />
          </Fade>
        ))}
        <div style={{ borderTop: "1px solid #e0e0dd" }} />
        <style>{`
          @media (max-width: 768px) { .svc-row-btn { padding: 3rem 0 !important; } }
          @media (max-width: 640px) { .model-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; } .model-grid > div { border-left: none !important; padding-left: 0 !important; } }
        `}</style>
      </section>

      {/* ── 5. VISUAL BREAK STATEMENT ───────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "clamp(7rem,12vw,12rem) clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: "88rem", margin: "0 auto" }}>
          <Fade>
            <p style={{ fontSize: "clamp(2.25rem, 5.5vw, 6rem)", fontWeight: 900, letterSpacing: "-0.045em", color: "#fff", textTransform: "uppercase", lineHeight: 0.9, margin: 0 }}>
              Content drives attention.<br />Systems drive revenue.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── 6. OUR METHOD ───────────────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem clamp(1.5rem,4vw,4rem)", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "88rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Our Method" />
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", marginBottom: "6rem" }} />
          </Fade>
          <Fade delay={0.05}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "3rem" }} className="steps-row">
              {steps.map((step, i) => (
                <div key={i} style={{ borderRight: i < 3 ? "1px solid #e0e0dd" : "none", paddingRight: i < 3 ? "3rem" : 0 }}>
                  <p style={{ fontSize: "clamp(4rem, 6vw, 6rem)", fontWeight: 900, color: "rgba(17,17,17,0.06)", letterSpacing: "-0.06em", lineHeight: 1, margin: "0 0 2rem" }}>{step.num}</p>
                  <h3 style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: 900, color: "#111", letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 1, margin: "0 0 1rem" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
        <style>{`
          @media (max-width: 768px) { .steps-row { grid-template-columns: 1fr 1fr !important; } .steps-row > div { border-right: none !important; padding-right: 0 !important; border-bottom: 1px solid #e0e0dd; padding-bottom: 3rem; } }
          @media (max-width: 480px) { .steps-row { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── 7. HOW WE WORK ──────────────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: "88rem", margin: "0 auto" }}>
          <Fade>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 1.5rem", fontWeight: 600 }}>How We Work</p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: "5rem" }} />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 0.92, margin: "0 0 1rem", textTransform: "uppercase" }}>
              Four ways to<br />engage.
            </h2>
            <p style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)", color: "rgba(255,255,255,0.35)", margin: "0 0 7rem", maxWidth: "36rem", lineHeight: 1.6 }}>
              Every engagement plugs into the same system. The entry point depends on where you are.
            </p>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "#111" }} className="hww-grid">
            {howWeWork.map((eng, i) => (
              <Fade key={i} delay={i * 0.07}>
                <HowWeWorkCard eng={eng} />
              </Fade>
            ))}
          </div>

          {/* System connection line */}
          <Fade delay={0.2}>
            <div style={{ marginTop: "5rem", paddingTop: "3.5rem", borderTop: "1px solid #111" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
                <p style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", margin: 0, fontWeight: 600, flexShrink: 0 }}>
                  Every engagement plugs into the same system
                </p>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1a1a1a", minWidth: "2rem" }} />
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#F97316", margin: 0, fontWeight: 700, flexShrink: 0 }}>
                  Content → Paid → Conversion → Retention
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <style>{`
          @media (max-width: 640px) { .hww-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 768px) { .model-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; } }
        `}</style>
      </section>

      {/* ── 8. ROI CALCULATOR ───────────────────────────── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "8rem clamp(1.5rem,4vw,4rem) 0", borderTop: "1px solid #111", textAlign: "center" }}>
        <Fade>
          <p style={{ fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#fff", margin: "0 0 1rem", lineHeight: 1 }}>
            Model your growth.
          </p>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", maxWidth: "34rem", margin: "0 auto", lineHeight: 1.7 }}>
            See what a system-driven approach could return. The math speaks for itself.
          </p>
        </Fade>
      </section>
      <ROICalculator />

      {/* ── 9. FINAL CTA ────────────────────────────────── */}
      <section style={{ backgroundColor: "#000", borderTop: "1px solid #111", padding: "14rem clamp(1.5rem,4vw,4rem)", textAlign: "center" }}>
        <Fade>
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 6.5rem)", fontWeight: 900, letterSpacing: "-0.05em", color: "#fff", lineHeight: 0.88, margin: "0 0 3rem", textTransform: "uppercase" }}>
            Let's build something<br />that compounds.
          </h2>
          <a
            href="https://form.typeform.com/to/TNZNwF?typeform-source=mozwellstudios.typeform.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", backgroundColor: "#F97316", color: "#000", padding: "1.2rem 3.5rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", transition: "background-color 0.25s" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#EA6D0E"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F97316"}
          >
            Start the Conversation ↗
          </a>
        </Fade>
      </section>

      <Footer />
    </div>
  );
}

/* ── How We Work card ───────────────────────────────────── */
function HowWeWorkCard({ eng }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "4rem",
        backgroundColor: hov ? "#0a0a0a" : "#000",
        transition: "background-color 0.3s",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        cursor: "default",
        minHeight: "26rem",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "2rem" }}>
        <span style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#F97316", fontWeight: 700 }}>{eng.num}</span>
        <span style={{
          fontSize: "0.5rem", letterSpacing: "0.24em", textTransform: "uppercase",
          color: hov ? "#F97316" : "rgba(255,255,255,0.2)",
          border: `1px solid ${hov ? "rgba(249,115,22,0.4)" : "rgba(255,255,255,0.08)"}`,
          padding: "0.3rem 0.75rem",
          transition: "color 0.3s, border-color 0.3s",
        }}>
          {eng.tag}
        </span>
      </div>

      {/* Title + descriptor */}
      <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 0.95, margin: "0 0 0.75rem" }}>{eng.title}</h3>
      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", margin: "0 0 2.5rem", letterSpacing: "0.01em" }}>{eng.descriptor}</p>

      {/* Bullets */}
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1 }}>
        {eng.bullets.map((b, i) => (
          <li key={i} style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
            <span style={{ color: "#F97316", fontSize: "0.5rem", flexShrink: 0 }}>—</span>
            <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{b}</span>
          </li>
        ))}
      </ul>

      {/* Best for */}
      <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em", margin: "0 0 1.25rem" }}>
        <span style={{ color: "rgba(255,255,255,0.18)", textTransform: "uppercase", letterSpacing: "0.16em", fontSize: "0.52rem" }}>Best for</span>
        <br />
        {eng.bestFor}
      </p>

      {/* Arrow statement */}
      <p style={{
        fontSize: "0.78rem", color: hov ? "#F97316" : "rgba(255,255,255,0.35)",
        fontWeight: 600, letterSpacing: "0.01em", margin: 0,
        transition: "color 0.3s",
        borderTop: "1px solid #111",
        paddingTop: "1.25rem",
      }}>
        {eng.arrow}
      </p>
    </div>
  );
}