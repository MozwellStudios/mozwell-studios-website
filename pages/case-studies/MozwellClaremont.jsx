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

const capabilities = [
  { title: "Brand Identity", desc: "Visual system and positioning" },
  { title: "Interior Direction", desc: "Spatial design and atmosphere" },
  { title: "Menu Design", desc: "Typography and menu layout" },
  { title: "Digital Presence", desc: "Website and social ecosystem" },
  { title: "Content Production", desc: "Photography, video, campaigns" },
  { title: "Event Programming", desc: "Recurring cultural programming" },
];

export default function MozwellClaremont() {
  useEffect(() => { document.title = "Mozwell Claremont — Mozwell Studios"; }, []);
  const [heroVideoOpacity, setHeroVideoOpacity] = useState(0);
  const [heroImgOpacity, setHeroImgOpacity] = useState(0.32);
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
      }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <img
            src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/82d28c8f0_MaChaCha-14.jpg"
            alt=""
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              opacity: heroImgOpacity,
              transition: "opacity 0.8s ease",
            }}
          />
          <iframe
            src="https://player.vimeo.com/video/1180637668?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
            loading="eager"
            onLoad={() => { heroTimerRef.current = setTimeout(() => { setHeroVideoOpacity(1); setHeroImgOpacity(0); }, 2000); }}
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
            allow="autoplay; fullscreen"
            title="Mozwell Claremont hero"
          />
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.7) 100%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, padding: "0 3rem 8rem", maxWidth: "100rem", margin: "0 auto", width: "100%" }}>
          <Fade>
            <Link to="/work" style={{
              display: "inline-block", marginBottom: "5rem",
              fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", textDecoration: "none",
            }}>← All Work</Link>

            <h1 style={{
              fontSize: "clamp(3.5rem, 7vw, 9rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.88,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 2rem",
            }}>
              Mozwell<br />Claremont
            </h1>

            <p style={{
              fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.5,
              margin: "0 0 2rem",
              maxWidth: "40rem",
            }}>
              A bar, brand, and community. Built from scratch.
            </p>

            <p style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
              maxWidth: "44rem",
              margin: "0 0 4rem",
            }}>
              Mozwell Studios designed the concept, built the brand, directed the interior, and engineered the marketing system behind Mozwell Claremont, proving that thoughtful design and performance-driven strategy can build a hospitality brand from the ground up.
            </p>

            {/* Stats Row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "2.5rem",
              gap: "2rem",
            }} className="hero-stats">
              {[
                { value: "2.67M+", label: "Impressions" },
                { value: "600+", label: "Leads" },
                { value: "5.7×", label: "Google ROAS" },
                { value: "$1.5M+", label: "Year One Revenue" },
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

      </section>

      {/* ── SECTION 2: OVERVIEW ─────────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(0,0,0,0.4)", margin: "0 0 3rem", fontWeight: 600,
            }}>The Opportunity</p>
            <p style={{
              fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
              color: "#222",
              lineHeight: 1.8,
              margin: 0,
            }}>
              Claremont Village is home to one of Southern California's most active walkable dining districts. But standing out in a crowded hospitality market requires more than a great space. It requires a brand that stays top of mind. Mozwell Studios didn't just market Mozwell Claremont. We built the concept from scratch, from the name and visual identity to the interior atmosphere and the digital marketing engine that would drive consistent traffic from day one.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 3: WHAT WE BUILT ────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", margin: "0 0 2rem", fontWeight: 600,
            }}>Every Touchpoint.</p>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 6rem",
            }}>
              Intentional.
            </h2>
          </Fade>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
          }} className="caps-grid">
            {capabilities.map((item, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div style={{
                  padding: "3rem 4rem 3rem 0",
                  borderTop: "1px solid #1a1a1a",
                  borderRight: i % 2 === 0 ? "1px solid #1a1a1a" : "none",
                  paddingLeft: i % 2 === 1 ? "4rem" : "0",
                  paddingRight: i % 2 === 0 ? "4rem" : "0",
                }}>
                  <p style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 0.6rem",
                    letterSpacing: "-0.01em",
                  }}>{item.title}</p>
                  <p style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}>{item.desc}</p>
                </div>
              </Fade>
            ))}
            <div style={{ gridColumn: "1 / -1", borderTop: "1px solid #1a1a1a" }} />
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE SPACE ─────────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(0,0,0,0.4)", margin: "0 0 2rem", fontWeight: 600,
            }}>The Space.</p>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 3rem",
            }}>
              Elevated without<br />being exclusive.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{
              fontSize: "1.25rem",
              color: "#555",
              lineHeight: 1.75,
              maxWidth: "44rem",
              margin: 0,
            }}>
              The interior was designed to feel warm, modern, and welcoming. Natural textures, minimal architectural lines, and layered lighting created an environment that could transition seamlessly from daytime gatherings to late-night energy. A bar that could become part of the neighborhood's everyday rhythm.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 5: THE LAUNCH (full-bleed video bg) ── */}
      <section style={{
        position: "relative",
        minHeight: "90vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}>
        <iframe
          src="https://player.vimeo.com/video/1180637163?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
          loading="lazy"
          style={{
            position: "absolute",
            top: "-10%", left: "-10%",
            width: "120%", height: "120%",
            border: "none",
            pointerEvents: "none",
            willChange: "transform",
          }}
          allow="autoplay; fullscreen"
          title="Launch section background"
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 100%)",
        }} />
        <div style={{ position: "relative", zIndex: 1, padding: "0 3rem 8rem", maxWidth: "100rem", margin: "0 auto", width: "100%" }}>
          <Fade>
            <p style={{
              fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", margin: "0 0 2rem", fontWeight: 600,
            }}>The Launch.</p>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 3rem",
            }}>
              Build momentum.<br />Convert curiosity.
            </h2>
            <p style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.75,
              maxWidth: "44rem",
              margin: 0,
            }}>
              Mozwell Studios led the launch strategy, combining content creation, local advertising, event programming, and community outreach to introduce the concept to Claremont Village. The goal was simple: build momentum fast and convert curiosity into a loyal guest base.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 6: GROWTH ENGINE ─────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(0,0,0,0.4)", margin: "0 0 2rem", fontWeight: 600,
            }}>The Growth Engine.</p>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 1,
              margin: "0 0 3rem",
            }}>
              10+ Campaigns.<br />3 Platforms.<br />30 Months.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{
              fontSize: "1.125rem",
              color: "#555",
              lineHeight: 1.75,
              maxWidth: "36rem",
              margin: 0,
            }}>
              From a $50/day soft launch to a $200+/day multi-platform operation across Meta, Google, and TikTok.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 7: THE NUMBERS ───────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", margin: "0 0 2rem", fontWeight: 600,
            }}>Results.</p>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 3.5rem)",
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
            borderTop: "1px solid #1a1a1a",
          }} className="num-grid">
            {[
              { value: "2.67M+", label: "Impressions", sub: "Across Meta, Google & TikTok" },
              { value: "56K+", label: "Clicks", sub: "To reservations & events" },
              { value: "600+", label: "Leads", sub: "Qualified workspace leads" },
              { value: "5.7×", label: "Google ROAS", sub: "$12,650 from $2,238 spend" },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div style={{
                  padding: "3rem 2rem 3rem 0",
                  borderRight: i < 3 ? "1px solid #1a1a1a" : "none",
                  paddingLeft: i > 0 ? "2rem" : 0,
                }}>
                  <p style={{
                    fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                    fontWeight: 900,
                    color: "#F97316",
                    letterSpacing: "-0.045em",
                    lineHeight: 1,
                    margin: "0 0 0.75rem",
                  }}>{s.value}</p>
                  <p style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    margin: "0 0 0.5rem",
                  }}>{s.label}</p>
                  <p style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}>{s.sub}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: PERFORMANCE ───────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(0,0,0,0.4)", margin: "0 0 2rem", fontWeight: 600,
            }}>Efficiency.</p>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 1,
              margin: "0 0 6rem",
            }}>
              Performance<br />That Compounds.
            </h2>
          </Fade>

          {[
            "75% lower CPC on Google",
            "73% lower CPC on Meta",
            "2,795% growth in awareness clicks",
          ].map((item, i) => (
            <Fade key={i} delay={i * 0.1}>
              <div style={{
                borderTop: "1px solid #d8d8d5",
                padding: "3rem 0",
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}>
                <span style={{
                  fontSize: "0.75rem",
                  color: "#F97316",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  minWidth: "1.5rem",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)",
                  fontWeight: 700,
                  color: "#111",
                  letterSpacing: "-0.025em",
                  margin: 0,
                  lineHeight: 1.1,
                }}>{item}</p>
              </div>
            </Fade>
          ))}
          <div style={{ borderTop: "1px solid #d8d8d5" }} />
        </div>
      </section>

      {/* ── COCKTAIL PROGRAM VIDEO ───────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: 0 }}>
        <div style={{ position: "relative", width: "100%", height: "clamp(600px, 80vh, 1000px)", overflow: "hidden" }}>
          <iframe
            src="https://player.vimeo.com/video/1180637923?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
            loading="lazy"
            allow="autoplay; fullscreen"
            title="Signature cocktail program"
            style={{
              position: "absolute",
              top: "-10%", left: "-10%",
              width: "120%", height: "120%",
              border: "none",
              pointerEvents: "none",
              willChange: "transform",
            }}
          />
        </div>
        <p style={{
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          padding: "1.5rem 3rem",
          margin: 0,
        }}>
          Signature cocktail program. Mozwell Claremont.
        </p>
      </section>

      {/* ── SECTION 9: MONEY SLIDE (video bg) ──────────────── */}
      <section style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "8rem 3rem",
        overflow: "hidden",
        backgroundColor: "#000",
      }}>
        <iframe
          src="https://player.vimeo.com/video/1180637923?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
          loading="lazy"
          allow="autoplay; fullscreen"
          title="Money slide background"
          style={{
            position: "absolute",
            top: "-10%", left: "-10%",
            width: "120%", height: "120%",
            border: "none",
            pointerEvents: "none",
            willChange: "transform",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.82) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
        <Fade>
          <p style={{
            fontSize: "clamp(6rem, 14vw, 18rem)",
            fontWeight: 900,
            color: "#F97316",
            letterSpacing: "-0.06em",
            lineHeight: 0.85,
            margin: "0 0 1.5rem",
          }}>
            $1.5M+
          </p>
          <p style={{
            fontSize: "clamp(1.2rem, 2.5vw, 2.5rem)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            margin: 0,
          }}>
            Year One Revenue.
          </p>
        </Fade>
        </div>
      </section>

      {/* ── SECTION 9B: VIDEO WALL ───────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "10rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 1.25rem", fontWeight: 600 }}>Content Library</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 0.95, textTransform: "uppercase", margin: "0 0 1.25rem" }}>
              A Living Content System
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", margin: "0 0 4rem", lineHeight: 1.6 }}>
              One production engine, hundreds of assets, always in motion.
            </p>
          </Fade>

          {/* Masonry: outer div = break-avoid column item (NO height/aspect), inner div = aspect-ratio box */}
          <div className="mcb-v1-content-grid">
            {[
              { src: "https://player.vimeo.com/video/1180637668?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "9/16" },
              { src: "https://player.vimeo.com/video/1180637923?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "4/5" },
              { src: "https://player.vimeo.com/video/1183147801?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "4/3" },
              { src: "https://player.vimeo.com/video/1183148181?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "9/16" },
              { src: "https://player.vimeo.com/video/1180637163?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "16/9" },
              { src: "https://player.vimeo.com/video/1180637162?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "4/5" },
              { src: "https://player.vimeo.com/video/1182788776?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "4/3" },
              { src: "https://player.vimeo.com/video/1182788775?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "16/9" },
              { src: "https://player.vimeo.com/video/1180637288?background=1&autoplay=1&loop=1&muted=1&autopause=0", ar: "4/5" },
            ].map((v, i) => (
              <div key={i} style={{ breakInside: "avoid", marginBottom: "0.5rem" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: v.ar, overflow: "hidden" }}>
                  <iframe
                    src={v.src}
                    loading="lazy"
                    allow="autoplay; fullscreen"
                    title={`Claremont clip ${i}`}
                    frameBorder="0"
                    style={{
                      position: "absolute",
                      top: 0, left: 0,
                      width: "100%", height: "100%",
                      border: 0,
                      pointerEvents: "none",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .mcb-v1-content-grid { columns: 4; column-gap: 0.5rem; }
          @media (max-width: 900px) { .mcb-v1-content-grid { columns: 3; } }
          @media (max-width: 640px) { .mcb-v1-content-grid { columns: 2; } }
          @media (max-width: 400px) { .mcb-v1-content-grid { columns: 1; } }
        `}</style>
      </section>

      {/* ── SECTION 10: THE RESULT ───────────────────────── */}
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
              Concept.<br />Brand.<br />Performance.
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
              What began as a single bar concept is now a neighborhood destination for cocktails, music, and community. A foundation for future hospitality projects.
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

      {/* ── MIXED GRID: SELECTED WORK ─────────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "8rem 4rem" }} className="mcb-editorial">
        <div style={{ maxWidth: "1600px", margin: "0 auto", display: "flex", gap: "6rem", alignItems: "flex-start" }} className="mcb-editorial-inner">
          <div style={{ flex: "0 0 32%", position: "sticky", top: "6rem" }} className="mcb-editorial-left">
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.95, color: "#111", textTransform: "uppercase", margin: 0 }}>Mozwell<br />Claremont</h2>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999", margin: "1.75rem 0 0" }}>2024 ✶ Ongoing</p>
            <div style={{ marginTop: "2.5rem", maxWidth: "28rem" }}>
              <p style={{ fontSize: "0.9375rem", color: "#222", lineHeight: 1.75, fontWeight: 600, margin: "0 0 1.25rem" }}>
                Mozwell Claremont, co-founded in 2024, is a premium cocktail bar and social club anchoring the Claremont Village dining scene. The venue operates as both a destination and a studio creative lab.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#555", lineHeight: 1.75, margin: "0 0 1.25rem" }}>
                Mozwell Studios leads the full brand and marketing system, including identity, packaging, menu design, event programming, content production, and paid social.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#555", lineHeight: 1.75, margin: 0 }}>
                The partnership has driven over 1.5M in lifetime revenue across an 18-month launch cycle.
              </p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", columns: "2", columnGap: "1.25rem" }} className="mcb-masonry">
            {[
              "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c4ab44a14_MCB-Branding-Board-31.png",
              "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/12ba9570d_MCB-Matchbox-27.png",
              "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/82d28c8f0_MaChaCha-14.jpg",
              "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/d920169c3_MCB-Logo-25.png",
              "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/03c04cd1f_MCB-Illustrations-26.png",
              "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3c089583e_MCB-Cocktail-Cards-30.png",
              "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/2a32e6ef7_Mozwell-IG-Story.jpg",
            ].map((src, i) => (
              <div key={i} style={{ breakInside: "avoid", marginBottom: "1.25rem", borderRadius: "1rem", overflow: "hidden", backgroundColor: "#f0f0ee" }}>
                <img src={src} alt="" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .mcb-editorial-inner { flex-direction: column !important; gap: 3rem !important; }
            .mcb-editorial-left { position: static !important; flex: 1 1 100% !important; }
            .mcb-masonry { columns: 2 !important; }
          }
          @media (max-width: 480px) { .mcb-editorial { padding: 4rem 1.5rem !important; } .mcb-masonry { columns: 1 !important; } }
        `}</style>
      </section>

      <Footer />

      <style>{`
        @keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1.06); } }
        @media (max-width: 768px) {
          .caps-grid { grid-template-columns: 1fr !important; }
          .num-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-stats { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .num-grid { grid-template-columns: 1fr !important; }
          .hero-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}