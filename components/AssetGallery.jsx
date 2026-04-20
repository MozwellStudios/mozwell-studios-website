import React, { useState } from "react";
import { X } from "lucide-react";

export default function AssetGallery({
  title = "Brand in Motion",
  subtitle,
  assets = [],
  categories,
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === "All"
    ? assets
    : assets.filter((a) => a.category === activeCategory);

  return (
    <section style={{ backgroundColor: "#fff", padding: "10rem 3rem" }}>
      <div style={{ maxWidth: "90rem", margin: "0 auto" }}>

        {/* Eyebrow */}
        <p style={{
          fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase",
          color: "#F97316", fontWeight: 700, margin: 0,
        }}>
          Selected Work
        </p>

        {/* Headline */}
        <h2 style={{
          fontSize: "clamp(3rem, 7vw, 7rem)", fontWeight: 300, letterSpacing: "-0.045em",
          lineHeight: 0.9, color: "#111", margin: "1.5rem 0 0",
        }}>
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p style={{
            fontSize: "1.125rem", color: "#666", lineHeight: 1.7,
            maxWidth: "38rem", margin: "2rem 0 0",
          }}>
            {subtitle}
          </p>
        )}

        {/* Filter bar */}
        {categories && categories.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", marginTop: "4rem" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: "none", border: "none", cursor: "pointer", padding: 0,
                  fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase",
                  color: activeCategory === cat ? "#111" : "#999",
                  fontWeight: activeCategory === cat ? 700 : 400,
                  borderBottom: activeCategory === cat ? "1px solid #111" : "1px solid transparent",
                  paddingBottom: "0.25rem",
                  transition: "color 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Masonry grid */}
        <div style={{
          columnCount: 3, columnGap: "1.5rem",
          marginTop: "4rem",
        }} className="asset-gallery-grid">
          {filtered.map((asset, i) => (
            <div
              key={i}
              className="asset-card"
              onClick={() => setLightbox(asset)}
              style={{
                breakInside: "avoid", marginBottom: "1.5rem",
                position: "relative", cursor: "pointer", overflow: "hidden",
              }}
            >
              <img
                src={asset.src}
                alt={asset.caption || ""}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div className="asset-overlay">
                {asset.caption && (
                  <p style={{
                    color: "#fff", fontSize: "0.8rem", letterSpacing: "0.06em",
                    lineHeight: 1.5, margin: 0,
                  }}>
                    {asset.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ color: "#bbb", fontSize: "0.9rem", marginTop: "3rem" }}>No assets in this category yet.</p>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.95)",
            zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute", top: "2rem", right: "2rem",
              background: "none", border: "none", cursor: "pointer", color: "#fff",
            }}
          >
            <X size={28} />
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "1200px", width: "100%", textAlign: "center" }}>
            <img
              src={lightbox.src}
              alt={lightbox.caption || ""}
              style={{ maxWidth: "100%", maxHeight: "85vh", objectFit: "contain", display: "block", margin: "0 auto" }}
            />
            {lightbox.caption && (
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", letterSpacing: "0.12em", marginTop: "1.5rem" }}>
                {lightbox.caption}
              </p>
            )}
          </div>
        </div>
      )}

      <style>{`
        .asset-card .asset-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.6);
          opacity: 0; transition: opacity 0.3s ease;
          display: flex; align-items: flex-end; padding: 1.5rem;
        }
        .asset-card:hover .asset-overlay { opacity: 1; }
        @media (max-width: 768px) { .asset-gallery-grid { column-count: 2 !important; } }
        @media (max-width: 480px) { .asset-gallery-grid { column-count: 1 !important; } }
      `}</style>
    </section>
  );
}