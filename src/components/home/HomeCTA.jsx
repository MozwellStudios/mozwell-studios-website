import React, { useRef, useEffect, useState } from "react";

export default function HomeCTA() {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const f = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${d}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${d}s`,
  });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#000",
        padding: "16rem 3rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle orange glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60rem", height: "30rem",
        background: "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "100rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{ ...f(0), fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#333", marginBottom: "3rem" }}>
          Start a Project
        </p>

        <h2 style={{
          ...f(0.07),
          fontSize: "clamp(3.5rem, 8vw, 9rem)",
          fontWeight: 800,
          letterSpacing: "-0.045em",
          lineHeight: 0.9,
          color: "#fff",
          textTransform: "uppercase",
          marginBottom: "4rem",
        }}>
          Ready to build<br />something better?
        </h2>

        <p style={{
          ...f(0.16),
          fontSize: "1.1rem",
          color: "#555",
          lineHeight: 1.7,
          maxWidth: "32rem",
          margin: "0 auto 5rem",
        }}>
          Let's design the system behind your next phase of growth.
        </p>

        <div style={{ ...f(0.24) }}>
          <a
            href="https://form.typeform.com/to/TNZNwF?typeform-source=mozwellstudios.typeform.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#F97316",
              color: "#000",
              padding: "1rem 2rem",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background-color 0.5s, color 0.5s",
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#000"; e.currentTarget.style.color = "#F97316"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#F97316"; e.currentTarget.style.color = "#000"; }}
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}