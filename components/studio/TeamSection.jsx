import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const members = [
  {
    name: "EDWIN GUEMBES",
    role: "FOUNDER / CREATIVE DIRECTOR",
    headline: "Building brands through content, systems, and execution.",
    body: [
      "Edwin leads Mozwell Studios at the intersection of brand, media, and growth. With a background spanning hospitality, creative direction, and operations, he has built and scaled multiple ventures including Mozwell Claremont and FoundrSpace.",
      "His work blends creative instinct with systems thinking, building brands that don't just look modern, but perform in real environments. At Mozwell, he oversees creative direction, brand strategy, and growth systems, ensuring every project connects storytelling with measurable business outcomes.",
    ],
    specialties: ["Creative Direction", "Brand Systems", "Growth Strategy", "Hospitality & Experience"],
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/26e5babff_image.png",
    imageLeft: true,
    bg: "#ffffff",
  },
  {
    name: "LYKA",
    role: "CONTENT & PRODUCTION SYSTEMS",
    headline: "Turning content into consistent output.",
    body: [
      "Lyka leads content execution and production systems at Mozwell Studios. She has been part of Mozwell since the beginning, serving as a central hub across projects, from editing and publishing to managing content pipelines.",
      "Her background includes portrait photography, podcast production, and work with the Hollywood Chamber of Commerce covering Walk of Fame events. At Mozwell, she transforms production days into scalable content systems that keep brands active and visible across platforms.",
    ],
    specialties: ["Content Systems", "Editing", "Publishing", "Production Coordination"],
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/b3a90c269_image.png",
    imageLeft: false,
    bg: "#f7f7f5",
  },
  {
    name: "CHANG GAO",
    role: "VISUAL DESIGNER",
    headline: "Design systems that scale across environments.",
    body: [
      "Chang is a multidisciplinary designer focused on brand identity, typography, and systems-driven design. Her work spans cultural, nonprofit, and technology-driven projects, including identity systems for TypoLA, LAWA, and experimental digital platforms like Backyards.",
      "Her design approach blends conceptual rigor with practical execution across digital, physical, and motion environments. She has been recognized by TDC Awards, Young Ones, and ArtCenter College of Design. At Mozwell, Chang builds brand systems that are both visually striking and operationally scalable.",
    ],
    specialties: ["Brand Identity", "Typography", "Design Systems"],
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/b5b572f89_image.png",
    imageLeft: true,
    bg: "#efefef",
  },
  {
    name: "EMIL MAGNATE",
    role: "PAID MEDIA & PERFORMANCE",
    headline: "Turning media spend into measurable growth.",
    body: [
      "Emil leads paid media and performance strategy at Mozwell Studios, managing campaigns across Google, Meta, LinkedIn, and TikTok. With over a decade of experience in media buying, he has worked across industries including e-commerce, hospitality, finance, events, and SaaS.",
      "At Mozwell, he connects data, creative, and strategy, ensuring every campaign is optimized for efficiency and scale.",
    ],
    specialties: ["Google Ads", "Meta Ads", "Performance Strategy", "Data & Optimization"],
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/7b8dd6330_image.png",
    imageLeft: false,
    bg: "#ffffff",
  },
  {
    name: "MIRANDA DAVIS",
    role: "SEO STRATEGIST",
    headline: "Search visibility that compounds over time.",
    body: [
      "Miranda leads SEO strategy at Mozwell Studios, helping brands turn search into a consistent, high-intent growth channel. With over 11 years of experience and 300+ businesses supported, she specializes in local SEO, technical optimization, and content strategy.",
      "Her proprietary approach blends structured SEO systems with real-world business outcomes. At Mozwell, she builds organic growth engines that complement paid media and content, creating long-term visibility and demand.",
    ],
    specialties: ["Local SEO", "Technical SEO", "Content Strategy"],
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/5d701687b_image.png",
    imageLeft: true,
    bg: "#f7f7f5",
  },
  {
    name: "ANDREW PETERSON",
    role: "DIRECTOR / VIDEO PRODUCTION",
    headline: "Cinematic storytelling built for modern platforms.",
    body: [
      "Andrew leads video production at Mozwell Studios, bringing a cinematic approach to brand storytelling across digital and physical spaces. His work spans culture, music, and commercial production, including projects with Travis Scott, Nike, DJ Khaled, Sheck Wes, POST HTX, Toyota Center, and Wish.",
      "At Mozwell, he builds scalable content systems designed to perform across social media, advertising, and brand campaigns.",
    ],
    specialties: ["Cinematic Video", "Content Production", "Creative Direction"],
    photo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/bf809a353_image.png",
    imageLeft: false,
    bg: "#efefef",
    clients: ["Nike", "Travis Scott", "DJ Khaled", "Sheck Wes", "POST HTX", "Toyota Center", "Wish"],
  },
];

function useFade(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, y = 40 }) {
  const [ref, visible] = useFade(0.06);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function MemberSection({ m, index }) {
  const [imgHovered, setImgHovered] = useState(false);
  const [nameHovered, setNameHovered] = useState(false);

  const textColor = m.bg === "#ffffff" || m.bg === "#f7f7f5" || m.bg === "#efefef" ? "#111" : "#fff";
  const mutedColor = m.bg === "#ffffff" || m.bg === "#f7f7f5" || m.bg === "#efefef" ? "#666" : "rgba(255,255,255,0.55)";

  const imageBlock = (
    <div
      onMouseEnter={() => setImgHovered(true)}
      onMouseLeave={() => setImgHovered(false)}
      style={{
        flex: "0 0 45%",
        aspectRatio: "3 / 4",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
        position: "relative",
      }}
    >
      {m.photo ? (
        <img
          src={m.photo}
          alt={m.name}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", display: "block",
            transform: imgHovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.9s cubic-bezier(0.25,0.1,0.25,1)",
          }}
        />
      ) : (
        <div style={{
          width: "100%", height: "100%",
          backgroundColor: "#1a1a1a",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#333", textTransform: "uppercase" }}>Photo Coming Soon</span>
        </div>
      )}
    </div>
  );

  const textBlock = (
    <div style={{
      flex: "0 0 50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: m.imageLeft ? "0 0 0 5rem" : "0 5rem 0 0",
    }}>
      <FadeIn delay={0.1}>
        <p style={{
          fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase",
          color: "#F97316", fontWeight: 700, margin: "0 0 1.5rem",
        }}>
          {m.role}
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <h2
          onMouseEnter={() => setNameHovered(true)}
          onMouseLeave={() => setNameHovered(false)}
          style={{
            fontSize: "clamp(3rem, 6vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            color: nameHovered ? "#F97316" : textColor,
            textTransform: "uppercase",
            margin: "0 0 2.5rem",
            transition: "color 0.3s, transform 0.3s",
            transform: nameHovered ? "translateX(6px)" : "translateX(0)",
            cursor: "default",
          }}
        >
          {m.name}
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h3 style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
          fontWeight: 700,
          color: textColor,
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
          margin: "0 0 2rem",
        }}>
          {m.headline}
        </h3>
      </FadeIn>
      <FadeIn delay={0.25}>
        <div style={{ marginBottom: "2.5rem" }}>
          {m.body.map((p, i) => (
            <p key={i} style={{
              fontSize: "1.125rem",
              color: mutedColor,
              lineHeight: 1.75,
              margin: i < m.body.length - 1 ? "0 0 1.25rem" : 0,
            }}>
              {p}
            </p>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {m.specialties.map((s) => (
            <span key={s} style={{
              fontSize: "0.68rem",
              letterSpacing: "0.08em",
              color: mutedColor,
              backgroundColor: m.bg === "#ffffff" ? "#f0f0ee" : m.bg === "#f7f7f5" ? "#e8e8e6" : m.bg === "#efefef" ? "#e2e2e0" : "#1a1a1a",
              padding: "0.4rem 0.9rem",
              fontWeight: 500,
            }}>
              {s}
            </span>
          ))}
        </div>
      </FadeIn>
    </div>
  );

  return (
    <section style={{ backgroundColor: m.bg, padding: "10rem 5rem" }} className="member-section">
      <div style={{
        maxWidth: "100rem",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0",
        justifyContent: "space-between",
      }} className="member-inner">
        {m.imageLeft ? imageBlock : textBlock}
        {m.imageLeft ? textBlock : imageBlock}
      </div>

      {m.clients && (
        <div style={{ maxWidth: "100rem", margin: "6rem auto 0", borderTop: `1px solid ${m.bg === "#efefef" ? "#ddd" : "#e5e5e5"}`, paddingTop: "3rem" }}>
          <p style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#bbb", margin: "0 0 1.5rem" }}>Past Collaborations</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", alignItems: "center" }}>
            {m.clients.map((c) => (
              <span key={c} style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", fontWeight: 600 }}>{c}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function TeamSection() {
  return (
    <>
      {/* INTRO */}
      <section style={{ backgroundColor: "#fff", padding: "14rem 5rem 10rem" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#bbb", margin: "0 0 3rem", fontWeight: 600 }}>
              The Studio
            </p>
            <h1 style={{
              fontSize: "clamp(4rem, 10vw, 11rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.87,
              color: "#111",
              textTransform: "uppercase",
              margin: "0 0 3rem",
            }}>
              THE STUDIO.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p style={{
              fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
              fontWeight: 300,
              color: "#777",
              lineHeight: 1.6,
              maxWidth: "42rem",
              margin: 0,
            }}>
              A focused team across media, growth, and systems. Built in hospitality. Proven across modern brands.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      {members.map((m, i) => (
        <MemberSection key={i} m={m} index={i} />
      ))}

      {/* CLOSING */}
      <section style={{ backgroundColor: "#000", padding: "14rem 5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "70rem", margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              color: "#fff",
              lineHeight: 0.9,
              margin: "0 0 3rem",
              textTransform: "uppercase",
            }}>
              A studio built<br />for execution.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "38rem", margin: "0 auto 4rem" }}>
              We operate as a focused team across content, media, and systems. Built to support modern brands from concept to scale.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#F97316",
                color: "#000",
                padding: "1.2rem 3.5rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background-color 0.25s",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#E0620E"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F97316"}
            >
              Start a Project
            </Link>
          </FadeIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .member-inner { flex-direction: column !important; }
          .member-inner > div { flex: 1 1 100% !important; padding: 0 !important; }
          .member-inner > div:first-child { margin-bottom: 3rem; }
          .member-section { padding: 6rem 2rem !important; }
        }
      `}</style>
    </>
  );
}