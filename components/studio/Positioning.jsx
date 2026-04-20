import React, { useRef, useEffect, useState } from "react";

const industries = ["Restaurants", "Nightlife", "Consumer Brands", "Professional Services", "Creators"];

export default function Positioning() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const f = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
  });

  return (
    <section ref={ref} style={{
      backgroundColor: "#000000",
      padding: "clamp(6rem,10vw,14rem) 3rem",
      borderTop: "1px solid #111111",
    }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto" }}>

        <div style={{ ...f(0), marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 1.5rem", fontWeight: 600 }}>
            Our Focus
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", width: "100%" }} />
        </div>

        <h2 style={{
          ...f(0.08),
          fontSize: "clamp(2.5rem, 6vw, 7rem)",
          fontWeight: 800,
          letterSpacing: "-0.045em",
          lineHeight: 0.92,
          color: "#ffffff",
          textTransform: "uppercase",
          marginBottom: "6rem",
          maxWidth: "70rem",
        }}>
          Built for hospitality.<br />
          <span style={{ color: "#F97316" }}>Proven across modern brands.</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start", borderTop: "1px solid #111111", paddingTop: "5rem" }} className="pos-grid">
          <p style={{
            ...f(0.2),
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.8,
          }}>
            The same systems that built a $1.5M restaurant now support nightlife, consumer brands, professional services, and modern businesses.
          </p>

          <div style={{ ...f(0.3) }}>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "2rem" }}>
              Industries
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0" }}>
              {industries.map((tag, i) => (
                <span key={tag} style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                  {tag}{i < industries.length - 1 ? <span style={{ color: "#F97316", margin: "0 0.75rem" }}>•</span> : null}
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