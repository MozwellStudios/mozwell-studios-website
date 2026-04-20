import React, { useState } from "react";
import { Link } from "react-router-dom";

const goals = [
  {
    id: "restaurant",
    label: "Restaurant / Hospitality",
    roas: 10.2,
    metric: "reservations driven",
    caseStudy: "Chop N' Blok — 10.2x ROAS, 522 reservations in Q1",
    link: "/work/chop-n-blok",
    revenueMultiplier: 10.2,
  },
  {
    id: "events",
    label: "Private Events",
    roas: 7.5,
    metric: "qualified event leads",
    caseStudy: "Union Pasadena — 60+ private event leads in 60 days",
    link: "/work/union-pasadena",
    revenueMultiplier: 7.5,
  },
  {
    id: "coworking",
    label: "Coworking / B2B",
    roas: 6.0,
    metric: "qualified leads",
    caseStudy: "FoundrSpace — 600+ leads, offices sold out in 5 months",
    link: "/work/foundrspace",
    revenueMultiplier: 6.0,
  },
  {
    id: "digital",
    label: "Digital Products / Courses",
    roas: 8.0,
    metric: "ROAS on campaigns",
    caseStudy: "Organic Music Marketing — 8x ROAS, 353% revenue growth",
    link: "/work/organic-music",
    revenueMultiplier: 8.0,
  },
  {
    id: "nonprofit",
    label: "Nonprofit / Cause",
    roas: 5.0,
    metric: "in donations generated",
    caseStudy: "HomeAid — $34K+ donations, 384% web traffic increase",
    link: "/work/homeaid",
    revenueMultiplier: 5.0,
  },
];

function formatCurrency(n) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

export default function ROICalculator() {
  const [spend, setSpend] = useState("");
  const [goalId, setGoalId] = useState("restaurant");
  const [calculated, setCalculated] = useState(false);

  const selectedGoal = goals.find((g) => g.id === goalId);
  const spendNum = parseFloat(spend.replace(/[^0-9.]/g, "")) || 0;
  const estimatedRevenue = spendNum * selectedGoal.revenueMultiplier;
  const profit = estimatedRevenue - spendNum;

  const handleCalculate = () => {
    if (spendNum > 0) setCalculated(true);
  };

  return (
    <section style={{ backgroundColor: "#0a0a0a", padding: "14rem clamp(1.5rem,4vw,4rem)", borderTop: "1px solid #111" }}>
      <div style={{ maxWidth: "88rem", margin: "0 auto" }}>

        {/* Header */}
        <p style={{ fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "3rem", fontWeight: 600 }}>
          ROI Calculator
        </p>
        {/* Framing line */}
        <p style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F97316", margin: "0 0 2.5rem" }}>
          Model your growth. See the math.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "start", marginBottom: "6rem" }} className="roi-header-grid">
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", textTransform: "uppercase", lineHeight: 0.92, margin: 0 }}>
            Estimate your<br />return.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>
            Based on real results from our client campaigns. Enter your monthly ad spend and business type to see what's possible.
          </p>
        </div>

        {/* Calculator Card */}
        <div style={{ backgroundColor: "#111", border: "1px solid #222", padding: "5rem" }} className="roi-card">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "3.5rem" }} className="roi-inputs-grid">

            {/* Spend Input */}
            <div>
              <label style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1rem", fontWeight: 600 }}>
                Monthly Ad Spend
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", fontSize: "1.5rem", fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>$</span>
                <input
                  type="number"
                  min="0"
                  placeholder="5,000"
                  value={spend}
                  onChange={(e) => { setSpend(e.target.value); setCalculated(false); }}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    borderBottom: "2px solid rgba(255,255,255,0.15)",
                    paddingLeft: "1.5rem",
                    paddingBottom: "0.75rem",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    color: "#fff",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                  onFocus={e => e.target.style.borderBottomColor = "#F97316"}
                  onBlur={e => e.target.style.borderBottomColor = "rgba(255,255,255,0.15)"}
                />
              </div>
              <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.25)", marginTop: "0.75rem", letterSpacing: "0.05em" }}>Enter your current or planned monthly budget</p>
            </div>

            {/* Goal Select */}
            <div>
              <label style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1rem", fontWeight: 600 }}>
                Business Type
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => { setGoalId(g.id); setCalculated(false); }}
                    style={{
                      background: goalId === g.id ? "#F97316" : "transparent",
                      border: `1px solid ${goalId === g.id ? "#F97316" : "rgba(255,255,255,0.12)"}`,
                      padding: "0.75rem 1.25rem",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: "0.72rem",
                      fontWeight: goalId === g.id ? 700 : 400,
                      letterSpacing: "0.06em",
                      color: goalId === g.id ? "#000" : "rgba(255,255,255,0.45)",
                      transition: "all 0.2s",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={e => { if (goalId !== g.id) e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
                    onMouseLeave={e => { if (goalId !== g.id) e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleCalculate}
            disabled={spendNum <= 0}
            style={{
              backgroundColor: spendNum > 0 ? "#F97316" : "#e0e0dd",
              color: spendNum > 0 ? "#000" : "#aaa",
              border: "none",
              padding: "1.1rem 3.5rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              cursor: spendNum > 0 ? "pointer" : "not-allowed",
              fontFamily: "inherit",
              transition: "background-color 0.25s",
              marginBottom: "3.5rem",
              display: "block",
            }}
            onMouseEnter={e => { if (spendNum > 0) e.currentTarget.style.backgroundColor = "#EA6D0E"; }}
            onMouseLeave={e => { if (spendNum > 0) e.currentTarget.style.backgroundColor = "#F97316"; }}
          >
            Calculate My ROI
          </button>

          {/* Results */}
          {calculated && spendNum > 0 && (
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "3.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem", marginBottom: "3rem" }} className="roi-results-grid">
                <div>
                  <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 0.75rem", fontWeight: 600 }}>Ad Spend</p>
                  <p style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
                    {formatCurrency(spendNum)}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 0.75rem", fontWeight: 600 }}>Est. Revenue Generated</p>
                  <p style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)", fontWeight: 900, color: "#F97316", letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
                    {formatCurrency(estimatedRevenue)}
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 0.75rem", fontWeight: 600 }}>Est. Net Return</p>
                  <p style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)", fontWeight: 900, color: profit >= 0 ? "#fff" : "#e53e3e", letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
                    {formatCurrency(profit)}
                  </p>
                </div>
              </div>

              {/* ROAS badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", backgroundColor: "#0a0a0a", border: "1px solid #222", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
                <span style={{ fontSize: "1.75rem", fontWeight: 900, color: "#F97316", letterSpacing: "-0.04em" }}>{selectedGoal.revenueMultiplier}x</span>
                <div>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", margin: "0 0 0.2rem", fontWeight: 600 }}>Historical ROAS</p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>{selectedGoal.caseStudy}</p>
                </div>
              </div>

              <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.25)", lineHeight: 1.6, margin: "0 0 2rem", fontStyle: "italic" }}>
                Estimates are based on historical campaign performance across Mozwell Studios client accounts. Results vary by market, creative quality, and campaign duration.
              </p>

              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                <Link
                  to="/contact"
                  style={{
                    display: "inline-block", backgroundColor: "#F97316", color: "#000",
                    padding: "1rem 2.5rem", fontSize: "0.72rem", fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
                    transition: "background-color 0.25s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = "#EA6D0E"}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = "#F97316"}
                >
                  Let's Talk Strategy
                </Link>
                <Link
                  to={selectedGoal.link}
                  style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "2px", transition: "color 0.2s, border-color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#F97316"; e.currentTarget.style.borderColor = "#F97316"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                >
                  View Case Study
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .roi-header-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .roi-inputs-grid { grid-template-columns: 1fr !important; }
          .roi-results-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
          .roi-card { padding: 3rem 1.5rem !important; }
        }
        @media (max-width: 640px) {
          .roi-results-grid { grid-template-columns: 1fr !important; }
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type=number] { -moz-appearance: textfield; }
        input[type=number]::placeholder { color: rgba(255,255,255,0.15); }
      `}</style>
    </section>
  );
}