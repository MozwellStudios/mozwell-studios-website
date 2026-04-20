import React from "react";

const names = ["MOZWELL CLAREMONT", "UNION PASADENA", "CHOP N BLOK", "FOUNDRSPACE", "POST HTX", "HOMEAID"];

export default function TrustedBy() {
  return (
    <section style={{ padding: "6rem 0", borderTop: "1px solid #111111", backgroundColor: "#000000" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "0 3rem" }}>
        <p className="reveal" style={{
          fontSize: "0.62rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#444444",
          marginBottom: "2.5rem",
        }}>
          Worked with teams behind
        </p>
        <p className="reveal" style={{
          fontSize: "clamp(1rem, 2.5vw, 1.75rem)",
          fontWeight: 600,
          color: "#2a2a2a",
          letterSpacing: "0.04em",
          lineHeight: 1.5,
          transitionDelay: "0.1s",
          textTransform: "uppercase",
        }}>
          {names.join(" — ")}
        </p>
      </div>
    </section>
  );
}