import React, { useEffect } from "react";
import useReveal from "@/hooks/useReveal.js";
import Navbar from "@/components/studio/Navbar.jsx";
import Hero from "@/components/studio/Hero.jsx";
import Manifesto from "@/components/studio/Manifesto.jsx";
import AtScale from "@/components/home/AtScale.jsx";
import ImpactBreak from "@/components/home/ImpactBreak.jsx";
import CaseStudy from "@/components/studio/CaseStudy.jsx";
import SelectedWork from "@/components/studio/SelectedWork.jsx";
import HomeTestimonials from "@/components/home/HomeTestimonials.jsx";
import ClientLogoStrip from "@/components/home/ClientLogoStrip.jsx";
import HomeServices from "@/components/studio/HomeServices.jsx";
import Positioning from "@/components/studio/Positioning.jsx";
import Philosophy from "@/components/studio/Philosophy.jsx";
import FinalCTA from "@/components/studio/FinalCTA.jsx";
import PostHTXFeature from "@/components/home/PostHTXFeature.jsx";
import HomeStatsStrip from "@/components/home/HomeStatsStrip.jsx";
import Footer from "@/components/studio/Footer.jsx";

export default function Home() {
  useReveal();
  useEffect(() => {
    document.title = "Mozwell Studios — Hospitality-First Creative Studio";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.name = "description";
    meta.content = "Premium brand strategy, content production, and performance marketing for restaurants, hospitality, and lifestyle brands in Los Angeles.";
    document.head.appendChild(meta);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Manifesto />
      <AtScale />
      <CaseStudy />
      <SelectedWork />
      <PostHTXFeature />
      <HomeStatsStrip />
      <HomeTestimonials />
      <ClientLogoStrip />
      <HomeServices />
      <ImpactBreak line1="Attention is easy." line2="Revenue is engineered." />
      <Positioning />
      <Philosophy />
      <FinalCTA />
      <Footer />
    </div>
  );
}