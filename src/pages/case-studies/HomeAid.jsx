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

const platforms = [
  { name: "Google", desc: "Search visibility and intent capture" },
  { name: "YouTube", desc: "Video storytelling and awareness" },
  { name: "Facebook", desc: "Community engagement and donations" },
  { name: "Instagram", desc: "Visual storytelling and reach" },
  { name: "LinkedIn", desc: "Professional network and partnerships" },
];

export default function HomeAid() {
  useEffect(() => { document.title = "HomeAid — Mozwell Studios"; }, []);
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
          src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/7ecac5767_HomeAidGeorgia-123.jpg"
          alt="HomeAid"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.25,
            animation: "heroZoom 30s ease-in-out infinite alternate",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, padding: "0 3rem 8rem", maxWidth: "100rem", margin: "0 auto", width: "100%" }}>
          <Fade>
            <Link to="/work" style={{
              display: "inline-block", marginBottom: "5rem",
              fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", textDecoration: "none",
            }}>← All Work</Link>

            <h1 style={{
              fontSize: "clamp(4rem, 8vw, 10rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.88,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 2rem",
            }}>
              HomeAid
            </h1>

            <p style={{
              fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.5,
              margin: "0 0 1.5rem",
              maxWidth: "42rem",
            }}>
              Amplifying a nonprofit's mission through digital storytelling.
            </p>

            <p style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              maxWidth: "46rem",
              margin: "0 0 5rem",
            }}>
              Mozwell Studios partnered with HomeAid to share their story with a national audience — generating $34,135 in donations and a 384% surge in web traffic in just 90 days.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "2.5rem",
              gap: "2rem",
            }} className="hero-stats">
              {[
                { value: "$34,135", label: "Donations Generated" },
                { value: "384%", label: "Web Traffic Increase" },
                { value: "90", label: "Day Campaign" },
                { value: "5", label: "Platforms" },
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

      {/* ── SECTION 2: THE OPPORTUNITY (light) ──────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Opportunity" />
            <p style={{
              fontSize: "1.25rem",
              color: "#222",
              lineHeight: 1.8,
              margin: 0,
            }}>
              HomeAid is a prominent nonprofit organization dedicated to building homes and hope for those in need. While the mission was powerful, the organization needed a way to share their story with a broader national audience and convert awareness into meaningful support. Mozwell Studios developed a comprehensive digital marketing campaign designed to amplify their message across every major platform.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 3: THE SYSTEM (dark) ─────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The System" dark />
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 6.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 0.9,
              margin: "0 0 6rem",
            }}>
              5 Platforms.<br />90 Days.
            </h2>
          </Fade>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            borderTop: "1px solid #1a1a1a",
            marginBottom: "5rem",
          }} className="platform-grid">
            {platforms.map((p, i) => (
              <Fade key={i} delay={i * 0.07}>
                <div style={{
                  padding: "3rem 3rem 3rem 0",
                  borderBottom: i < 3 ? "1px solid #1a1a1a" : "none",
                  borderRight: (i % 3 !== 2) ? "1px solid #1a1a1a" : "none",
                  paddingLeft: (i % 3 !== 0) ? "3rem" : "0",
                }}>
                  <p style={{
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    color: "#F97316",
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    margin: "0 0 0.6rem",
                  }}>{p.name}</p>
                  <p style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}>{p.desc}</p>
                </div>
              </Fade>
            ))}
          </div>

          <Fade delay={0.3}>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "3.5rem" }}>
              <p style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                fontStyle: "italic",
                margin: 0,
              }}>
                A coordinated multi-platform strategy designed to reach audiences wherever they are.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 4: THE NUMBERS (light) ──────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Results" />
            <h2 style={{
              fontSize: "clamp(2rem, 3vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              margin: "0 0 6rem",
            }}>
              The Numbers.
            </h2>
          </Fade>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid #d8d8d5",
          }} className="num-grid">
            {[
              { value: "$34,135", label: "Donations Generated", sub: "In 90 Days" },
              { value: "384%", label: "Web Traffic Increase", sub: "Across All Channels" },
              { value: "5", label: "Platforms", sub: "Google, YouTube, FB, IG, LinkedIn" },
              { value: "90", label: "Days", sub: "From Launch to Results" },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.07}>
                <div style={{
                  padding: "3rem 2rem 3rem 0",
                  borderRight: i < 3 ? "1px solid #d8d8d5" : "none",
                  paddingLeft: i > 0 ? "2rem" : 0,
                }}>
                  <p style={{
                    fontSize: "clamp(2rem, 3.5vw, 4rem)",
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

      {/* ── SECTION 5: MONEY SLIDE (dark, full viewport) ─── */}
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
            fontSize: "clamp(7rem, 14vw, 18rem)",
            fontWeight: 900,
            color: "#F97316",
            letterSpacing: "-0.06em",
            lineHeight: 0.85,
            margin: "0 0 1.5rem",
          }}>
            384%
          </p>
          <p style={{
            fontSize: "clamp(1.5rem, 3vw, 3rem)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            margin: "0 0 2.5rem",
          }}>
            Web Traffic Increase.
          </p>
          <p style={{
            fontSize: "1.125rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            maxWidth: "32rem",
            margin: 0,
          }}>
            $34,135 in donations generated through strategic digital storytelling in just 90 days.
          </p>
        </Fade>
      </section>

      {/* ── VOLUNTEER PHOTO BREAK ───────────────────────── */}
      <div style={{ width: "100%", overflow: "hidden", backgroundColor: "#111" }}>
        <img
          src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c3ecafec7_HomeAidGeorgia-296.jpg"
          alt="HomeAid volunteers"
          loading="lazy"
          style={{ width: "100%", height: "65vh", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
        />
      </div>

      {/* ── SECTION 6: THE APPROACH (light) ─────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Approach" />
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#111",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 3.5rem",
            }}>
              Mission-Driven<br />Marketing.
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
              Mozwell Studios leveraged the power of effective brand messaging and compelling storytelling to elevate awareness surrounding HomeAid and its initiatives. Engaging narratives were crafted to resonate across every channel, weaving together the organization's mission, values, and success stories to capture attention and inspire action.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── SECTION 7: THE RESULT (dark) ─────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 3.5rem",
            }}>
              Awareness.<br />Action.<br />Impact.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              maxWidth: "46rem",
              margin: "0 0 4rem",
            }}>
              In 90 days, Mozwell Studios helped HomeAid reach a significantly wider audience, drive meaningful donations, and establish a stronger digital presence. The campaign demonstrated that nonprofit organizations can achieve measurable results through strategic, performance-driven marketing.
            </p>
          </Fade>
          <Fade delay={0.18}>
            <Link
              to="/work"
              style={{
                display: "inline-block",
                backgroundColor: "#F97316",
                color: "#000",
                padding: "1.1rem 2.75rem",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background-color 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#C93A0A"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#F97316"; }}
            >
              View All Work
            </Link>
          </Fade>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .platform-grid { grid-template-columns: 1fr !important; }
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