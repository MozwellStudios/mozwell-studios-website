import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";

/* ─── Assets ────────────────────────────────────────────── */
const VIMEO = {
  hero: "https://player.vimeo.com/video/1180637923?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479",
  cocktail: "https://player.vimeo.com/video/1180637668?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479",
  launch: "https://player.vimeo.com/video/1180637163?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479",
  nightlife: "https://player.vimeo.com/video/1180637162?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479",
  sotolZoom: "https://player.vimeo.com/video/1182788776?autoplay=1&loop=1&muted=1&background=1&autopause=0",
  sotolFull: "https://player.vimeo.com/video/1182788775?autoplay=1&loop=1&muted=1&background=1&autopause=0",
  empanada: "https://player.vimeo.com/video/1180637288?autoplay=1&loop=1&muted=1&background=1&autopause=0"
};

const IMG = {
  bar: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/82d28c8f0_MaChaCha-14.jpg",
  branding: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c4ab44a14_MCB-Branding-Board-31.png",
  matchbox: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/12ba9570d_MCB-Matchbox-27.png",
  logo: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/d920169c3_MCB-Logo-25.png",
  cards: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3c089583e_MCB-Cocktail-Cards-30.png",
  igstory: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/2a32e6ef7_Mozwell-IG-Story.jpg"
};

/* ─── Fade wrapper ──────────────────────────────────────── */
function Fade({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {setVisible(true);obs.disconnect();}
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
      ...style
    }}>
      {children}
    </div>);

}

/* ─── Eyebrow label ─────────────────────────────────────── */
const Label = ({ text, dark = false }) =>
<p style={{
  fontSize: "0.62rem",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: dark ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.38)",
  fontWeight: 600,
  margin: "0 0 1.75rem"
}}>{text}</p>;


/* ─── Full-bleed video background helper ────────────────── */
function VideoBg({ src, title }) {
  return (
    <iframe
      src={src}
      loading="lazy"
      allow="autoplay; fullscreen"
      title={title}
      style={{
        position: "absolute",
        top: "-10%", left: "-10%",
        width: "120%", height: "120%",
        border: "none",
        pointerEvents: "none"
      }} />);


}

/* ════════════════════════════════════════════════════════ */
export default function MozwellClaremontV2() {
  useEffect(() => {document.title = "Mozwell Claremont — Built From Scratch — Mozwell Studios";}, []);

  const [heroVideoOpacity, setHeroVideoOpacity] = useState(0);
  const [heroImgOpacity, setHeroImgOpacity] = useState(0.35);
  const heroTimerRef = useRef(null);
  useEffect(() => () => clearTimeout(heroTimerRef.current), []);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        backgroundColor: "#000"
      }}>
        {/* Fallback image */}
        <img
          src={IMG.bar}
          alt="Mozwell Claremont"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            opacity: heroImgOpacity,
            transition: "opacity 0.8s ease"
          }} />
        
        {/* Ambient hero video */}
        <iframe
          src={VIMEO.hero}
          loading="eager"
          allow="autoplay; fullscreen"
          title="Mozwell Claremont hero"
          onLoad={() => {heroTimerRef.current = setTimeout(() => {setHeroVideoOpacity(1);setHeroImgOpacity(0);}, 2000);}}
          style={{
            position: "absolute", top: "-10%", left: "-10%",
            width: "120%", height: "120%",
            border: "none", pointerEvents: "none",
            opacity: heroVideoOpacity, transition: "opacity 0.8s ease", willChange: "opacity"
          }} />
        
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.72) 100%)"
        }} />

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 1, padding: "0 4rem 8rem", maxWidth: "80rem", margin: "0 auto", width: "100%" }}>
          <Fade>
            <Link to="/work" style={{
              display: "inline-block", marginBottom: "5rem",
              fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.38)", textDecoration: "none"
            }}>
              All Work
            </Link>

            <h1 style={{
              fontSize: "clamp(3.5rem, 8vw, 9rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.87,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 2rem"
            }}>
              Mozwell<br />Claremont
            </h1>

            <p style={{
              fontSize: "clamp(1.1rem, 1.7vw, 1.4rem)",
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.5,
              margin: "0 0 5rem",
              maxWidth: "36rem"
            }}>
              Built from the ground up. Brand, space, and growth system.
            </p>

            {/* Hero metrics strip */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "2.5rem",
              gap: "2rem"
            }} className="mcbv2-hero-stats">
              {[
              { value: "$1.5M+", label: "First-Year Revenue" },
              { value: "6,500+", label: "Loyalty Subscribers" },
              { value: "1.43M", label: "Google Impressions" },
              { value: "30+", label: "Months of Growth" }].
              map((s, i) =>
              <div key={i}>
                  <p style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 0.5rem" }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.48)", margin: 0, fontWeight: 600 }}>
                    {s.label}
                  </p>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ IMPACT BREAK 1 — $1.5M / YEAR ONE ═══════════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem 4rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "clamp(6rem, 16vw, 18rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              lineHeight: 0.88,
              color: "#F97316",
              textTransform: "uppercase",
              margin: 0
            }}>
              $1.5M+
            </p>
            <p style={{
              fontSize: "clamp(6rem, 16vw, 18rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              lineHeight: 0.88,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 3rem"
            }}>
              YEAR ONE.
            </p>
            <p style={{
              fontSize: "0.68rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.38)",
              margin: 0
            }}>
              Built, launched, and scaled from scratch.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ 3. OVERVIEW ══════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "10rem 4rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Overview" />
            <p style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", color: "#222", lineHeight: 1.85, margin: "0 0 2rem" }}>
              Mozwell Claremont is not a client engagement. We conceived it, funded it, built it, and operate it. The brand, the interior, the marketing system, the content engine, the loyalty program. All of it.
            </p>
            <p style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", color: "#444", lineHeight: 1.85, margin: "0 0 2rem" }}>
              We opened in Claremont Village in 2024 as a cocktail-forward neighborhood bar. From day one, every system we apply to client work ran in-house first. The results are the receipts.
            </p>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: "#666", lineHeight: 1.85, margin: 0 }}>
              This is what we mean when we say operator-led. Not advisory. Not theoretical. We are in the room.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ 4. FULL-BLEED VISUAL BREAK ═══════════════════════ */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden", backgroundColor: "#000", minHeight: "70vh" }}>
        <VideoBg src={VIMEO.cocktail} title="Cocktail atmosphere" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.18)" }} />
      </div>

      {/* ══ 5. CHALLENGE ═════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem 4rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Challenge" dark />
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 0.92,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 3rem"
            }}>
              Brand, ops,<br />and growth.<br />Simultaneously.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.62)", lineHeight: 1.85, margin: "0 0 1.75rem" }}>
              Claremont Village is a dense, walkable dining corridor with strong independent competition. Standing out required more than a great concept. It required a brand positioned to feel like it had always been there, on day one.
            </p>
            <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.42)", lineHeight: 1.85, margin: 0 }}>
              We were building the identity, writing the brand story, designing the interior, producing content, running paid media, and serving guests at the same time. No runway, no agency hand-off. All in.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ IMPACT BREAK 2 — FROM ZERO TO FULL ROOMS ════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "10rem 4rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "clamp(5.5rem, 13vw, 16rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              lineHeight: 0.88,
              color: "#111",
              textTransform: "uppercase",
              margin: 0
            }}>
              FROM ZERO
            </p>
            <p style={{
              fontSize: "clamp(5.5rem, 13vw, 16rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              lineHeight: 0.88,
              color: "#111",
              textTransform: "uppercase",
              margin: "0 0 3rem"
            }}>
              TO FULL ROOMS.
            </p>
            <p style={{
              fontSize: "0.68rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.4)",
              margin: 0
            }}>
              Built demand before and after opening.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ 2-UP LANDSCAPE VIDEO GRID ════════════════════════ */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", backgroundColor: "#000" }} className="mcbv2-2up">
        {[VIMEO.launch, VIMEO.nightlife].map((src, i) =>
        <div key={i} style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", backgroundColor: "#111" }}>
            <VideoBg src={src} title={`Claremont moment ${i + 1}`} />
          </div>
        )}
      </div>

      {/* ══ 7. APPROACH — 4 PILLARS ══════════════════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "10rem 4rem 4rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Approach" />
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: 0
            }}>
              Four systems.<br />One venue.
            </h2>
          </Fade>
        </div>
      </section>

      {[
      {
        num: "01",
        title: "Brand",
        body: "Positioning, identity, and narrative built to feel like a neighborhood staple from day one. Name, mark, voice, and visual system. Designed to age in, not stand out."
      },
      {
        num: "02",
        title: "Content",
        body: "Production cadence capturing cocktails, food, and atmosphere in batch shoots that feed months of paid and organic distribution. No constant re-production. The system runs."
      },
      {
        num: "03",
        title: "Paid Media",
        body: "Meta, Google, and local targeting campaigns driving reservations, happy hour, and event attendance. Scaled from $50/day to $200+/day over 30 months across three platforms."
      },
      {
        num: "04",
        title: "Systems",
        body: "Loyalty program, CRM, booking integration, and content library operating as one growth engine. Every layer connected. Every guest touchpoint tracked."
      }].
      map((pillar, i) =>
      <section key={i} style={{
        backgroundColor: i % 2 === 0 ? "#f7f7f5" : "#fff",
        borderTop: "1px solid #e0e0dd",
        padding: "6rem 4rem"
      }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }} className="mcbv2-pillar-row">
            <Fade>
              <p style={{ fontSize: "0.62rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#F97316", fontWeight: 700, margin: "0 0 0.75rem" }}>
                {pillar.num}
              </p>
              <h2 style={{
              fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: 0
            }}>
                {pillar.title}
              </h2>
            </Fade>
            <Fade delay={0.08}>
              <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "#555", lineHeight: 1.8, margin: 0 }}>
                {pillar.body}
              </p>
            </Fade>
          </div>
        </section>
      )}

      {/* ══ 3-UP LANDSCAPE PHOTO GRID ════════════════════════ */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.4rem", backgroundColor: "#000", borderTop: "1px solid #000" }} className="mcbv2-3up mcbv2-3up-scroll">
        {[IMG.branding, IMG.matchbox, IMG.cards].map((src, i) =>
        <div key={i} style={{ aspectRatio: "4/3", overflow: "hidden", backgroundColor: "#111" }}>
            <img src={src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        )}
      </div>

      {/* ══ IMPACT BREAK 3 — THE NUMBERS (cocktail video bg) ═ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "14rem 0", backgroundColor: "#000" }}>
        <VideoBg src={VIMEO.hero} title="Numbers background" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.88) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "72rem", margin: "0 auto", padding: "0 4rem" }}>
          <Fade>
            <h2 style={{
              fontSize: "clamp(3.5rem, 8vw, 9rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 6rem",
              lineHeight: 0.88
            }}>
              THE NUMBERS.
            </h2>
          </Fade>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.12)"
          }} className="mcbv2-num-grid">
            {[
            { value: "$1.5M+", label: "Year One Revenue", sub: "Built, operated, and scaled in-house" },
            { value: "6.7x", label: "Growth in Campaign Reach", sub: "Multi-channel across Google, Meta, TikTok" },
            { value: "6,500+", label: "Loyalty Subscribers", sub: "Recurring guest relationships acquired" }].
            map((s, i) =>
            <Fade key={i} delay={i * 0.08}>
                <div style={{
                padding: "3rem 2rem 3rem 0",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
                paddingLeft: i > 0 ? "2rem" : 0
              }}>
                  <p style={{ fontSize: "clamp(2rem, 3.5vw, 4.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.05em", lineHeight: 1, margin: "0 0 0.75rem" }}>{s.value}</p>
                  <p style={{ fontSize: "0.65rem", fontWeight: 700, color: "#fff", margin: "0 0 0.4rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>{s.label}</p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.5 }}>{s.sub}</p>
                </div>
              </Fade>
            )}
          </div>

          {/* Supporting lines */}
          <Fade delay={0.2}>
            <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", margin: 0 }}>
                Multi-channel engine across Google, Meta, and TikTok.
              </p>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", margin: 0 }}>
                Weekly campaigns driving consistent foot traffic and events.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ CONTENT ENGINE SECTION ═══════════════════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "10rem 4rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <Fade>
            <Label text="The Engine" />
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 0.92,
              color: "#111",
              textTransform: "uppercase",
              margin: "0 0 2.5rem"
            }}>
              Content as<br />infrastructure.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", color: "#555", lineHeight: 1.85, margin: 0 }}>
              We batch-shoot food, cocktails, atmosphere, and events in structured production days. Each session feeds 60 to 90 days of organic posting, paid creative, and email content simultaneously. The result: consistent brand presence without constant production overhead. It is the same system we deploy for every hospitality client.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ FULL-WIDTH MOMENT ════════════════════════════════ */}
      <div style={{ width: "100%", overflow: "hidden", backgroundColor: "#000" }}>
        <img src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/e0996cf67_Cocktail_Shoot_-7.jpg"

        alt="Mozwell Claremont bar"
        loading="lazy"
        style={{ width: "100%", height: "70vh", objectFit: "cover", objectPosition: "center 30%", display: "block" }} />
        
      </div>

      {/* ══ VIDEO GRID — REELS-STYLE ══════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "8rem 4rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Content Library" dark />
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#fff",
              lineHeight: 0.95,
              textTransform: "uppercase",
              margin: "0 0 4rem"
            }}>
              A living content system.
            </h2>
          </Fade>

          {/* Masonry: outer = break-avoid column item (no fixed height), inner = aspect-ratio box */}
          <div className="mcbv2-content-masonry">
            {[
              { src: VIMEO.cocktail,  ar: "4/5" },
              { src: VIMEO.empanada,  ar: "4/5" },
              { src: "https://player.vimeo.com/video/1183147801?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "4/3" },
              { src: "https://player.vimeo.com/video/1183148181?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "9/16" },
              { src: VIMEO.hero,      ar: "4/5" },
              { src: VIMEO.nightlife, ar: "4/5" },
              { src: VIMEO.launch,    ar: "16/9" },
              { src: VIMEO.sotolZoom, ar: "4/3" },
              { src: VIMEO.sotolFull, ar: "16/9" },
            ].map((v, i) => (
              <div key={i} style={{ breakInside: "avoid", marginBottom: "0.5rem" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: v.ar, overflow: "hidden" }}>
                  <iframe
                    src={v.src}
                    loading="lazy"
                    allow="autoplay; fullscreen"
                    title={`Claremont clip ${i}`}
                    frameBorder="0"
                    style={{
                      position: "absolute",
                      top: 0, left: 0,
                      width: "100%", height: "100%",
                      border: 0,
                      pointerEvents: "none",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ IMPACT BREAK 4 — BUILT. NOT MARKETED. ════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "10rem 4rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "clamp(5.5rem, 13vw, 16rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              lineHeight: 0.88,
              color: "#111",
              textTransform: "uppercase",
              margin: 0
            }}>
              BUILT.
            </p>
            <p style={{
              fontSize: "clamp(5.5rem, 13vw, 16rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              lineHeight: 0.88,
              color: "#111",
              textTransform: "uppercase",
              margin: "0 0 3rem"
            }}>
              NOT MARKETED.
            </p>
            <p style={{
              fontSize: "0.68rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.4)",
              margin: 0
            }}>
              Operator-led execution across every layer.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ FINAL REFLECTION ═════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem 4rem" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Reflection" dark />
            <p style={{
              fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.85,
              margin: 0
            }}>
              Mozwell Claremont is proof that we do not guess at brand, content, or growth. We build them, operate them, and prove them in the room. Every system we sell is one we have already run ourselves. That is the difference between an agency and an operator.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem 4rem", borderTop: "1px solid #111", textAlign: "center" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <h2 style={{
              fontSize: "clamp(2.5rem, 7vw, 7rem)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 0.9,
              margin: "0 0 4rem"
            }}>
              READY TO BUILD<br />SOMETHING<br />REMARKABLE?
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <a
              href="https://form.typeform.com/to/TNZNwF?typeform-source=mozwellstudios.typeform.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#F97316",
                color: "#000",
                padding: "1.2rem 3.5rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background-color 0.25s"
              }}
              onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#EA6D0E";}}
              onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = "#F97316";}}>
              
              Start the Conversation
            </a>
          </Fade>
        </div>
      </section>

      <Footer />

      <style>{`
        .mcbv2-content-masonry { columns: 4; column-gap: 0.5rem; }
        @media (max-width: 900px) {
          .mcbv2-pillar-row { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .mcbv2-3up { grid-template-columns: 1fr 1fr !important; }
          .mcbv2-content-masonry { columns: 3; }
        }
        @media (max-width: 768px) {
          .mcbv2-hero-stats { grid-template-columns: 1fr 1fr !important; }
          .mcbv2-num-grid { grid-template-columns: 1fr 1fr !important; }
          .mcbv2-2up { grid-template-columns: 1fr !important; }
          .mcbv2-content-masonry { columns: 2; }
        }
        @media (max-width: 500px) {
          .mcbv2-num-grid { grid-template-columns: 1fr !important; }
          .mcbv2-3up { grid-template-columns: 1fr !important; }
          .mcbv2-content-masonry { columns: 2; }
        }
        @media (max-width: 768px) {
          .mcbv2-3up-scroll {
            display: flex !important;
            overflow-x: auto;
            gap: 0.4rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .mcbv2-3up-scroll > div {
            flex: 0 0 80vw;
            scroll-snap-align: start;
          }
        }
      `}</style>
    </div>);

}