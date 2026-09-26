"use client";
import { on } from "events";
import { useEffect, useRef, useState } from "react";
import FadeIn from "./fade-in";
import { useLanguage } from "./language";

export default function About() {
  const { t } = useLanguage();
    return (
        <section id="about" className="relative">
          <FadeIn>
          <div className="mx-auto max-w-4xl px-4 py-24 md:py-24">
              <h2
              className="text-center text-3xl  md:text-4xl font-extrabold tracking-tight"
              >
              {t('about.title')}
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
                    {t('about.greeting')}
                  </h3>
                  <p className="mt-3 text-zinc-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t('about.p1') }}
                  />
                  <p className="mt-3 text-zinc-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t('about.p2') }}
                  /> 
                  <p className="mt-3 text-zinc-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t('about.p3') }} 
                  />
                  <p className="mt-3 text-zinc-700"
                    dangerouslySetInnerHTML={{ __html: t('about.p4') }}
                  />
                </div>
              </div>
            </div>   
          </FadeIn>
        </section>

    );     
}