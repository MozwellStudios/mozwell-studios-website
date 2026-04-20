import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    num: "01",
    name: "MOZWELL CLAREMONT",
    slug: "/work/mozwell-claremont-v2",
    descriptor: "Launch Partner · Brand · Advertising",
    stat: "$1.5M+ First-Year Revenue",
    tags: ["Brand Identity", "Paid Media", "Content"],
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/82d28c8f0_MaChaCha-14.jpg",
    fallback: "https://img.youtube.com/vi/vxVhfav-1jg/maxresdefault.jpg",
    vimeo: "https://player.vimeo.com/video/1180637162?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479",
  },
  {
    num: "02",
    name: "UNION PASADENA",
    slug: "/work/union-pasadena",
    descriptor: "Photography · Web · Events",
    stat: "60+ Private Event Leads",
    tags: ["Photography", "Web Design", "Events"],
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/f2c43e6f6_0423_GroupShots_-17.jpg",
    fallback: "https://img.youtube.com/vi/Kw4DMA-1wHA/maxresdefault.jpg",
    vimeo: "https://player.vimeo.com/video/1180636544?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479",
  },
  {
    num: "03",
    name: "CHOP N BLOK",
    slug: "/work/chop-n-blok",
    descriptor: "Brand · Launch · Paid Media",
    stat: "647 Reservations Generated",
    tags: ["Brand Launch", "Paid Media", "Social"],
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3409f458c_DSC06003.jpg",
    fallback: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3409f458c_DSC06003.jpg",
    vimeo: null,
  },
  {
    num: "04",
    name: "FOUNDRSPACE",
    slug: "/work/foundrspace",
    descriptor: "Lead Generation · Digital Media",
    stat: "794K+ Impressions",
    tags: ["Lead Gen", "Digital Media", "Strategy"],
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/faff7f815_image.jpg",
    fallback: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/faff7f815_image.jpg",
    vimeo: null,
  },
  {
    num: "05",
    name: "HOMEAID",
    slug: "/work/homeaid",
    descriptor: "Nonprofit Marketing · Brand Awareness",
    stat: "384% Awareness Growth",
    tags: ["Nonprofit", "Paid Media", "Brand"],
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/7ecac5767_HomeAidGeorgia-123.jpg",
    fallback: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/7ecac5767_HomeAidGeorgia-123.jpg",
    vimeo: null,
  },
  {
    num: "06",
    name: "ORGANIC MUSIC",
    slug: "/work/organic-music",
    descriptor: "Digital Marketing · Course Sales",
    stat: "353% Revenue Growth",
    tags: ["Paid Media", "Full-Funnel", "Digital"],
    image: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c69239e19_ManHoldingNewiPhoneMockup2021-OrganicMusicMarketing.png",
    fallback: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c69239e19_ManHoldingNewiPhoneMockup2021-OrganicMusicMarketing.png",
    vimeo: null,
  },
];

const FIXED_FONT_SIZE = "clamp(2rem, 4.5vw, 5rem)";

export default function SelectedWork() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loadedVideos, setLoadedVideos] = useState({});
  const focused = hoveredIndex !== null ? hoveredIndex : 0;

  const handleIframeLoad = (i) => {
    setTimeout(() => setLoadedVideos(prev => ({ ...prev, [i]: true })), 2000);
  };

  return (
    <section style={{ backgroundColor: "#000", position: "relative" }}>
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background images / videos — ALL iframes pre-rendered for instant hover playback */}
        {projects.map((p, i) => (
          <div
            key={p.slug}
            style={{
              position: "absolute",
              inset: 0,
              opacity: focused === i ? 1 : 0,
              transition: "opacity 0.7s cubic-bezier(0.25,0.1,0.25,1)",
              willChange: "opacity",
              zIndex: 0,
              overflow: "hidden",
            }}
          >
            {/* Fallback image — fades out once video has loaded */}
            <img
              src={p.fallback || p.image}
              alt={p.name}
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover", display: "block",
                opacity: loadedVideos[i] ? 0 : 1,
                transition: "opacity 0.8s ease",
                animation: "slowZoomSelected 25s ease-in-out infinite alternate",
              }}
            />
            {/* Vimeo iframe — only if vimeo URL exists */}
            {p.vimeo && <iframe
              src={p.vimeo}
              loading="eager"
              allow="autoplay; fullscreen"
              title={p.name}
              onLoad={() => handleIframeLoad(i)}
              style={{
                position: "absolute",
                top: "-10%", left: "-10%",
                width: "120%", height: "120%",
                border: "none",
                pointerEvents: "none",
                opacity: loadedVideos[i] ? 1 : 0,
                transition: "opacity 0.8s ease",
                willChange: "opacity",
              }}
            />}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.82) 100%)",
            }} />
          </div>
        ))}

        {/* Section label */}
        <div style={{ position: "absolute", top: "3rem", left: "3rem", zIndex: 10 }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 1rem", fontWeight: 600 }}>
            Selected Work
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", width: "12rem" }} />
        </div>

        {/* Project list */}
        <div style={{
          position: "relative", zIndex: 10,
          padding: "0 3rem", maxWidth: "100rem",
          width: "100%", margin: "0 auto",
        }}>
          {projects.map((p, i) => {
            const isFocused = focused === i;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={p.slug}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ marginBottom: "0.1em" }}
              >
                <Link to={p.slug} style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem" }}>
                    <span style={{
                      fontSize: "0.55rem", letterSpacing: "0.2em",
                      color: isFocused ? "#F97316" : "rgba(255,255,255,0.2)",
                      textTransform: "uppercase", fontWeight: 600,
                      minWidth: "2rem", transition: "color 0.35s ease",
                      flexShrink: 0, alignSelf: "center",
                    }}>
                      {p.num}
                    </span>
                    <h2 style={{
                      fontSize: FIXED_FONT_SIZE,
                      fontWeight: 900, letterSpacing: "-0.02em",
                      color: "#ffffff", textTransform: "uppercase",
                      lineHeight: 0.95, margin: 0,
                      opacity: isFocused ? 1 : 0.22,
                      transition: "opacity 0.4s cubic-bezier(0.25,0.1,0.25,1)",
                      willChange: "opacity",
                    }}>
                      {p.name}
                    </h2>
                  </div>

                  {/* Descriptor — shows on hover */}
                  <div style={{
                    overflow: "hidden",
                    maxHeight: isHovered ? "3rem" : "0",
                    opacity: isHovered ? 1 : 0,
                    transition: "max-height 0.4s cubic-bezier(0.25,0.1,0.25,1), opacity 0.4s ease",
                    paddingLeft: "calc(2rem + 1.5rem + 0.5rem)",
                    marginTop: isHovered ? "0.4rem" : 0,
                    marginBottom: isHovered ? "0.3rem" : 0,
                  }}>
                    <p style={{
                      fontSize: "0.62rem", letterSpacing: "0.14em",
                      textTransform: "uppercase", color: "rgba(255,255,255,0.45)", margin: 0,
                    }}>
                      {p.descriptor} &nbsp;·&nbsp; <span style={{ color: "#F97316" }}>{p.stat}</span> &nbsp;↗
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slowZoomSelected {
          from { transform: scale(1.0); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}