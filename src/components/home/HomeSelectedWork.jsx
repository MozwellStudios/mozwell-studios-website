import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "MOZWELL CLAREMONT",
    slug: "/work/mozwell-claremont",
    metric: "$1.5M+ First-Year Revenue",
    tag: "Brand · Advertising · Growth",
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/0e0987b73_FirstYearAnniversary-70.jpg",
  },
  {
    name: "UNION PASADENA",
    slug: "/work/union-pasadena",
    metric: "60+ Private Event Leads",
    tag: "Paid Media · Photography",
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c01be7829_CocktailShoot_-18.jpg",
  },
  {
    name: "CHOP N BLOK",
    slug: "/work/chop-n-blok",
    metric: "647 Reservations Generated",
    tag: "Reservation Growth · Paid Media",
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/66e7f076e_Carajillo-2.jpg",
  },
  {
    name: "FOUNDRSPACE",
    slug: "/work/foundrspace",
    metric: "794K+ Impressions",
    tag: "Lead Generation · Growth",
    image: null,
  },
  {
    name: "HOMEAID",
    slug: "/work/homeaid",
    metric: "$34,135 Donations Generated",
    tag: "Nonprofit · Digital Marketing",
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/7ecac5767_HomeAidGeorgia-123.jpg",
  },
  {
    name: "ORGANIC MUSIC",
    slug: "/work/organic-music",
    metric: "353% Revenue Growth",
    tag: "Digital Marketing · Music",
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c69239e19_ManHoldingNewiPhoneMockup2021-OrganicMusicMarketing.png",
  },
];

function WorkItem({ p, i }) {
  const ref = useRef(null);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.opacity = "1"; el.style.transform = "translateY(0)"; obs.disconnect(); }
    }, { threshold: 0.07 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Link
      to={p.slug}
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "block",
        textDecoration: "none",
        opacity: 0,
        transform: "translateY(48px)",
        transition: `opacity 0.9s cubic-bezier(0.25,0.1,0.25,1) ${i * 0.08}s, transform 0.9s cubic-bezier(0.25,0.1,0.25,1) ${i * 0.08}s`,
        borderTop: "1px solid #e0e0dc",
      }}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", aspectRatio: "16/9", backgroundColor: "#e8e8e4" }}>
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            style={{
              width: "100%", height: "100%", objectFit: "cover", display: "block",
              transition: "transform 0.8s cubic-bezier(0.25,0.1,0.25,1)",
              transform: hov ? "scale(1.04)" : "scale(1)",
            }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", backgroundColor: "#e0e0dc", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#aaa" }}>{p.name}</p>
          </div>
        )}
      </div>

      {/* Info row */}
      <div style={{ padding: "1.75rem 0", display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginBottom: "0.4rem" }}>{p.tag}</p>
          <h3 style={{
            fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: hov ? "#F97316" : "#111",
            textTransform: "uppercase",
            transition: "color 0.25s",
          }}>
            {p.name}
          </h3>
        </div>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F97316", fontWeight: 600 }}>
          {p.metric}
        </p>
      </div>
    </Link>
  );
}

export default function HomeSelectedWork() {
  return (
    <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2 style={{
            fontSize: "clamp(3rem, 7vw, 7rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 0.9,
            color: "#111",
            textTransform: "uppercase",
          }}>
            Selected<br />Work.
          </h2>
          <Link
            to="/work"
            style={{
              fontSize: "0.62rem", color: "#999", textDecoration: "none",
              letterSpacing: "0.12em", textTransform: "uppercase",
              borderBottom: "1px solid #ccc", paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#F97316"; e.currentTarget.style.borderColor = "#F97316"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#999"; e.currentTarget.style.borderColor = "#ccc"; }}
          >
            View All Work →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem 4rem" }} className="work-grid">
          {projects.map((p, i) => <WorkItem key={i} p={p} i={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}