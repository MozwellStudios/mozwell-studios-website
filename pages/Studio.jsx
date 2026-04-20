import React, { useRef, useEffect, useState } from "react";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";
import { Link } from "react-router-dom";

/* ─── Data ──────────────────────────────────────────────── */
const principles = [
  { num: "01", title: "Built in the real world.", desc: "Every system we design has to survive a Friday night service or a Monday morning standup." },
  { num: "02", title: "Systems drive growth.", desc: "One-off campaigns plateau. Operating systems compound." },
  { num: "03", title: "Creative must perform.", desc: "If it doesn't move the number, it's decoration." },
  { num: "04", title: "Speed beats perfection.", desc: "Ship, measure, iterate. Rinse." },
  { num: "05", title: "Behavior over personas.", desc: "We design for what customers actually do, not who they claim to be." },
  { num: "06", title: "Partnership over vendor.", desc: "We show up as operators, not order-takers." },
];

const allTeam = [
  {
    name: "EDWIN GUEMBES",
    role: "FOUNDER / CREATIVE DIRECTOR",
    bio: "Building brands through content, systems, and execution.",
    fullBio: "Edwin founded Mozwell Studios after years of working inside hospitality and retail brands. He's an operator first — someone who's managed venues, run events, and built revenue systems from scratch. That background shapes everything: every strategy we build has to survive real-world conditions, not just look good in a deck.",
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/26e5babff_image.png",
  },
  {
    name: "LYKA",
    role: "CONTENT & PRODUCTION SYSTEMS",
    bio: "Turns one shoot into 90 days of content.",
    fullBio: "Lyka leads content production and distribution systems. She designs shoot days to produce in bulk — one day of filming becomes months of platform-native content across Instagram, TikTok, email, and paid media. She doesn't just capture — she architects the pipeline.",
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/b3a90c269_image.png",
  },
  {
    name: "CHANG GAO",
    role: "VISUAL DESIGNER",
    bio: "Executes creative built for performance.",
    fullBio: "Chang bridges brand aesthetics and conversion-driven design. She handles everything from identity systems to campaign creative — making sure every visual asset works as hard as the strategy behind it. Her work looks good and performs.",
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/b5b572f89_image.png",
  },
  {
    name: "EMIL MAGNATE",
    role: "PAID MEDIA & PERFORMANCE",
    bio: "Optimizes for conversion, not vanity metrics.",
    fullBio: "Emil manages paid media across Meta, Google, and YouTube. He runs campaigns against measurable outcomes — cost per acquisition, ROAS, qualified leads — not impressions or reach. Every dollar is accountable, and every campaign is actively managed, not set-and-forget.",
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/7b8dd6330_image.png",
  },
  {
    name: "MIRANDA DAVIS",
    role: "SEO STRATEGIST",
    bio: "Builds systems that scale campaigns.",
    fullBio: "Miranda owns search — organic and paid. She builds SEO infrastructure that compounds over time: keyword architecture, content strategy, technical audits, and local search. Her work ensures that when someone is ready to buy, Mozwell clients are the first thing they find.",
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/5d701687b_image.png",
  },
  {
    name: "ANDREW PETERSEN",
    role: "DIRECTOR / VIDEO PRODUCTION",
    bio: "Directs content that actually converts.",
    fullBio: "Andrew directs video production for campaigns, brand films, and social content. He shoots with distribution in mind — every scene is cut for its intended platform, not repurposed after the fact. His work has generated millions of views and directly driven measurable revenue.",
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/bf809a353_image.png",
  },
];


const capabilities = [
  { label: "Content Systems", detail: "Photo · Video · Short-form" },
  { label: "Paid Media", detail: "Meta · Google · TikTok" },
  { label: "Conversion Infrastructure", detail: "Landing pages · Funnels · CRO" },
  { label: "Growth Systems", detail: "CRM · Automations · Retention" },
  { label: "Strategy", detail: "Positioning · Campaign planning" },
  { label: "Creative Direction", detail: "Messaging · Performance creative" },
];

const testimonials = [
  {
    quote: "Their desire to understand our bank culture and develop within that context stands out.",
    name: "FRANK SPEIGHT",
    context: "COO & Founder · KC Bank",
    source: "Verified Clutch Review",
  },
  {
    quote: "What stands out most is their ability to understand our firm and translate that into a clean, professional website.",
    name: "EDWARD FESTERYGA",
    context: "Attorney · Festeryga Law · Houston, TX",
    source: "Verified Clutch Review",
  },
  {
    quote: "They provided hands-on help and walk-through mentorship for successful growth.",
    name: "ADRIAN MCCOVY",
    context: "Executive · Red Crown Products · Claremont, CA",
    source: "Verified Clutch Review",
  },
];

const proofStats = [
  { value: "$1.5M+", label: "Year One Revenue", context: "Mozwell Claremont" },
  { value: "$180K+", label: "Event Revenue", context: "Union Pasadena" },
  { value: "500K+", label: "Views", context: "Content + Paid Campaigns" },
];

/* ─── Fade wrapper ──────────────────────────────────────── */
function Fade({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── Principle row ─────────────────────────────────────── */
function PrincipleRow({ p, i }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid #111",
        padding: "3.5rem 0",
        display: "grid",
        gridTemplateColumns: "4rem 1fr 1fr",
        gap: "3rem",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ease-out ${i * 0.15}s, transform 0.6s ease-out ${i * 0.15}s`,
      }}
      className="principle-row"
    >
      <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: "#333", textTransform: "uppercase", transform: hovered ? "translateX(8px)" : "translateX(0)", transition: "transform 0.5s ease-out" }}>{p.num}</p>
      <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", textTransform: "uppercase", lineHeight: 1, transform: hovered ? "translateX(8px)" : "translateX(0)", transition: "transform 0.5s ease-out" }}>{p.title}</h3>
      <p style={{ fontSize: "0.95rem", color: hovered ? "rgba(255,255,255,0.85)" : "#444", lineHeight: 1.7, transition: "color 0.5s ease-out" }}>{p.desc}</p>
    </div>
  );
}

/* ─── Team member card ──────────────────────────────────── */
function MemberCard({ m }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const revealed = hovered || clicked;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setClicked(c => !c)}
      style={{ cursor: "pointer" }}
    >
      {/* Photo with bio overlay */}
      <div style={{ aspectRatio: "4/5", overflow: "hidden", backgroundColor: "#f0f0ee", position: "relative" }}>
        <img
          src={m.photo}
          alt={m.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: revealed ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.9s cubic-bezier(0.25,0.1,0.25,1)",
            opacity: 1,
            filter: "none",
          }}
        />
        {/* Bio overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.2) 100%)",
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.4s ease",
          display: "flex", alignItems: "flex-end", padding: "1.75rem",
          pointerEvents: "none",
        }}>
          <p style={{
            fontSize: "0.875rem", color: "rgba(255,255,255,0.92)", lineHeight: 1.7, margin: 0,
            transform: revealed ? "translateY(0)" : "translateY(14px)",
            transition: "transform 0.45s cubic-bezier(0.25,0.1,0.25,1)",
          }}>
            {m.fullBio}
          </p>
        </div>
      </div>

      {/* Name / role below */}
      <div style={{ marginTop: "1.25rem" }}>
        <p style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F97316", fontWeight: 700, margin: "0 0 0.5rem" }}>{m.role}</p>
        <h3 style={{ fontSize: "clamp(1rem, 1.5vw, 1.4rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1, color: "#111", textTransform: "uppercase", margin: "0 0 0.4rem" }}>{m.name}</h3>
        <p style={{ fontSize: "0.8rem", color: "#888", lineHeight: 1.5, margin: 0 }}>{m.bio}</p>
      </div>
    </div>
  );
}

/* ─── Auto-scroll gallery ───────────────────────────────── */
const GALLERY_ITEMS = [
  { type: "img",   src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/82d28c8f0_MaChaCha-14.jpg",                                                                    aspect: "4/5"  },
  { type: "img",   src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/e0996cf67_Cocktail_Shoot_-7.jpg",                                                              aspect: "3/4"  },
  { type: "video", vimeo: "https://player.vimeo.com/video/1180637162?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479",                                       aspect: "16/10" },
  { type: "img",   src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/f2c43e6f6_0423_GroupShots_-17.jpg",                                                            aspect: "16/10" },
  { type: "img",   src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/5a7af8ae3_0717_CharredOctopus-9.jpg",                                                          aspect: "4/5"  },
  { type: "video", vimeo: "https://player.vimeo.com/video/1180636544?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479",                                       aspect: "16/10" },
  { type: "img",   src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/dfb8254d6_0109_GroupShotsPatio-5.jpg",                                                         aspect: "16/10" },
  { type: "img",   src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3409f458c_DSC06003.jpg",                                                                       aspect: "4/5"  },
  { type: "video", vimeo: "https://player.vimeo.com/video/1077463789?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479",                                       aspect: "16/10" },
  { type: "img",   src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/7ecac5767_HomeAidGeorgia-123.jpg",                                                             aspect: "16/10" },
  { type: "img",   src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/dcf39b5c6_Laptop26MobileMockupcopy.png",                                                       aspect: "16/10" },
  { type: "img",   src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c69239e19_ManHoldingNewiPhoneMockup2021-OrganicMusicMarketing.png",                            aspect: "4/5"  },
  { type: "img",   src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/faff7f815_image.jpg",                                                                          aspect: "16/10" },
];

function AutoScrollGallery() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.6; // px per frame
  const H = 420;

  // Duplicate items for seamless loop
  const items = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        // Reset when first half scrolled
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handleMouseEnter = () => { pausedRef.current = true; };
  const handleMouseLeave = () => { pausedRef.current = false; };

  // Drag to scroll
  const dragRef = useRef({ dragging: false, startX: 0, startPos: 0 });
  const handleMouseDown = (e) => {
    pausedRef.current = true;
    dragRef.current = { dragging: true, startX: e.clientX, startPos: posRef.current };
  };
  const handleMouseMove = (e) => {
    if (!dragRef.current.dragging) return;
    const delta = dragRef.current.startX - e.clientX;
    const halfWidth = trackRef.current ? trackRef.current.scrollWidth / 2 : 0;
    let next = dragRef.current.startPos + delta;
    if (next < 0) next = 0;
    if (next >= halfWidth) next = halfWidth - 1;
    posRef.current = next;
    trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
  };
  const handleMouseUp = () => {
    dragRef.current.dragging = false;
    pausedRef.current = false;
  };

  return (
    <div
      style={{ overflow: "hidden", cursor: "grab", userSelect: "none" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="process-scroll-outer"
    >
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "0.35rem", width: "max-content", willChange: "transform" }}
      >
        {items.map((item, i) => {
          const [aw, ah] = item.aspect.split("/").map(Number);
          const w = Math.round(H * aw / ah);
          return (
            <div key={i} style={{ flexShrink: 0, width: `${w}px`, height: `${H}px`, overflow: "hidden", backgroundColor: "#111", position: "relative" }}>
              {item.type === "video" ? (
                <iframe
                  src={item.vimeo}
                  allow="autoplay; fullscreen"
                  title={`gallery-${i}`}
                  loading="lazy"
                  style={{ position: "absolute", top: "-10%", left: "-10%", width: "120%", height: "120%", border: "none", pointerEvents: "none" }}
                />
              ) : (
                <img src={item.src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.85) contrast(1.05)" }} />
              )}
            </div>
          );
        })}
      </div>
      <style>{`.process-scroll-outer:active { cursor: grabbing; }`}</style>
    </div>
  );
}

/* ════════════════════════════════════════════════════════ */
export default function Studio() {
  useEffect(() => { document.title = "About Us — Mozwell Studios"; }, []);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "16rem clamp(1.5rem,3.75vw,4rem) 0", minHeight: "80vh", display: "flex", alignItems: "flex-end" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto", width: "100%", paddingBottom: "8rem" }}>
          <Fade>
            <div style={{ marginBottom: "3rem" }}>
              <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 1.5rem", fontWeight: 600 }}>About</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", width: "100%" }} />
            </div>
            <h1 style={{ fontSize: "clamp(3.5rem, 9vw, 11rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.87, color: "#fff", textTransform: "uppercase", margin: "0 0 3rem" }}>
              Operators first.<br />
              <span style={{ color: "#F97316" }}>Marketers second.</span>
            </h1>
            <p style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, maxWidth: "36rem", margin: "0 0 2rem" }}>
              We build brands from the inside — through execution, not theory.
            </p>
            <p style={{ fontSize: "clamp(0.8rem, 1.1vw, 1rem)", color: "rgba(255,255,255,0.25)", lineHeight: 1.5, margin: 0, letterSpacing: "0.01em" }}>
              49M+ impressions. 12,000+ conversions. Across real businesses — not test accounts.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ 2. PROOF STRIP ═══════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", borderTop: "1px solid #111", borderBottom: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "5rem clamp(1.5rem,3.75vw,4rem)" }}>
          <Fade>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="proof-strip-grid">
              {proofStats.map((s, i) => (
                <div key={i} style={{ borderLeft: i > 0 ? "1px solid #1a1a1a" : "none", paddingLeft: i > 0 ? "2.5rem" : "0" }}>
                  <p style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.05em", lineHeight: 1, margin: "0 0 0.4rem" }}>{s.value}</p>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", margin: "0 0 0.25rem", fontWeight: 600 }}>{s.label}</p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>{s.context}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ 3. PHILOSOPHY ════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem clamp(1.5rem,3.75vw,4rem)", borderBottom: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <div style={{ marginBottom: "4rem" }}>
              <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#999", margin: "0 0 1.5rem", fontWeight: 600 }}>Philosophy</p>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", width: "100%" }} />
            </div>
            <h2 style={{ fontSize: "clamp(3rem, 7vw, 8rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.9, color: "#111", textTransform: "uppercase", margin: "0 0 4rem" }}>
              Human taste <span style={{ color: "#F97316" }}>+</span><br />modern tools.
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#555", lineHeight: 1.65, maxWidth: "38rem" }}>
              Technology scales the work. Taste makes the work matter.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ 4. PRINCIPLES ════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem clamp(1.5rem,3.75vw,4rem) 12rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <div style={{ marginBottom: "6rem" }}>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 1.5rem", fontWeight: 600 }}>Principles</p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", width: "100%" }} />
          </div>
          {principles.map((p, i) => (
            <PrincipleRow key={i} p={p} i={i} />
          ))}
          <div style={{ borderTop: "1px solid #111" }} />
        </div>
        <style>{`@media (max-width: 768px) { .principle-row { grid-template-columns: 1fr !important; gap: 1rem !important; } }`}</style>
      </section>

      {/* ══ 5. FOUNDER ═══════════════════════════════════════ */}
      <section style={{ backgroundColor: "#fff", padding: "12rem clamp(1.5rem,3.75vw,4rem)", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <div style={{ marginBottom: "6rem" }}>
              <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#bbb", margin: "0 0 1.5rem", fontWeight: 600 }}>The Studio</p>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", width: "100%" }} />
            </div>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem 3.5rem" }} className="team-grid">
            {allTeam.map((m, i) => (
              <Fade key={i} delay={i * 0.07}>
                <MemberCard m={m} />
              </Fade>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .team-grid { grid-template-columns: 1fr 1fr !important; gap: 3rem !important; } }
          @media (max-width: 480px) { .team-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ══ 5b. CAPABILITIES ═════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem clamp(1.5rem,3.75vw,4rem)", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <div style={{ marginBottom: "5rem" }}>
              <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 1.5rem", fontWeight: 600 }}>Capabilities</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", width: "100%" }} />
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88, color: "#fff", textTransform: "uppercase", margin: "0 0 1.5rem" }}>
              Capabilities.
            </h2>
            <p style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)", color: "rgba(255,255,255,0.35)", margin: "0 0 6rem", letterSpacing: "0.01em" }}>
              What we actually execute across every engagement.
            </p>
          </Fade>
          <Fade delay={0.08}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} className="cap-grid">
              {capabilities.map((c, i) => (
                <div key={i} style={{
                  padding: "2.5rem 0",
                  borderTop: "1px solid #111",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                  alignItems: "baseline",
                  paddingRight: i % 2 === 0 ? "4rem" : "0",
                  paddingLeft: i % 2 === 1 ? "4rem" : "0",
                  borderLeft: i % 2 === 1 ? "1px solid #111" : "none",
                }}>
                  <h3 style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>{c.label}</h3>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", margin: 0 }}>{c.detail}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #111", gridColumn: "1 / -1" }} />
            </div>
          </Fade>
        </div>
        <style>{`@media (max-width: 640px) { .cap-grid { grid-template-columns: 1fr !important; } .cap-grid > div { border-left: none !important; padding-left: 0 !important; padding-right: 0 !important; } }`}</style>
      </section>

      {/* ══ 6. IN THE ROOM ═══════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "8rem 0 0", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "88rem", margin: "0 auto", padding: "0 clamp(1.5rem,3.75vw,4rem)", marginBottom: "5rem" }}>
          <Fade>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "end" }} className="process-header-grid">
              <div>
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 2rem", fontWeight: 600 }}>The Process</p>
                <h2 style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)", fontWeight: 900, letterSpacing: "-0.05em", textTransform: "uppercase", color: "#fff", lineHeight: 0.88, margin: 0 }}>
                  In the<br />room.
                </h2>
              </div>
              <div style={{ paddingBottom: "0.5rem" }}>
                <p style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.125rem)", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
                  Not decks. Not theory.<br /><br />
                  Real campaigns.<br />
                  Real decisions.<br />
                  Real iteration.<br /><br />
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>Built in real time —<br />with data, not assumptions.</span>
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Auto-scrolling horizontal gallery — hidden on mobile where iframes can't autoplay */}
        <div className="studio-gallery-desktop">
          <AutoScrollGallery />
        </div>
        <style>{`.studio-gallery-desktop { display: block; } @media (max-width: 768px) { .studio-gallery-desktop { display: none; } }`}</style>

        {/* Bridge line into Execution */}
        <div style={{ maxWidth: "88rem", margin: "0 auto", padding: "3rem clamp(1.5rem,3.75vw,4rem)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#1a1a1a" }} />
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.18)", margin: 0, fontWeight: 600, flexShrink: 0 }}>
              Process &nbsp;→&nbsp; Execution
            </p>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#1a1a1a" }} />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .process-header-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>

      {/* ══ 6b. TESTIMONIALS ═════════════════════════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem clamp(1.5rem,3.75vw,4rem)", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <div style={{ marginBottom: "6rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#999", margin: 0, fontWeight: 600 }}>What Clients Actually Say</p>
                <a
                  href="https://clutch.co/profile/mozwell-studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#bbb", textDecoration: "none", fontWeight: 600, borderBottom: "1px solid rgba(0,0,0,0.15)", paddingBottom: "2px", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
                  onMouseLeave={e => e.currentTarget.style.color = "#bbb"}
                >
                  5.0 ★★★★★ on Clutch ↗
                </a>
              </div>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", width: "100%" }} />
            </div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5.5vw, 6rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88, color: "#111", textTransform: "uppercase", margin: "0 0 7rem" }}>
              What clients<br />actually say.
            </h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }} className="testimonials-grid">
            {testimonials.map((t, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div style={{
                  padding: "0",
                  paddingRight: i < 2 ? "4rem" : "0",
                  paddingLeft: i > 0 ? "4rem" : "0",
                  borderLeft: i > 0 ? "1px solid #e0e0dd" : "none",
                }}>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F97316", fontWeight: 700, margin: "0 0 1.75rem" }}>—</p>
                  <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "#111", lineHeight: 1.65, fontWeight: 500, letterSpacing: "-0.01em", margin: "0 0 2.5rem" }}>
                    "{t.quote}"
                  </p>
                  <div>
                    <p style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#111", fontWeight: 700, margin: "0 0 0.25rem" }}>{t.name}</p>
                    <p style={{ fontSize: "0.72rem", color: "#999", margin: "0 0 0.4rem" }}>{t.context}</p>
                    {t.source && <span style={{ fontSize: "0.52rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa", fontWeight: 600 }}>✓ {t.source}</span>}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr !important; gap: 4rem !important; } .testimonials-grid > div { border-left: none !important; padding-left: 0 !important; padding-right: 0 !important; } }`}</style>
      </section>

      {/* ══ 7. EXECUTION POSITIONING ═════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "12rem clamp(1.5rem,3.75vw,4rem)", borderTop: "1px solid #111", overflow: "hidden", position: "relative" }}>
        {/* Subtle background accent */}
        <div style={{ position: "absolute", top: "50%", right: "-10%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "100rem", margin: "0 auto", position: "relative" }}>
          <Fade>
            <div style={{ marginBottom: "4rem" }}>
              <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 1.5rem", fontWeight: 600 }}>How We Operate</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", width: "100%" }} />
            </div>
          </Fade>
          <Fade delay={0.08}>
            <h2 style={{ fontSize: "clamp(2.75rem, 6vw, 7rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.95, textTransform: "uppercase", margin: "0 0 4rem", maxWidth: "22ch" }}>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>Strategy without execution</span>
              <span style={{ color: "#fff" }}> is theory.</span>
              <br /><br />
              <span style={{ color: "rgba(255,255,255,0.25)" }}>Execution without strategy</span>
              <span style={{ color: "#F97316" }}> is noise.</span>
            </h2>
          </Fade>
          <Fade delay={0.18}>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#F97316", flexShrink: 0 }} />
              <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: 0 }}>
                We build both and make them work together.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ 8. CLOSING STATEMENT + CTA ═══════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "14rem clamp(1.5rem,3.75vw,4rem)", textAlign: "center" }}>
        <div style={{ maxWidth: "70rem", margin: "0 auto" }}>
          <Fade>
            <h2 style={{ fontSize: "clamp(3rem, 7vw, 7rem)", fontWeight: 900, letterSpacing: "-0.045em", color: "#fff", lineHeight: 0.9, margin: "0 0 2.5rem", textTransform: "uppercase" }}>
              Revenue infrastructure.<br />Not just content.
            </h2>
            <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "38rem", margin: "0 auto 4rem" }}>
              We partner with operators who want to build something that compounds — not brands that just look good on Instagram.
            </p>
            <Link
              to="/contact"
              style={{ display: "inline-block", backgroundColor: "#F97316", color: "#000", padding: "1.2rem 3.5rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", transition: "background-color 0.25s" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#EA6D0E"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F97316"}
            >
              Start a Project ↗
            </Link>
          </Fade>
        </div>
      </section>

      <Footer />

      <style>{`@media (max-width: 640px) { .proof-strip-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } .proof-strip-grid > div { border-left: none !important; padding-left: 0 !important; } }`}</style>
    </div>
  );
}