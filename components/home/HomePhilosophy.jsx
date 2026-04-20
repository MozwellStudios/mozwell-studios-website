import React, { useRef, useEffect, useState } from "react";

export default function HomePhilosophy() {
  const [vis, setVis] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const f = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1.1s cubic-bezier(0.25,0.1,0.25,1) ${d}s, transform 1.1s cubic-bezier(0.25,0.1,0.25,1) ${d}s`,
  });

  return (
    <section ref={ref} style={{ backgroundColor: "#f7f7f5", padding: "16rem 3rem" }}>
      <div style={{ maxWidth: "88rem", margin: "0 auto" }}>

        <p style={{ ...f(0), fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#bbb", marginBottom: "5rem" }}>
          Philosophy
        </p>

        <h2 style={{
          ...f(0.07),
          fontSize: "clamp(4rem, 10vw, 11rem)",
          fontWeight: 800,
          letterSpacing: "-0.05em",
          lineHeight: 0.88,
          color: "#111",
          textTransform: "uppercase",
          marginBottom: "5rem",
        }}>
          Human taste{" "}
          <span style={{ color: "#F97316" }}>+</span>
          {" "}modern<br />tools.
        </h2>

        <p style={{
          ...f(0.16),
          fontSize: "1.4rem",
          color: "#666",
          lineHeight: 1.6,
          letterSpacing: "-0.01em",
          maxWidth: "38rem",
        }}>
          Technology scales the work.<br />
          Taste makes the work matter.
        </p>
      </div>
    </section>
  );
}