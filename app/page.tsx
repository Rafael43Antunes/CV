"use client";
import HeroPhoto from "./hero-photo";
import About from "./about";
import Education from "./education";
import Skills from "./skills";
import Portofolio from "./portofolio";
import Contact from "./contact";
import { useLanguage } from "./language";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  return (
    <main className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg md:-ml-12 lg:-ml-20">Rafael José Oliveira Antunes</a>
          <nav className="hidden md:flex items-center gap-3 text-sm">
            <a href="#home" className="px-3 py-2 rounded-lg hover:bg-accent-light hover:text-accent transition">{t('nav.home')}</a>
            <a href="#about" className="px-3 py-2 rounded-lg hover:bg-accent-light hover:text-accent transition">{t('nav.about')}</a>
            <a href="#education" className="px-3 py-2 rounded-lg hover:bg-accent-light hover:text-accent transition">{t('nav.education')}</a>
            <a href="#skills" className="px-3 py-2 rounded-lg hover:bg-accent-light hover:text-accent transition">{t('nav.skills')}</a>
            <a href="#portfolio" className="px-3 py-2 rounded-lg hover:bg-accent-light hover:text-accent transition">{t('nav.portfolio')}</a>
            <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-accent-light hover:text-accent transition">{t('nav.contact')}</a>
          </nav>
          <button 
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs font-semibold hover:bg-accent-light transition-colors"
            >
              <span className={`${language === 'pt' ? 'font-bold' : 'opacity-70'} text-accent`}>PT</span> 
              <span className="text-zinc-300 dark:text-zinc-600">|</span> 
              <span className={`${language === 'en' ? 'font-bold' : 'opacity-70'} text-accent`}>EN</span>
            </button>
        </div>
      </header>

      {/* WRAPPER PRINCIPAL DA PÁGINA */}
      <div className="mx-auto w-full max-w-4xl px-4 pt-16">
        
        {/* HOME SECTION */}
        <section id="home" className="scroll-mt-24 py-24 md:py-32 relative">
          
          {/* MENU VERTICAL (Ícones) */}
          <aside className="hidden md:flex absolute left-0 -ml-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-10">
            <a href="https://github.com/Rafael43Antunes" aria-label="GitHub" className="p-2 rounded-lg border border-border hover:bg-accent-light hover:border-accent transition" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.91 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.6-5.48 5.9.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/rafaelantunes43/" aria-label="LinkedIn" className="p-2 rounded-lg border border-border hover:bg-accent-light hover:border-accent transition" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.83v1.98h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.15V23h-4v-6.44c0-1.54-.03-3.53-2.15-3.53-2.15 0-2.48 1.68-2.48 3.42V23h-4V8.5z"/></svg>
            </a>
            <a href="https://www.instagram.com/_rafael__antunes_/" aria-label="Instagram" className="p-2 rounded-lg border border-border hover:bg-accent-light hover:border-accent transition" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM18 6.2a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/></svg>
            </a>
          </aside>

          {/* CONTEÚDO HERO (Esquerda e Direita) */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 md:pl-20">
            
            {/* LADO ESQUERDO: Textos */}
            <div className="flex-1 min-w-0 max-w-[38rem]">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                {t('hero.greeting')} {t('hero.name')}
              </h1>
              <p className="mt-4 text-lg text-text-muted">
                {t('hero.role')}
              </p>
              
              <div className="mt-6">
                <a href="#contact" className="inline-block px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-hover transition">
                  {t('hero.getInTouch')}
                </a>
              </div>

              <div className="mt-4 flex flex-row gap-4 items-center">
                <a href="/CV_Rafael_Antunes.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition">
                  {t('hero.viewCV')}
                </a>
                <a href="/CV_Rafael_Antunes.pdf" download className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition">
                  {t('hero.downloadCV')}  
                </a>
              </div>
            </div>

            {/* LADO DIREITO: Foto */}
            <HeroPhoto />
            
          </div>
        </section>

        {/* RESTANTES SECÇÕES */}
        <About />
        <Education />
        <Skills />
        <Portofolio />
        <Contact />

      </div>
    </main>
  );
}