import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      setKey(location.pathname);
      setVisible(true);
    }, 80);
    return () => clearTimeout(t);
  }, [location.pathname]);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      key={key}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(12px)",
        transition: "opacity 0.35s cubic-bezier(0.25,0.1,0.25,1), transform 0.35s cubic-bezier(0.25,0.1,0.25,1)",
      }}
    >
      {children}
    </div>
  );
}