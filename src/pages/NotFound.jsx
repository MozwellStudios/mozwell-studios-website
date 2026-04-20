import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/studio/Navbar.jsx";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Mozwell Studios";
  }, []);

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "3rem",
      }}>
        <p style={{
          fontSize: "clamp(8rem, 20vw, 20rem)",
          fontWeight: 900,
          letterSpacing: "-0.06em",
          color: "#F97316",
          lineHeight: 0.85,
          margin: "0 0 2rem",
        }}>
          404
        </p>
        <p style={{
          fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
          color: "rgba(255,255,255,0.5)",
          margin: "0 0 3.5rem",
          letterSpacing: "-0.01em",
        }}>
          This page doesn't exist.
        </p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            backgroundColor: "#F97316",
            color: "#000",
            padding: "1rem 2.5rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background-color 0.25s",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#E0620E"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F97316"}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}