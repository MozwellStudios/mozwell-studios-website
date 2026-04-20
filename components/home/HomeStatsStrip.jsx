import React, { useRef, useEffect, useState } from "react";

const stats = [
  { value: "49M+",  label: "Impressions Generated" },
  { value: "12,000+", label: "Conversions Driven" },
  { value: "8+",    label: "Industries Served" },
];

const capabilities = [
  "Managed and optimized campaigns across Google, Meta, and TikTok at scale",
  "Multi-platform performance systems operating across paid + organic",
  "Campaigns deployed across hospitality, retail, finance, and education",
];

export default function HomeStatsStrip() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ backgroundColor: "#000", borderTop: "1px solid #111" }}>

      {/* Stats row */}
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "6rem 3rem 4rem" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}
          className="home-stats-grid"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                borderLeft: i > 0 ? "1px solid #1a1a1a" : "none",
                paddingLeft: i > 0 ? "2.5rem" : 0,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.8s cubic-bezier(0.25,0.1,0.25,1) ${i * 0.1}s, transform 0.8s cubic-bezier(0.25,0.1,0.25,1) ${i * 0.1}s`,
              }}
            >
              <p style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.05em", lineHeight: 1, margin: "0 0 0.5rem" }}>
                {s.value}
              </p>
              <p style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: 0, fontWeight: 600 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Capability lines */}
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "0 3rem 5rem", borderTop: "1px solid #111" }}>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0" }}
        >
          {capabilities.map((line, i) => (
            <p
              key={i}
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.55)",
                margin: 0,
                padding: "1.1rem 0",
                borderBottom: i < capabilities.length - 1 ? "1px solid #111" : "none",
                lineHeight: 1.5,
                opacity: visible ? 1 : 0,
                transition: `opacity 0.8s cubic-bezier(0.25,0.1,0.25,1) ${0.3 + i * 0.08}s`,
              }}
            >
              — {line}
            </p>
          ))}
        </div>
      </div>

      <div style={{ borderBottom: "1px solid #111" }} />

      <style>{`
        @media (max-width: 640px) {
          .home-stats-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .home-stats-grid > div { border-left: none !important; padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}