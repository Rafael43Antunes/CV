"use client"
import { useRef, useState } from "react";

export default function HeroPhoto() {
    const ref = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({});

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>){
        const el = ref.current;

        if(!el) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        setStyle({
            transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
        });

    }

    function handleMouseLeave() {
        setStyle({
            transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
        });
    }

    return (
        <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex-none w-64 h-64 md:w-[420px] md:h-[420px] md:ml-6"
        >
        <img
            src="/rafa.jpeg"
            alt="Rafael Antunes"
            className="w-full h-full object-cover rounded-3xl border-4 border-accent shadow-xl transition-transform duration-200 ease-out"
            style={{ objectPosition: "90% 70%", ...style }}
        />
        </div>
    );
}