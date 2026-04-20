import React from "react";

const items = [
  "Hospitality",
  "Professional Services",
  "Creators",
  "Commerce",
  "Events",
];

export default function Industries() {
  return (
    <section style={{ padding: "6rem 0", borderTop: "1px solid #E5E5E5" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "0 3rem" }}>
        <p className="reveal" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555555", marginBottom: "3rem" }}>
          Industries We Serve
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} className="ind-cards">
          {items.map((item, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                borderTop: "1px solid #E5E5E5",
                padding: "2rem 0",
                paddingRight: i % 2 === 0 ? "2rem" : 0,
                paddingLeft: i % 2 === 1 ? "2rem" : 0,
                borderRight: i % 2 === 0 ? "1px solid #E5E5E5" : "none",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <p style={{ fontSize: "1.5rem", fontWeight: 500, color: "#111111" }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .ind-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}