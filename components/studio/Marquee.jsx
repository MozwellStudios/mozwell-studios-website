import React from "react";

const text = "SCROLL TO DISCOVER — HOSPITALITY MARKETING — BRAND. CONTENT. GROWTH. — LOS ANGELES — ";

export default function Marquee() {
  return (
    <div style={{
      borderTop: "1px solid #111111",
      borderBottom: "1px solid #111111",
      overflow: "hidden",
      padding: "1rem 0",
      backgroundColor: "#000000",
    }}>
      <div style={{ display: "flex", whiteSpace: "nowrap" }}>
        {[0, 1].map((i) => (
          <div
            key={i}
            style={{
              display: "flex",
              animation: "marqueeScroll 22s linear infinite",
              flexShrink: 0,
            }}
          >
            {Array(4).fill(text).map((t, j) => (
              <span key={j} style={{
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#333333",
                paddingRight: "2rem",
              }}>
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}