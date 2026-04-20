import React from "react";

const logos = [
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/32f6f5a21_1.png", alt: "POST HTX" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/4e5091e78_2.png", alt: "Mozwell Claremont" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/0c1b2d726_3.png", alt: "Chop N Blok" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/e8903141c_4.png", alt: "HomeAid OC" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/ac923b3a7_5.png", alt: "Organic" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/54931286b_6.png", alt: "Union Pasadena" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/55d4fa143_7.png", alt: "FoundrSpace" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/1e9ade074_8.png", alt: "Red Bull" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/d2e2d40ad_9.png", alt: "Houston Rockets" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/0b7ff0b16_10.png", alt: "Client 10" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/7a3dc4dba_11.png", alt: "Client 11" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/a16d468dc_12.png", alt: "Client 12" },
  { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/d471138fd_ChopnBlok-ClientLogos.png", alt: "Chop N Blok" },
];

const doubled = [...logos, ...logos];

export default function ClientLogoStrip() {
  return (
    <section style={{ backgroundColor: "#000", padding: "6rem 0", overflow: "hidden" }}>
      {/* Label */}
      <p style={{
        fontSize: "0.58rem",
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.5)",
        textAlign: "center",
        margin: "0 0 3rem",
        fontWeight: 600,
      }}>
        Trusted By
      </p>

      {/* Marquee track */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "5rem",
          width: "max-content",
          animation: "marquee 35s linear infinite",
        }}>
          {doubled.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              style={{
                height: "200px",
                width: "200px",
                maxWidth: "200px",
                objectFit: "contain",
                opacity: 0.7,
                transition: "opacity 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "1"}
              onMouseLeave={e => e.currentTarget.style.opacity = "0.7"}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}