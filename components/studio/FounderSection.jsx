import React, { useRef, useEffect, useState } from "react";

export default function FounderSection() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const f = (delay = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.95s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.95s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
  });

  return (
    <section ref={ref} style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
        <div style={f(0)}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", marginBottom: "4rem" }}>
            Founder
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start" }} className="founder-grid">
          <div style={f(0.08)}>
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: "#111",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Founded by<br />
              <span style={{ color: "#F97316" }}>Edwin Guembes.</span>
            </h2>
          </div>

          <div style={f(0.18)}>
            <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#F97316", marginBottom: "2.5rem" }} />
            <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: 1.85, marginBottom: "2rem" }}>
              Edwin Guembes started in nightlife and events before building Mozwell Studios into a hospitality-first media and growth studio. He founded and operates Mozwell Claremont — a cocktail bar and neighborhood venue in Claremont, California — giving the studio a rare operator's perspective that most agencies lack.
            </p>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.8 }}>
              Mozwell doesn't advise from the outside. It builds from the inside.
            </p>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .founder-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  );
}