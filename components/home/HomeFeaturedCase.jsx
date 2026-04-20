import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "$1.5M+", label: "First-Year Revenue" },
  { value: "1.43M", label: "Google Impressions" },
  { value: "34,700", label: "Clicks Generated" },
  { value: "6,500+", label: "Loyalty Subscribers" },
];

export default function HomeFeaturedCase() {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const f = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${d}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${d}s`,
  });

  return (
    <section ref={ref} style={{ position: "relative", backgroundColor: "#000", overflow: "hidden" }}>

      {/* Full-bleed cinematic image */}
      <div style={{ position: "relative", height: "75vh", overflow: "hidden" }}>
        <img
          src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/0e0987b73_FirstYearAnniversary-70.jpg"
          alt="Mozwell Claremont"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.6) 60%, #000 100%)",
        }} />
        <div style={{ position: "absolute", bottom: "3rem", left: "3rem", ...f(0.05) }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#F97316", marginBottom: "0.75rem", fontWeight: 600 }}>
            Studio Venture — Mozwell Claremont
          </p>
        </div>
      </div>

      {/* Headline + Stats */}
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "8rem 3rem 10rem" }}>

        <div style={{ ...f(0.05), marginBottom: "8rem" }}>
          <h2 style={{
            fontSize: "clamp(4rem, 9vw, 10rem)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 0.88,
            color: "#fff",
            textTransform: "uppercase",
          }}>
            From concept<br />
            <span style={{ color: "#F97316" }}>to $1.5M+.</span>
          </h2>
        </div>

        {/* Editorial stat list */}
        <div style={{ borderTop: "1px solid #111" }}>
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                ...f(0.1 + i * 0.08),
                borderBottom: "1px solid #111",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                alignItems: "baseline",
                gap: "3rem",
                padding: "2.5rem 0",
              }}
            >
              <p style={{
                fontSize: "clamp(3.5rem, 8vw, 8rem)",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                color: "#F97316",
                lineHeight: 1,
              }}>
                {s.value}
              </p>
              <p style={{ fontSize: "0.62rem", color: "#333", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div style={{ ...f(0.45), marginTop: "4rem" }}>
          <Link
            to="/work/mozwell-claremont-v2"
            style={{
              fontSize: "0.65rem", color: "#F97316", textDecoration: "none",
              borderBottom: "1px solid rgba(249,115,22,0.4)", paddingBottom: "3px",
              letterSpacing: "0.12em", textTransform: "uppercase",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.6"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            View Full Case Study →
          </Link>
        </div>
      </div>
    </section>
  );
}