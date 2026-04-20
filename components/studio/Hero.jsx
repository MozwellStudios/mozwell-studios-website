import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const words = ["MEDIA.", "SYSTEMS.", "GROWTH.", "AI.", "CONTENT.", "ADVERTISING."];
const FALLBACK_IMG = "https://img.youtube.com/vi/vxVhfav-1jg/maxresdefault.jpg";
const VIMEO_SRC = "https://player.vimeo.com/video/688986798?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479";

function VimeoBackground({ fallbackImg, opacity = 0.5 }) {
  const [imgOpacity, setImgOpacity] = useState(opacity);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const timerRef = useRef(null);

  const handleLoad = () => {
    timerRef.current = setTimeout(() => {
      setVideoOpacity(opacity);
      setImgOpacity(0);
    }, 2000);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <>
      <img
        src={fallbackImg}
        alt=""
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          opacity: imgOpacity,
          transition: "opacity 0.8s ease",
        }}
      />
      <iframe
        src={VIMEO_SRC}
        loading="eager"
        onLoad={handleLoad}
        style={{
          position: "absolute",
          top: "-10%", left: "-10%",
          width: "120%", height: "120%",
          border: "none",
          pointerEvents: "none",
          opacity: videoOpacity,
          transition: "opacity 0.8s ease",
          willChange: "opacity",
        }}
        allow="autoplay; fullscreen"
        title="Background video"
      />

    </>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      overflow: "hidden",
      backgroundColor: "#000000",
    }}>
      {/* Background video */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <VimeoBackground fallbackImg={FALLBACK_IMG} opacity={0.5} />
      </div>

      {/* Grain overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        opacity: 0.3, pointerEvents: "none",
      }} />

      {/* Gradient overlays */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.75) 100%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", zIndex: 2, background: "linear-gradient(to top, #000000 0%, transparent 100%)", pointerEvents: "none" }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 3,
        maxWidth: "100rem", margin: "0 auto",
        padding: "0 3rem", width: "100%",
        paddingTop: "14rem", paddingBottom: "7rem",
      }}>
        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
            Creative Growth Studio — Los Angeles
          </p>
        </div>

        <div className="reveal" style={{ marginBottom: "4rem", transitionDelay: "0.06s" }}>
          <h1 style={{
            fontSize: "clamp(3.2rem, 8.5vw, 9.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.045em",
            lineHeight: 0.88,
            color: "#ffffff",
            margin: 0,
            textTransform: "uppercase",
          }}>
            We build<br />hospitality<br />brands through{" "}
            <span style={{
              color: "#F97316",
              display: "inline-block",
              transition: "opacity 0.4s cubic-bezier(0.25,0.1,0.25,1), transform 0.4s cubic-bezier(0.25,0.1,0.25,1)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(-18px)",
            }}>
              {words[index]}
            </span>
          </h1>
        </div>

        <div className="reveal hero-bottom-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "end",
          transitionDelay: "0.18s",
          borderTop: "1px solid #1a1a1a",
          paddingTop: "2.5rem",
        }}>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: "30rem", letterSpacing: "-0.01em" }}>
            A hospitality-first media and growth studio for modern brands.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "flex-end", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="https://form.typeform.com/to/TNZNwF?typeform-source=mozwellstudios.typeform.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.68rem", color: "#000000", backgroundColor: "#F97316",
                padding: "1rem 2rem", textDecoration: "none",
                letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600,
                transition: "background-color 0.5s, color 0.5s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#000"; e.currentTarget.style.color = "#F97316"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#F97316"; e.currentTarget.style.color = "#000"; }}
            >
              Book a Strategy Call
            </a>
            <Link
              to="/work"
              style={{
                fontSize: "0.68rem", color: "#ffffff", textDecoration: "none",
                borderBottom: "1px solid #333333", paddingBottom: "3px",
                letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "color 0.25s, border-color 0.25s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#F97316"; e.currentTarget.style.borderColor = "#F97316"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.borderColor = "#333333"; }}
            >
              View Work
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-bottom-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-bottom-grid > div { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}