import React, { useRef, useEffect, useState } from "react";

export default function ImpactBreak({ line1, line2 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#000",
        padding: "clamp(4rem,8vw,10rem) 3rem",
        borderTop: "1px solid #111",
      }}
    >
      <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
        <p style={{
          fontSize: "clamp(2rem, 5vw, 5.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.045em",
          color: "#fff",
          textTransform: "uppercase",
          lineHeight: 0.92,
          margin: 0,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 1s cubic-bezier(0.25,0.1,0.25,1), transform 1s cubic-bezier(0.25,0.1,0.25,1)",
        }}>
          {line1}{line2 && <><br />{line2}</>}
        </p>
      </div>
    </section>
  );
}