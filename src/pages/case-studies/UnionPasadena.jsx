import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";


function Fade({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function GalleryTile({ tile }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: `${tile.w}px`,
        height: `${tile.h}px`,
        borderRadius: "0.75rem",
        overflow: "hidden",
        backgroundColor: "#e8e8e6",
        scrollSnapAlign: "start",
        position: "relative",
      }}
    >
      {tile.type === "img" ? (
        <img src={tile.src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      ) : (
        <iframe
          src={tile.src}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          frameBorder="0"
          title={tile.caption}
          style={{
            position: "absolute",
            top: "-10%", left: "-10%",
            width: "120%", height: "120%",
            border: "none",
            pointerEvents: "none",
          }}
        />
      )}
      {tile.caption && (
        <div style={{
          position: "absolute",
          bottom: "0.75rem",
          left: "0.75rem",
          backgroundColor: "rgba(0,0,0,0.6)",
          color: "#fff",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "0.375rem 0.75rem",
          borderRadius: "2px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}>
          {tile.caption}
        </div>
      )}
    </div>
  );
}

const SectionLabel = ({ text, dark = false }) => (
  <p style={{
    fontSize: "0.75rem",
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)",
    margin: "0 0 2rem",
    fontWeight: 600,
  }}>{text}</p>
);

export default function UnionPasadena() {
  useEffect(() => { document.title = "Union Pasadena — Mozwell Studios"; }, []);
  const [heroVideoOpacity, setHeroVideoOpacity] = useState(0);
  const [heroImgOpacity, setHeroImgOpacity] = useState(0.35);
  const heroTimerRef = useRef(null);
  useEffect(() => () => clearTimeout(heroTimerRef.current), []);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />

      {/* ── SECTION 1: HERO ─────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        backgroundColor: "#000",
      }}>
        <img
          src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/f2c43e6f6_0423_GroupShots_-17.jpg"
          alt="Union Pasadena"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            opacity: heroImgOpacity,
            transition: "opacity 0.8s ease",
            animation: "heroZoom 30s ease-in-out infinite alternate",
          }}
        />
        <iframe
          src="https://player.vimeo.com/video/1180636544?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
          loading="eager"
          onLoad={() => { heroTimerRef.current = setTimeout(() => { setHeroVideoOpacity(1); setHeroImgOpacity(0); }, 2000); }}
          allow="autoplay; fullscreen"
          title="Union Pasadena hero"
          style={{
            position: "absolute",
            top: "-10%", left: "-10%",
            width: "120%", height: "120%",
            border: "none",
            pointerEvents: "none",
            opacity: heroVideoOpacity,
            transition: "opacity 0.8s ease",
            willChange: "opacity",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.7) 100%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, padding: "0 3rem 8rem", maxWidth: "100rem", margin: "0 auto", width: "100%" }}>
          <Fade>
            <Link to="/work" style={{
              display: "inline-block", marginBottom: "5rem",
              fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", textDecoration: "none",
            }}>← All Work</Link>

            <h1 style={{
              fontSize: "clamp(3rem, 7vw, 9rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.88,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 2rem",
            }}>
              Union<br />Pasadena
            </h1>

            <p style={{
              fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.5,
              margin: "0 0 2rem",
              maxWidth: "40rem",
            }}>
              Turning paid media into a private event pipeline.
            </p>

            <p style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              maxWidth: "46rem",
              margin: "0 0 4.5rem",
            }}>
              Mozwell Studios partnered with Union Pasadena to build a performance marketing system designed to generate qualified inquiries for private dining and events — proving that advertising can directly drive restaurant revenue.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "2.5rem",
              gap: "2rem",
            }} className="hero-stats">
              {[
                { value: "400+", label: "Leads Generated" },
                { value: "103K", label: "Content Views in 90 Days" },
                { value: "60+", label: "Event Leads in 60 Days" },
                { value: "$90K–$270K", label: "Est. Event Revenue" },
              ].map((s, i) => (
                <div key={i}>
                  <p style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 0.5rem" }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "0.8125rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", margin: 0, fontWeight: 600 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Fade>
        </div>

        <style>{`@keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1.06); } }`}</style>
      </section>

      {/* ── SECTION 2: THE OPPORTUNITY ──────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Opportunity" />
            <p style={{
              fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
              color: "#222",
              lineHeight: 1.8,
              margin: 0,
            }}>
              Union Pasadena is one of Pasadena's most respected restaurants, known for seasonal menus and a strong local reputation. But the restaurant had limited digital infrastructure for capturing private event inquiries online. Mozwell Studios developed a marketing system designed to turn paid media into a reliable source of private event leads and consistent brand visibility.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── FULL-BLEED AMBIENT VIDEO BREAK ─────────────── */}
      <div style={{ width: "100%", position: "relative", backgroundColor: "#000", aspectRatio: "16/9", overflow: "hidden" }}>
        <iframe
          src="https://player.vimeo.com/video/1183192282?background=1&autoplay=1&loop=1&muted=1&autopause=0"
          loading="lazy"
          allow="autoplay; fullscreen"
          title="Union Pasadena — Kitchen Sounds"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", pointerEvents: "none" }}
        />
      </div>

      {/* ── SECTION 3: THE SYSTEM ───────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The System" dark />
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 6rem",
            }}>
              Leads + Search<br />+ Content.
            </h2>
          </Fade>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "1px solid #1a1a1a",
            marginBottom: "5rem",
          }} className="two-col">
            {[
              {
                title: "Meta",
                body: "Lead generation campaigns driving private event inquiries. 219 leads captured at $32.38 CPL. Instagram drove 3.75× more tracked reservations than Facebook.",
              },
              {
                title: "Google",
                body: "Search campaigns capturing high-intent diners. 356K impressions, 10,468 clicks, 4,861 tracked conversions from $4,263 spend.",
              },
            ].map((col, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div style={{
                  padding: "3.5rem 0",
                  borderRight: i === 0 ? "1px solid #1a1a1a" : "none",
                  paddingRight: i === 0 ? "5rem" : "0",
                  paddingLeft: i === 1 ? "5rem" : "0",
                }}>
                  <p style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                    fontWeight: 900,
                    color: "#F97316",
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    margin: "0 0 1.25rem",
                  }}>{col.title}</p>
                  <p style={{
                    fontSize: "1.125rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}>{col.body}</p>
                </div>
              </Fade>
            ))}
          </div>

          <Fade delay={0.2}>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "3.5rem" }}>
              <p style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                fontStyle: "italic",
                margin: 0,
              }}>
                Meta generates demand. Google captures intent. Content builds the brand.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 4: PRIVATE EVENT IMPACT ─────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Private Event Impact" />
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 6.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 0.88,
              margin: "0 0 3.5rem",
            }}>
              60 Event Leads.<br />60 Days.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{
              fontSize: "1.25rem",
              color: "#444",
              lineHeight: 1.8,
              maxWidth: "48rem",
              margin: "0 0 6rem",
            }}>
              Within the first two months of launching Meta campaigns, Mozwell Studios generated over 60 private event inquiries. At $100 per person with 15–45 guests per event, each booking represents $1,500 to $4,500 in revenue.
            </p>
          </Fade>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid #d8d8d5",
          }} className="event-grid">
            {[
              { value: "$90K", label: "Low Estimate", sub: "60 events × $1,500" },
              { value: "$180K", label: "Mid Estimate", sub: "60 events × $3,000" },
              { value: "$270K", label: "High Estimate", sub: "60 events × $4,500" },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div style={{
                  padding: "3rem 2rem 3rem 0",
                  borderRight: i < 2 ? "1px solid #d8d8d5" : "none",
                  paddingLeft: i > 0 ? "2rem" : 0,
                }}>
                  <p style={{
                    fontSize: "clamp(2.5rem, 4vw, 5rem)",
                    fontWeight: 900,
                    color: "#F97316",
                    letterSpacing: "-0.045em",
                    lineHeight: 1,
                    margin: "0 0 0.75rem",
                  }}>{s.value}</p>
                  <p style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#111",
                    margin: "0 0 0.4rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}>{s.label}</p>
                  <p style={{
                    fontSize: "0.9375rem",
                    color: "rgba(0,0,0,0.45)",
                    margin: 0,
                  }}>{s.sub}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: THE NUMBERS (full-bleed video bg) ───────────── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "14rem 0", backgroundColor: "#000", width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <iframe
          src="https://player.vimeo.com/video/1180637493?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
          loading="lazy"
          allow="autoplay; fullscreen"
          title="Numbers background video"
          style={{
            position: "absolute",
            top: "-10%", left: "-10%",
            width: "120%", height: "120%",
            border: "none",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.8) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "72rem", margin: "0 auto", padding: "0 3rem" }}>
          <Fade>
            <SectionLabel text="Results" dark />
            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 6rem",
            }}>
              The Numbers.
            </h2>
          </Fade>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }} className="num-grid">
            {[
              { value: "563K+", label: "Ad Impressions", sub: "Across Meta & Google" },
              { value: "400+", label: "Leads Generated", sub: "Combined Channels" },
              { value: "4,861", label: "Google Conversions", sub: "From $4,263 Spend" },
              { value: "$11,353", label: "Total Ad Spend", sub: "Meta + Google Combined" },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div style={{
                  padding: "3rem 2rem 3rem 0",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
                  paddingLeft: i > 0 ? "2rem" : 0,
                }}>
                  <p style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.045em", lineHeight: 1, margin: "0 0 0.75rem" }}>{s.value}</p>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", margin: "0 0 0.4rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</p>
                  <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>{s.sub}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: SHOT BY MOZWELL (horizontal scroll) ── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 0" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 3rem 4rem" }}>
          <Fade>
            <SectionLabel text="Content Production" />
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 1rem",
            }}>
              Shot by<br />Mozwell.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{ fontSize: "1.25rem", color: "#444", lineHeight: 1.8, maxWidth: "48rem", margin: 0 }}>
              Mozwell Studios produced the photography, video, and social content that powers Union Pasadena's digital presence. In the last 90 days, content produced by Mozwell generated over 103,000 views.
            </p>
          </Fade>
        </div>

        {/* Horizontal scroll gallery */}
        <div style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "1rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingBottom: "1rem",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }} className="union-scroll-hide">
          {[
            { type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/dfb8254d6_0109_GroupShotsPatio-5.jpg", w: 320, h: 400 },
            { type: "vimeo", src: "https://player.vimeo.com/video/1182769291?autoplay=1&loop=1&muted=1&background=1&autopause=0", w: 320, h: 400, caption: "Winter Citrus Salad" },
            { type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/f2c43e6f6_0423_GroupShots_-17.jpg", w: 480, h: 270 },
            { type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/d39a1d1d6_1202_PoachedSalmon-3.jpg", w: 320, h: 400 },
            { type: "vimeo", src: "https://player.vimeo.com/video/1182769290?autoplay=1&loop=1&muted=1&background=1&autopause=0", w: 320, h: 400, caption: "Red Snapper" },
            { type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/5c644981e_0622_LittleGemSalad-7.jpg", w: 320, h: 400 },
            { type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/de7a028d0_0717_Smores-88.jpg", w: 480, h: 270 },
            { type: "vimeo", src: "https://player.vimeo.com/video/1182769305?autoplay=1&loop=1&muted=1&background=1&autopause=0", w: 320, h: 400, caption: "Cauliflower" },
            { type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/863711512_0717_HeirloomTomatoandStoneFruit-5.jpg", w: 320, h: 400 },
            { type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3e2152173_0717_Agnolotti-59.jpg", w: 480, h: 270 },
            { type: "vimeo", src: "https://player.vimeo.com/video/1182769292?autoplay=1&loop=1&muted=1&background=1&autopause=0", w: 320, h: 400, caption: "Bluefin Tuna Crudo" },
            { type: "img", src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/ca1019b26_0717_GroupShots-99.jpg", w: 320, h: 400 },
          ].map((tile, i) => <GalleryTile key={i} tile={tile} />)}
        </div>

        {/* Stats row */}
        <div style={{ maxWidth: "72rem", margin: "5rem auto 0", padding: "0 3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #d8d8d5", textAlign: "center" }} className="union-stats-row">
            {[
              { value: "103K+", label: "Content views in 90 days" },
              { value: "65%", label: "Views from non-followers" },
              { value: "29.6%", label: "Profile activity increase QoQ" },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div style={{ padding: "3rem 1.5rem", borderRight: i < 2 ? "1px solid #d8d8d5" : "none" }}>
                  <p style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.045em", lineHeight: 1, margin: "0 0 0.75rem" }}>{s.value}</p>
                  <p style={{ fontSize: "0.875rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>{s.label}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <style>{`.union-scroll-hide::-webkit-scrollbar { display: none; }`}</style>
      </section>

      {/* ── SECTION 7: MONEY SLIDE ──────────────────────── */}
      <section style={{
        backgroundColor: "#000",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "10rem 3rem",
      }}>
        <div style={{ maxWidth: "60rem", margin: "0 auto", width: "100%", textAlign: "center" }}>
          <Fade>
            <p style={{
              fontSize: "clamp(5rem, 13vw, 18rem)",
              fontWeight: 900,
              color: "#F97316",
              letterSpacing: "-0.06em",
              lineHeight: 0.85,
              margin: "0 0 1.5rem",
            }}>
              $180K+
            </p>
            <p style={{
              fontSize: "clamp(1.2rem, 2.5vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              margin: "0 0 2.5rem",
            }}>
              Estimated Event Revenue.
            </p>
            <p style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.6,
              maxWidth: "30rem",
              margin: "0 auto",
            }}>
              From 60+ private event leads generated in the first 60 days.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 8: THE RESULT ───────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 3.5rem",
            }}>
              Leads.<br />Events.<br />Visibility.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{
              fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
              color: "#444",
              lineHeight: 1.75,
              maxWidth: "38rem",
              margin: "0 0 4rem",
            }}>
              Union Pasadena now has a proven marketing system that drives consistent private event bookings, captures reservation intent through search, and maintains strong brand visibility through content and social media. The combination of content production and performance marketing created a complete growth engine for one of Pasadena's top dining destinations.
            </p>
          </Fade>
          <Fade delay={0.18}>
            <Link
              to="/work"
              style={{
                display: "inline-block",
                backgroundColor: "#111",
                color: "#fff",
                padding: "1.1rem 2.75rem",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background-color 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#F97316"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#111"; }}
            >
              View All Work
            </Link>
          </Fade>
        </div>
      </section>

      {/* ── EDITORIAL SPLIT: SELECTED WORK ────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "8rem 4rem" }} className="union-editorial">
        <div style={{ maxWidth: "1600px", margin: "0 auto", display: "flex", gap: "6rem", alignItems: "flex-start" }} className="union-editorial-inner">

          {/* LEFT: sticky metadata */}
          <div style={{ flex: "0 0 32%", position: "sticky", top: "6rem" }} className="union-editorial-left">
            <h2 style={{
              fontSize: "clamp(3rem, 5vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              lineHeight: 0.95,
              color: "#111",
              textTransform: "uppercase",
              margin: 0,
            }}>Union<br />Pasadena</h2>
            <p style={{
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#999",
              margin: "1.75rem 0 0",
            }}>2023 ✶ Ongoing</p>
            <div style={{ marginTop: "2.5rem", maxWidth: "28rem" }}>
              <p style={{ fontSize: "0.9375rem", color: "#222", lineHeight: 1.75, fontWeight: 600, margin: "0 0 1.25rem" }}>
                Union Pasadena is a neighborhood restaurant and bar located in Old Town Pasadena, known for its seasonal cocktail program and community-driven events.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#555", lineHeight: 1.75, margin: "0 0 1.25rem" }}>
                Mozwell Studios handles paid social, creative production, event marketing, and campaign management across an ongoing partnership.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#555", lineHeight: 1.75, margin: 0 }}>
                The partnership has generated over 180K in attributable revenue across paid channels.
              </p>
            </div>
          </div>

          {/* RIGHT: image grid */}
          <div style={{ flex: "1 1 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="union-editorial-grid">
            {[
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/dfb8254d6_0109_GroupShotsPatio-5.jpg", span: 1, ratio: "4/5" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/d39a1d1d6_1202_PoachedSalmon-3.jpg", span: 1, ratio: "4/5" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/f2c43e6f6_0423_GroupShots_-17.jpg", span: 2, ratio: "3/2" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/5c644981e_0622_LittleGemSalad-7.jpg", span: 1, ratio: "1/1" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/de7a028d0_0717_Smores-88.jpg", span: 1, ratio: "1/1" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/863711512_0717_HeirloomTomatoandStoneFruit-5.jpg", span: 2, ratio: "3/2" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3e2152173_0717_Agnolotti-59.jpg", span: 1, ratio: "4/5" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/ca1019b26_0717_GroupShots-99.jpg", span: 1, ratio: "4/5" },
            ].map((tile, i) => (
              <div key={i} style={{ gridColumn: `span ${tile.span}`, aspectRatio: tile.ratio, overflow: "hidden", borderRadius: "1rem", backgroundColor: "#f0f0ee" }}>
                <img src={tile.src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity 0.3s ease" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.92"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .union-editorial-inner { flex-direction: column !important; gap: 3rem !important; }
            .union-editorial-left { position: static !important; flex: 1 1 100% !important; }
            .union-editorial-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 480px) {
            .union-editorial { padding: 4rem 1.5rem !important; }
          }
        `}</style>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
          .num-grid { grid-template-columns: 1fr 1fr !important; }
          .event-grid { grid-template-columns: 1fr !important; }
          .hero-stats { grid-template-columns: 1fr 1fr !important; }
          .photo-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .num-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}