import React, { useRef, useEffect, useState } from "react";

export default function HomeManifesto() {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const f = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(36px)",
    transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${d}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${d}s`,
  });

  return (
    <section ref={ref} style={{ backgroundColor: "#f7f7f5", padding: "14rem 3rem" }}>
      <div style={{ maxWidth: "88rem", margin: "0 auto" }}>

        <p style={{ ...f(0), fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", marginBottom: "5rem" }}>
          The Mission
        </p>

        <h2 style={{
          ...f(0.07),
          fontSize: "clamp(4rem, 9vw, 10rem)",
          fontWeight: 800,
          letterSpacing: "-0.045em",
          lineHeight: 0.88,
          color: "#111",
          textTransform: "uppercase",
          marginBottom: "6rem",
          maxWidth: "80rem",
        }}>
          Hospitality deserves{" "}
          <span style={{ color: "#F97316" }}>better<br />media.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "5fr 3fr", gap: "6rem", alignItems: "end" }} className="manifesto-cols">
          <p style={{
            ...f(0.16),
            fontSize: "1.4rem",
            color: "#444",
            lineHeight: 1.6,
            letterSpacing: "-0.015em",
            maxWidth: "36rem",
          }}>
            Most restaurant marketing is generic and forgettable.<br />
            Mozwell exists to change that.
          </p>
          <div style={{ ...f(0.26) }}>
            <div style={{ width: "2rem", height: "1px", backgroundColor: "#F97316", marginBottom: "1.5rem" }} />
            <p style={{ fontSize: "0.75rem", color: "#888", lineHeight: 1.8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Built by operators,<br />not just marketers.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .manifesto-cols { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}