import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Content Systems",
    desc: "Photo, video, and social content designed to scale.",
    tags: "Photography · Video · Short-Form · Ad Creative",
  },
  {
    num: "02",
    title: "Advertising Engine",
    desc: "Google, Meta, and TikTok campaigns that drive revenue.",
    tags: "Google Ads · Meta Ads · TikTok · Retargeting",
  },
  {
    num: "03",
    title: "Growth Infrastructure",
    desc: "CRM, automation, landing pages, and AI-supported workflows.",
    tags: "CRM · Email & SMS · Automation · Analytics · AI",
  },
];

function ServiceRow({ s, i }) {
  const ref = useRef(null);
  const [hov, setHov] = useState(false);

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
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderTop: "1px solid #e0e0dc",
        padding: "4rem 0",
        display: "grid",
        gridTemplateColumns: "3rem 1fr 1fr 1.2fr",
        gap: "3rem",
        alignItems: "start",
        opacity: 0,
        transform: "translateY(36px)",
        transition: `opacity 0.85s cubic-bezier(0.25,0.1,0.25,1) ${i * 0.08}s, transform 0.85s cubic-bezier(0.25,0.1,0.25,1) ${i * 0.08}s`,
      }}
      className="svc-row"
    >
      <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: "#F97316", textTransform: "uppercase", paddingTop: "0.5rem", fontWeight: 600 }}>
        {s.num}
      </p>
      <h3 style={{
        fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)",
        fontWeight: 800,
        letterSpacing: "-0.04em",
        color: hov ? "#F97316" : "#111",
        textTransform: "uppercase",
        lineHeight: 0.95,
        transition: "color 0.25s",
      }}>
        {s.title}
      </h3>
      <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.7 }}>
        {s.desc}
      </p>
      <p style={{ fontSize: "0.6rem", color: "#bbb", lineHeight: 2.2, letterSpacing: "0.1em", textTransform: "uppercase", paddingTop: "0.5rem" }}>
        {s.tags}
      </p>
    </div>
  );
}

export default function HomeServices() {
  return (
    <section style={{ backgroundColor: "#f7f7f5", padding: "0 3rem 12rem" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto" }}>

        <div style={{ borderTop: "1px solid #e0e0dc", paddingTop: "10rem", marginBottom: "0" }}>
          <h2 style={{
            fontSize: "clamp(3rem, 7vw, 7rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 0.9,
            color: "#111",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}>
            What we build.
          </h2>
          <Link
            to="/services"
            style={{
              fontSize: "0.62rem", color: "#999", textDecoration: "none",
              letterSpacing: "0.12em", textTransform: "uppercase",
              borderBottom: "1px solid #ccc", paddingBottom: "2px",
              display: "inline-block", marginBottom: "8rem",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#F97316"; e.currentTarget.style.borderColor = "#F97316"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#999"; e.currentTarget.style.borderColor = "#ccc"; }}
          >
            View All Services →
          </Link>
        </div>

        {services.map((s, i) => <ServiceRow key={i} s={s} i={i} />)}
        <div style={{ borderTop: "1px solid #e0e0dc" }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .svc-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}