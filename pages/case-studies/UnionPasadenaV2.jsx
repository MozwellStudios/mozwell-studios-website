import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";

/* ─── Fade wrapper ──────────────────────────────────────── */
function Fade({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {setVisible(true);obs.disconnect();}
    }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
      ...style
    }}>
      {children}
    </div>);

}

/* ─── Eyebrow label ─────────────────────────────────────── */
const Label = ({ text, dark = false }) =>
<p style={{
  fontSize: "0.65rem",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
  fontWeight: 600,
  margin: "0 0 1.5rem"
}}>{text}</p>;


/* ─── Gallery tile (horizontal scroll) ─────────────────── */
function GalleryTile({ tile }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: `${tile.w}px`,
        height: `${tile.h}px`,
        borderRadius: "0.5rem",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
        scrollSnapAlign: "start",
        position: "relative"
      }}>
      
      {tile.type === "img" ?
      <img src={tile.src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> :

      <iframe
        src={tile.src}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        frameBorder="0"
        title={tile.caption || "gallery"}
        style={{ position: "absolute", top: "-10%", left: "-10%", width: "120%", height: "120%", border: "none", pointerEvents: "none" }} />

      }
      {tile.caption &&
      <div style={{
        position: "absolute", bottom: "0.75rem", left: "0.75rem",
        backgroundColor: "rgba(0,0,0,0.65)", color: "#fff",
        fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase",
        padding: "0.35rem 0.7rem", borderRadius: "2px",
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: "none"
      }}>
          {tile.caption}
        </div>
      }
    </div>);

}

/* ─── Assets ────────────────────────────────────────────── */
const IMG = {
  groupPatio: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/dfb8254d6_0109_GroupShotsPatio-5.jpg",
  groupShots: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/f2c43e6f6_0423_GroupShots_-17.jpg",
  salmon: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/d39a1d1d6_1202_PoachedSalmon-3.jpg",
  salad: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/5c644981e_0622_LittleGemSalad-7.jpg",
  smores: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/de7a028d0_0717_Smores-88.jpg",
  heirloom: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/863711512_0717_HeirloomTomatoandStoneFruit-5.jpg",
  agnolotti: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3e2152173_0717_Agnolotti-59.jpg",
  groupShots99: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/ca1019b26_0717_GroupShots-99.jpg"
};

/* Gallery tiles — photo tiles: landscape 16:9 (480×270) or portrait 3:4 (320×427), video tiles: native 4:5 portrait (320×400) */
const GALLERY_TILES = [
{ type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/bf51df825_0717_GroupShots-54.jpg", w: 480, h: 270 },
{ type: "vimeo", src: "https://player.vimeo.com/video/1182769291?autoplay=1&loop=1&muted=1&background=1&autopause=0", w: 320, h: 400, caption: "Winter Citrus Salad" },
{ type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/5a7af8ae3_0717_CharredOctopus-9.jpg", w: 320, h: 427 },
{ type: "vimeo", src: "https://player.vimeo.com/video/1182769290?autoplay=1&loop=1&muted=1&background=1&autopause=0", w: 320, h: 400, caption: "Red Snapper" },
{ type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/2ce421096_0423_Space_-24.jpg", w: 480, h: 270 },
{ type: "vimeo", src: "https://player.vimeo.com/video/1182769305?autoplay=1&loop=1&muted=1&background=1&autopause=0", w: 320, h: 400, caption: "Cauliflower" },
{ type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/e915162e9_0717_HeirloomTomatoandStoneFruit-6.jpg", w: 320, h: 427 },
{ type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/aac446fa4_0423_GroupShots_-17.jpg", w: 480, h: 270 },
{ type: "vimeo", src: "https://player.vimeo.com/video/1182769292?autoplay=1&loop=1&muted=1&background=1&autopause=0", w: 320, h: 400, caption: "Bluefin Tuna Crudo" },
{ type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/8399a2ec0_0423_Dorade-9.jpg", w: 480, h: 270 },
{ type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c68a92e1f_0423_RoastedMarketCarrots_-7.jpg", w: 320, h: 427 },
{ type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/0a59b1b00_0717_Agnolotti-67.jpg", w: 480, h: 270 },
{ type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/25b25ddc9_0423_WeiserFarmsSproutingCauliflower_-8.jpg", w: 320, h: 427 },
{ type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/f39c980bb_0423_GroupShots_-4.jpg", w: 480, h: 270 }];


const PILLARS = [
{
  num: "01",
  title: "Content System",
  tagline: "Batch-produced. Always-on.",
  body: "Built a repeatable production cadence capturing food, atmosphere, and behind-the-scenes moments. Batch shoots designed to feed months of paid and organic distribution without constant re-production."
},
{
  num: "02",
  title: "Paid Media",
  tagline: "Local diners. Event seekers. Repeat guests.",
  body: "Performance campaigns across Meta and Google targeting high-intent audiences. Creative, audience, and offer dialed against measurable outcomes: leads, reservations, and event inquiries."
},
{
  num: "03",
  title: "Platform Integration",
  tagline: "Every campaign drove directly to a booking.",
  body: "Connected Toast Tables, Instagram, and the reservation flow so paid traffic had a direct path to conversion. Profile visits became bookings. Inquiries became events."
},
{
  num: "04",
  title: "Iteration",
  tagline: "Weekly reads. Real-time adjustments.",
  body: "Weekly performance reviews on what worked, what did not, and what to push harder. Content, audience, and offer all tuned against live results, not assumptions."
}];


/* ════════════════════════════════════════════════════════ */
export default function UnionPasadenaV2() {
  useEffect(() => {document.title = "Union Pasadena — Mozwell Studios";}, []);

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
        <img
          src={IMG.groupShots}
          alt="Union Pasadena"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            opacity: heroImgOpacity,
            transition: "opacity 0.8s ease",
            animation: "upv2HeroZoom 30s ease-in-out infinite alternate"
          }} />
        
        <iframe
          src="https://player.vimeo.com/video/1180636544?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
          loading="eager"
          onLoad={() => {heroTimerRef.current = setTimeout(() => {setHeroVideoOpacity(1);setHeroImgOpacity(0);}, 2000);}}
          allow="autoplay; fullscreen"
          title="Union Pasadena hero"
          style={{
            position: "absolute", top: "-10%", left: "-10%",
            width: "120%", height: "120%",
            border: "none", pointerEvents: "none",
            opacity: heroVideoOpacity, transition: "opacity 0.8s ease", willChange: "opacity"
          }} />
        
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.65) 100%)"
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.5rem, 3.75vw, 4rem) 8rem", width: "100%" }}>
          <Fade>
            <Link to="/work" style={{
              display: "inline-block", marginBottom: "5rem",
              fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", textDecoration: "none"
            }}>
              All Work
            </Link>

            <h1 style={{
              fontSize: "clamp(3rem, 7vw, 9rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.88,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 2rem"
            }}>
              Union<br />Pasadena
            </h1>

            <p style={{
              fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.55,
              margin: "0 0 5rem",
              maxWidth: "38rem"
            }}>
              A performance marketing system built for a neighborhood restaurant in Old Town Pasadena. Content, paid media, and platform integration working toward one outcome: guest traffic.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "2.5rem",
              gap: "2rem"
            }} className="upv2-hero-stats">
              {[
              { value: "400+", label: "Leads Generated" },
              { value: "103K", label: "Content Views / 90 Days" },
              { value: "60+", label: "Event Leads / 60 Days" },
              { value: "$90K–$270K", label: "Est. Event Revenue" }].
              map((s, i) =>
              <div key={i}>
                  <p style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 0.5rem" }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: 0, fontWeight: 600 }}>
                    {s.label}
                  </p>
                </div>
              )}
            </div>
          </Fade>
        </div>
        <style>{`@keyframes upv2HeroZoom { from { transform: scale(1); } to { transform: scale(1.06); } }`}</style>
      </section>

      {/* ══ 2. COMPACT INFO GRID ═════════════════════════════ */}
      <section style={{ backgroundColor: "#000", borderTop: "1px solid #111", borderBottom: "1px solid #111", width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <div style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "4rem clamp(1.5rem, 3.75vw, 4rem)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem 2rem"
        }} className="upv2-info-grid">
          {[
          { label: "Client", value: "Union Pasadena" },
          { label: "Scope", value: "Content, Paid Media, Platform Integration" },
          { label: "Platforms", value: "Meta Ads, Google Ads, Toast Tables" },
          { label: "Focus", value: "Guest acquisition and retention" }].
          map((item, i) =>
          <div key={i} style={{ borderLeft: i > 0 ? "1px solid #1a1a1a" : "none", paddingLeft: i > 0 ? "2rem" : "0" }}>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 0.6rem", fontWeight: 600 }}>
                {item.label}
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.5, margin: 0 }}>
                {item.value}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ══ IMPACT BREAK 1 — 563K+ / 400+ / $180K+ ══════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem clamp(1.5rem, 3.75vw, 4rem)", borderBottom: "1px solid #111", width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0"
            }} className="upv2-impact1-grid">
              {[
              { value: "563K+", label: "Views" },
              { value: "400+", label: "Leads" },
              { value: "$180K+", label: "Event Revenue" }].
              map((s, i) =>
              <div key={i} style={{
                textAlign: "center",
                padding: "0 2rem",
                borderLeft: i > 0 ? "1px solid #1a1a1a" : "none"
              }}>
                  <p style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  lineHeight: 0.9,
                  color: "#F97316",
                  textTransform: "uppercase",
                  margin: "0 0 1rem"
                }}>
                    {s.value}
                  </p>
                  <p style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#fff",
                  margin: 0,
                  fontWeight: 600
                }}>
                    {s.label}
                  </p>
                </div>
              )}
            </div>
            <p style={{
              textAlign: "center",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              margin: "4rem 0 0"
            }}>
              Driven by content and paid amplification
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ 3. OVERVIEW ══════════════════════════════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "10rem clamp(1.5rem, 3.75vw, 4rem)" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Context" />
            <p style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", color: "#222", lineHeight: 1.85, margin: "0 0 2rem" }}>
              Union Pasadena is one of Pasadena's most respected neighborhood restaurants, known for its seasonal menu and strong local following. The restaurant had the reputation. What it needed was a system to convert that awareness into consistent private event bookings and measurable guest traffic.
            </p>
            <p style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", color: "#444", lineHeight: 1.85, margin: "0 0 2rem" }}>
              Mozwell was brought in to build that system. The scope: original content production, performance media across Meta and Google, and platform integration to close the loop between ad and booking.
            </p>
            <p style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", color: "#666", lineHeight: 1.85, margin: 0 }}>
              The partnership is ongoing. The infrastructure compounds.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ 4. FULL-BLEED VISUAL BREAK 1 — ambient video ════ */}
      <div style={{ width: "100%", position: "relative", backgroundColor: "#000", aspectRatio: "16/9", overflow: "hidden" }}>
        <iframe
          src="https://player.vimeo.com/video/1183192282?background=1&autoplay=1&loop=1&muted=1&autopause=0"
          loading="lazy"
          allow="autoplay; fullscreen"
          title="Union Pasadena — Kitchen Sounds"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", pointerEvents: "none" }}
        />
      </div>

      {/* ══ 5. THE CHALLENGE ════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem clamp(1.5rem, 3.75vw, 4rem)" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
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
              Standing out<br />in a crowded<br />market.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, margin: "0 0 1.75rem" }}>
              Old Town Pasadena is a competitive dining market. Strong competitors, heavy foot traffic, and local diners with real options. Reputation alone does not build a private event pipeline or drive consistent reservation volume.
            </p>
            <p style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
              The goal was to build repeat traffic against that competitive backdrop, capture high-value event inquiries through paid media, and do it without relying on word-of-mouth or walk-in volume alone.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ IMPACT BREAK 2 — 60 EVENT LEADS IN 60 DAYS ══════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "10rem clamp(1.5rem, 3.75vw, 4rem)" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <h2 style={{
              fontSize: "clamp(4.5rem, 10vw, 13rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.88,
              color: "#111",
              textTransform: "uppercase",
              margin: "0 0 2.5rem"
            }}>
              60 Event<br />Leads<br />in 60 Days.
            </h2>
            <p style={{
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.4)"
            }}>
              Generated through targeted paid media campaigns
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ 6. 2-VIDEO GRID ══════════════════════════════════ */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.375rem", backgroundColor: "#000" }} className="upv2-img-grid">
        {[
        { src: "https://player.vimeo.com/video/1182769291?autoplay=1&loop=1&muted=1&background=1&autopause=0", caption: "Winter Citrus Salad" },
        { src: "https://player.vimeo.com/video/1182769290?autoplay=1&loop=1&muted=1&background=1&autopause=0", caption: "Red Snapper" }].
        map((v, i) =>
        <div key={i} style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", backgroundColor: "#111" }}>
            <iframe
            src={v.src}
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            frameBorder="0"
            title={v.caption}
            style={{ position: "absolute", top: "-10%", left: "-10%", width: "120%", height: "120%", border: "none", pointerEvents: "none" }} />
          
          </div>
        )}
      </div>

      {/* ══ 7. APPROACH — HEADER ════════════════════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "10rem clamp(1.5rem, 3.75vw, 4rem) 4rem" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Approach" />
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 2rem"
            }}>
              Four pillars.<br />One outcome.
            </h2>
          </Fade>
        </div>
      </section>

      {/* ══ 7b. PILLARS ════════════════════════════════════ */}
      {PILLARS.map((pillar, i) =>
      <section key={i} style={{
        backgroundColor: i % 2 === 0 ? "#f7f7f5" : "#fff",
        borderTop: "1px solid #e0e0dd",
        padding: "6rem clamp(1.5rem, 3.75vw, 4rem)"
      }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }} className="upv2-pillar-row">
            <Fade>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#F97316", fontWeight: 700, margin: "0 0 0.5rem" }}>
                {pillar.num}
              </p>
              <h2 style={{
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
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
              <p style={{ fontSize: "1rem", fontWeight: 600, color: "#333", margin: "0 0 1rem", letterSpacing: "-0.01em" }}>
                {pillar.tagline}
              </p>
              <p style={{ fontSize: "1.0625rem", color: "#555", lineHeight: 1.8, margin: 0 }}>
                {pillar.body}
              </p>
            </Fade>
          </div>
        </section>
      )}

      {/* ══ 8. STRATEGY + TOOLS ══════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem clamp(1.5rem, 3.75vw, 4rem)", borderTop: "1px solid #111" }}>
        <div style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8rem",
          alignItems: "start"
        }} className="upv2-strategy-row">
          <Fade>
            <div>
              <Label text="Strategy" dark />
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                "Content framework: food hero, atmosphere, guest moments",
                "Ad creative built for scroll-stopping performance",
                "Audience targeting: Pasadena radius, foodie interests, event-goers",
                "Weekly optimization against bookings and revenue"].
                map((item, i) =>
                <li key={i} style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.75,
                  padding: "1rem 0",
                  borderBottom: "1px solid #1a1a1a",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start"
                }}>
                    <span style={{ color: "#F97316", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.1em", flexShrink: 0, marginTop: "0.3rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                )}
              </ul>
            </div>
          </Fade>

          <Fade delay={0.1}>
            <div>
              <Label text="Tools" dark />
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Meta Ads Manager", "Google Ads", "Toast Tables", "Instagram Business Suite"].map((tool, i) =>
                <li key={i} style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid #1a1a1a",
                  letterSpacing: "-0.01em"
                }}>
                    {tool}
                  </li>
                )}
              </ul>
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ 9. FULL-BLEED VISUAL BREAK 2 ════════════════════ */}
      <div style={{ width: "100%", overflow: "hidden", backgroundColor: "#111" }}>
        <img src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/0d5315b2b_0717_Heirloom_Tomato_and_Stone_Fruit-5.jpg"

        alt="Union Pasadena dining room"
        loading="lazy"
        style={{
          width: "100%",
          height: "70vh",
          objectFit: "cover",
          objectPosition: "center center",
          display: "block"
        }} />
        
      </div>

      {/* ══ IMPACT BREAK 3 — THE NUMBERS (video bg) ═════════ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "14rem 0", backgroundColor: "#000", width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <iframe
          src="https://player.vimeo.com/video/1180637493?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
          loading="lazy"
          allow="autoplay; fullscreen"
          title="Numbers background video"
          style={{
            position: "absolute", top: "-10%", left: "-10%",
            width: "120%", height: "120%",
            border: "none", pointerEvents: "none"
          }} />
        
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.82) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.5rem, 3.75vw, 4rem)" }}>
          <Fade>
            <p style={{
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              margin: "0 0 2rem",
              fontStyle: "italic"
            }}>
              The numbers behind the work.
            </p>
            <h2 style={{
              fontSize: "clamp(3.5rem, 8vw, 9rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 6rem",
              lineHeight: 0.88
            }}>
              The Numbers.
            </h2>
          </Fade>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.12)"
          }} className="upv2-num-grid">
            {[
            { value: "563K+", label: "Views", sub: "Across Meta and Google" },
            { value: "400+", label: "Leads", sub: "Combined channels" },
            { value: "4,861", label: "Clicks", sub: "Google from $4,263 spend" },
            { value: "$11,353", label: "Ad Spend", sub: "Meta and Google combined" }].
            map((s, i) =>
            <Fade key={i} delay={i * 0.08}>
                <div style={{
                padding: "3rem 2rem 3rem 0",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
                paddingLeft: i > 0 ? "2rem" : 0
              }}>
                  <p style={{ fontSize: "clamp(2.5rem, 4vw, 5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.05em", lineHeight: 1, margin: "0 0 0.75rem" }}>{s.value}</p>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", margin: "0 0 0.4rem", textTransform: "uppercase", letterSpacing: "0.2em" }}>{s.label}</p>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.5 }}>{s.sub}</p>
                </div>
              </Fade>
            )}
          </div>
        </div>
      </section>

      {/* ══ 13. SHOT BY MOZWELL ══════════════════════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.5rem, 3.75vw, 4rem) 4rem" }}>
          <Fade>
            <Label text="Content Production" />
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 1rem"
            }}>
              Shot by<br />Mozwell.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{ fontSize: "1.125rem", color: "#555", lineHeight: 1.8, maxWidth: "42rem", margin: 0 }}>
              Mozwell produced the photography, video, and social content that powers Union Pasadena's digital presence. In the last 90 days, content produced by Mozwell generated over 103,000 views.
            </p>
          </Fade>
        </div>

        {/* Horizontal scroll — all landscape tiles */}
        <div style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "0.75rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingBottom: "1rem",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          alignItems: "center"
        }} className="upv2-scroll-hide">
          {GALLERY_TILES.map((tile, i) => <GalleryTile key={i} tile={tile} />)}
        </div>

        {/* ══ 14. Content stats ══ */}
         <div style={{ maxWidth: "80rem", margin: "5rem auto 0", padding: "0 clamp(1.5rem, 3.75vw, 4rem)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #d8d8d5", textAlign: "center" }} className="upv2-content-stats">
            {[
            { value: "103K+", label: "Content views in 90 days" },
            { value: "65%", label: "Views from non-followers" },
            { value: "29.6%", label: "Profile activity increase QoQ" }].
            map((s, i) =>
            <Fade key={i} delay={i * 0.1}>
                <div style={{ padding: "3rem 1.5rem", borderRight: i < 2 ? "1px solid #d8d8d5" : "none" }}>
                  <p style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.045em", lineHeight: 1, margin: "0 0 0.75rem" }}>{s.value}</p>
                  <p style={{ fontSize: "0.75rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.12em", margin: 0 }}>{s.label}</p>
                </div>
              </Fade>
            )}
          </div>
        </div>
        <style>{`.upv2-scroll-hide::-webkit-scrollbar { display: none; }`}</style>
      </section>

      {/* ══ 15. FINAL REFLECTION ════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem clamp(1.5rem, 3.75vw, 4rem)" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Reflection" dark />
            <p style={{
              fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.85,
              margin: "0 0 2rem"
            }}>
              Union Pasadena was not a one-off content moment. It was a system: content engine, paid media, and platform integration working against the same outcome, guest traffic.
            </p>
            <p style={{
              fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.85,
              margin: 0
            }}>
              The work compounds because the infrastructure is built to run, not just to launch. Every shoot feeds the next campaign. Every campaign tunes the next audience. Every booking informs the next event push.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ IMPACT BREAK 4 — LEADS. EVENTS. VISIBILITY. ═════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "10rem clamp(1.5rem, 3.75vw, 4rem)" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            {["Leads.", "Events.", "Visibility."].map((word, i) =>
            <p key={i} style={{
              fontSize: "clamp(5rem, 13vw, 16rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              lineHeight: 0.88,
              color: "#111",
              textTransform: "uppercase",
              margin: 0
            }}>
                {word}
              </p>
            )}
          </Fade>
        </div>
      </section>

      {/* ══ 17. NEXT PROJECT CTA ════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "10rem clamp(1.5rem, 3.75vw, 4rem)" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              maxWidth: "38rem",
              margin: "0 0 4rem"
            }}>
              Union Pasadena now has a proven marketing system that drives consistent private event bookings, captures reservation intent through search, and maintains strong brand visibility through content and social media.
            </p>
          </Fade>
          <Fade delay={0.1}>
            <Link
              to="/work"
              style={{
                display: "inline-block",
                backgroundColor: "#fff",
                color: "#000",
                padding: "1.1rem 2.75rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background-color 0.25s, color 0.25s"
              }}
              onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#F97316";e.currentTarget.style.color = "#000";}}
              onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = "#fff";e.currentTarget.style.color = "#000";}}>
              
              View All Work
            </Link>
          </Fade>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .upv2-info-grid { grid-template-columns: 1fr 1fr !important; }
          .upv2-pillar-row { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .upv2-strategy-row { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .upv2-impact1-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
        @media (max-width: 768px) {
          .upv2-hero-stats { grid-template-columns: 1fr 1fr !important; }
          .upv2-num-grid { grid-template-columns: 1fr 1fr !important; }
          .upv2-content-stats { grid-template-columns: 1fr !important; }
          .upv2-img-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .upv2-info-grid { grid-template-columns: 1fr !important; }
          .upv2-num-grid { grid-template-columns: 1fr !important; }
          .upv2-impact1-grid { gap: 2.5rem !important; }
        }
      `}</style>
    </div>);

}