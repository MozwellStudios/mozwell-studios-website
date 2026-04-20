import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ── Shared primitives ────────────────────────────────── */
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
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.95s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.95s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ text, dark = true }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <p style={{
        fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase",
        color: dark ? "rgba(255,255,255,0.35)" : "#aaa",
        fontWeight: 600, margin: "0 0 1.25rem",
      }}>{text}</p>
      <div style={{ borderTop: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)"}`, width: "100%" }} />
    </div>
  );
}

function DotList({ items, dark = false, orange = false }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", fontSize: "0.9rem", color: dark ? "rgba(255,255,255,0.5)" : "#555", lineHeight: 1.5 }}>
          <span style={{ width: "4px", height: "4px", backgroundColor: orange ? "#F97316" : (dark ? "#444" : "#ccc"), borderRadius: "50%", flexShrink: 0, marginTop: "0.45rem" }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PlusItem({ item, dark = false }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem", fontSize: "0.875rem", color: dark ? "rgba(255,255,255,0.55)" : "#555" }}>
      <span style={{ color: "#F97316", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>+</span>
      {item}
    </li>
  );
}

export default function DtgMagicLine() {
  useEffect(() => { document.title = "Proposal: DTG Pro & Magic Line | Mozwell Studios"; }, []);
  const section2Ref = useRef(null);

  return (
    <div style={{ backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>

      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", backgroundColor: "#000", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "10rem 3rem", position: "relative" }}>
        <div style={{ position: "absolute", top: "2.5rem", left: "3rem", right: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>Mozwell Studios</span>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Private Proposal</span>
        </div>
        <Fade>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#F97316", fontWeight: 600, margin: "0 0 3rem" }}>Partnership Proposal</p>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 6rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.0, margin: "0 0 2.5rem", maxWidth: "22ch" }}>
            Growth Infrastructure Built to Scale.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.35rem)", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: "0 auto 4rem", maxWidth: "48rem" }}>
            A unified system across brand, content, paid media, and lifecycle.
          </p>
          <button
            onClick={() => section2Ref.current?.scrollIntoView({ behavior: "smooth" })}
            style={{ backgroundColor: "#F97316", color: "#000", border: "none", padding: "1.1rem 3rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit", transition: "background-color 0.25s" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#EA6D0E"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F97316"}
          >
            Explore the Growth System
          </button>
        </Fade>
        <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: "1px", height: "4rem", backgroundColor: "rgba(255,255,255,0.15)" }} />
        </div>
      </section>

      {/* ── 2. COLLABORATIVE ECOSYSTEM ──────────────────── */}
      <section ref={section2Ref} style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Partnership" dark={false} />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", lineHeight: 0.95, margin: "0 0 6rem", maxWidth: "22ch", textTransform: "uppercase" }}>
              A Collaborative Brand and Growth Ecosystem
            </h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "5rem" }} className="partner-grid">
            <Fade delay={0.05}>
              <div style={{ border: "1px solid #e0e0dd", padding: "3.5rem" }}>
                <p style={{ fontSize: "0.56rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#aaa", fontWeight: 600, margin: "0 0 0.75rem" }}>Kue Studio</p>
                <p style={{ fontSize: "0.7rem", color: "#bbb", letterSpacing: "0.06em", margin: "0 0 2.5rem", textTransform: "uppercase" }}>Brand · Design · Creative System</p>
                <DotList items={[
                  "Brand identity & visual systems",
                  "Creative direction",
                  "Website & e-commerce design",
                  "Product storytelling & brand assets",
                  "PR, brand visibility, and environmental design",
                ]} />
              </div>
            </Fade>
            <Fade delay={0.1}>
              <div style={{ border: "2px solid #F97316", padding: "3.5rem" }}>
                <p style={{ fontSize: "0.56rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#F97316", fontWeight: 600, margin: "0 0 0.75rem" }}>Mozwell Studios</p>
                <p style={{ fontSize: "0.7rem", color: "#F97316", opacity: 0.6, letterSpacing: "0.06em", margin: "0 0 2.5rem", textTransform: "uppercase" }}>Growth · Performance · Systems</p>
                <DotList items={[
                  "Paid media & performance strategy",
                  "Content production & ad creative",
                  "CRM, email, and lifecycle marketing",
                  "Influencer & creator partnerships",
                  "Performance tracking & attribution",
                ]} orange />
              </div>
            </Fade>
          </div>
          <Fade delay={0.15}>
            <div style={{ borderTop: "1px solid #e0e0dd", paddingTop: "4rem", textAlign: "center" }}>
              <p style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", fontWeight: 700, color: "#111", letterSpacing: "-0.02em", margin: "0 0 1rem" }}>
                Kue builds the brand. Mozwell builds the growth engine.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#888", lineHeight: 1.7, margin: 0 }}>
                Kue defines the brand. Mozwell drives growth. Together, the system scales.
              </p>
            </div>
          </Fade>
        </div>
        <style>{`@media (max-width: 768px) { .partner-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── 3. CENTRALIZED GROWTH LAYER ─────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Strategic Oversight" dark={true} />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 0.95, margin: "0 0 2.5rem", textTransform: "uppercase" }}>
              Your Centralized Growth Layer
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: "48rem", margin: "0 0 7rem" }}>
              Mozwell acts as the centralized growth layer that coordinates brand, performance, and systems across all partners — ensuring campaigns, creative, and strategy operate as one system, not disconnected vendors.
            </p>
          </Fade>
          <Fade delay={0.1}>
            <div style={{ borderTop: "1px solid #1a1a1a" }}>
              {[
                "Marketing command center & strategic oversight",
                "Vendor coordination (Quartile, SEO, internal teams)",
                "CRM & automation systems",
                "Lifecycle / retention strategy",
                "Funnel architecture & conversion optimization",
                "Growth roadmap & prioritization",
              ].map((item, i) => (
                <div key={i} style={{ borderBottom: "1px solid #1a1a1a", padding: "2rem 0", display: "flex", alignItems: "center", gap: "2.5rem" }}>
                  <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "#F97316", fontWeight: 700, minWidth: "2rem" }}>0{i + 1}</span>
                  <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>{item}</p>
                </div>
              ))}
            </div>
          </Fade>
          <Fade delay={0.2}>
            <div style={{ paddingTop: "3.5rem" }}>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.75, maxWidth: "48rem", fontStyle: "italic" }}>
                This ensures all moving parts operate as one system — not disconnected vendors.
              </p>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.25)", lineHeight: 1.7, maxWidth: "48rem", margin: "1rem 0 0" }}>
                This is where decisions are made, performance is measured, and growth is directed.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── 4. HOW EVERYTHING CONNECTS ──────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="System Architecture" dark={false} />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", lineHeight: 0.95, margin: "0 0 6rem", textTransform: "uppercase" }}>
              One System. Not Separate Channels.
            </h2>
          </Fade>
          <Fade delay={0.08}>
            <div style={{ maxWidth: "36rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
              {[
                { label: "Brand", sub: "Kue Studio", dark: false },
                { label: "Content", sub: "Mozwell + Kue", dark: false },
                { label: "Paid Media", sub: "Mozwell", dark: false },
                { label: "Funnel + CRM", sub: "Mozwell", dark: false },
                { label: "Retention & LTV", sub: "Mozwell", dark: false },
              ].map((step, i, arr) => (
                <React.Fragment key={i}>
                  <div style={{
                    width: "100%",
                    border: "1px solid #e0e0dd",
                    backgroundColor: "#fff",
                    padding: "1.75rem 2.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <div>
                      <p style={{ fontSize: "0.95rem", fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>{step.label}</p>
                    </div>
                    <p style={{ fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#aaa", margin: 0, fontWeight: 600 }}>{step.sub}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0.5rem 0" }}>
                      <div style={{ width: "1px", height: "1.25rem", backgroundColor: "#e0e0dd" }} />
                      <span style={{ color: "#F97316", fontSize: "1rem", lineHeight: 1 }}>↓</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Fade>
          <Fade delay={0.2}>
            <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.08em", margin: "4rem 0 0.75rem", fontStyle: "italic" }}>
              Each layer feeds the next — creating compounding growth.
            </p>
            <p style={{ textAlign: "center", fontSize: "0.85rem", color: "#bbb", margin: 0 }}>
              Eliminates wasted spend, fragmented execution, and misaligned teams.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── 5. PAID MEDIA OVERSIGHT ─────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Paid Media" dark={false} />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", lineHeight: 0.95, margin: "0 0 2.5rem", textTransform: "uppercase" }}>
              Paid Media Oversight
            </h2>
            <p style={{ fontSize: "1.125rem", color: "#666", lineHeight: 1.75, maxWidth: "46rem", margin: "0 0 5rem" }}>
              DTG Pro currently works with Quartile to manage paid media campaigns. Mozwell collaborates with Quartile, providing strategic oversight that keeps advertising performance aligned with broader business goals — across every channel.
            </p>
          </Fade>
          <div style={{ borderTop: "1px solid #e0e0dd" }}>
            {[
              "Meta, Google, TikTok, YouTube strategy",
              "Creative testing and iteration",
              "Audience development and scaling",
              "Alignment with Quartile (Amazon)",
              "Campaign direction and strategic recommendations",
              "Keyword expansion opportunities",
              "Landing page optimization",
            ].map((item, i) => (
              <Fade key={i} delay={i * 0.05}>
                <div style={{ borderBottom: "1px solid #e0e0dd", padding: "2.25rem 0", display: "flex", alignItems: "center", gap: "2.5rem" }}>
                  <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "#F97316", fontWeight: 700, minWidth: "2rem" }}>0{i + 1}</span>
                  <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "#111", margin: 0, letterSpacing: "-0.01em" }}>{item}</p>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.3}>
            <div style={{ paddingTop: "3.5rem" }}>
              <p style={{ fontSize: "0.95rem", color: "#888", lineHeight: 1.7, fontStyle: "italic" }}>
                Mozwell integrates performance across all channels — not just manages ads.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── 6. CONTENT THAT CONVERTS ────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Content Engine" dark={true} />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 0.95, margin: "0 0 2.5rem", textTransform: "uppercase" }}>
              Content That Converts
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "44rem", margin: "0 0 6rem" }}>
              Kue and Mozwell collaborate on content production with clearly defined roles — ensuring everything that gets made is both on-brand and built to perform.
            </p>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="content-grid">
            <Fade delay={0.05}>
              <div style={{ border: "1px solid #1a1a1a", padding: "3.5rem" }}>
                <p style={{ fontSize: "0.56rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontWeight: 600, margin: "0 0 0.75rem" }}>Kue Studio</p>
                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em", margin: "0 0 2.5rem", textTransform: "uppercase" }}>Brand · Design</p>
                <DotList items={[
                  "Visual system alignment",
                  "Brand consistency",
                  "Creative direction",
                  "Art direction & campaign concepts",
                ]} dark />
              </div>
            </Fade>
            <Fade delay={0.1}>
              <div style={{ border: "1px solid #F97316", padding: "3.5rem" }}>
                <p style={{ fontSize: "0.56rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#F97316", fontWeight: 600, margin: "0 0 0.75rem" }}>Mozwell Studios</p>
                <p style={{ fontSize: "0.7rem", color: "#F97316", opacity: 0.55, letterSpacing: "0.06em", margin: "0 0 2.5rem", textTransform: "uppercase" }}>Performance · Production</p>
                <DotList items={[
                  "Content strategy",
                  "Platform-native storytelling",
                  "Production and publishing",
                  "Performance-driven iterations",
                  "Short-form ad creative & UGC",
                ]} dark orange />
              </div>
            </Fade>
          </div>
          <Fade delay={0.15}>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em", fontStyle: "italic" }}>
              Content is built to perform, not just look good.
            </p>
          </Fade>
        </div>
        <style>{`@media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── 7. PERFORMANCE CREATIVE SYSTEM ──────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Creative Strategy" dark={false} />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", lineHeight: 0.95, margin: "0 0 2rem", textTransform: "uppercase" }}>
              Performance Creative System
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#888", lineHeight: 1.7, margin: "0 0 5rem" }}>
              Example performance concepts designed for testing, iteration, and scale.
            </p>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", backgroundColor: "#e0e0dd" }} className="creative-grid">
            {[
              { num: "01", concept: "Problem → Solution", hook: "Still using outdated transfers?" },
              { num: "02", concept: "Product in Use", hook: "What 10 washes later actually looks like." },
              { num: "03", concept: "Authority", hook: "Why most print shops are stuck in 2015." },
            ].map((c, i) => (
              <Fade key={i} delay={i * 0.07}>
                <div style={{ backgroundColor: "#fff", padding: "3.5rem 2.75rem" }}>
                  <span style={{ fontSize: "0.55rem", color: "#F97316", fontWeight: 700, letterSpacing: "0.2em", display: "block", marginBottom: "1.5rem" }}>CONCEPT {c.num}</span>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 1.5rem", lineHeight: 1.3 }}>{c.concept}</h3>
                  <div style={{ borderLeft: "2px solid #F97316", paddingLeft: "1.25rem" }}>
                    <p style={{ fontSize: "0.9rem", color: "#555", margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>"{c.hook}"</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.2}>
            <p style={{ fontSize: "0.8rem", color: "#aaa", letterSpacing: "0.06em", margin: "3rem 0 0", fontStyle: "italic" }}>
              Built for testing, iteration, and scale.
            </p>
          </Fade>
        </div>
        <style>{`@media (max-width: 768px) { .creative-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── 8. MAGIC LINE GROWTH CAMPAIGNS ──────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Magic Line" dark={false} />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", lineHeight: 0.95, margin: "0 0 2.5rem", textTransform: "uppercase" }}>
              Magic Line Growth Campaigns
            </h2>
            <p style={{ fontSize: "1.125rem", color: "#666", lineHeight: 1.75, maxWidth: "46rem", margin: "0 0 6rem" }}>
              Magic Line will launch new advertising campaigns managed directly by Mozwell Studios. While Quartile continues managing DTG Pro and Ink Edibles campaigns, Mozwell takes full ownership of the Magic Line growth engine.
            </p>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", backgroundColor: "#e0e0dd" }} className="magic-grid">
            {["Google Ads", "Google Shopping", "Performance Max", "Meta Advertising", "Campaign testing and optimization", "Creative testing", "Audience development", "Conversion optimization"].map((item, i) => (
              <Fade key={i} delay={i * 0.05}>
                <div style={{ backgroundColor: "#fff", padding: "2.75rem 2.25rem" }}>
                  <span style={{ fontSize: "0.55rem", color: "#F97316", fontWeight: 700, letterSpacing: "0.2em", display: "block", marginBottom: "1rem" }}>0{i + 1}</span>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111", margin: 0, lineHeight: 1.4 }}>{item}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .magic-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      {/* ── 9. 90-DAY GROWTH ROADMAP ────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Execution Timeline" dark={true} />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 0.95, margin: "0 0 6rem", textTransform: "uppercase" }}>
              90-Day Growth Roadmap
            </h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", backgroundColor: "#1a1a1a" }} className="roadmap-grid">
            {[
              { phase: "Phase 1", name: "Foundation", desc: "Audit, tracking, baseline" },
              { phase: "Phase 2", name: "Activation", desc: "Campaigns, content, CRM launch" },
              { phase: "Phase 3", name: "Scale", desc: "Expand winning campaigns" },
              { phase: "Phase 4", name: "Systemize", desc: "Automation and retention systems" },
            ].map((p, i) => (
              <Fade key={i} delay={i * 0.07}>
                <div style={{ backgroundColor: "#000", padding: "3.5rem 2.75rem" }}>
                  <span style={{ fontSize: "0.55rem", color: "#F97316", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>{p.phase}</span>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.02em", margin: "0 0 1.25rem", lineHeight: 1 }}>{p.name}</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.25}>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.3)", margin: "3rem 0 0", fontStyle: "italic" }}>
              Priorities adjust based on performance data and internal team structure.
            </p>
          </Fade>
        </div>
        <style>{`@media (max-width: 768px) { .roadmap-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 480px) { .roadmap-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── 10. REVENUE ARCHITECTURE ────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Revenue Architecture" dark={true} />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 0.95, margin: "0 0 2.5rem", textTransform: "uppercase" }}>
              Revenue Architecture
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "44rem", margin: "0 0 6rem" }}>
              Mozwell designs the infrastructure that connects brand visibility to measurable revenue growth — through acquisition, conversion, and retention working as a single loop.
            </p>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", backgroundColor: "#1a1a1a" }} className="rev-grid">
            {[
              { num: "01", title: "Acquisition Strategy", items: ["Paid media architecture", "Audience segmentation", "Demand generation campaigns"] },
              { num: "02", title: "Conversion Infrastructure", items: ["Landing page optimization", "Conversion testing", "Funnel design"] },
              { num: "03", title: "Lifecycle Marketing", items: ["CRM workflows", "Lead nurture systems", "Customer retention campaigns"] },
              { num: "04", title: "Performance Intelligence", items: ["Marketing analytics", "Attribution tracking", "Campaign performance insights"] },
            ].map((card, i) => (
              <Fade key={i} delay={i * 0.07}>
                <div style={{ backgroundColor: "#000", padding: "4rem 3.5rem" }}>
                  <span style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.05em", display: "block", marginBottom: "1.5rem", lineHeight: 1 }}>{card.num}</span>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 2rem" }}>{card.title}</h3>
                  <DotList items={card.items} dark />
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.3}>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "3.5rem", marginTop: "0" }}>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.75, maxWidth: "44rem", fontStyle: "italic" }}>
                Designed to increase both ROAS and lifetime value.
              </p>
            </div>
          </Fade>
        </div>
        <style>{`@media (max-width: 768px) { .rev-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── 11. ENGAGEMENT MODEL ────────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Engagement Model" dark={false} />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", lineHeight: 0.95, margin: "0 0 2rem", textTransform: "uppercase" }}>
              Engagement Model
            </h2>
            <p style={{ fontSize: "1rem", color: "#888", lineHeight: 1.7, maxWidth: "40rem", margin: "0 0 2rem" }}>
              Structured to align with your internal team and growth stage.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#aaa", lineHeight: 1.7, maxWidth: "48rem", margin: "0 0 6rem" }}>
              Flexible engagement based on how you want to operate: plug-in support, execution, or full system oversight.
            </p>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="pricing-grid">

            {/* Tier 1 */}
            <Fade delay={0.05}>
              <div style={{ border: "1px solid #e0e0dd", padding: "4rem 3rem" }}>
                <p style={{ fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#aaa", fontWeight: 600, margin: "0 0 1rem" }}>Tier 01</p>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111", letterSpacing: "-0.02em", margin: "0 0 1.5rem", lineHeight: 1.2 }}>Strategic Advisory</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginBottom: "3rem" }}>
                  <span style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 900, color: "#111", letterSpacing: "-0.05em", lineHeight: 1 }}>$3.5K–$6K</span>
                  <span style={{ fontSize: "0.85rem", color: "#999", fontWeight: 400 }}>/mo</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem", borderTop: "1px solid #e0e0dd", paddingTop: "2.5rem" }}>
                  {["Marketing strategy leadership", "Quartile campaign oversight", "Performance analysis", "CRO strategy", "Marketing analytics", "Vendor coordination"].map(item => (
                    <PlusItem key={item} item={item} />
                  ))}
                </ul>
              </div>
            </Fade>

            {/* Tier 2 */}
            <Fade delay={0.1}>
              <div style={{ border: "1px solid #e0e0dd", padding: "4rem 3rem" }}>
                <p style={{ fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#aaa", fontWeight: 600, margin: "0 0 1rem" }}>Tier 02</p>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111", letterSpacing: "-0.02em", margin: "0 0 1.5rem", lineHeight: 1.2 }}>Execution</h3>
                <p style={{ fontSize: "0.7rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 1.25rem" }}>Paid + Content + CRM</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginBottom: "3rem" }}>
                  <span style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 900, color: "#111", letterSpacing: "-0.05em", lineHeight: 1 }}>$5K–$10K</span>
                  <span style={{ fontSize: "0.85rem", color: "#999", fontWeight: 400 }}>/mo</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem", borderTop: "1px solid #e0e0dd", paddingTop: "2.5rem" }}>
                  {["Paid media management", "Content production & ad creative", "CRM & email setup", "Campaign optimization", "Performance reporting"].map(item => (
                    <PlusItem key={item} item={item} />
                  ))}
                </ul>
              </div>
            </Fade>

            {/* Tier 3 — Recommended */}
            <Fade delay={0.15}>
              <div style={{ border: "2px solid #F97316", padding: "4rem 3rem", position: "relative" }}>
                <div style={{ position: "absolute", top: "-1px", left: "2rem", backgroundColor: "#F97316", color: "#000", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.4rem 1rem" }}>
                  Recommended
                </div>
                <p style={{ fontSize: "0.56rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#F97316", fontWeight: 600, margin: "1.5rem 0 1rem" }}>Tier 03</p>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111", letterSpacing: "-0.02em", margin: "0 0 1.5rem", lineHeight: 1.2 }}>Full Command Center</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginBottom: "3rem" }}>
                  <span style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 900, color: "#111", letterSpacing: "-0.05em", lineHeight: 1 }}>$7K–$12K</span>
                  <span style={{ fontSize: "0.85rem", color: "#999", fontWeight: 400 }}>/mo</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem", borderTop: "1px solid #e0e0dd", paddingTop: "2.5rem" }}>
                  {["Full strategic & execution leadership", "All paid media channels", "Content + ad creative production", "CRM, email & lifecycle systems", "Influencer & creator programs", "Growth roadmap & attribution"].map(item => (
                    <PlusItem key={item} item={item} />
                  ))}
                </ul>
              </div>
            </Fade>

          </div>
        </div>
        <style>{`@media (max-width: 1000px) { .pricing-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── 12. IMPACT BREAK ────────────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#fff",
              lineHeight: 1.05,
              textTransform: "uppercase",
              margin: 0,
            }}>
              This is not an agency relationship. This is a system built to scale your business.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── 13. NEXT STEPS / CTA ────────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "14rem 3rem", borderTop: "1px solid #111", textAlign: "center" }}>
        <div style={{ maxWidth: "60rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Next Steps" dark={true} />
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 0.95, margin: "0 0 2.5rem", textTransform: "uppercase" }}>
              Launch the Growth Infrastructure
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: "0 auto 4rem", maxWidth: "38rem" }}>
              Kickoff begins with a full advertising audit, campaign restructuring, automation setup, and creative testing framework. We move fast and measure everything.
            </p>
            <Link
              to="/contact"
              style={{ display: "inline-block", backgroundColor: "#F97316", color: "#000", padding: "1.2rem 3.5rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", transition: "background-color 0.25s" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#EA6D0E"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F97316"}
            >
              Start the Partnership
            </Link>
          </Fade>
        </div>
        <div style={{ marginTop: "10rem", borderTop: "1px solid #111", paddingTop: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontWeight: 700 }}>Mozwell Studios</span>
          <span style={{ fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.12)" }}>Confidential. Prepared for DTG Pro and Magic Line.</span>
        </div>
      </section>

    </div>
  );
}