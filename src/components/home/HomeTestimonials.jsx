import React from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Their desire to understand our bank culture and develop within that context stands out.",
    name: "Frank Speight",
    title: "COO & Founder",
    company: "KC Bank",
    source: "Verified Clutch Review",
    stat: "5.0",
    statLabel: "Clutch Rating",
    link: null,
  },
  {
    quote: "What stands out most is their ability to understand our firm and translate that into a clean, professional website.",
    name: "Edward Festeryga",
    title: "Attorney",
    company: "Festeryga Law",
    source: "Verified Clutch Review",
    stat: "5.0",
    statLabel: "Clutch Rating",
    link: null,
  },
  {
    quote: "They provided hands-on help and walk-through mentorship for successful growth.",
    name: "Adrian McCovy",
    title: "Executive",
    company: "Red Crown Products",
    source: "Verified Clutch Review",
    stat: "5.0",
    statLabel: "Clutch Rating",
    link: null,
  },
];

export default function HomeTestimonials() {
  return (
    <section style={{ backgroundColor: "#000", padding: "10rem 3rem" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{
            fontSize: "0.72rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            margin: 0,
            fontWeight: 600,
          }}>
            What Clients Say.
          </p>
          <a
            href="https://clutch.co/profile/mozwell-studios"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)", textDecoration: "none", fontWeight: 600,
              borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "2px",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
          >
            5.0 ★★★★★ on Clutch ↗
          </a>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{
              backgroundColor: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
            }}>
              {/* Opening quote mark */}
              <span style={{
                fontSize: "4rem",
                lineHeight: 0.8,
                color: "#F97316",
                fontWeight: 900,
                marginBottom: "1.5rem",
                display: "block",
                fontFamily: "Georgia, serif",
              }}>"</span>

              {/* Quote */}
              <p style={{
                fontSize: "1.125rem",
                color: "#ffffff",
                lineHeight: 1.7,
                margin: "0 0 2rem",
                flexGrow: 1,
              }}>
                {t.quote}
              </p>

              {/* Name + company */}
              <p style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#ffffff",
                margin: "0 0 0.25rem",
                letterSpacing: "-0.01em",
              }}>
                {t.name}
              </p>
              {t.title && (
                <p style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                  margin: "0 0 0.25rem",
                  letterSpacing: "0.01em",
                }}>
                  {t.title}
                </p>
              )}
              <p style={{
                fontSize: "0.9375rem",
                color: "#F97316",
                margin: t.source ? "0 0 0.5rem" : 0,
                letterSpacing: "0.02em",
              }}>
                {t.company}
              </p>
              {t.source && (
                <span style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  fontWeight: 600,
                }}>
                  ✓ {t.source}
                </span>
              )}

              {/* Divider */}
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                margin: "2rem 0",
              }} />

              {/* Key stat */}
              <p style={{
                fontSize: "2.25rem",
                fontWeight: 900,
                color: "#F97316",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                margin: "0 0 0.5rem",
              }}>
                {t.stat}
              </p>
              <p style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.6)",
                margin: "0 0 1.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}>
                {t.statLabel}
              </p>

              {/* Case study link */}
              {t.link && (
                <Link
                  to={t.link}
                  style={{
                    fontSize: "0.875rem",
                    color: "#F97316",
                    textDecoration: "none",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  View Case Study →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}