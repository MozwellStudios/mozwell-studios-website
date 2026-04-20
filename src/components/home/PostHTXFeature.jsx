import React from "react";
import { Link } from "react-router-dom";

export default function PostHTXFeature() {


  return (
    <section style={{ position: "relative", backgroundColor: "#000", overflow: "hidden", padding: "10rem 0" }}>
      {/* Still image with slow zoom */}
      <img
        src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/933e5675e_XAtrium-posthtx.jpg"
        alt="POST HTX venue at night"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          opacity: 0.55,
          animation: "posthtxZoom 20s ease-in-out infinite alternate",
        }}
      />
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.85) 100%)" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "88rem", margin: "0 auto", padding: "0 4rem" }} className="posthtx-container">

        {/* Eyebrow */}
        <p style={{
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#F97316",
          fontWeight: 600,
          margin: "0 0 2.5rem",
        }}>
          Client Partner — POST HTX
        </p>

        {/* Headline */}
        <h2 style={{
          fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.045em",
          lineHeight: 0.92,
          color: "#fff",
          textTransform: "uppercase",
          margin: "0 0 4rem",
        }}>
          From Launch<br />to $100K+.
        </h2>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.18)", marginBottom: "3.5rem" }} />

        {/* Stats strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          marginBottom: "4rem",
        }} className="posthtx-stats">
          {[
            { value: "$100K+", label: "Sponsorship Revenue" },
            { value: "40,000+", label: "Launch Attendees" },
            { value: "60 Days", label: "Execution Timeline" },
            { value: "1", label: "Venue Launched" },
          ].map((s, i) => (
            <div key={i}>
              <p style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 900,
                color: "#F97316",
                letterSpacing: "-0.045em",
                lineHeight: 1,
                margin: "0 0 0.6rem",
              }}>
                {s.value}
              </p>
              <p style={{
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                margin: 0,
                fontWeight: 600,
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/work/post-htx"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F97316",
            textDecoration: "none",
            borderBottom: "1px solid rgba(230,69,13,0.35)",
            paddingBottom: "2px",
            transition: "border-color 0.25s",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "#F97316"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(230,69,13,0.35)"}
        >
          View Case Study →
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) { .posthtx-stats { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .posthtx-container { padding: 0 1.5rem !important; } }
        @keyframes posthtxZoom { from { transform: scale(1); } to { transform: scale(1.05); } }
      `}</style>
    </section>
  );
}