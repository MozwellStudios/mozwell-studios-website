import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";

function Fade({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ text, dark = true }) {
  return (
    <p style={{
      fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase",
      color: dark ? "rgba(255,255,255,0.4)" : "#999",
      marginBottom: "4rem", fontWeight: 600,
    }}>{text}</p>
  );
}

const statsTier1 = [
  { num: "$1.6M+", label: "Total Revenue Impact (LTV)" },
  { num: "2,000+", label: "Conversions" },
  { num: "$317K", label: "Ad Spend" },
];

const statsTier2 = [
  { num: "42.9M", label: "Impressions" },
  { num: "$156", label: "CPA" },
  { num: "~4.8x", label: "ROAS (LTV-adjusted)" },
];

const funnelSteps = [
  "Cold acquisition (Meta)",
  "Conversion-focused landing pages",
  "Offer segmentation",
  "Retargeting + reactivation",
  "LTV-driven scaling",
];

export default function FrankMacias() {
  useEffect(() => {
    document.title = "Frank Macias — Mozwell Studios";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.name = "description";
    meta.content = "How Mozwell's full-funnel advertising system helped Frank Macias generate $269,027+ in course revenue in 90 days.";
    document.head.appendChild(meta);
  }, []);

  return (
    <div>
      <Navbar />

      {/* HERO — DARK */}
      <section style={{ backgroundColor: "#000", padding: "16rem 3rem 10rem", minHeight: "80vh", display: "flex", alignItems: "flex-end" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto", width: "100%" }}>
          <Fade>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "2.5rem" }}>
              Case Study
            </p>
            <h1 style={{
              fontSize: "clamp(5rem, 12vw, 13rem)", fontWeight: 900, letterSpacing: "-0.05em",
              lineHeight: 0.87, color: "#fff", textTransform: "uppercase", margin: "0 0 1.5rem",
            }}>Frank Macias</h1>
            <p style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", color: "rgba(255,255,255,0.55)", margin: "0 0 1.5rem", maxWidth: "42rem" }}>
              Full-Funnel Advertising for Course Sales
            </p>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 5rem", fontWeight: 600 }}>
              Meta Ads · Full Funnel · Course Sales
            </p>
          </Fade>
          <Fade delay={0.15}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem", borderTop: "1px solid #1a1a1a", paddingTop: "3rem" }} className="meta-row">
              {[
                ["Client", "Frank Macias"],
                ["Timeline", "90 Days"],
                ["Services", "Digital Marketing"],
                ["Website", "FrankMaciasOnline.com"],
              ].map(([label, val]) => (
                <div key={label}>
                  <p style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 0.5rem" }}>{label}</p>
                  <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", margin: 0, fontWeight: 600 }}>{val}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* OPPORTUNITY — LIGHT */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Opportunity" dark={false} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start" }} className="cs-two-col">
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", textTransform: "uppercase", lineHeight: 0.9, margin: 0 }}>
                Attention<br />without<br />a system.
              </h2>
              <div>
                <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#F97316", marginBottom: "2.5rem" }} />
                <p style={{ fontSize: "1.125rem", color: "#444", lineHeight: 1.75, margin: "0 0 2rem" }}>
                  Frank Macias is an ESL educator with a growing audience — but no system to turn attention into sales at scale. He needed a full-funnel advertising engine built for course conversions.
                </p>
                <div style={{ border: "1px solid #e0e0dd", padding: "2rem 2.5rem", backgroundColor: "#fff" }}>
                  <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111", margin: "0 0 0.5rem", letterSpacing: "-0.01em" }}>
                    "Most agencies optimize for short-term ROAS. We optimize for lifetime value."
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <style>{`.cs-two-col { grid-template-columns: 1fr 1fr !important; } @media (max-width: 768px) { .cs-two-col { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* THE SYSTEM — DARK */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The System" dark={true} />
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }} className="cs-two-col">
            {[
              {
                title: "Meta Ads",
                desc: "We restructured the entire ad account backend for precision targeting. Full-funnel campaigns on Facebook and Instagram guided prospects through every stage — from awareness to purchase.",
              },
              {
                title: "Creative + Targeting",
                desc: "Custom ad creatives and messaging built for his Spanish-speaking audience. Strategic audience segmentation ensured every dollar reached the right people at the right time.",
              },
            ].map((item, i) => (
              <Fade key={i} delay={i * 0.15}>
                <div>
                  <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#F97316", marginBottom: "2rem" }} />
                  <h3 style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* BIG MONEY SLIDE — DARK */}
      <section style={{ backgroundColor: "#000", padding: "14rem 3rem", borderTop: "1px solid #111", textAlign: "center" }}>
        <Fade>
          <p style={{
            fontSize: "clamp(3rem, 8vw, 8rem)", fontWeight: 900, letterSpacing: "-0.05em",
            color: "#F97316", lineHeight: 0.85, margin: "0 0 1.5rem",
          }}>
            $507K Direct Revenue<br />→ $1.6M+ Lifetime Value.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)", color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em", margin: "0 auto", maxWidth: "44rem", lineHeight: 1.65 }}>
            We didn't just scale acquisition. We built a system designed to monetize over time.
          </p>
        </Fade>
      </section>

      {/* THE NUMBERS — LIGHT */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Numbers" dark={false} />
          </Fade>
          {/* Tier 1 — Business Impact */}
          <Fade delay={0.05}>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#aaa", fontWeight: 700, margin: "0 0 2rem" }}>Business Impact</p>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4rem", borderTop: "1px solid #e0e0dd", paddingTop: "4rem", marginBottom: "6rem" }} className="stats-grid">
            {statsTier1.map((s, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div>
                  <p style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.05em", lineHeight: 1, margin: "0 0 0.75rem" }}>{s.num}</p>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#555", margin: 0, fontWeight: 600 }}>{s.label}</p>
                </div>
              </Fade>
            ))}
          </div>
          {/* Tier 2 — Performance Metrics */}
          <Fade delay={0.1}>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#aaa", fontWeight: 700, margin: "0 0 2rem" }}>Performance Metrics</p>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4rem", borderTop: "1px solid #e0e0dd", paddingTop: "4rem" }} className="stats-grid">
            {statsTier2.map((s, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div>
                  <p style={{ fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 900, color: "#111", letterSpacing: "-0.05em", lineHeight: 1, margin: "0 0 0.75rem" }}>{s.num}</p>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#888", margin: 0, fontWeight: 600 }}>{s.label}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .stats-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      {/* THE APPROACH — DARK */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Full-Funnel Approach" dark={true} />
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }} className="cs-two-col">
            {[
              { title: "Meta Ads", desc: "Full-funnel campaigns on Facebook and Instagram — from cold awareness to conversion. Account restructured for precision." },
              { title: "Creative + Targeting", desc: "Ad creative and messaging built for a Spanish-speaking audience. Every dollar directed at the right person at the right stage." },
            ].map((item, i) => (
              <Fade key={i} delay={i * 0.15}>
                <div>
                  <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#F97316", marginBottom: "2rem" }} />
                  <h3 style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* THE RESULT — LIGHT */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Result" dark={false} />
            <p style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", color: "#444", lineHeight: 1.7, maxWidth: "48rem", margin: "0 0 3rem" }}>
              A full-funnel system that turned an existing audience into a repeatable revenue engine — 2,000+ conversions, $1.6M+ lifetime value impact, built to scale.
            </p>
            <p style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 900, color: "#111", letterSpacing: "-0.03em", textTransform: "uppercase", margin: 0 }}>
              Full-Funnel. Precision-Targeted. Revenue-Driven.
            </p>
          </Fade>
        </div>
      </section>

      {/* FULL-FUNNEL ARCHITECTURE — DARK */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Architecture" dark={true} />
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", textTransform: "uppercase", lineHeight: 0.92, margin: "0 0 6rem" }}>
              Full-Funnel<br />Architecture
            </h2>
          </Fade>
          <div style={{ borderTop: "1px solid #1a1a1a" }}>
            {funnelSteps.map((step, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div style={{ borderBottom: "1px solid #1a1a1a", padding: "2.25rem 0", display: "flex", alignItems: "center", gap: "2.5rem" }}>
                  <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "#F97316", fontWeight: 700, minWidth: "2rem" }}>0{i + 1}</span>
                  <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>{step}</p>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.4}>
            <p style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.03em", textTransform: "uppercase", margin: "5rem 0 0" }}>
              Acquisition becomes revenue infrastructure.
            </p>
          </Fade>
        </div>
      </section>

      {/* Next project */}
      <section style={{ backgroundColor: "#000", padding: "8rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 1.5rem" }}>Next Project</p>
          <Link to="/work/mozwell-claremont-v2" style={{ textDecoration: "none" }}>
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.045em", lineHeight: 0.9, margin: 0, transition: "color 0.25s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
              onMouseLeave={e => e.currentTarget.style.color = "#fff"}
            >
              Mozwell Claremont →
            </h2>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}