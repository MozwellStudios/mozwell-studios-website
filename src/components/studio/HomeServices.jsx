import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Content Systems",
    desc: "Photo, video, and social content designed to scale.",
    detail: "One production day becomes weeks of content across every channel.",
  },
  {
    num: "02",
    title: "Advertising Engine",
    desc: "Google, Meta, and TikTok campaigns that drive revenue.",
    detail: "Performance campaigns built for real business outcomes: bookings, leads, and growth.",
  },
  {
    num: "03",
    title: "Growth Infrastructure",
    desc: "CRM, automation, landing pages, and AI-supported workflows.",
    detail: "The marketing system that runs while you work.",
  },
];

function ServiceRow({ s, i }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      borderTop: "1px solid #e0e0dd",
      padding: "4.5rem 0",
      display: "grid",
      gridTemplateColumns: "4rem 1fr 1.2fr 1fr",
      gap: "3rem",
      alignItems: "start",
      opacity: 0,
      transform: "translateY(40px)",
      transition: `opacity 0.85s cubic-bezier(0.25,0.1,0.25,1) ${i * 0.1}s, transform 0.85s cubic-bezier(0.25,0.1,0.25,1) ${i * 0.1}s`,
    }} className="svc-row">
      <p style={{ fontSize: "0.58rem", letterSpacing: "0.22em", color: "#F97316", textTransform: "uppercase", fontWeight: 600, margin: 0, lineHeight: "0.95" }}>
        {s.num}
      </p>
      <h3 style={{
        fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)",
        fontWeight: 800,
        letterSpacing: "-0.04em",
        color: "#111111",
        textTransform: "uppercase",
        lineHeight: 0.95,
        margin: 0,
      }}>
        {s.title}
      </h3>
      <p style={{ fontSize: "1.05rem", color: "#555555", lineHeight: 1.65, margin: 0 }}>
        {s.desc}
      </p>
      <p style={{ fontSize: "0.82rem", color: "#999999", lineHeight: 1.7, margin: 0 }}>
        {s.detail}
      </p>
    </div>
  );
}

export default function HomeServices() {
  return (
    <section style={{ backgroundColor: "#f7f7f5", padding: "0 0 clamp(4rem,8vw,10rem)" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "0 3rem" }}>

        <div style={{ borderTop: "1px solid #e0e0dd", paddingTop: "clamp(4rem,8vw,10rem)", marginBottom: "6rem" }}>
          <p className="reveal" style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#999", margin: "0 0 1.5rem", fontWeight: 600 }}>
            Services
          </p>
          <div className="reveal" style={{ borderTop: "1px solid rgba(0,0,0,0.1)", marginBottom: "4rem" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "end" }} className="svc-header-grid">
            <h2 className="reveal" style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.92,
              color: "#111111",
              textTransform: "uppercase",
            }}>
              What we<br />build.
            </h2>
            <div>
              <p className="reveal" style={{ fontSize: "1rem", color: "#666666", lineHeight: 1.7, maxWidth: "28rem" }}>
                Three core systems. Every engagement is built around one or more of these.
              </p>
              <Link to="/services" style={{
                display: "inline-block",
                marginTop: "2rem",
                fontSize: "0.65rem",
                color: "#111111",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderBottom: "1px solid #111111",
                paddingBottom: "2px",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#F97316"; e.currentTarget.style.borderColor = "#F97316"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#111111"; e.currentTarget.style.borderColor = "#111111"; }}
              >
                View Full Services ↗
              </Link>
            </div>
          </div>
        </div>

        {services.map((s, i) => <ServiceRow key={i} s={s} i={i} />)}
        <div style={{ borderTop: "1px solid #e0e0dd" }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .svc-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 3rem 0 !important; }
          .svc-header-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}