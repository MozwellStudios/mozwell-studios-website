import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-img");

    const observer = new IntersectionObserver(
      (entries) => {
        // Group entries by parent to stagger siblings
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}