import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000", borderTop: "1px solid #0d0d0d" }}>

      {/* Main footer body */}
      <div style={{
        maxWidth: "100rem",
        margin: "0 auto",
        padding: "6rem 3rem 4rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "3rem",
        alignItems: "start",
      }} className="footer-main">

        {/* Left: Brand */}
        <div>
          <img
            src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/0f58e0bca_Mozwell_Script_Logo_Final_072019_thicker.png"
            alt="Mozwell Studios"
            style={{ height: "32px", width: "auto", display: "block", marginBottom: "0.5rem" }}
          />
          <p style={{
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.35)",
            margin: 0,
          }}>
            Los Angeles, CA
          </p>
        </div>

        {/* Center: CTA */}
        <div style={{ textAlign: "center" }}>
          <p style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: "0 0 1.5rem",
            lineHeight: 1,
          }}>
            Ready to grow?
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#F97316",
              color: "#000",
              padding: "0.85rem 2.25rem",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background-color 0.25s",
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#EA6D0E"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F97316"}
          >
            Let's Talk
          </Link>
        </div>

        {/* Right: Links */}
        <div style={{ textAlign: "right" }} className="footer-links">
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-end" }}>
            <a
              href="https://instagram.com/mozwellstudios"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
            >
              Instagram
            </a>
            <a
              href="mailto:hello@mozwellstudios.com"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid #0d0d0d",
        padding: "1.5rem 3rem",
        textAlign: "center",
      }}>
        <p style={{
          fontSize: "0.58rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.2)",
          margin: 0,
        }}>
          © 2026 Mozwell Studios. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-main { grid-template-columns: 1fr !important; text-align: center !important; }
          .footer-links { text-align: center !important; }
          .footer-links > div { align-items: center !important; }
        }
      `}</style>
    </footer>
  );
}