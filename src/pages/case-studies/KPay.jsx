import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";

// ── Media slots — swap URLs in visual editor ──────────────────────────────
const kpay_hero_media = "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/299357681_TopView.png";
const kpay_logo_before = "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/bf8299557_Logo_Globe_KP_25B751895Djpg.jpeg";
const kpay_logo_after = "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/7c30cedcd_KPay-Logo-BlueWhite-TransparentBG.png";
// Three logo exploration options (swap in visual editor):
const kpay_logo_explore_1 = "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/cc1f814a9_14.png";
const kpay_logo_explore_2 = "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/b40ac987c_16.png";
const kpay_logo_explore_3 = "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/4fce1dec7_15.png";
const kpay_card = "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/4c7119f22_BizCard.png";
const kpay_mobile = "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/7d511ddd4_MobileTopView.png";
const kpay_web = "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/dcf39b5c6_Laptop26MobileMockupcopy.png";
// Full-bleed product hero (can swap to a dedicated environment shot):
const kpay_environment = "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/581268ad9_KPayWebsiteHomepageMockup-CN_014.png";

const COBALT = "#2975DB";
const C = { maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 4rem)" };

// ── Shared components ─────────────────────────────────────────────────────
function Fade({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {setVisible(true);obs.disconnect();}
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
      ...style
    }}>
      {children}
    </div>);

}

const Label = ({ text, dark = false }) =>
<p style={{
  fontSize: "0.6rem",
  letterSpacing: "0.32em",
  textTransform: "uppercase",
  color: dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.38)",
  fontWeight: 600,
  margin: "0 0 1.75rem"
}}>{text}</p>;


// ── Auto-scroll mockup gallery ────────────────────────────────────────────
const GALLERY_IMGS = [
  kpay_web,
  kpay_mobile,
  kpay_card,
  kpay_environment,
  "https://media.base44.com/images/public/69c6f9ba5088816159f4e607/299357681_TopView.png",
];

function KPayGallery() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.55;
  const H = 400;
  const items = [...GALLERY_IMGS, ...GALLERY_IMGS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div
      style={{ overflow: "hidden", cursor: "grab", userSelect: "none" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div ref={trackRef} style={{ display: "flex", gap: "0.5rem", width: "max-content", willChange: "transform" }}>
        {items.map((src, i) => (
          <div key={i} style={{ flexShrink: 0, height: `${H}px`, overflow: "hidden", backgroundColor: "#e8e8e6" }}>
            <img
              src={src}
              alt=""
              loading="lazy"
              style={{ height: "100%", width: "auto", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
export default function KPay() {
  useEffect(() => {document.title = "KPay — Mozwell Studios";}, []);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Navbar />

      {/* ══ 1. HERO — full-bleed statement ═══════════════════ */}
      <section style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        backgroundColor: "#000"
      }}>
        <img
          src={kpay_hero_media}
          alt="KPay"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            opacity: 0.5
          }} />
        
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 100%)"
        }} />
        <div style={{ position: "relative", zIndex: 1, ...C, paddingBottom: "9rem", width: "100%" }}>
          <Fade>
            <Link to="/work" style={{
              display: "inline-block", marginBottom: "6rem",
              fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.38)", textDecoration: "none"
            }}>
              All Work
            </Link>
            <h1 style={{
              fontSize: "clamp(4rem, 9vw, 10rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              lineHeight: 0.85,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 2.5rem"
            }}>
              KPay.<br />Fintech,<br />refined.
            </h1>
            <p style={{
              fontSize: "clamp(1.1rem, 1.7vw, 1.35rem)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.55,
              margin: "0 0 6rem",
              maxWidth: "34rem"
            }}>
              A brand and platform built for clarity and scale.
            </p>
            <div style={{
              display: "flex", flexWrap: "wrap", gap: "3.5rem",
              borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2.5rem"
            }}>
              {[["Timeline", "12 Weeks"], ["Scope", "Brand + Web + Mobile"], ["Sector", "Fintech"]].map(([l, v]) =>
              <div key={l}>
                  <p style={{ fontSize: "0.52rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", margin: "0 0 0.5rem" }}>{l}</p>
                  <p style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", margin: 0, fontWeight: 600 }}>{v}</p>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </section>

      {/* ══ 2. CONTEXT STRIP ═════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", borderTop: "1px solid #111", borderBottom: "1px solid #111" }}>
        <div style={{ ...C, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem"
          }} className="kpay-context-strip">
            {[
            { label: "Client", value: "KPay International" },
            { label: "Deliverables", value: "Brand, Web, Mobile App" },
            { label: "Timeline", value: "12 Weeks" },
            { label: "Sector", value: "Fintech / Payments" }].
            map((item, i) =>
            <div key={i} style={{ borderLeft: i > 0 ? "1px solid #1a1a1a" : "none", paddingLeft: i > 0 ? "2rem" : 0 }}>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", margin: "0 0 0.5rem", fontWeight: 600 }}>{item.label}</p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.4 }}>{item.value}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══ 3. THE PROBLEM ═══════════════════════════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "12rem clamp(1.5rem,4vw,4rem)" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <Label text="The Problem" />
            <h2 style={{
              fontSize: "clamp(3rem, 6vw, 6.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              textTransform: "uppercase",
              color: "#111",
              lineHeight: 0.88,
              margin: "0 0 7rem",
              maxWidth: "18ch"
            }}>
              The<br />Problem.
            </h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem", borderTop: "1px solid #d8d8d5", paddingTop: "5rem" }} className="kpay-3col">
            {[
            { num: "01", heading: "Crowded market", body: "Hundreds of fintech platforms compete for the same users. Generic presentation blends in, not out." },
            { num: "02", heading: "Lack of clarity", body: "Most platforms overwhelm users with features. KPay needed to lead with simplicity." },
            { num: "03", heading: "Trust deficit", body: "Finance requires credibility from the first impression. The brand had to earn trust before a single transaction." }].
            map((item, i) =>
            <Fade key={i} delay={i * 0.1}>
                <div>
                  <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: COBALT, fontWeight: 700, margin: "0 0 1.25rem" }}>{item.num}</p>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111", letterSpacing: "-0.02em", margin: "0 0 1rem", lineHeight: 1.2 }}>{item.heading}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#666", lineHeight: 1.8, margin: 0, maxWidth: "22rem" }}>{item.body}</p>
                </div>
              </Fade>
            )}
          </div>
        </div>
      </section>

      {/* ══ 4. APPROACH ══════════════════════════════════════ */}
      <section style={{ backgroundColor: "#fff", padding: "12rem clamp(1.5rem,4vw,4rem)", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Approach" />
            <h2 style={{
              fontSize: "clamp(3rem, 6vw, 6.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              textTransform: "uppercase",
              color: "#111",
              lineHeight: 0.88,
              margin: "0 0 2rem"
            }}>
              Designed<br />like infra-<br />structure.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "#888", lineHeight: 1.7, maxWidth: "28rem", margin: "0 0 6rem" }}>
              Four principles. One cohesive system.
            </p>
          </Fade>
          {[
          { num: "01", title: "Positioning", body: "Defined KPay as financial infrastructure, not another app. Premium, reliable, institutional." },
          { num: "02", title: "Brand system", body: "Built a cohesive visual language: cobalt accent, clean wordmark, structured grid, and restrained typography." },
          { num: "03", title: "UX clarity", body: "Stripped the interface to its core actions. Every screen optimized for instant comprehension." },
          { num: "04", title: "Mobile-first thinking", body: "Designed for the device in hand. Every breakpoint intentional, every spacing unit deliberate." }].
          map((pillar, i) =>
          <Fade key={i} delay={i * 0.06}>
              <div style={{
              borderTop: "1px solid #e0e0dd",
              padding: "3.5rem 0",
              display: "grid",
              gridTemplateColumns: "7rem 14rem 1fr",
              gap: "3rem",
              alignItems: "start"
            }} className="kpay-pillar-row">
                <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: COBALT, fontWeight: 700, textTransform: "uppercase", margin: 0 }}>{pillar.num}</p>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111", letterSpacing: "-0.01em", textTransform: "uppercase", margin: 0 }}>{pillar.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#777", lineHeight: 1.8, margin: 0 }}>{pillar.body}</p>
              </div>
            </Fade>
          )}
          <div style={{ borderTop: "1px solid #e0e0dd" }} />
        </div>
      </section>

      {/* ══ 4b. BEFORE / AFTER ═══════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "14rem clamp(1.5rem,4vw,4rem)", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <Label text="The Transformation" dark />
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 0.9,
              margin: "0 0 6rem",
            }}>
              Where they started.<br />
              <span style={{ color: COBALT }}>Where we brought them.</span>
            </h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "#111" }} className="kpay-ba-grid">
            <Fade>
              <div style={{ backgroundColor: "#f7f7f5", padding: "5rem 4rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "28rem" }}>
                <p style={{ fontSize: "0.52rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", fontWeight: 600, margin: "0 0 3.5rem" }}>Before</p>
                <img src={kpay_logo_before} alt="KPay International — original logo" style={{ width: "100%", maxWidth: "300px", objectFit: "contain", display: "block" }} />
              </div>
            </Fade>
            <Fade delay={0.1}>
              <div style={{ backgroundColor: "#0d1a2e", padding: "5rem 4rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "28rem" }}>
                <p style={{ fontSize: "0.52rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(41,117,219,0.6)", fontWeight: 600, margin: "0 0 3.5rem" }}>After</p>
                <img src={kpay_logo_after} alt="KPay — new identity" style={{ width: "100%", maxWidth: "300px", objectFit: "contain", display: "block" }} />
              </div>
            </Fade>
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .kpay-ba-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ══ 5. IDENTITY EXPLORATION — design studio moment ═══ */}
      <section style={{ backgroundColor: "#000", padding: "14rem 0" }}>
        <Fade>
          <div style={{ textAlign: "center", marginBottom: "6rem", padding: "0 clamp(1.5rem,4vw,4rem)" }}>
            <Label text="Identity Exploration" dark />
            <h2 style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 0.9,
              margin: 0
            }}>
              FINDING THE MARK.
            </h2>
          </div>
        </Fade>
        {/* Three explorations — large, centered */}
        <Fade delay={0.1}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: "#111"
          }} className="kpay-explore-grid">
            {[
            { src: kpay_logo_explore_1, slot: "Direction A" },
            { src: kpay_logo_explore_2, slot: "Direction B" },
            { src: kpay_logo_explore_3, slot: "Direction C" }].
            map((item, i) =>
            <div key={i} style={{
              backgroundColor: "#000",
              padding: "6rem 4rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "32rem"
            }}>
                <img
                src={item.src}
                alt={item.slot}
                style={{ width: "100%", maxWidth: "260px", objectFit: "contain", display: "block", marginBottom: "2.5rem" }} />
              
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", margin: 0, fontWeight: 600 }}>{item.slot}</p>
              </div>
            )}
          </div>
        </Fade>
        <Fade delay={0.2}>
          <p style={{
            textAlign: "center",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.22)",
            margin: "3rem 0 0",
            padding: "0 clamp(1.5rem,4vw,4rem)"
          }}>
            Exploration of direction, form, and system thinking.
          </p>
        </Fade>
      </section>

      {/* ══ 6. FINAL IDENTITY — pause moment ════════════════ */}
      <section style={{ backgroundColor: "#000", borderTop: "1px solid #111", padding: "16rem clamp(1.5rem,4vw,4rem)" }}>
        <Fade>
          <div style={{ textAlign: "center" }}>
            <Label text="Final Identity" dark />
            <div style={{ margin: "0 auto 4rem", maxWidth: "420px" }}>
              {/* kpay_logo_after */}
              <img
                src={kpay_logo_after}
                alt="KPay final wordmark"
                style={{ width: "100%", display: "block" }} />
              
            </div>
            <p style={{
              fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.04em",
              margin: 0
            }}>
              The mark we landed on.
            </p>
          </div>
        </Fade>
      </section>

      {/* ══ 7. VISUAL SYSTEM — large, asymmetric ════════════ */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "14rem 0", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ ...C, marginBottom: "5rem" }}>
          <Fade>
            <Label text="Visual System" />
            <h2 style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              textTransform: "uppercase",
              color: "#111",
              lineHeight: 0.88,
              margin: "0 0 1.5rem"
            }}>
              CLARITY AT<br />EVERY<br />TOUCHPOINT.
            </h2>
          </Fade>
        </div>

        <KPayGallery />
      </section>

      {/* ══ 8. PRODUCT HERO MOMENT — second full-bleed ═══════ */}
      <section style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        backgroundColor: "#000"
      }}>
        {/* kpay_environment */}
        <img
          src={kpay_environment}
          alt="KPay product"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.72
          }} />
        
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 60%)"
        }} />
        <div style={{ position: "relative", zIndex: 1, ...C, paddingBottom: "6rem", width: "100%" }}>
          <Fade>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 1.25rem", fontWeight: 600 }}>
              Product Experience
            </p>
            <p style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
              margin: 0,
              lineHeight: 1.15
            }}>
              Built for real use.
            </p>
          </Fade>
        </div>
      </section>

      {/* ══ 9. SCALE — large metrics ═════════════════════════ */}
      <section style={{ backgroundColor: "#fff", padding: "14rem clamp(1.5rem,4vw,4rem)", borderTop: "1px solid #e0e0dd" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Build" />
          </Fade>
          {[
          { stat: "12 weeks", label: "Concept to launch" },
          { stat: "Complete rebrand", label: "Full identity system" },
          { stat: "Web + mobile", label: "Fully responsive" }].
          map(({ stat, label }, i) =>
          <Fade key={i} delay={i * 0.08}>
              <div style={{
              borderTop: "1px solid #e0e0dd",
              padding: "4rem 0",
              display: "flex",
              alignItems: "baseline",
              gap: "3rem"
            }} className="kpay-scale-row">
                <p style={{
                fontSize: "clamp(3rem, 7vw, 7.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.055em",
                color: COBALT,
                lineHeight: 0.9,
                margin: 0,
                flexShrink: 0
              }}>
                  {stat}
                </p>
                <p style={{
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#bbb",
                margin: 0,
                fontWeight: 600
              }}>
                  {label}
                </p>
              </div>
            </Fade>
          )}
          <div style={{ borderTop: "1px solid #e0e0dd" }} />
        </div>
      </section>

      {/* ══ 11. OUTCOME ══════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "14rem clamp(1.5rem,4vw,4rem)", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <Label text="Outcome" dark />
            <h2 style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "-0.055em",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 0.88,
              margin: "0 0 7rem"
            }}>
              OUTCOME.
            </h2>
          </Fade>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "4rem",
            borderTop: "1px solid #1a1a1a",
            paddingTop: "5rem"
          }} className="kpay-3col">
            {[
            { heading: "Brand clarity", body: "Users understand the product at a glance. The brand no longer requires explanation." },
            { heading: "Trust + perception", body: "A premium visual system that communicates reliability before a single interaction." },
            { heading: "Scalable foundation", body: "A brand and product system designed to extend as KPay grows into new markets and features." }].
            map((item, i) =>
            <Fade key={i} delay={i * 0.1}>
                <div style={{ borderLeft: `2px solid ${COBALT}`, paddingLeft: "1.75rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", margin: "0 0 1rem", letterSpacing: "-0.01em", textTransform: "uppercase" }}>{item.heading}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                </div>
              </Fade>
            )}
          </div>
        </div>
      </section>

      {/* ══ 12. CTA / NEXT ═══════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "12rem clamp(1.5rem,4vw,4rem)", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <Fade>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", margin: "0 0 1.5rem" }}>
              Next Project
            </p>
            <Link to="/work/frank-macias" style={{ textDecoration: "none" }}>
              <h2
                style={{
                  fontSize: "clamp(3rem, 7vw, 8rem)",
                  fontWeight: 900,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "-0.05em",
                  lineHeight: 0.88,
                  margin: 0,
                  transition: "color 0.25s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = COBALT}
                onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}>
                
                Frank Macias →
              </h2>
            </Link>
          </Fade>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .kpay-pillar-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
          .kpay-vs-grid { grid-template-columns: 1fr !important; }
          .kpay-details-grid { grid-template-columns: 1fr !important; }
          .kpay-explore-grid { grid-template-columns: 1fr !important; }
          .kpay-context-strip { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .kpay-3col { grid-template-columns: 1fr !important; }
          .kpay-context-strip { grid-template-columns: 1fr !important; }
          .kpay-scale-row { flex-direction: column !important; gap: 0.75rem !important; }
        }
      `}</style>
    </div>);

}