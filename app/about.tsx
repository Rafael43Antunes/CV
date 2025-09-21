"use client";
import { on } from "events";
import { useEffect, useRef, useState } from "react";

export default function About() {
    return (
        <section id="about" className="relative">
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
                    Sou finalista de <strong>Engenharia Informática</strong>
                    &nbsp;(ISEC) e estou à procura de um{" "}
                    <strong>estágio curricular</strong> onde possa aplicar o que
                    aprendi e continuar a crescer.
                  </p>
                  <p className="mt-3 text-zinc-700 leading-relaxed">
                    Para além da área académica, gosto de{" "}
                    <strong>jogar</strong>, <strong>ler</strong>,{" "}
                    <strong>viajar</strong>, <strong>ver filmes</strong> e
                    praticar <strong>desporto</strong>. Sou jogador de <strong>hóquei</strong>, atividade que 
                    me ensinou disciplina, resiliência e trabalho de equipa. 
                  </p>
                  <p className="mt-3 text-zinc-700">
                    Procuro desafios onde possa unir <strong>criatividade</strong> e{" "}
                    <strong>lógica</strong> para construir soluções com impacto.
                  </p>
                </div>
              </div>
            </div>   

        </section>

    );     
}