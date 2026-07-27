import FadeIn from "./fade-in";

export default function Portofolio() {
    return (
        <section id="portfolio" className="relative">
          <FadeIn>
            <div className="mx-auto max-w-4xl px-4 py-24 md:py-24">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
                    Portfolio
                </h2>
                <p className="mt-4 text-center text-zinc-600">
                    I'm currently building this section — check back soon!
                </p>

                <div className="mt-10 flex justify-center">
                    <ConstructionIllustration />
                </div>

                {/* barra de progresso animada */}
                <div className="mt-8 max-w-xs mx-auto h-2 rounded-full bg-surface-alt overflow-hidden">
                    <div className="h-full w-1/3 rounded-full bg-accent animate-[progress_2.5s_ease-in-out_infinite]" />
                </div>
            </div>
          </FadeIn>
        </section>
    );
}

function ConstructionIllustration() {
    return (
        <svg
            viewBox="0 0 400 240"
            className="w-full max-w-sm h-auto"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* chão */}
            <ellipse cx="200" cy="215" rx="160" ry="10" fill="var(--color-surface-alt)" />

            {/* cone de sinalização */}
            <g transform="translate(70,150)">
                <path d="M20 0 L34 60 L6 60 Z" fill="var(--color-accent)" />
                <rect x="4" y="42" width="32" height="8" fill="white" opacity="0.85" />
                <ellipse cx="20" cy="60" rx="18" ry="4" fill="var(--color-text-muted)" opacity="0.4" />
            </g>

            {/* tábua/placa a ser martelada */}
            <g transform="translate(210,150)">
                <rect x="0" y="0" width="70" height="14" rx="3" fill="var(--color-accent-light)" stroke="var(--color-accent)" strokeWidth="2" />
                <rect x="0" y="20" width="70" height="14" rx="3" fill="var(--color-accent-light)" stroke="var(--color-accent)" strokeWidth="2" />
                {/* prego a ser martelado */}
                <rect x="30" y="-6" width="4" height="10" fill="var(--color-text-muted)" />
            </g>

            {/* personagem: bonequinho de manutenção */}
            <g transform="translate(120,50)">
                {/* corpo (macacão) */}
                <rect x="18" y="55" width="44" height="60" rx="14" fill="var(--color-accent)" />
                {/* cinto refletor */}
                <rect x="18" y="80" width="44" height="8" fill="#FDE68A" />

                {/* pernas */}
                <rect x="24" y="108" width="14" height="30" rx="6" fill="var(--color-text)" />
                <rect x="42" y="108" width="14" height="30" rx="6" fill="var(--color-text)" />
                <ellipse cx="31" cy="140" rx="10" ry="5" fill="var(--color-text-muted)" />
                <ellipse cx="49" cy="140" rx="10" ry="5" fill="var(--color-text-muted)" />

                {/* cabeça */}
                <circle cx="40" cy="35" r="20" fill="#F4C7A1" />
                {/* capacete */}
                <path d="M18 30 a22 20 0 0 1 44 0 Z" fill="var(--color-accent)" />
                <rect x="16" y="28" width="48" height="6" rx="3" fill="var(--color-accent-hover)" />
                {/* cara */}
                <circle cx="33" cy="37" r="2" fill="var(--color-text)" />
                <circle cx="47" cy="37" r="2" fill="var(--color-text)" />
                <path d="M33 45 Q40 50 47 45" stroke="var(--color-text)" strokeWidth="2" fill="none" strokeLinecap="round" />

                {/* braço esquerdo (parado, na cintura) */}
                <rect x="8" y="62" width="12" height="28" rx="6" fill="var(--color-accent)" />

                {/* braço direito animado com martelo, pivô no ombro */}
                <g transform="translate(60,62)">
                    <g>
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="-60 0 0; 15 0 0; -60 0 0"
                            keyTimes="0; 0.4; 1"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                        {/* antebraço */}
                        <rect x="-6" y="0" width="12" height="30" rx="6" fill="var(--color-accent)" />
                        {/* martelo */}
                        <g transform="translate(0,30)">
                            <rect x="-3" y="0" width="6" height="22" fill="#8B5E3C" />
                            <rect x="-12" y="18" width="24" height="12" rx="3" fill="var(--color-text-muted)" />
                        </g>

                        {/* faíscas presas à ponta do martelo, só visíveis perto do impacto */}
                        <g transform="translate(0,50)">
                            <circle r="2.5" fill="var(--color-accent)">
                                <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.35;0.4;0.5;1" dur="1s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="7" cy="-3" r="2" fill="var(--color-accent)">
                                <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.35;0.4;0.5;1" dur="1s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="-7" cy="-2" r="2" fill="var(--color-accent)">
                                <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.35;0.4;0.5;1" dur="1s" repeatCount="indefinite" />
                            </circle>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}