import React from "react";

export default function ReelSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={() => window.open("https://www.youtube.com/watch?v=PvSTeEMHuNk", "_blank")}
    >
      {/* Cinematic BG image with slow zoom */}
      <img
        src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/ee54f309d_MCBVenueSpace-15.jpg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          animation: "reelZoom 25s ease-in-out infinite alternate",
        }}
      />
      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
      }} />

      {/* Center content */}
      <div style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.25rem",
      }}>
        {/* Play button */}
        <div
          style={{
            width: "6rem",
            height: "6rem",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "reelPulse 2.5s ease-in-out infinite",
            transition: "border-color 0.3s, background 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#F97316";
            e.currentTarget.style.background = "rgba(249,115,22,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <div style={{
            width: 0,
            height: 0,
            borderTop: "14px solid transparent",
            borderBottom: "14px solid transparent",
            borderLeft: "22px solid rgba(255,255,255,0.9)",
            marginLeft: "4px",
          }} />
        </div>

        <p style={{
          fontSize: "0.6rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.7)",
          fontWeight: 500,
        }}>
          Watch Our Reel
        </p>
      </div>

      <style>{`
        @keyframes reelZoom {
          from { transform: scale(1.0); }
          to { transform: scale(1.07); }
        }
        @keyframes reelPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.85; }
        }
      `}</style>
    </section>
  );
}