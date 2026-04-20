import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";

function Fade({ children, delay = 0, style = {} }) {
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
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

const SectionLabel = ({ text, dark = false }) => (
  <p style={{
    fontSize: "0.68rem",
    letterSpacing: "0.28em",
    textTransform: "uppercase",
    color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
    margin: "0 0 2.5rem",
    fontWeight: 600,
  }}>{text}</p>
);

const roleItems = [
  {
    label: "Strategy",
    items: ["Event positioning", "Audience definition", "Experience design"],
  },
  {
    label: "Revenue",
    items: ["Sponsorship package creation", "Partner outreach and negotiation", "Sponsor relationship management"],
  },
  {
    label: "Marketing",
    items: ["Paid media direction", "Influencer strategy", "Content framework"],
  },
  {
    label: "Execution",
    items: ["Vendor and activation coordination", "Internal team collaboration", "Launch delivery"],
  },
];

const process = [
  { num: "01", label: "Define the experience" },
  { num: "02", label: "Build monetization structure" },
  { num: "03", label: "Secure partners" },
  { num: "04", label: "Launch and execute" },
];

export default function PostHTX() {
  useEffect(() => { document.title = "POST HTX — Mozwell Studios"; }, []);
  const [heroVideoOpacity, setHeroVideoOpacity] = useState(0);
  const [heroImgOpacity, setHeroImgOpacity] = useState(0.3);
  const timerRef = useRef(null);
  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />

      {/* HERO */}
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
          src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/933e5675e_XAtrium-posthtx.jpg"
          alt="POST HTX"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: heroImgOpacity, transition: "opacity 0.8s ease" }}
        />
        <iframe
          src="https://player.vimeo.com/video/688986798?background=1&autoplay=1&loop=1&muted=1&autopause=0&player_id=0&app_id=58479"
          loading="eager"
          allow="autoplay; fullscreen"
          title="POST HTX hero"
          onLoad={() => { timerRef.current = setTimeout(() => { setHeroVideoOpacity(1); setHeroImgOpacity(0); }, 2000); }}
          style={{
            position: "absolute",
            top: "-10%", left: "-10%",
            width: "120%", height: "120%",
            border: "none",
            pointerEvents: "none",
            opacity: heroVideoOpacity,
            transition: "opacity 0.8s ease",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.7) 100%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, padding: "0 3rem 8rem", maxWidth: "100rem", margin: "0 auto", width: "100%" }}>
          <Fade>
            <Link to="/work" style={{
              display: "inline-block", marginBottom: "5rem",
              fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", textDecoration: "none",
            }}>← All Work</Link>

            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 2rem" }}>Houston, TX</p>

            <h1 style={{
              fontSize: "clamp(3rem, 7vw, 9rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.88,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 2rem",
            }}>
              POST HTX
            </h1>

            <p style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: "0 0 4rem", maxWidth: "40rem" }}>
              Launch Strategy &amp; Sponsorship
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2.5rem", gap: "2rem" }} className="hero-stats">
              {[
                { value: "$100K+", label: "Sponsorship Revenue" },
                { value: "40,000+", label: "Attendees" },
                { value: "60 Days", label: "Execution Timeline" },
              ].map((s, i) => (
                <div key={i}>
                  <p style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 0.5rem" }}>{s.value}</p>
                  <p style={{ fontSize: "0.8125rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", margin: 0, fontWeight: 600 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Overview" />
            <p style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)", color: "#222", lineHeight: 1.85, margin: 0 }}>
              Mozwell was brought in as part of the internal marketing arm to help structure, monetize, and execute the POST HTX grand opening. The focus was not just awareness. It was building a scalable launch system that generated revenue before doors opened.
            </p>
          </Fade>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Challenge" dark />
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: "0 0 3.5rem",
            }}>
              More than<br />awareness.
            </h2>
          </Fade>
          <Fade delay={0.1}>
            <p style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.25rem)", color: "rgba(255,255,255,0.6)", lineHeight: 1.85, maxWidth: "48rem", margin: 0 }}>
              Most venue launches rely on awareness campaigns alone. POST HTX required a system that could generate sponsorship revenue, drive attendance, and create long-term event infrastructure.
            </p>
          </Fade>
        </div>
      </section>

      {/* OUR ROLE */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Our Role" />
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", textTransform: "uppercase", lineHeight: 0.95, margin: "0 0 6rem" }}>
              Operator-led.<br />End to end.
            </h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} className="role-grid">
            {roleItems.map((r, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div style={{
                  padding: "3rem",
                  borderTop: "1px solid #d8d8d5",
                  borderRight: i % 2 === 0 ? "1px solid #d8d8d5" : "none",
                  paddingLeft: i % 2 === 1 ? "3rem" : "0",
                }}>
                  <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#111", margin: "0 0 1.25rem", letterSpacing: "-0.01em" }}>{r.label}</p>
                  {r.items.map((item, j) => (
                    <p key={j} style={{ fontSize: "0.9375rem", color: "#555", lineHeight: 1.65, margin: "0 0 0.4rem" }}>{item}</p>
                  ))}
                </div>
              </Fade>
            ))}
            <div style={{ gridColumn: "1 / -1", borderTop: "1px solid #d8d8d5" }} />
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section style={{ backgroundColor: "#000", padding: "0" }}>
        {/* Full-bleed atrium */}
        <div style={{ width: "100%", overflow: "hidden" }}>
          <img
            src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/933e5675e_XAtrium-posthtx.jpg"
            alt="POST HTX Atrium"
            loading="lazy"
            style={{ width: "100%", height: "70vh", objectFit: "cover", display: "block" }}
          />
        </div>
        {/* Two-column bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr" }} className="posthtx-photo-row">
          <img
            src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/4210b4eef_grandopening-nightlifeactivation2-posthtx.jpg"
            alt="Grand Opening Nightlife"
            loading="lazy"
            style={{ width: "100%", height: "60vh", objectFit: "cover", display: "block" }}
          />
          <img
            src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/3e8ba442d_grandopening-nightlifeactivation-posthtx.jpg"
            alt="Grand Opening Lasers"
            loading="lazy"
            style={{ width: "100%", height: "60vh", objectFit: "cover", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", padding: "1.25rem 3rem", margin: 0 }}>
          POST HTX Grand Opening — Houston, TX
        </p>
        <style>{`@media (max-width: 600px) { .posthtx-photo-row { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* RESULTS */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Results" dark />
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", textTransform: "uppercase", lineHeight: 0.95, margin: "0 0 6rem" }}>
              The Numbers.
            </h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #1a1a1a" }} className="results-grid">
            {[
              { value: "$100K+", label: "Sponsorship Revenue Secured" },
              { value: "40,000+", label: "Attendees" },
              { value: "60 Days", label: "Full Execution Timeline" },
            ].map((s, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div style={{
                  padding: "3.5rem 2rem 3.5rem 0",
                  borderRight: i < 2 ? "1px solid #1a1a1a" : "none",
                  paddingLeft: i > 0 ? "2rem" : 0,
                }}>
                  <p style={{ fontSize: "clamp(2.5rem, 4.5vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#F97316", lineHeight: 1, margin: "0 0 0.75rem" }}>{s.value}</p>
                  <p style={{ fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: 0 }}>{s.label}</p>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.3}>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", fontStyle: "italic", marginTop: "3rem" }}>
              Created a repeatable framework for future POST HTX events.
            </p>
          </Fade>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="Process" />
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", textTransform: "uppercase", lineHeight: 0.95, margin: "0 0 6rem" }}>
              How We<br />Executed It.
            </h2>
          </Fade>
          {process.map((p, i) => (
            <Fade key={i} delay={i * 0.1}>
              <div style={{ borderTop: "1px solid #d8d8d5", padding: "2.5rem 0", display: "flex", gap: "3rem", alignItems: "center" }}>
                <span style={{ fontSize: "0.65rem", color: "#F97316", fontWeight: 700, letterSpacing: "0.1em", minWidth: "2rem" }}>{p.num}</span>
                <p style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)", fontWeight: 700, color: "#111", letterSpacing: "-0.025em", margin: 0 }}>{p.label}</p>
              </div>
            </Fade>
          ))}
          <div style={{ borderTop: "1px solid #d8d8d5" }} />
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Fade>
            <p style={{
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              fontWeight: 500,
              color: "#fff",
              lineHeight: 1.4,
              letterSpacing: "-0.02em",
              margin: "0 auto 5rem",
              maxWidth: "60rem",
            }}>
              Mozwell operates at the intersection of creative, strategy, and revenue. Not just content.
            </p>
          </Fade>
          <Fade delay={0.1}>
            <Link
              to="/work"
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.25)",
                paddingBottom: "3px",
                transition: "color 0.25s, border-color 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#F97316"; e.currentTarget.style.borderColor = "#F97316"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
            >
              Explore More Work →
            </Link>
          </Fade>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hero-stats { grid-template-columns: 1fr 1fr !important; }
          .role-grid { grid-template-columns: 1fr !important; }
          .results-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}