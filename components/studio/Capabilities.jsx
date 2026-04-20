import React, { useState } from "react";

const capabilities = [
  {
    title: "Brand Strategy",
    desc: "Identity systems, positioning, and brand voice built for the hospitality category.",
    services: ["Brand Identity", "Positioning", "Voice & Tone", "Visual Systems", "Brand Guidelines"],
  },
  {
    title: "Content Production",
    desc: "Podcast-style content days that produce 15–20 short-form videos per session for Instagram, TikTok, and ads.",
    services: ["Short-Form Video", "Photography", "Instagram Reels", "TikTok Content", "Ad Creative"],
  },
  {
    title: "Paid Media",
    desc: "Google, Meta, and TikTok campaigns designed to drive reservations, events, and brand awareness.",
    services: ["Google Ads", "Meta Ads", "TikTok Ads", "Retargeting", "Event Promotion"],
  },
  {
    title: "Growth Systems",
    desc: "Marketing infrastructure built for hospitality brands. CRM, lead capture, review management, automated messaging.",
    services: ["CRM Setup", "Email & SMS", "Review Management", "Loyalty Programs", "Pulse by Mozwell"],
  },
];

export default function Capabilities() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="capabilities" style={{ backgroundColor: "#000000", padding: "8rem 0" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "0 3rem" }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          borderBottom: "1px solid #1a1a1a",
          paddingBottom: "2rem",
          marginBottom: "0",
        }}>
          <p className="reveal" style={{
            fontSize: "0.62rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#444444",
          }}>
            What We Do
          </p>
        </div>

        {capabilities.map((item, i) => {
          const isOpen = openIndex === i;
          const isHovered = hoveredIndex === i;
          return (
            <div
              key={i}
              style={{
                borderBottom: "1px solid #1a1a1a",
                cursor: "pointer",
                paddingLeft: isHovered || isOpen ? "1.5rem" : "0",
                transition: "padding-left 0.3s cubic-bezier(0.25,0.1,0.25,1)",
              }}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2.5rem 0",
              }}>
                <h3 style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: isOpen || isHovered ? "#F97316" : "#ffffff",
                  textTransform: "uppercase",
                  transition: "color 0.3s cubic-bezier(0.25,0.1,0.25,1)",
                  margin: 0,
                }}>
                  {item.title}
                </h3>
                <div style={{
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid",
                  borderColor: isOpen ? "#F97316" : "#2a2a2a",
                  borderRadius: "50%",
                  flexShrink: 0,
                  transition: "transform 0.3s, border-color 0.3s",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}>
                  <span style={{ fontSize: "1.1rem", lineHeight: 1, color: isOpen ? "#F97316" : "#444444" }}>+</span>
                </div>
              </div>

              <div style={{
                overflow: "hidden",
                maxHeight: isOpen ? "20rem" : "0",
                opacity: isOpen ? 1 : 0,
                transition: "max-height 0.5s cubic-bezier(0.25,0.1,0.25,1), opacity 0.4s cubic-bezier(0.25,0.1,0.25,1)",
              }}>
                <div style={{ paddingBottom: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="cap-body">
                  <p style={{ fontSize: "0.95rem", color: "#666666", lineHeight: 1.75 }}>
                    {item.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignContent: "flex-start" }}>
                    {item.services.map((s) => (
                      <span key={s} style={{
                        fontSize: "0.6rem",
                        color: "#555555",
                        border: "1px solid #1a1a1a",
                        padding: "0.3rem 0.8rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cap-body { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}