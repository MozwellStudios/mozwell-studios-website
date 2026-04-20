import React from "react";

const metrics = [
  { value: "1.43M+", label: "Google Ads Impressions" },
  { value: "34,700+", label: "Clicks Generated" },
  { value: "$0.30", label: "Average Cost Per Click" },
  { value: "6,500+", label: "Loyalty Subscribers" },
  { value: "60+", label: "Private Event Leads" },
  { value: "$0.40", label: "Avg. Cost Per Lead" },
];

export default function ImpactStats() {
  return (
    <section style={{ backgroundColor: "#000000", padding: "8rem 0", borderTop: "1px solid #111111" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "0 3rem" }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#444444" }}>
            Impact ✦
          </p>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#333333" }}>
            Mozwell Studios — Performance Data
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem 2rem" }} className="stats-grid">
          {metrics.map((m, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <p style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#F97316",
                lineHeight: 1,
                marginBottom: "0.75rem",
              }}>
                {m.value}
              </p>
              <p style={{ fontSize: "0.75rem", color: "#444444", letterSpacing: "0.05em", textTransform: "uppercase" }}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}