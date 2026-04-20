import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const words = ["MEDIA.", "SYSTEMS.", "GROWTH.", "AI.", "CONTENT.", "ADVERTISING."];

export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 380);
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
      backgroundColor: "#000",
    }}>
      {/* Background video */}
      <iframe
        src="https://www.youtube-nocookie.com/embed/PvSTeEMHuNk?autoplay=1&mute=1&loop=1&playlist=PvSTeEMHuNk&controls=0&showinfo=0&modestbranding=1&playsinline=1&disablekb=1&rel=0"
        title="Hero background"
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute", top: "50%", left: "50%",
          width: "120vw", height: "120vh",
          transform: "translate(-50%, -50%)",
          border: "none", pointerEvents: "none", opacity: 0.3, zIndex: 0,
        }}
      />

      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        opacity: 0.35, pointerEvents: "none",
      }} />

      {/* Vignette + fade-to-black bottom */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", zIndex: 2, background: "linear-gradient(to top, #000 0%, transparent 100%)", pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3, maxWidth: "100rem", margin: "0 auto", width: "100%", padding: "0 3rem 7rem", paddingTop: "12rem" }}>

        <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "3rem" }}>
          Creative Growth Studio — Los Angeles
        </p>

        <h1 style={{
          fontSize: "clamp(3.5rem, 9vw, 10rem)",
          fontWeight: 800,
          letterSpacing: "-0.045em",
          lineHeight: 0.88,
          color: "#fff",
          textTransform: "uppercase",
          margin: "0 0 4rem",
        }}>
          We build<br />
          hospitality<br />
          brands through{" "}
          <span style={{
            color: "#F97316",
            display: "inline-block",
            transition: "opacity 0.38s ease, transform 0.38s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(-16px)",
          }}>
            {words[index]}
          </span>
        </h1>

        <div style={{
          borderTop: "1px solid #1a1a1a",
          paddingTop: "2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="hero-bottom">
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: "32rem" }}>
            A hospitality-first media and growth studio for modern brands.
          </p>
          <div style={{ display: "flex", gap: "1.25rem", justifyContent: "flex-end", flexWrap: "wrap" }}>
            <a
              href="mailto:hello@mozwellstudios.com"
              style={{
                fontSize: "0.65rem", color: "#000", backgroundColor: "#F97316",
                padding: "0.9rem 2.2rem", textDecoration: "none",
                letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700,
                transition: "background-color 0.2s",
              }}
              onMouseEnter={e => e.target.style.backgroundColor = "#E0620E"}
              onMouseLeave={e => e.target.style.backgroundColor = "#F97316"}
            >
              Book a Strategy Call
            </a>
            <Link
              to="/work"
              style={{
                fontSize: "0.65rem", color: "#fff", textDecoration: "none",
                borderBottom: "1px solid #333", paddingBottom: "3px",
                letterSpacing: "0.1em", textTransform: "uppercase",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#F97316"; e.currentTarget.style.borderColor = "#F97316"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#333"; }}
            >
              View Work
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-bottom { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}