"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function updateOpacity(){
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;

      const scrolledToBottom =
       window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

       if(scrolledToBottom && rect.top < vh) {
          setOpacity(1);
          return;
        }

      // distância do centro da secção ao centro do ecrã, normalizada
      const distanceFromCenter = Math.abs(center - vh / 2);
      const fadeZone = vh * 0.7; // quanto maior, mais "aberta" é a zona visível

      const raw = 1 - distanceFromCenter / fadeZone;
      const clamped = Math.min(Math.max(raw, 0), 1);

      setOpacity(clamped);
    }
    
    window.addEventListener("scroll", updateOpacity, {passive: true});
    window.addEventListener("resize", updateOpacity);
    updateOpacity();

    return () => {
        window.removeEventListener("scroll", updateOpacity);
        window.removeEventListener("resize", updateOpacity);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-300 ease-out ${className}`}
      style={{
        opacity,
        transform: `translateY(${(1 - opacity) * 40}px) scale(${0.95 + opacity * 0.05})`,
      }}
    >
      {children}
    </div>
  );
}