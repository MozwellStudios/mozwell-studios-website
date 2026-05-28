import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = scrolled ? "rgba(10,10,10,0.96)" : "rgba(0,0,0,0)";
  const textColor = "#fff";
  const mutedColor = scrolled ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.45)";
  const borderColor = scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)";

  const links = [
    { label: "Work", to: "/work" },
    { label: "Services", to: "/services" },
    { label: "Studio", to: "/studio" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.35s cubic-bezier(0.25,0.1,0.25,1)",
      backgroundColor: bg,
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: `1px solid ${borderColor}`,
      padding: scrolled ? "1rem 0" : "1.6rem 0",
    }}>
      <div style={{ maxWidth: "100rem", margin: "0 auto", padding: "0 clamp(1.25rem, 3vw, 3rem)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}>
          <img
            src="https://media.base44.com/images/public/69c6f9ba5088816159f4e607/0f58e0bca_Mozwell_Script_Logo_Final_072019_thicker.png"
            alt="Mozwell Studios"
            style={{ height: "38px", width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop nav — hidden on mobile via inline media query */}
        <div className="navbar-desktop-links" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {links.map((link) => {
            const active = location.pathname === link.to || location.pathname.startsWith(link.to + "/");
            return (
              <Link
                key={link.label}
                to={link.to}
                style={{
                  fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase",
                  color: active ? "#fff" : mutedColor,
                  textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => { if (!active) e.target.style.color = mutedColor; }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Hamburger — hidden on desktop */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-hamburger"
          style={{
            background: scrolled ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#fff",
            transition: "all 0.35s cubic-bezier(0.25,0.1,0.25,1)",
            padding: "0.5rem",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "40px",
            minHeight: "40px",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <style>{`
        .navbar-desktop-links { display: flex; }
        .navbar-hamburger { display: none; }
        @media (max-width: 768px) {
          .navbar-desktop-links { display: none !important; }
          .navbar-hamburger { display: flex !important; align-items: center; justify-content: center; position: relative; z-index: 51; }
        }
      `}</style>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(5,5,5,0.99)",
          zIndex: 49,
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start",
          padding: "0 clamp(2rem,8vw,4rem)",
        }}>
          {links.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(2.5rem, 10vw, 4rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                lineHeight: 1.1,
                display: "block",
                marginBottom: "0.5rem",
                opacity: 0,
                animation: `menuItemIn 0.4s cubic-bezier(0.25,0.1,0.25,1) ${i * 0.06 + 0.05}s forwards`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <style>{`
            @keyframes menuItemIn {
              from { opacity: 0; transform: translateY(16px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </nav>
  );
}