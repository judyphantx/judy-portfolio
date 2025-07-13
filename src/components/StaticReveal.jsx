import { useEffect, useRef } from "react";

export const StaticReveal = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // Immediately show the content without animation
      ref.current.style.transform = "translateY(0)";
      ref.current.style.opacity = "1";
    }
  }, []);

  return (
    <div ref={ref} style={{ opacity: 1, transform: "translateY(0)" }}>
      {children}
    </div>
  );
};
