import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "$1.5M+", label: "First-Year Revenue" },
  { value: "1.43M", label: "Google Impressions" },
  { value: "34,700", label: "Clicks Generated" },
  { value: "6,500+", label: "Loyalty Subscribers" },
];

export default function CaseStudy() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
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
      position: "relative",
      minHeight: "100vh",
      backgroundColor: "#000000",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      overflow: "hidden",
    }}>
      {/* Background image with slow zoom */}
      <img
        src="https://img.youtube.com/vi/vxVhfav-1jg/maxresdefault.jpg"
        alt="Mozwell Claremont"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.45,
          animation: "slowZoom 25s ease-in-out infinite alternate",
          zIndex: 0,
        }}
      />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "100rem", margin: "0 auto", padding: "16rem 3rem 8rem", width: "100%" }}>

        <div style={{ ...f(0), marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#F97316", fontWeight: 600 }}>
            Studio Venture — Mozwell Claremont
          </p>
        </div>

        <h2 style={{
          ...f(0.08),
          fontSize: "clamp(3rem, 7vw, 7.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.045em",
          lineHeight: 0.92,
          color: "#ffffff",
          textTransform: "uppercase",
          marginBottom: "8rem",
          maxWidth: "60rem",
        }}>
          From concept<br />to $1.5M+.
        </h2>

        {/* Stats — editorial large treatment */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }} className="cs-stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{
                ...f(0.15 + i * 0.08),
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                padding: "3rem 0",
                paddingRight: i < stats.length - 1 ? "3rem" : "0",
                paddingLeft: i > 0 ? "3rem" : "0",
              }}>
                <p style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 800, color: "#F97316", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "0.75rem" }}>
                  {s.value}
                </p>
                <p style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...f(0.55), marginTop: "3rem" }}>
          <Link to="/work/mozwell-claremont-v2" style={{
            fontSize: "0.65rem", color: "#F97316", textDecoration: "none",
            letterSpacing: "0.12em", textTransform: "uppercase",
            borderBottom: "1px solid rgba(249,115,22,0.4)", paddingBottom: "2px",
          }}>
            View Case Study ↗
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to { transform: scale(1.08); }
        }
        @media (max-width: 768px) {
          .cs-stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}