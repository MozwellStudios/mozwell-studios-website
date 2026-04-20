import React, { useRef, useEffect, useState } from "react";

const stats = [
  { value: "$1.1M+", label: "Paid Media Managed" },
  { value: "240M+", label: "Impressions Generated" },
  { value: "500K+", label: "Clicks Driven" },
  { value: "13K+",  label: "Leads Generated" },
];

export default function AtScale() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const f = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.9s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.9s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
  });

  return (
    <section ref={ref} style={{ backgroundColor: "#000", padding: "10rem 3rem", borderTop: "1px solid #111" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto" }}>

        {/* Section framing */}
        <div style={{ ...f(0), marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 1.5rem", fontWeight: 600 }}>
            At Scale
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", width: "100%" }} />
        </div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }} className="atscale-grid">
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                ...f(0.08 + i * 0.07),
                borderRight: i < 3 ? "1px solid #111" : "none",
                paddingRight: i < 3 ? "3rem" : 0,
                paddingLeft: i > 0 ? "3rem" : 0,
              }}
            >
              <p style={{
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 1,
                color: "#F97316",
                margin: "0 0 0.75rem",
              }}>
                {s.value}
              </p>
              <p style={{
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                margin: 0,
                fontWeight: 600,
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Support line */}
        <div style={{ ...f(0.4), marginTop: "4rem", borderTop: "1px solid #111", paddingTop: "2.5rem" }}>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", margin: 0 }}>
            Across hospitality, service, and digital brands.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .atscale-grid { grid-template-columns: 1fr 1fr !important; gap: 3rem !important; }
          .atscale-grid > div { border-right: none !important; padding-right: 0 !important; padding-left: 0 !important; }
        }
        @media (max-width: 480px) {
          .atscale-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}