import React, { useRef, useEffect, useState } from "react";

export default function FinalCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
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
      id="contact"
      style={{
        backgroundColor: "#000000",
        padding: "clamp(6rem,12vw,16rem) 3rem",
        textAlign: "center",
        borderTop: "1px solid #111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60rem", height: "30rem",
        background: "radial-gradient(ellipse at center, rgba(230,69,13,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ ...f(0), fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "3rem" }}>
          Start a Project
        </p>
        <h2 style={{
          ...f(0.08),
          fontSize: "clamp(3rem, 8vw, 8.5rem)",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.045em",
          lineHeight: 0.9,
          marginBottom: "4rem",
          textTransform: "uppercase",
        }}>
          Ready to build<br />something better?
        </h2>
        <p style={{
          ...f(0.18),
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
          maxWidth: "30rem",
          margin: "0 auto 5rem",
        }}>
          Let's design the system behind your next phase of growth.
        </p>
        <div style={{ ...f(0.28) }}>
          <a
            href="https://form.typeform.com/to/TNZNwF?typeform-source=mozwellstudios.typeform.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#F97316",
              color: "#000000",
              padding: "1rem 2rem",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background-color 0.5s, color 0.5s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#000"; e.currentTarget.style.color = "#F97316"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#F97316"; e.currentTarget.style.color = "#000"; }}
          >
            Book a Strategy Call ↗
          </a>
          <p style={{ ...f(0.38), fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2rem" }}>
            Currently accepting Q3 2026 partners
          </p>
        </div>
      </div>
    </section>
  );
}