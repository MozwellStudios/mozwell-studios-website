import React, { useRef, useEffect, useState } from "react";

export default function Philosophy() {
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
    <section
      ref={ref}
      style={{
        backgroundColor: "#f7f7f5",
        padding: "clamp(6rem,12vw,16rem) 3rem",
      }}
    >
      <div style={{ maxWidth: "88rem", margin: "0 auto" }}>
        <div style={{ ...f(0), marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#999", margin: "0 0 1.5rem", fontWeight: 600 }}>
            Philosophy
          </p>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", width: "100%" }} />
        </div>

        <h2 style={{
          ...f(0.08),
          fontSize: "clamp(3.5rem, 8vw, 9rem)",
          fontWeight: 800,
          letterSpacing: "-0.045em",
          lineHeight: 0.9,
          color: "#111111",
          textTransform: "uppercase",
          marginBottom: "5rem",
        }}>
          Human taste{" "}
          <span style={{ color: "#F97316" }}>+</span>
          {" "}modern<br />tools.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr", gap: "6rem", alignItems: "end" }} className="phil-grid">
          <p style={{
            ...f(0.18),
            fontSize: "1.35rem",
            color: "#555555",
            lineHeight: 1.65,
            letterSpacing: "-0.015em",
          }}>
            Technology scales the work. Taste makes the work matter.
          </p>
          <div style={{ ...f(0.28) }}>
            <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#F97316", marginBottom: "2rem" }} />
            <p style={{ fontSize: "0.78rem", color: "#555555", lineHeight: 1.8, letterSpacing: "0.02em", textTransform: "uppercase" }}>
              Operator-driven.<br />AI-supported.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .phil-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}