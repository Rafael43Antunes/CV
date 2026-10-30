import FadeIn from "./fade-in";
import { useLanguage } from "./language";
import { useState } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";

/*const projects = [
  {
    title: "LusoFly",
    description: "Full-stack website designed for the online presence and promotion of an aviation school. It features a modern, attractive interface built with Next.js/React and a Python/Django backend to handle dynamic content and interactions.",
    techStack: ["Next.js", "React", "Django", "Python", "Tailwind CSS"],
    github: "https://github.com/Rafael43Antunes/lusofly-web",
  },
  {
    title: "Folder Generator",
    description: "Desktop utility that automates file organization for sports photography. It extracts structured data from official PDFs (starting orders) and instantly generates the directory tree by category and athlete asynchronously.",
    techStack: ["Python", "CustomTkinter", "pdfplumber", "Multithreading"], 
    github: "https://github.com/Rafael43Antunes/folder-generator",
  }
];*/

export default function Portofolio() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
  
  // Extraímos os projetos traduzidos e informamos o TypeScript que é um array
  const projects = t('portfolio.projects') as Array<{
    title: string;
    description: string;
    techStack: string[];
    github: string;
  }>;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="portfolio" className="relative py-12 md:py-16 overflow-hidden">
      <FadeIn>
        <div className="mx-auto max-w-4xl px-4"> 
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t('portfolio.title')}
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>
        
          <div className="relative h-[480px] md:h-[400px] flex items-center justify-center">
            
            {projects.map((project, index) => {
              const isCenter = index === currentIndex;
              const isLeft = index === (currentIndex - 1 + projects.length) % projects.length;
              const isRight = index === (currentIndex + 1) % projects.length;

              let positionClasses = "opacity-0 scale-50 z-0 pointer-events-none"; 
              
              if (isCenter) {
                positionClasses = "translate-x-0 scale-100 opacity-100 z-30 shadow-2xl";
              } else if (isLeft) {
                positionClasses = "-translate-x-[25%] md:-translate-x-[60%] scale-75 opacity-40 z-20 cursor-pointer hover:opacity-70 blur-[1px]";
              } else if (isRight) {
    
                positionClasses = "translate-x-[25%] md:translate-x-[60%] scale-75 opacity-40 z-20 cursor-pointer hover:opacity-70 blur-[1px]";
              }

              return (
                <div 
                  key={index} 
                  onClick={() => {
                    if (isLeft) prevProject();
                    if (isRight) nextProject();
                  }}
                  className={`absolute top-0 w-full max-w-xs md:max-w-lg transition-all duration-700 ease-out ${positionClasses}`}
                >
                  <div className="h-full flex flex-col justify-between rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300">
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900">
                        {project.title}
                      </h3>
                      
                      <p className="mt-4 text-zinc-600 leading-relaxed min-h-[140px] md:min-h-[110px]">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 text-sm rounded-full border border-border text-text-muted cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-100">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-zinc-900 hover:text-accent transition-colors"
                        onClick={(e) => {
                          if (!isCenter) e.preventDefault();
                        }}
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        {t('portfolio.viewGithub')}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            <button 
              onClick={prevProject} 
              aria-label="Projeto anterior"
              className="absolute left-0 md:left-6 top-1/2 -translate-y-1/2 bg-white border border-border text-zinc-700 hover:text-accent hover:border-accent shadow-lg p-2 md:p-3 rounded-full z-40 transition-all"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button 
              onClick={nextProject} 
              aria-label="Próximo projeto"
              className="absolute right-0 md:right-6 top-1/2 -translate-y-1/2 bg-white border border-border text-zinc-700 hover:text-accent hover:border-accent shadow-lg p-2 md:p-3 rounded-full z-40 transition-all"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

          </div>
          
          <div className="flex justify-center gap-2 mt-4 md:mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "bg-accent w-6" : "bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Ir para o projeto ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </FadeIn>
    </section>
  );
}