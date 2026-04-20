import React, { useEffect, useRef, useState } from "react";

export default function InHouseStatement() {
  const [line1Visible, setLine1Visible] = useState(false);
  const [line2Visible, setLine2Visible] = useState(false);
  const [fasterVisible, setFasterVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setLine1Visible(true), 0);
          setTimeout(() => setLine2Visible(true), 200);
          setTimeout(() => setFasterVisible(true), 600);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const lineStyle = (visible) => ({
    display: "block",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(35px)",
    transition: "opacity 0.9s cubic-bezier(0.25,0.1,0.25,1), transform 0.9s cubic-bezier(0.25,0.1,0.25,1)",
  });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#000000",
        padding: "14rem 3rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #111111",
      }}
    >
      {/* Vignette */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "90rem", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(2.5rem, 6vw, 7rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 0.95,
          margin: 0,
          textTransform: "uppercase",
        }}>
          <span style={{ ...lineStyle(line1Visible), color: "#ffffff" }}>
            We want to be your in-house
          </span>
          <span style={{ ...lineStyle(line2Visible), color: "#2a2a2a", transitionDelay: "0.1s" }}>
            marketing, media, and growth team.
          </span>
          <span style={{
            ...lineStyle(line2Visible),
            color: "#1a1a1a",
            transitionDelay: "0.2s",
          }}>
            But{" "}
            <span style={{
              color: "#F97316",
              opacity: fasterVisible ? 1 : 0,
              transform: fasterVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
              display: "inline-block",
              transition: "opacity 0.7s cubic-bezier(0.25,0.1,0.25,1) 0.4s, transform 0.7s cubic-bezier(0.25,0.1,0.25,1) 0.4s",
            }}>
              faster.
            </span>
          </span>
        </h2>
      </div>
    </section>
  );
}