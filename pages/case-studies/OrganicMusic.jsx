import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";

function Fade({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ text, dark = true }) {
  return (
    <p style={{
      fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase",
      color: dark ? "rgba(255,255,255,0.4)" : "#999",
      marginBottom: "4rem", fontWeight: 600,
    }}>{text}</p>
  );
}

const stats = [
  { num: "353%", label: "Revenue Growth" },
  { num: "8x", label: "Return on Ad Spend" },
  { num: "Long-Term", label: "Partnership" },
  { num: "Multi-Platform", label: "Campaign Strategy" },
];

const statements = [
  "Innovative ad creative that captures attention.",
  "Precision targeting that reaches the right audience.",
  "Continuous optimization that compounds results.",
];

export default function OrganicMusic() {
  useEffect(() => {
    document.title = "Organic Music Marketing - Mozwell Studios";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.name = "description";
    meta.content = "How Mozwell helped Organic Music Marketing achieve 353% revenue growth and 8x ROAS through strategic digital campaigns.";
    document.head.appendChild(meta);
  }, []);

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section style={{ minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden", backgroundColor: "#000" }}>
        <img
          src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/c69239e19_ManHoldingNewiPhoneMockup2021-OrganicMusicMarketing.png"
          alt="Organic Music Marketing"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.45 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.7) 100%)" }} />
      <div style={{ position: "relative", zIndex: 1, padding: "0 3rem 10rem", maxWidth: "100rem", margin: "0 auto", width: "100%" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto", width: "100%" }}>
          <Fade>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "2.5rem" }}>
              Case Study
            </p>
            <h1 style={{
              fontSize: "clamp(3.5rem, 9vw, 11rem)", fontWeight: 900, letterSpacing: "-0.05em",
              lineHeight: 0.87, color: "#fff", textTransform: "uppercase", margin: "0 0 1.5rem",
            }}>
              Organic Music<br />Marketing
            </h1>
            <p style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", color: "rgba(255,255,255,0.55)", margin: "0 0 5rem", maxWidth: "42rem" }}>
              Digital Marketing for the Music Industry
            </p>
          </Fade>
          <Fade delay={0.15}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem", borderTop: "1px solid #1a1a1a", paddingTop: "3rem" }}>
              {[
                ["Client", "Organic Music Marketing"],
                ["Timeline", "Long-Term"],
                ["Services", "Digital Marketing"],
                ["Website", "OrganicMusicMarketing.com"],
              ].map(([label, val]) => (
                <div key={label}>
                  <p style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 0.5rem" }}>{label}</p>
                  <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", margin: 0, fontWeight: 600 }}>{val}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
        </div>
      </section>

      {/* OPPORTUNITY */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Opportunity" dark={false} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start" }} className="om-two-col">
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", textTransform: "uppercase", lineHeight: 0.9, margin: 0 }}>
                Strong<br />relationships.<br />Bigger scale.
              </h2>
              <div>
                <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#F97316", marginBottom: "2.5rem" }} />
                <p style={{ fontSize: "1.25rem", color: "#444", lineHeight: 1.75, margin: 0 }}>
                  Organic Music Marketing helps independent artists and labels grow through strategic promotion. They had strong industry relationships but needed a performance marketing engine to scale their digital revenue.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <style>{`@media (max-width: 768px) { .om-two-col { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* APPROACH */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Approach" dark={true} />
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }} className="om-two-col">
            {[
              {
                title: "Ad Creative + Strategy",
                desc: "We built compelling ad visuals and messaging tailored to resonate with music audiences. Every campaign was designed to capture attention and convert.",
              },
              {
                title: "Precision Targeting",
                desc: "Advanced audience segmentation across multiple platforms ensured the right message reached the right listeners. We optimized continuously for maximum engagement and conversions.",
              },
            ].map((item, i) => (
              <Fade key={i} delay={i * 0.15}>
                <div>
                  <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#F97316", marginBottom: "2rem" }} />
                  <h3 style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)", fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* BIG NUMBER SLIDE */}
      <section style={{ backgroundColor: "#000", padding: "14rem 3rem", borderTop: "1px solid #111", textAlign: "center" }}>
        <Fade>
          <p style={{
            fontSize: "clamp(6rem, 16vw, 16rem)", fontWeight: 900, letterSpacing: "-0.05em",
            color: "#F97316", lineHeight: 0.85, margin: "0 0 2rem",
          }}>
            353%
          </p>
          <p style={{ fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)", color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em", margin: 0 }}>
            revenue growth.
          </p>
        </Fade>
      </section>

      {/* THE NUMBERS */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Numbers" dark={false} />
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "4rem", borderTop: "1px solid #e0e0dd", paddingTop: "5rem" }} className="om-stats-grid">
            {stats.map((s, i) => (
              <Fade key={i} delay={i * 0.1}>
                <div>
                  <p style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.05em", lineHeight: 1, margin: "0 0 0.75rem" }}>
                    {s.num}
                  </p>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#555", margin: 0, fontWeight: 600 }}>
                    {s.label}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .om-stats-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      {/* THE ENGINE */}
      <section style={{ backgroundColor: "#000", padding: "12rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Engine" dark={true} />
          </Fade>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {statements.map((line, i) => (
              <Fade key={i} delay={i * 0.12}>
                <h3 style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 3.5rem)", fontWeight: 800, color: "#fff",
                  letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0,
                  borderTop: "1px solid #1a1a1a", paddingTop: "4rem", paddingBottom: "4rem",
                }}>
                  {line}
                </h3>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <Fade>
            <SectionLabel text="The Result" dark={false} />
            <p style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", color: "#444", lineHeight: 1.7, maxWidth: "52rem", margin: "0 0 4rem" }}>
              Through strategic campaigns and relentless optimization, we helped Organic Music Marketing achieve a 353% surge in online revenue. Multiple campaigns hit 8x ROAS, driving the company to new levels of digital success.
            </p>
            <p style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 900, color: "#111", letterSpacing: "-0.03em", textTransform: "uppercase", margin: 0 }}>
              Creative. Targeted. Scalable.
            </p>
          </Fade>
        </div>
      </section>

      {/* Next project */}
      <section style={{ backgroundColor: "#000", padding: "8rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 1.5rem" }}>Next Project</p>
          <Link to="/work/frank-macias" style={{ textDecoration: "none" }}>
            <h2
              style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.045em", lineHeight: 0.9, margin: 0, transition: "color 0.25s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
              onMouseLeave={e => e.currentTarget.style.color = "#fff"}
            >
              Frank Macias
            </h2>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}