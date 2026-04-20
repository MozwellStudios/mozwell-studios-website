import React, { useRef, useEffect, useState } from "react";

const industries = ["Restaurants", "Nightlife & Events", "Consumer Brands", "Professional Services", "Creators", "Local Businesses"];

export default function HomePositioning() {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const f = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${d}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${d}s`,
  });

  return (
    <section ref={ref} style={{ backgroundColor: "#000", padding: "14rem 3rem", borderTop: "1px solid #0f0f0f" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto" }}>

        <p style={{ ...f(0), fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#333", marginBottom: "4rem" }}>
          Our Focus
        </p>

        <h2 style={{
          ...f(0.07),
          fontSize: "clamp(3rem, 7vw, 8rem)",
          fontWeight: 800,
          letterSpacing: "-0.045em",
          lineHeight: 0.9,
          color: "#fff",
          textTransform: "uppercase",
          marginBottom: "6rem",
          maxWidth: "70rem",
        }}>
          Built for hospitality.{" "}
          <span style={{ color: "#F97316" }}>Proven across<br />modern brands.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start" }} className="pos-grid">
          <p style={{
            ...f(0.15),
            fontSize: "1.25rem",
            color: "#555",
            lineHeight: 1.7,
            letterSpacing: "-0.01em",
          }}>
            The same systems that built a $1.5M restaurant now support nightlife, consumer brands, professional services, and modern businesses.
          </p>

          <div style={{ ...f(0.22) }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {industries.map((ind) => (
                <span key={ind} style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  border: "1px solid #1a1a1a",
                  padding: "0.4rem 1rem",
                  color: "#444",
                }}>
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pos-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
}