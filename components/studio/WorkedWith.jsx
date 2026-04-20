import React from "react";

const names = ["MOZWELL CLAREMONT", "UNION PASADENA", "CHOP N BLOK", "FOUNDRSPACE", "POST HTX", "HOMEAID"];

export default function WorkedWith() {
  return (
    <section style={{ padding: "7rem 0", borderTop: "1px solid #E5E5E5", textAlign: "center" }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "0 3rem" }}>
        <p className="reveal" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555555", marginBottom: "2.5rem" }}>
          Worked with teams behind
        </p>
        <div className="reveal" style={{ fontSize: "clamp(1rem, 2.5vw, 1.75rem)", fontWeight: 500, color: "#555555", letterSpacing: "0.05em", lineHeight: 1.6 }}>
          {names.join(" — ")}
        </div>
      </div>
    </section>
  );
}