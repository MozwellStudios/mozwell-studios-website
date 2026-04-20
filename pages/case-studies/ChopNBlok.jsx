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

export default function ChopNBlok() {
  useEffect(() => { document.title = "Chop N' Blok — Mozwell Studios"; }, []);
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
          src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3409f458c_DSC06003.jpg"
          alt="Chop N' Blok"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.28,
            animation: "heroZoom 30s ease-in-out infinite alternate",
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
              fontSize: "clamp(3.5rem, 7vw, 9rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.88,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 2rem",
            }}>
              Chop<br />N' Blok
            </h1>

            <p style={{
              fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.5,
              margin: "0 0 2rem",
              maxWidth: "40rem",
            }}>
              Turning paid media into a reservation engine.
            </p>

            <p style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              maxWidth: "46rem",
              margin: "0 0 4.5rem",
            }}>
              Mozwell Studios partnered with Chop N' Blok, a Nigerian-American restaurant in Houston, to build a multi-channel advertising system designed to drive reservations and increase consistent customer traffic. By combining Meta advertising with Google Search campaigns, the strategy captures both discovery traffic and high-intent diners searching for restaurants nearby.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "2.5rem",
              gap: "2rem",
            }} className="hero-stats">
              {[
                { value: "10.2×", label: "ROAS" },
                { value: "522", label: "Reservations in Q1" },
                { value: "$3.58", label: "Cost Per Google Reservation" },
                { value: "400+", label: "Total Leads" },
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
              Chop N' Blok had strong brand momentum locally, but digital advertising efforts lacked clear attribution and structured funnel strategy. Mozwell Studios rebuilt the campaign architecture to support three goals: increase restaurant discovery, capture reservation intent through search, and convert traffic into OpenTable bookings. The objective was to turn paid media into a predictable reservation pipeline.
            </p>
          </Fade>
        </div>
      </section>

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
              Discovery<br />+ Intent.
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
                body: "Meta advertising served as the top-of-funnel discovery engine — building awareness and driving interest. 319,642 impressions, 15,642 clicks generated, 256 leads captured at $8.45 average cost per lead. Instagram drove 3.75× more tracked OpenTable reservations than Facebook.",
              },
              {
                title: "Google Search",
                body: "Google Search captures diners already looking for restaurants nearby. 464 reservations generated at $3.58 cost per reservation. $34,800 estimated reservation value. Search campaigns became the primary reservation driver within the system.",
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
                Meta and Google played complementary roles. Meta generated discovery and leads, while Google captured diners actively searching for restaurants.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 4: THE NUMBERS ──────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Results" />
            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              margin: "0 0 6rem",
            }}>
              The Numbers.
            </h2>
          </Fade>

          {/* Row 1 */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid #d8d8d5",
            marginBottom: "0",
          }} className="num-grid">
            {[
              { value: "375,986", label: "Ad Impressions", sub: "Combined Q1 2026" },
              { value: "22,381", label: "Clicks Generated", sub: "Across Both Platforms" },
              { value: "522", label: "Reservations Driven", sub: "Q1 2026 Tracked" },
              { value: "$39,150", label: "Est. Reservation Value", sub: "At $75 Average Ticket" },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.07}>
                <div style={{
                  padding: "3rem 2rem 3rem 0",
                  borderRight: i < 3 ? "1px solid #d8d8d5" : "none",
                  borderBottom: "1px solid #d8d8d5",
                  paddingLeft: i > 0 ? "2rem" : 0,
                }}>
                  <p style={{
                    fontSize: "clamp(1.8rem, 3vw, 3.5rem)",
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
                    lineHeight: 1.5,
                  }}>{s.sub}</p>
                </div>
              </Fade>
            ))}
          </div>

          {/* Row 2 */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }} className="num-grid">
            {[
              { value: "400+", label: "Total Leads", sub: "Since 2024" },
              { value: "$11,353", label: "Total Ad Spend", sub: "Meta + Google Combined" },
              { value: "$3.58", label: "Google Cost / Reservation", sub: "Down from $446 in 2024" },
              { value: "10.2×", label: "Return on Ad Spend", sub: "Q1 2026" },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.07 + 0.28}>
                <div style={{
                  padding: "3rem 2rem 3rem 0",
                  borderRight: i < 3 ? "1px solid #d8d8d5" : "none",
                  paddingLeft: i > 0 ? "2rem" : 0,
                }}>
                  <p style={{
                    fontSize: "clamp(1.8rem, 3vw, 3.5rem)",
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
                    lineHeight: 1.5,
                  }}>{s.sub}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: THE BREAKTHROUGH ─────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none", zIndex: 0,
        }}>
          <span style={{
            fontSize: "clamp(10rem, 30vw, 28rem)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
            letterSpacing: "-0.06em",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}>464</span>
        </div>
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Fade>
            <SectionLabel text="The Google Turnaround" dark />
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 7rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 0.88,
              margin: "0 0 4rem",
            }}>
              From 2<br />to 464.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              maxWidth: "48rem",
              margin: 0,
            }}>
              In 2024, Google campaigns drove just 2 tracked reservations at $446 each. After optimization, the system transformed. 2025 delivered 455 reservations worth $34,125 from just $1,608 in spend. By 2026, cost per reservation held at $3.58 while volume continued to scale.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 6: META PERFORMANCE ─────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Meta Performance" />
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 4.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 3.5rem",
            }}>
              The Discovery<br />Engine.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{
              fontSize: "1.25rem",
              color: "#444",
              lineHeight: 1.8,
              maxWidth: "48rem",
              margin: 0,
            }}>
              Meta advertising served as the top-of-funnel discovery engine. Instagram drove the strongest reservation intent — producing 3.75× more tracked OpenTable reservations than Facebook. Meta and Google played complementary roles. March 2026 became the breakout month, delivering 105 leads at the lowest cost per lead recorded.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 7: MONEY SLIDE ──────────────────────── */}
      <section style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "8rem 3rem",
      }}>
        <Fade>
          <p style={{
            fontSize: "clamp(6rem, 13vw, 18rem)",
            fontWeight: 900,
            color: "#F97316",
            letterSpacing: "-0.06em",
            lineHeight: 0.85,
            margin: "0 0 1.5rem",
          }}>
            10.2×
          </p>
          <p style={{
            fontSize: "clamp(1.2rem, 2.5vw, 2.5rem)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            margin: "0 0 2.5rem",
          }}>
            Return On Ad Spend.
          </p>
          <p style={{
            fontSize: "1.125rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6,
            maxWidth: "30rem",
            margin: 0,
          }}>
            $39,150 estimated reservation value from $3,822 ad spend in Q1 2026.
          </p>
        </Fade>
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
              Discovery.<br />Intent.<br />Reservations.
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
              Chop N' Blok now operates with a structured marketing system capable of generating consistent reservations through paid media. The campaign framework continues to balance brand discovery, lead generation, and high-intent reservation capture in a competitive restaurant market.
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

      {/* ── EDITORIAL PHOTO GRID ─────────────────────── */}
      <section style={{ backgroundColor: "#fff", padding: "8rem 4rem" }} className="cnb-editorial">
        <div style={{ maxWidth: "1600px", margin: "0 auto", display: "flex", gap: "6rem", alignItems: "flex-start" }} className="cnb-editorial-inner">
          <div style={{ flex: "0 0 32%", position: "sticky", top: "6rem" }} className="cnb-editorial-left">
            <h2 style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.95, color: "#111", textTransform: "uppercase", margin: 0 }}>Chop<br />N' Blok</h2>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999", margin: "1.75rem 0 0" }}>2024 ✶ Ongoing</p>
            <div style={{ marginTop: "2.5rem", maxWidth: "28rem" }}>
              <p style={{ fontSize: "0.9375rem", color: "#222", lineHeight: 1.75, fontWeight: 600, margin: "0 0 1.25rem" }}>
                Chop N' Blok is a Nigerian-American restaurant in Houston, known for its bold flavors, vibrant interior, and culture-forward dining experience.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#555", lineHeight: 1.75, margin: "0 0 1.25rem" }}>
                Mozwell Studios manages paid social and Google campaigns, building a multi-channel system designed to drive reservations and increase consistent customer traffic.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#555", lineHeight: 1.75, margin: 0 }}>
                The system delivered 522 reservations in Q1 2026 at a 10.2x return on ad spend.
              </p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="cnb-editorial-grid">
            {[
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/35eb107ac_DSC05509.jpg", span: 1, ratio: "1/1" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/074b9ee19_DSC05059.jpg", span: 1, ratio: "1/1" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3409f458c_DSC06003.jpg", span: 2, ratio: "16/10" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/20ed34fde_DSC05163.jpg", span: 1, ratio: "4/5" },
              { src: "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/d3b261b79_DSC05380.jpg", span: 1, ratio: "4/5" },
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
            .cnb-editorial-inner { flex-direction: column !important; gap: 3rem !important; }
            .cnb-editorial-left { position: static !important; flex: 1 1 100% !important; }
          }
          @media (max-width: 480px) { .cnb-editorial { padding: 4rem 1.5rem !important; } }
        `}</style>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
          .num-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-stats { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .num-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}