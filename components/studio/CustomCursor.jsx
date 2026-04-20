import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.transform = `translate(-50%, -50%) scale(2.2)`;
      if (ringRef.current) ringRef.current.style.borderColor = "#F97316";
    };
    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
      if (ringRef.current) ringRef.current.style.borderColor = "rgba(255,255,255,0.35)";
    };

    const loop = () => {
      // Dot follows immediately
      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      // Ring follows with lerp
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);

    const interactables = document.querySelectorAll("a, button, [data-cursor]");
    interactables.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    raf.current = requestAnimationFrame(loop);

    // Observer for dynamically added elements
    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll("a, button, [data-cursor]");
      els.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  // Only show on non-touch devices
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return null;

  return (
    <>
      {/* Small dot */}
      <div ref={dotRef} style={{
        position: "fixed",
        width: "6px", height: "6px",
        borderRadius: "50%",
        backgroundColor: "#F97316",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition: "none",
        mixBlendMode: "difference",
      }} />
      {/* Ring */}
      <div ref={ringRef} style={{
        position: "fixed",
        width: "36px", height: "36px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.35)",
        pointerEvents: "none",
        zIndex: 9998,
        transform: "translate(-50%, -50%) scale(1)",
        transition: "transform 0.25s cubic-bezier(0.25,0.1,0.25,1), border-color 0.25s",
      }} />
    </>
  );
}