import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";

function FadeBlock({ children, style = {}, delay = 0 }) {
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
      transition: `opacity 0.9s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.9s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
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
    color: dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)",
    fontWeight: 600,
    margin: "0 0 3rem",
  }}>
    {text}
  </p>
);

export default function FoundrSpace() {
  useEffect(() => { document.title = "FoundrSpace — Mozwell Studios"; }, []);
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />

      {/* ─── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
      }}>
        <img
          src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/faff7f815_image.jpg"
          alt="FoundrSpace"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.22,
            animation: "heroZoom 30s ease-in-out infinite alternate",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.7) 100%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "100rem", margin: "0 auto", width: "100%", padding: "0 3rem 8rem" }}>
          <FadeBlock>
            <Link to="/work" style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textDecoration: "none", display: "inline-block", marginBottom: "4rem" }}>
              ← All Work
            </Link>

            <h1 style={{
              fontSize: "clamp(4.5rem, 11vw, 13rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 0.88,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 2.5rem",
            }}>
              Foundr<br />Space
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.5,
              maxWidth: "44rem",
              margin: "0 0 1rem",
              letterSpacing: "-0.01em",
            }}>
              Scaling a coworking brand through content, search, and lead generation.
            </p>
            <p style={{
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              maxWidth: "40rem",
              margin: "0 0 5rem",
            }}>
              A full-stack marketing system designed by Mozwell Studios to drive memberships, events, and long-term community growth.
            </p>

            {/* Stats Row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid #1a1a1a",
              paddingTop: "2.5rem",
              gap: "2rem",
            }} className="hero-stats-grid">
              {[
                { value: "600+", label: "Leads Generated" },
                { value: "2,000+", label: "Email Subscribers" },
                { value: "#1", label: "Ranking on Google" },
                { value: "Sold Out", label: "Offices" },
              ].map((s, i) => (
                <div key={i}>
                  <p style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.8rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 0.5rem" }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "0.8125rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", margin: 0, fontWeight: 600 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.04em",
              lineHeight: 1.7,
              maxWidth: "44rem",
              marginTop: "2.5rem",
              borderTop: "1px solid #111",
              paddingTop: "2rem",
            }}>
              Mozwell Studios designed the marketing system behind FoundrSpace's growth — generating hundreds of leads and filling offices within months.
            </p>
          </FadeBlock>
        </div>

        <style>{`@keyframes heroZoom { from { transform: scale(1); } to { transform: scale(1.07); } }`}</style>
      </section>

      {/* ─── SECTION 2: THE OPPORTUNITY (light) ──────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "11rem 3rem" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }} className="two-col-grid">
          <FadeBlock>
            <SectionLabel text="The Opportunity" />
          </FadeBlock>
          <FadeBlock delay={0.08}>
            <p style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", color: "#222", lineHeight: 1.65, letterSpacing: "-0.015em", margin: 0, fontWeight: 400 }}>
              FoundrSpace launched with a clear vision: create a modern coworking platform for entrepreneurs, creators, and remote professionals in the Inland Empire. But like many new coworking concepts, the challenge wasn't the space — it was consistent demand. Mozwell Studios partnered with FoundrSpace to design a marketing system capable of generating leads, building brand authority, and filling offices at scale.
            </p>
          </FadeBlock>
        </div>
      </section>

      {/* ─── SECTION 3: COMPETING ON EVERY FRONT (dark) ──────────── */}
      <section style={{ backgroundColor: "#000", padding: "11rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <FadeBlock>
            <SectionLabel text="Competing On Every Front." dark />
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "-0.045em",
              color: "#fff",
              lineHeight: 0.92,
              textTransform: "uppercase",
              margin: "0 0 4rem",
              maxWidth: "52rem",
            }}>
              Competing on<br />every front.
            </h2>
          </FadeBlock>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "8rem", alignItems: "start" }} className="two-col-grid">
            <FadeBlock delay={0.08}>
              <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "#666", lineHeight: 1.85, margin: "0 0 3rem" }}>
                Coworking spaces compete not only with other coworking brands, but with traditional office leases, remote work, and home offices. Mozwell Studios developed a multi-channel strategy designed to win across every touchpoint. The result was a system designed not just to generate traffic, but to convert interest into memberships.
              </p>
            </FadeBlock>
            <FadeBlock delay={0.12}>
              <div style={{ borderLeft: "1px solid #1a1a1a", paddingLeft: "3rem" }}>
                {["Search visibility", "Paid lead generation", "Content marketing", "Community events", "Email growth and retention"].map((item, i) => (
                  <div key={i} style={{ padding: "1.25rem 0", borderBottom: "1px solid #111" }}>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em", margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </FadeBlock>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: A SYSTEM BUILT TO SCALE (light) ──────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "11rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <FadeBlock>
            <SectionLabel text="A System Built To Scale." />
          </FadeBlock>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start" }} className="two-col-grid">
            <FadeBlock delay={0.06}>
              <h2 style={{
                fontSize: "clamp(2.5rem, 4.5vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#111",
                lineHeight: 0.93,
                textTransform: "uppercase",
                margin: "0 0 2.5rem",
              }}>
                A full<br />marketing<br />stack.
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.8, margin: 0 }}>
                Mozwell Studios implemented a full marketing stack designed to attract, convert, and nurture prospective members.
              </p>
            </FadeBlock>
            <FadeBlock delay={0.12}>
              {[
                "Local lead generation campaigns",
                "Google search marketing for coworking keywords",
                "Retargeting and paid social advertising",
                "Landing pages optimized for workspace tours",
                "Email capture and nurturing campaigns",
                "Event marketing and community activations",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", padding: "1.5rem 0", borderBottom: "1px solid #e0e0dd" }}>
                  <span style={{ fontSize: "0.52rem", color: "#F97316", fontWeight: 700, letterSpacing: "0.1em", minWidth: "1.5rem", paddingTop: "0.2rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "1rem", color: "#333", lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </FadeBlock>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: THE NUMBERS (dark) ───────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "11rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <FadeBlock>
            <SectionLabel text="The Numbers." dark />
          </FadeBlock>

          {/* 4-stat grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid #1a1a1a", marginBottom: "8rem" }} className="stats-4-grid">
            {[
              { value: "600+", label: "Qualified Leads", caption: "Generated Through Paid Campaigns" },
              { value: "2,000+", label: "Email Subscribers", caption: "Captured Through Landing Pages" },
              { value: "224", label: "First Campaign Leads", caption: "Within Initial Launch Window" },
              { value: "#1", label: "Google Ranking", caption: "Coworking Rancho Cucamonga" },
            ].map((s, i) => (
              <FadeBlock key={i} delay={i * 0.07} style={{ padding: "3rem 2rem 3rem 0", borderRight: i < 3 ? "1px solid #1a1a1a" : "none", paddingLeft: i > 0 ? "2rem" : 0 }}>
                <p style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.045em", lineHeight: 1, margin: "0 0 0.6rem" }}>
                  {s.value}
                </p>
                <p style={{ fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", margin: "0 0 0.4rem", fontWeight: 600 }}>
                  {s.label}
                </p>
                <p style={{ fontSize: "0.875rem", letterSpacing: "0.02em", color: "rgba(255,255,255,0.5)", margin: 0 }}>
                  {s.caption}
                </p>
              </FadeBlock>
            ))}
          </div>

          {/* Occupancy callout */}
          <FadeBlock>
            <div style={{ borderTop: "1px solid #111", paddingTop: "10rem", paddingBottom: "10rem", textAlign: "center" }}>
              <p style={{
                fontSize: "clamp(6rem, 18vw, 14rem)",
                fontWeight: 900,
                letterSpacing: "-0.06em",
                color: "#fff",
                lineHeight: 0.85,
                margin: "0 0 2rem",
              }}>
                ~96%
              </p>
              <p style={{
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "-0.01em",
                maxWidth: "34rem",
                margin: "0 auto",
                lineHeight: 1.7,
                fontWeight: 400,
              }}>
                Occupancy within 18 months of launch.
              </p>
            </div>
          </FadeBlock>
        </div>
      </section>

      {/* ─── SECTION 6: FROM EMPTY SPACE TO COMMUNITY (light) ────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "11rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }} className="two-col-grid">
          <FadeBlock>
            <SectionLabel text="From Empty Space To Community." />
          </FadeBlock>
          <FadeBlock delay={0.08}>
            <p style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", color: "#222", lineHeight: 1.65, letterSpacing: "-0.015em", margin: 0 }}>
              Within months, the strategy began to compound. Lead generation campaigns drove a consistent stream of prospective members while local search optimization positioned FoundrSpace as the top coworking destination in Rancho Cucamonga. Combined with targeted event marketing and community programming, the space quickly transformed from a new concept into a fully active workspace hub.
            </p>
          </FadeBlock>
        </div>
      </section>

      {/* ─── SECTION 7: #1 ON GOOGLE (dark) ──────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "11rem 3rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }} className="two-col-grid">
          <FadeBlock>
            <SectionLabel text="#1 On Google." dark />
            <h2 style={{
              fontSize: "clamp(3rem, 6vw, 7.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#fff",
              lineHeight: 0.88,
              textTransform: "uppercase",
              margin: "0 0 2.5rem",
            }}>
              #1 on<br />Google.
            </h2>
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.85, margin: 0 }}>
              Mozwell Studios implemented a search strategy designed to dominate local coworking queries. Today, FoundrSpace ranks #1 on Google for coworking in Rancho Cucamonga, capturing high-intent traffic from entrepreneurs, freelancers, and growing teams searching for workspace. Organic search continues to drive consistent leads and new memberships.
            </p>
          </FadeBlock>
          <FadeBlock delay={0.1}>
            <div style={{ backgroundColor: "#0a0a0a", border: "1px solid #1a1a1a", padding: "3.5rem" }}>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", margin: "0 0 1.5rem" }}>Google Search</p>
              <p style={{ fontSize: "0.65rem", color: "#555", margin: "0 0 2rem", letterSpacing: "0.04em" }}>coworking space rancho cucamonga</p>
              <div style={{ borderLeft: "3px solid #F97316", paddingLeft: "1.25rem", marginBottom: "2rem" }}>
                <p style={{ fontSize: "0.78rem", color: "#4A9EFF", margin: "0 0 0.25rem" }}>FoundrSpace — Rancho Cucamonga Coworking</p>
                <p style={{ fontSize: "0.6rem", color: "#555", margin: "0 0 0.5rem" }}>foundrspace.com/rancho-cucamonga</p>
                <p style={{ fontSize: "0.65rem", color: "#666", margin: 0, lineHeight: 1.6 }}>Flexible coworking, private offices, and event space in Rancho Cucamonga.</p>
              </div>
              <div style={{ padding: "1.5rem", backgroundColor: "#111", display: "flex", alignItems: "center", gap: "1.25rem" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 900, color: "#F97316", lineHeight: 1 }}>#1</span>
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.7 }}>Organic ranking<br />Rancho Cucamonga coworking</p>
              </div>
            </div>
          </FadeBlock>
        </div>
      </section>

      {/* ─── SECTION 8: COMMUNITY ACTIVATION (light) ─────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "11rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "6rem", alignItems: "start" }} className="two-col-grid">
          <FadeBlock>
            <SectionLabel text="Community Activation." />
          </FadeBlock>
          <FadeBlock delay={0.08}>
            <p style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", color: "#222", lineHeight: 1.65, letterSpacing: "-0.015em", margin: 0 }}>
              Mozwell Studios also supported promotional campaigns for events hosted at FoundrSpace. Paid media campaigns promoted two live comedy shows at the space, both of which sold out. These events demonstrated how the platform could activate its growing audience and bring the local community into the space.
            </p>
          </FadeBlock>
        </div>
      </section>

      {/* ─── SECTION 9: THE RESULT (dark) ────────────────────────── */}
      <section style={{ backgroundColor: "#000", padding: "11rem 3rem 14rem", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <FadeBlock>
            <SectionLabel text="The Result." dark />
          </FadeBlock>

          <div style={{ borderTop: "1px solid #111", marginBottom: "5rem" }}>
            {[
              "Fully leased offices",
              "A growing email audience",
              "Consistent monthly leads",
              "Strong search visibility",
              "A thriving coworking community",
            ].map((item, i) => (
              <FadeBlock key={i} delay={i * 0.08}>
                <div style={{
                  borderBottom: "1px solid #111",
                  padding: "2.5rem 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "2.5rem",
                }}>
                  <span style={{ fontSize: "0.52rem", letterSpacing: "0.18em", color: "#F97316", fontWeight: 700, minWidth: "1.5rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{
                    fontSize: "clamp(1.5rem, 3vw, 3rem)",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    margin: 0,
                    lineHeight: 1,
                  }}>
                    {item}
                  </p>
                </div>
              </FadeBlock>
            ))}
          </div>

          <FadeBlock delay={0.4}>
            <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: 1.75, maxWidth: "44rem" }}>
              What began as a single coworking location is now a scalable platform for future growth.
            </p>
          </FadeBlock>
        </div>
      </section>

      {/* ─── NEXT PROJECT ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "8rem 3rem", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", margin: "0 0 0.5rem" }}>Next Project</p>
            <h3 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#111", textTransform: "uppercase", margin: 0 }}>Mozwell Claremont</h3>
          </div>
          <Link
            to="/work/mozwell-claremont"
            style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#111", textDecoration: "none", borderBottom: "1px solid #111", paddingBottom: "2px", transition: "color 0.25s, border-color 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.color = "#F97316"; e.currentTarget.style.borderColor = "#F97316"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#111"; e.currentTarget.style.borderColor = "#111"; }}
          >
            View Case Study →
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .two-col-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .stats-4-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-4-grid { grid-template-columns: 1fr !important; }
          .hero-stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}