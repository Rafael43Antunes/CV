import FadeIn from "./fade-in";
import { useLanguage } from "./language";

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
  
  // Extraímos os projetos traduzidos e informamos o TypeScript que é um array
  const projects = t('portfolio.projects') as Array<{
    title: string;
    description: string;
    techStack: string[];
    github: string;
  }>;
  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
     
      <FadeIn>
       <div className="mx-auto max-w-5xl px-4"> 
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t('portfolio.title')}
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>
        

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {projects.map((project, index) => (
              <FadeIn key={index}>
              <div 
                className="h-full group relative flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-8 shadow-sm hover:shadow-md hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
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

                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    {t('portfolio.viewGithub')}
                  </a>
                </div>
              </div>
            </FadeIn>
            ))}
          </div>

        </div>
        </FadeIn>
    </section>
  );
}