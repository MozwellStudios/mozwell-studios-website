import React, { useRef, useEffect, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn your brand, goals, and growth opportunities.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We design a clear plan across brand, content, and paid media.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "We produce content, launch campaigns, and build systems.",
  },
  {
    num: "04",
    title: "Optimization",
    desc: "We test, refine, and scale what performs.",
  },
];

function Fade({ children, delay = 0 }) {
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
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 1s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section style={{ backgroundColor: "#000", padding: "10rem 3rem", borderTop: "1px solid #111" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto" }}>

        <Fade>
          <p style={{
            fontSize: "0.65rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
            margin: "0 0 2.5rem", fontWeight: 600,
          }}>
            Process
          </p>
          <h2 style={{
            fontSize: "clamp(3rem, 6vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "-0.045em",
            color: "#fff",
            textTransform: "uppercase",
            lineHeight: 0.9,
            margin: "0 0 8rem",
          }}>
            How We<br />Work.
          </h2>
        </Fade>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "5rem",
          borderTop: "1px solid #1a1a1a",
        }} className="how-grid">
          {steps.map((step, i) => (
            <Fade key={i} delay={i * 0.1}>
              <div style={{ paddingTop: "3.5rem" }}>
                <p style={{
                  fontSize: "clamp(3rem, 5vw, 5.5rem)",
                  fontWeight: 900,
                  color: "#F97316",
                  letterSpacing: "-0.06em",
                  lineHeight: 1,
                  margin: "0 0 2rem",
                }}>
                  {step.num}
                </p>
                <p style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  margin: "0 0 1.25rem",
                  lineHeight: 1.1,
                }}>
                  {step.title}
                </p>
                <p style={{
                  fontSize: "1.125rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .how-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}