import React, { useEffect, useRef, useState } from "react";

const clients = [
  "MOZWELL CLAREMONT",
  "UNION PASADENA",
  "CHOP N BLOK",
  "FOUNDRSPACE",
  "POST HTX",
  "HOMEAID",
];

const bgNames = [
  ...clients, ...clients, ...clients
];

export default function WhyMozwell() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [clientsVisible, setClientsVisible] = useState([]);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          setHeadlineVisible(true);
          clients.forEach((_, i) => {
            setTimeout(() => {
              setClientsVisible((prev) => [...prev, i]);
            }, 300 + i * 120);
          });
          intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % clients.length);
          }, 1200);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const positions = [
    { top: "8%", left: "5%", rotate: "-3deg" },
    { top: "15%", right: "8%", rotate: "2deg" },
    { top: "35%", left: "12%", rotate: "-1deg" },
    { top: "28%", right: "15%", rotate: "4deg" },
    { top: "55%", left: "6%", rotate: "-2deg" },
    { top: "60%", right: "5%", rotate: "1deg" },
    { top: "75%", left: "18%", rotate: "3deg" },
    { top: "80%", right: "12%", rotate: "-4deg" },
    { top: "45%", left: "38%", rotate: "2deg" },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#000000",
        padding: "10rem 3rem",
        overflow: "hidden",
      }}
    >
      {/* Scattered bg brand names */}
      {bgNames.slice(0, 9).map((name, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            fontSize: "clamp(0.7rem, 1.5vw, 1rem)",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.04)",
            textTransform: "uppercase",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            transform: `rotate(${positions[i % positions.length]?.rotate || "0deg"})`,
            ...positions[i % positions.length],
          }}
        >
          {name}
        </div>
      ))}

      <div style={{ maxWidth: "100rem", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "5rem" }}>
          <p style={{
            fontSize: "0.62rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#444444",
            marginBottom: "2rem",
            opacity: headlineVisible ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}>
            Built for hospitality
          </p>
          <h2 style={{
            fontSize: "clamp(3rem, 7vw, 8rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 0.92,
            color: "#ffffff",
            textTransform: "uppercase",
            opacity: headlineVisible ? 1 : 0,
            transform: headlineVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s cubic-bezier(0.25,0.1,0.25,1), transform 0.9s cubic-bezier(0.25,0.1,0.25,1)",
          }}>
            Proven across<br />
            <span style={{ color: "#F97316" }}>industries.</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {clients.map((name, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid #141414",
                padding: "1.5rem 0",
                opacity: clientsVisible.includes(i) ? 1 : 0,
                transform: clientsVisible.includes(i) ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 0.6s cubic-bezier(0.25,0.1,0.25,1), transform 0.6s cubic-bezier(0.25,0.1,0.25,1)",
              }}
            >
              <p style={{
                fontSize: "clamp(1.5rem, 4vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: activeIndex === i ? "#F97316" : "#1E1E1E",
                transition: "color 0.5s cubic-bezier(0.25,0.1,0.25,1)",
                lineHeight: 1,
                textTransform: "uppercase",
              }}>
                {name}
              </p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #141414" }} />
        </div>

        <p style={{
          fontSize: "0.62rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#333333",
          marginTop: "4rem",
          opacity: headlineVisible ? 1 : 0,
          transition: "opacity 1.2s ease 0.5s",
        }}>
          Hospitality &nbsp;·&nbsp; Events &nbsp;·&nbsp; Professional Services &nbsp;·&nbsp; Commerce &nbsp;·&nbsp; Creators
        </p>
      </div>
    </section>
  );
}