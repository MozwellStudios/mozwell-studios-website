import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";

function Fade({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.04 });
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

/* ── Category label ──────────────────────────────────────── */
const CategoryLabel = ({ text }) => (
  <div style={{ padding: "4rem clamp(1.5rem,4vw,4rem) 0", borderTop: "1px solid #111" }}>
    <p style={{
      fontSize: "0.56rem",
      letterSpacing: "0.36em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.25)",
      fontWeight: 600,
      margin: "0 0 1.25rem",
    }}>{text}</p>
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: "0" }} />
  </div>
);

/* ── Core overlay tile — image dominant, metric headline ── */
function OverlayTile({ slug, image, name, metric, descriptor, aspectRatio = "4/3", overlayStrong = false, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      to={slug}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ textDecoration: "none", display: "block", position: "relative", overflow: "hidden", aspectRatio: aspectRatio === "unset" ? undefined : aspectRatio, backgroundColor: "#0a0a0a", minHeight: aspectRatio === "unset" ? "100%" : undefined, flex: aspectRatio === "unset" ? 1 : undefined, ...style }}
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
          transform: hov ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.6s ease-out",
        }}
      />
      {/* Scrim — darkens more on hover; overlayStrong forces heavier base overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: hov
          ? "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.3) 100%)"
          : overlayStrong
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.25) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 100%)",
        transition: "background 0.4s ease-out",
      }} />
      {/* Text overlay */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "clamp(1.5rem,3vw,2.5rem)",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s ease-out",
      }}>
        {/* Metric — the headline */}
        <p style={{
          fontSize: "clamp(0.75rem, 1.2vw, 1rem)",
          fontWeight: 900,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: hov ? "#F97316" : "rgba(249,115,22,0.7)",
          margin: "0 0 0.5rem",
          lineHeight: 1,
          transition: "color 0.3s ease-out",
        }}>
          {metric}
        </p>
        {/* Project name — secondary */}
        <h2 style={{
          fontSize: "clamp(1.1rem, 2vw, 1.65rem)",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "-0.025em",
          textTransform: "uppercase",
          lineHeight: 1,
          margin: "0 0 0.35rem",
        }}>
          {name}
        </h2>
        {descriptor && (
          <p style={{
            fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)", margin: 0,
          }}>
            {descriptor}
          </p>
        )}
        <div style={{ marginTop: "0.85rem", opacity: hov ? 1 : 0, transition: "opacity 0.25s ease-out" }}>
          <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>
            View Case Study ↗
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── POST HTX video tile ────────────────────────────────── */
function PostHTXStrip() {
  const [hov, setHov] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <Link
      to="/work/post-htx"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        textDecoration: "none", display: "block", position: "relative",
        overflow: "hidden", flex: 1, minHeight: "220px",
        borderTop: "1px solid #111", backgroundColor: "#000",
      }}
    >
      {/* Fallback image */}
      <img
        src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/933e5675e_XAtrium-posthtx.jpg"
        alt="POST HTX"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
          opacity: videoLoaded ? 0 : 0.6, transition: "opacity 0.8s ease",
        }}
      />
      {/* Vimeo background */}
      <iframe
        src="https://player.vimeo.com/video/688986798?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
        loading="lazy"
        allow="autoplay; fullscreen"
        title="POST HTX"
        onLoad={() => { timerRef.current = setTimeout(() => setVideoLoaded(true), 2000); }}
        style={{
          position: "absolute", top: "-10%", left: "-10%",
          width: "120%", height: "120%", border: "none", pointerEvents: "none",
          opacity: videoLoaded ? 0.65 : 0, transition: "opacity 0.8s ease",
        }}
      />
      {/* Scrim */}
      <div style={{
        position: "absolute", inset: 0,
        background: hov
          ? "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 100%)"
          : "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 100%)",
        transition: "background 0.4s ease",
      }} />
      {/* Text overlay */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "clamp(1.5rem,3vw,2rem)",
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        transform: hov ? "translateY(-4px)" : "translateY(0)", transition: "transform 0.3s ease",
      }}>
        <div>
          <p style={{ fontSize: "0.52rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 0.35rem" }}>
            Launch Strategy · Sponsorship
          </p>
          <h3 style={{ fontSize: "clamp(1rem, 1.8vw, 1.35rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.025em", textTransform: "uppercase", margin: 0 }}>
            POST HTX
          </h3>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "clamp(1.1rem,2vw,1.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.03em", margin: "0 0 0.2rem", lineHeight: 1 }}>
            $100K+
          </p>
          <p style={{ fontSize: "0.5rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            Sponsorship Revenue
          </p>
        </div>
      </div>
    </Link>
  );
}

/* ── KPay brand tile ────────────────────────────────────── */
function KPayTile() {
  const [hov, setHov] = useState(false);
  return (
    <Link
      to="/work/kpay"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        textDecoration: "none", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: "3.5rem",
        backgroundColor: hov ? "#0e1420" : "#0a0d14",
        aspectRatio: "4/3", position: "relative", overflow: "hidden",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: "background-color 0.35s, transform 0.3s ease-out",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 20%, rgba(41,117,219,0.18) 0%, rgba(0,0,0,0) 65%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Metric headline */}
        <p style={{
          fontSize: "clamp(0.75rem, 1.2vw, 1rem)", fontWeight: 900, letterSpacing: "0.06em",
          textTransform: "uppercase", color: hov ? "#2975DB" : "rgba(41,117,219,0.7)",
          margin: "0 0 1.5rem", transition: "color 0.3s",
        }}>
          Complete Rebrand
        </p>
        <img
          src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/4736f2b78_KPay-Logo-BlueWhite-TransparentBG.png"
          alt="KPay"
          style={{ width: "130px", display: "block" }}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ width: hov ? "2.5rem" : "1.5rem", height: "1px", backgroundColor: "#2975DB", marginBottom: "1.25rem", transition: "width 0.3s ease-out" }} />
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 0.35rem" }}>Brand Identity · Web Design</p>
        <h2 style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.025em", textTransform: "uppercase", margin: "0 0 0.75rem", lineHeight: 1 }}>
          K-Pay
        </h2>
        <span style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: hov ? "#2975DB" : "rgba(255,255,255,0.25)", transition: "color 0.25s" }}>
          View Case Study ↗
        </span>
      </div>
    </Link>
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function Work() {
  useEffect(() => { document.title = "Our Work — Mozwell Studios"; }, []);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imgOpacity, setImgOpacity] = useState(0.4);
  const timerRef = useRef(null);
  useEffect(() => () => clearTimeout(timerRef.current), []);
  const [featHov, setFeatHov] = useState(false);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section style={{ minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
        <img
          src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/82d28c8f0_MaChaCha-14.jpg"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: imgOpacity, transition: "opacity 0.8s ease" }}
        />
        <iframe
          src="https://player.vimeo.com/video/688986798?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
          loading="eager"
          allow="autoplay; fullscreen"
          title="Work hero"
          onLoad={() => { timerRef.current = setTimeout(() => { setVideoLoaded(true); setImgOpacity(0); }, 2000); }}
          style={{ position: "absolute", top: "-10%", left: "-10%", width: "120%", height: "120%", border: "none", pointerEvents: "none", opacity: videoLoaded ? 0.55 : 0, transition: "opacity 0.8s ease" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.65) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, padding: "0 clamp(1.5rem,4vw,4rem) 9rem", maxWidth: "100rem", margin: "0 auto", width: "100%" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 2.5rem" }}>Selected Work</p>
          <h1 style={{ fontSize: "clamp(4rem, 8vw, 10rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.88, color: "#fff", textTransform: "uppercase", margin: "0 0 2rem" }}>
            Our Work.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 1.6vw, 1.375rem)", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, maxWidth: "38rem", margin: 0 }}>
            Case studies from hospitality, restaurants, nonprofits, and coworking.
          </p>
        </div>
      </section>

      {/* ══ FULL PARTNER LABEL ════════════════════════════ */}
      <CategoryLabel text="Full Partner" />

      {/* ══ 1. FEATURED — MOZWELL CLAREMONT (full-width) ══ */}
      <section>
        <Fade>
          <Link
            to="/work/mozwell-claremont-v2"
            onMouseEnter={() => setFeatHov(true)}
            onMouseLeave={() => setFeatHov(false)}
            style={{ textDecoration: "none", display: "block", position: "relative", overflow: "hidden", height: "85vh", backgroundColor: "#000" }}
          >
            <img
              src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/82d28c8f0_MaChaCha-14.jpg"
              alt="Mozwell Claremont"
              style={{
                position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
                opacity: 0.6,
                transform: featHov ? "scale(1.03)" : "scale(1)",
                transition: "transform 0.8s ease-out",
              }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: featHov
                ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.5) 100%)"
                : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.5) 100%)",
              transition: "background 0.4s ease-out",
            }} />
            {/* Top badge */}
            <div style={{ position: "absolute", top: "3rem", left: "clamp(1.5rem,4vw,4rem)" }}>
              <span style={{ fontSize: "0.55rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
                Flagship Case Study
              </span>
            </div>
            {/* Bottom content */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "clamp(2rem,4vw,4rem)",
              transform: featHov ? "translateY(-8px)" : "translateY(0)",
              transition: "transform 0.35s ease-out",
            }}>
              {/* Metric headline */}
              <p style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)", fontWeight: 900, letterSpacing: "0.05em",
                textTransform: "uppercase", color: featHov ? "#F97316" : "rgba(249,115,22,0.75)",
                margin: "0 0 0.75rem", transition: "color 0.3s",
              }}>
                $1.5M+ Year One Revenue
              </p>
              <h2 style={{ fontSize: "clamp(3rem, 6vw, 7.5rem)", fontWeight: 900, letterSpacing: "-0.05em", textTransform: "uppercase", color: "#fff", lineHeight: 0.88, margin: "0 0 1.75rem" }}>
                Mozwell<br />Claremont
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
                <p style={{ fontSize: "clamp(0.9rem,1.4vw,1.1rem)", color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: "36rem", lineHeight: 1.6 }}>
                  Concept, brand, and performance marketing built from scratch. Year one: $1.5M in revenue.
                </p>
                <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "2px", whiteSpace: "nowrap", opacity: featHov ? 1 : 0.7, transition: "opacity 0.25s" }}>
                  View Case Study ↗
                </span>
              </div>
            </div>
          </Link>
        </Fade>
      </section>

      {/* ══ 2. SECONDARY FEATURE ROW — Union Pasadena + right col ══ */}
      <section style={{ borderTop: "1px solid #111" }}>
        <div style={{ display: "grid", gridTemplateColumns: "60fr 40fr" }} className="work-secondary-row">
          {/* Left: Union Pasadena */}
          <Fade>
            <OverlayTile
              slug="/work/union-pasadena-v2"
              image="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/f2c43e6f6_0423_GroupShots_-17.jpg"
              name="Union Pasadena"
              metric="$180K+ Event Revenue"
              descriptor="Content · Paid Media · Events"
              aspectRatio="3/2"
              overlayStrong
            />
          </Fade>
          {/* Right col: Chop N Blok + POST HTX strip */}
          <div style={{ borderLeft: "1px solid #111", display: "flex", flexDirection: "column" }}>
            <Fade style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <OverlayTile
                slug="/work/chop-n-blok"
                image="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/66e7f076e_Carajillo-2.jpg"
                name="Chop N Blok"
                metric="10.2x ROAS"
                descriptor="Performance Marketing"
                aspectRatio="unset"
                style={{ flex: 1 }}
              />
            </Fade>
            <Fade delay={0.1}>
              <PostHTXStrip />
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ PERFORMANCE LABEL ═════════════════════════════ */}
      <CategoryLabel text="Performance" />

      {/* ══ 3. PERFORMANCE ROW — Frank + Organic ══════════ */}
      <section style={{ borderTop: "1px solid #111" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} className="work-2col">
          <Fade>
            <OverlayTile
              slug="/work/frank-macias"
              image="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/524a8b0db_FrankMacias-BehindtheScenes.png"
              name="Frank Macias"
              metric="$269K+ in 90 Days"
              descriptor="Digital Marketing"
              aspectRatio="4/3"
            />
          </Fade>
          <div style={{ borderLeft: "1px solid #111" }}>
            <Fade>
              <OverlayTile
                slug="/work/organic-music"
                image="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c69239e19_ManHoldingNewiPhoneMockup2021-OrganicMusicMarketing.png"
                name="Organic Music"
                metric="353% Revenue Growth"
                descriptor="Digital Marketing · Music"
                aspectRatio="4/3"
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ 4. FoundrSpace + HomeAid ══════════════════════ */}
      <section style={{ borderTop: "1px solid #111" }}>
        <div style={{ display: "grid", gridTemplateColumns: "40fr 60fr" }} className="work-secondary-row">
          <Fade>
            <OverlayTile
              slug="/work/foundrspace"
              image="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/faff7f815_image.jpg"
              name="FoundrSpace"
              metric="224 Qualified Leads"
              descriptor="Lead Gen · SEO · Paid Media"
              aspectRatio="4/3"
              overlayStrong
            />
          </Fade>
          <div style={{ borderLeft: "1px solid #111" }}>
            <Fade delay={0.08}>
              <OverlayTile
                slug="/work/homeaid"
                image="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c3ecafec7_HomeAidGeorgia-296.jpg"
                name="HomeAid OC"
                metric="384% Awareness Growth"
                descriptor="Nonprofit Marketing"
                aspectRatio="4/3"
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ BRAND + DIGITAL LABEL ═════════════════════════ */}
      <CategoryLabel text="Brand + Digital" />

      {/* ══ 5. KPAY — brand tile ══════════════════════════ */}
      <section style={{ borderTop: "1px solid #111" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} className="work-2col">
          <Fade>
            <KPayTile />
          </Fade>
          <Fade delay={0.08}>
            <div style={{ borderLeft: "1px solid #111", overflow: "hidden", aspectRatio: "4/3", backgroundColor: "#000" }}>
              <img
                src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/dcf39b5c6_Laptop26MobileMockupcopy.png"
                alt="KPay product"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.65 }}
              />
            </div>
          </Fade>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .work-secondary-row { grid-template-columns: 1fr !important; }
          .work-2col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .work-secondary-row > div { border-left: none !important; border-top: 1px solid #111; }
        }
      `}</style>
    </div>
  );
}