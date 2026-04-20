import React, { useRef, useEffect, useState } from "react";

const offerings = [
  {
    num: "01",
    title: "Content Day",
    desc: "One filming session becomes weeks of content. Built for founders and brands that need modern creative at scale.",
    tags: "Short-Form Video · Photography · Reels · TikTok · Ad Creative",
  },
  {
    num: "02",
    title: "Paid Media",
    desc: "Performance campaigns built to drive discovery, bookings, leads, and revenue across Google, Meta, and TikTok.",
    tags: "Google Ads · Meta Ads · TikTok Ads · Retargeting · Event Promotion",
  },
  {
    num: "03",
    title: "Growth Systems",
    desc: "CRM, lead capture, automation, landing pages, dashboards, and AI-enabled workflows that connect the whole engine.",
    tags: "CRM · Email & SMS · Automation · Analytics · AI Workflows",
  },
  {
    num: "04",
    title: "Launch Partner",
    desc: "Brand, web, content, and paid media for concepts launching from zero.",
    tags: "Brand Identity · Web · Content · Paid Media · Launch Strategy",
  },
];

function OfferingRow({ item, index }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid #111111",
        padding: "4.5rem 0",
        display: "grid",
        gridTemplateColumns: "4rem 1fr 1fr",
        gap: "3rem",
        alignItems: "start",
        opacity: 0,
        transform: "translateY(36px)",
        transition: `opacity 0.85s cubic-bezier(0.25,0.1,0.25,1) ${index * 0.08}s, transform 0.85s cubic-bezier(0.25,0.1,0.25,1) ${index * 0.08}s`,
        cursor: "default",
      }}
      className="how-row"
    >
      <p style={{ fontSize: "0.58rem", letterSpacing: "0.22em", color: "#F97316", textTransform: "uppercase", paddingTop: "0.5rem", fontWeight: 600 }}>
        {item.num}
      </p>
      <div>
        <h3 style={{
          fontSize: "clamp(2rem, 4vw, 4rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: hovered ? "#F97316" : "#ffffff",
          textTransform: "uppercase",
          lineHeight: 0.95,
          marginBottom: "1.5rem",
          transition: "color 0.3s",
        }}>
          {item.title}
        </h3>
        <p style={{ fontSize: "1rem", color: "#555555", lineHeight: 1.75, maxWidth: "28rem" }}>
          {item.desc}
        </p>
      </div>
      <p style={{
        fontSize: "0.62rem",
        color: "#2a2a2a",
        lineHeight: 2.2,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        paddingTop: "0.6rem",
      }}>
        {item.tags}
      </p>
    </div>
  );
}

export default function HowWeHelp() {
  return (
    <section style={{ padding: "10rem 0", borderTop: "1px solid #111111", backgroundColor: "#000000" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "0 3rem" }}>

        <div className="reveal" style={{ marginBottom: "7rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#333333", marginBottom: "2rem" }}>
            How We Work
          </p>
          <h2 style={{
            fontSize: "clamp(3rem, 6vw, 6.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 0.9,
            color: "#ffffff",
            textTransform: "uppercase",
          }}>
            How we help<br />brands grow.
          </h2>
        </div>

        {offerings.map((item, i) => <OfferingRow key={i} item={item} index={i} />)}
        <div style={{ borderTop: "1px solid #111111" }} />

        <div className="reveal" style={{ marginTop: "6rem", maxWidth: "48rem" }}>
          <p style={{
            fontSize: "1rem",
            color: "#333333",
            lineHeight: 1.75,
            letterSpacing: "-0.01em",
            borderLeft: "2px solid #F97316",
            paddingLeft: "1.5rem",
          }}>
            Built by operators, not just marketers. We understand the real economics of growing a brand.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .how-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}