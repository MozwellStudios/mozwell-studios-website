import React from "react";

const brands = [
  "Mozwell Claremont",
  "Union Pasadena",
  "Chop N Blok",
  "FoundrSpace",
  "HomeAid",
  "Post HTX",
];

// Duplicate for seamless loop
const repeated = [...brands, ...brands, ...brands];

export default function HomeTrustStrip() {
  return (
    <section style={{ backgroundColor: "#f7f7f5", borderTop: "1px solid #e0e0dd", borderBottom: "1px solid #e0e0dd", padding: "3.5rem 0" }}>
      {/* Marquee row */}
      <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
        <div style={{
          display: "flex",
          gap: "0",
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}>
          {repeated.map((brand, i) => (
            <span key={i} style={{
              fontSize: "0.58rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#bbb",
              padding: "0 2.5rem",
              whiteSpace: "nowrap",
              borderRight: "1px solid #e0e0dd",
            }}>
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Credibility badge */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          border: "1px solid #e0e0dd",
          padding: "0.5rem 1.25rem",
        }}>
          <div style={{ width: "0.4rem", height: "0.4rem", backgroundColor: "#F97316", borderRadius: "99px" }} />
          <p style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#999", margin: 0 }}>
            Featured: NYT Top 50 Restaurants — Chop N Blok
          </p>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}