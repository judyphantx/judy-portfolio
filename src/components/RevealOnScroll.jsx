import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, skipAnimation = false }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (skipAnimation && ref.current) {
      ref.current.style.transform = "translateY(0)";
      ref.current.style.opacity = "1";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateY(0)";
          entry.target.style.opacity = "1";
          entry.target.style.transition =
            "transform 0.6s ease-out, opacity 0.6s ease-out";
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [skipAnimation]);

  return (
    <div
      ref={ref}
      className="opacity-0"
      style={{ willChange: "opacity", transform: "translateY(20px)" }}
    >
      {children}
    </div>
  );
};
