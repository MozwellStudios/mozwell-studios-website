import React, { useState, useEffect } from "react";
import Navbar from "@/components/studio/Navbar.jsx";
import Footer from "@/components/studio/Footer.jsx";
import { base44 } from "@/api/base44Client";

const inputStyle = {
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(0,0,0,0.18)",
  padding: "1rem 0",
  fontSize: "1.125rem",
  color: "#111",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
};

const labelStyle = {
  display: "block",
  fontSize: "0.68rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(0,0,0,0.45)",
  marginBottom: "0.5rem",
  fontWeight: 600,
};

export default function Contact() {
  useEffect(() => { document.title = "Contact — Mozwell Studios"; }, []);
  const [form, setForm] = useState({
    name: "", email: "", company: "",
    budget: "", projectType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: "e@mozwellstudios.com",
      subject: `New Contact Form Submission — ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\nProject Type: ${form.projectType}\n\nMessage:\n${form.message}`,
    });
    setSending(false);
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        backgroundColor: "#000",
        padding: "16rem 3rem 10rem",
      }}>
        <div style={{ maxWidth: "100rem", margin: "0 auto" }}>
          <p style={{
            fontSize: "0.65rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
            margin: "0 0 2.5rem",
          }}>
            Contact
          </p>
          <h1 style={{
            fontSize: "clamp(4rem, 9vw, 11rem)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            lineHeight: 0.88,
            color: "#fff",
            textTransform: "uppercase",
            margin: "0 0 2.5rem",
          }}>
            Let's Build<br />Something.
          </h1>
          <p style={{
            fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6,
            maxWidth: "32rem",
            margin: 0,
          }}>
            Every great project starts with a conversation.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ backgroundColor: "#f7f7f5", padding: "10rem 3rem" }}>
        <div style={{
          maxWidth: "100rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "8rem",
          alignItems: "start",
        }} className="contact-grid">

          {/* LEFT: Form */}
          <div>
            {submitted ? (
              <div style={{ paddingTop: "4rem" }}>
                <p style={{
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "#111",
                  textTransform: "uppercase",
                  lineHeight: 0.95,
                  margin: "0 0 1.5rem",
                }}>
                  Message Sent.
                </p>
                <p style={{ fontSize: "1.125rem", color: "#666", lineHeight: 1.7 }}>
                  We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    type="text" required value={form.name}
                    onChange={set("name")} placeholder="Your full name"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderBottomColor = "#F97316"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(0,0,0,0.18)"}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email" required value={form.email}
                    onChange={set("email")} placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderBottomColor = "#F97316"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(0,0,0,0.18)"}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Company / Brand</label>
                  <input
                    type="text" value={form.company}
                    onChange={set("company")} placeholder="Your company or brand name"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderBottomColor = "#F97316"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(0,0,0,0.18)"}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Budget Range</label>
                  <select
                    value={form.budget} onChange={set("budget")}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                    onFocus={e => e.target.style.borderBottomColor = "#F97316"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(0,0,0,0.18)"}
                  >
                    <option value="" disabled>Select a range</option>
                    <option>Under $5K</option>
                    <option>$5K – $15K</option>
                    <option>$15K – $50K</option>
                    <option>$50K+</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Project Type</label>
                  <select
                    value={form.projectType} onChange={set("projectType")}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                    onFocus={e => e.target.style.borderBottomColor = "#F97316"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(0,0,0,0.18)"}
                  >
                    <option value="" disabled>Select a type</option>
                    <option>Brand Strategy</option>
                    <option>Content Production</option>
                    <option>Performance Marketing</option>
                    <option>Full-Service</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    value={form.message} onChange={set("message")}
                    placeholder="Tell us about your project…"
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "none",
                      borderBottom: "1px solid rgba(0,0,0,0.18)",
                    }}
                    onFocus={e => e.target.style.borderBottomColor = "#F97316"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(0,0,0,0.18)"}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#F97316",
                      color: "#000",
                      border: "none",
                      padding: "1.1rem 3rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "background-color 0.25s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#C93A0A"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F97316"}
                  >
                    {sending ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: Contact info */}
          <div style={{ paddingTop: "0.5rem" }}>
            <p style={{
              fontSize: "0.65rem", letterSpacing: "0.28em",
              textTransform: "uppercase", color: "rgba(0,0,0,0.4)",
              margin: "0 0 3rem", fontWeight: 600,
            }}>
              Direct Contact
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              <div>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", margin: "0 0 0.5rem" }}>Email</p>
                <a
                  href="mailto:hello@mozwellstudios.com"
                  style={{
                    fontSize: "1.125rem",
                    color: "#111",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
                  onMouseLeave={e => e.currentTarget.style.color = "#111"}
                >
                  hello@mozwellstudios.com
                </a>
              </div>

              <div>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", margin: "0 0 0.5rem" }}>Instagram</p>
                <a
                  href="https://instagram.com/mozwellstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "1.125rem",
                    color: "#111",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#F97316"}
                  onMouseLeave={e => e.currentTarget.style.color = "#111"}
                >
                  @mozwellstudios
                </a>
              </div>

              <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "2.5rem", marginTop: "1rem" }}>
                <p style={{
                  fontSize: "1.125rem",
                  color: "rgba(0,0,0,0.45)",
                  lineHeight: 1.7,
                  margin: 0,
                  fontStyle: "italic",
                }}>
                  Based in Los Angeles.<br />Working everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 5rem !important; }
        }
      `}</style>
    </div>
  );
}