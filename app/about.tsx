"use client";
import { on } from "events";
import { useEffect, useRef, useState } from "react";
import FadeIn from "./fade-in";

export default function About() {
    return (
        <section id="about" className="relative">
          <FadeIn>
          <div className="mx-auto max-w-4xl px-4 py-24 md:py-24">
              <h2
              className="text-center text-3xl  md:text-4xl font-extrabold tracking-tight"
              >
              About Me
              </h2>
                        
            <div className="mt-12 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-14">
                {/* Foto à esquerda */}
                <div className="flex-none w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72">
                  <img
                    src="/eu.jpg"
                    alt="Rafael Antunes"
                    className="w-full h-full object-cover rounded-3xl shadow-md"
                  />
                </div>

                {/* Texto à direita */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    Olá! Eu sou o Rafael Antunes.
                  </h3>
                  <p className="mt-3 text-zinc-700 leading-relaxed">
                    I'm a <strong>Computer Science and Engineering</strong>{" "}
                    graduate from ISEC - Coimbra, specializing in Networks and
                    Systems Administration. I recently completed a{" "}
                    <strong>curricular internship in DevOps</strong>, working
                    with CI/CD pipelines, Kubernetes and cloud-native
                    infrastructure.
                  </p>
                  <p className="mt-3 text-zinc-700 leading-relaxed">
                    I'm now looking for my first professional opportunity as a{" "}
                    <strong>Software Engineer</strong> - open to different
                    areas, from DevOps and cloud infrastructure to security and 
                    networking. I'm also curious about {" "} 
                    <strong> AI and Data Science </strong>, and eager to explore 
                    new fields to discover where my interests truly lie.
                  </p> 
                  <p className="mt-3 text-zinc-700 leading-relaxed">
                    Outside of academics, I enjoy <strong>gaming</strong>,{" "}
                    <strong>reading</strong>, <strong>traveling</strong>,{" "}
                    <strong>watching movies</strong> and{" "}
                    <strong>playing sports</strong>. I play{" "}
                    <strong>roller hockey</strong>, which has taught me
                    discipline, resilience and teamwork. 
                  </p>
                  <p className="mt-3 text-zinc-700">
                    I look for challenges where I can combine{" "}
                    <strong>creativity</strong> and <strong>logic</strong> to
                    build solutions with real impact.
                  </p>
                </div>
              </div>
            </div>   
          </FadeIn>
        </section>

    );     
}