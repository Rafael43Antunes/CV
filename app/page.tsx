import  About  from "./about";
import Education from "./education";
import Skills from "./skills";
import Portofolio from "./portofolio";
import Contact from "./contact";


export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-b border-zinc-200">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Rafael José Oliveira Antunes</a>
          <nav className="hidden md:flex items-center gap-3 text-sm">
            <a href="#home" className="px-3 py-2 rounded-lg hover:bg-zinc-100">Home</a>
            <a href="#about" className="px-3 py-2 rounded-lg hover:bg-zinc-100">About</a>
            <a href="#education" className="px-3 py-2 rounded-lg hover:bg-zinc-100">Education</a>
            <a href="#skills" className="px-3 py-2 rounded-lg hover:bg-zinc-100">Skills</a>
            <a href="#portfolio" className="px-3 py-2 rounded-lg hover:bg-zinc-100">Portfolio</a>
            <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-zinc-100">Contact</a>
          </nav>
        </div>
      </header>
    
    <div className="mx-auto max-w-4xl px-4">
      {/* Home Section */}
      <section id="home" className="scroll-mt-24 py-24 md:py-32 relative">
  
    
    {/* mini menu vertical - fixo no lado esquerdo */}
    <aside className="hidden md:flex absolute left-10 -ml-12 top-1/2 -translate-y-1/2 flex-col gap-6">
      <a
        href="https://github.com/Rafael43Antunes"
        aria-label="GitHub"
        className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 transition"
        target="_blank" rel="noopener noreferrer"
        title="GitHub"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.91 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.6-5.48 5.9.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/rafaelantunes43/"
        aria-label="LinkedIn"
        className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 transition"
        target="_blank" rel="noopener noreferrer"
        title="LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.83v1.98h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.15V23h-4v-6.44c0-1.54-.03-3.53-2.15-3.53-2.15 0-2.48 1.68-2.48 3.42V23h-4V8.5z"/>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/_rafael__antunes_/"
        aria-label="Instagram"
        className="p-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 transition"
        target="_blank" rel="noopener noreferrer"
        title="Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM18 6.2a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
        </svg>
      </a>
    </aside>

    <div className="mx-auto max-w-6xl px-8 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

    {/* Texto à esquerda */}
    <div className="flex-1 min-w-0 max-w-[38rem] pl-20">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
        Olá,&nbsp;👋 <br /> sou o Rafa.
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        Finalista em Engenharia Informática
      </p>
      <a
        href="#contact"
        className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-zinc-800 transition"
      >
        Contacta-me
      </a>
    </div>

    {/* Foto à direita */}
    <div className="flex-none w-64 h-64 md:w-[420px] md:h-[420px] md:ml-6">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        <defs>
          <clipPath id="blobClip">
            <path>
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M231,178.5Q213,207,189.5,231.5Q166,256,132,248.5Q98,241,78,213.5Q58,186,46,154.5Q34,123,55,97.5Q76,72,103.5,53.5Q131,35,162.5,46Q194,57,216.5,82.5Q239,108,241.5,139.5Q244,171,231,178.5Z;
                        M233,169.5Q219,199,195,221Q171,243,139,243.5Q107,244,81,222Q55,200,50,166Q45,132,62.5,104Q80,76,108,61.5Q136,47,166,57.5Q196,68,218,92.5Q240,117,240,149.5Q240,182,233,169.5Z;
                        M234,170Q224,205,196.5,226.5Q169,248,135.5,243Q102,238,77,213Q52,188,43.5,155Q35,122,50.5,95Q66,68,93,52.5Q120,37,154,45.5Q188,54,209,80.5Q230,107,236,138.5Q242,170,234,170Z;
                        M231,178.5Q213,207,189.5,231.5Q166,256,132,248.5Q98,241,78,213.5Q58,186,46,154.5Q34,123,55,97.5Q76,72,103.5,53.5Q131,35,162.5,46Q194,57,216.5,82.5Q239,108,241.5,139.5Q244,171,231,178.5Z"
              />
            </path>
          </clipPath>
        </defs>
        <image
          href="/eu.jpg"
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#blobClip)"
        />
        <path fill="none" stroke="#9CA3AF" strokeWidth="8">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M231,178.5Q213,207,189.5,231.5Q166,256,132,248.5Q98,241,78,213.5Q58,186,46,154.5Q34,123,55,97.5Q76,72,103.5,53.5Q131,35,162.5,46Q194,57,216.5,82.5Q239,108,241.5,139.5Q244,171,231,178.5Z;
                    M233,169.5Q219,199,195,221Q171,243,139,243.5Q107,244,81,222Q55,200,50,166Q45,132,62.5,104Q80,76,108,61.5Q136,47,166,57.5Q196,68,218,92.5Q240,117,240,149.5Q240,182,233,169.5Z;
                    M234,170Q224,205,196.5,226.5Q169,248,135.5,243Q102,238,77,213Q52,188,43.5,155Q35,122,50.5,95Q66,68,93,52.5Q120,37,154,45.5Q188,54,209,80.5Q230,107,236,138.5Q242,170,234,170Z;
                    M231,178.5Q213,207,189.5,231.5Q166,256,132,248.5Q98,241,78,213.5Q58,186,46,154.5Q34,123,55,97.5Q76,72,103.5,53.5Q131,35,162.5,46Q194,57,216.5,82.5Q239,108,241.5,139.5Q244,171,231,178.5Z"
          />
        </path>
      </svg>
    </div>
  </div>
</section>

      {/* About */}
    
      {/*<section id="about" className="scroll-mt-20 py-20 border-t border-zinc-200">
        <h2 className="text-xl md:text-2xl font-semibold">About Me</h2>
        <p className="mt-2 text-zinc-700">
          Pequena bio aqui. Vamos manter simples enquanto aprendemos a estrutura e responsividade.
        </p>
      </section>*/}
      <About />

      {/* Education */}
      <Education />


      {/* Skills */}
      {/*<section id="skills" className="scroll-mt-20 py-20 border-t border-zinc-200">
        <h2 className="text-xl md:text-2xl font-semibold">Skills</h2>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
          {["Next.js","TypeScript","React","PostgreSQL","C / C++","Git & GitHub","Cisco IOS","pfSense"].map(s => (
        <li key={s} className="border border-zinc-200 rounded-xl px-3 py-2">{s}</li>
        ))}
        </ul>
      </section>*/}
      <Skills />


      {/* Portfolio */}
      {/*<section id="portfolio" className="scroll-mt-24 py-10 border-t border-zinc-200">
        <h2 className="text-xl md:text-2xl font-semibold">Portfolio</h2>
        <p className="mt-2 text-zinc-700">Aqui vão entrar os teus projetos (cards simples).</p>
      </section>*/}
      <Portofolio />

      <Contact />

        
    </div>
    </main>
  );
}
