export type Language = 'en' | 'pt';

export const translations = {
  en: {
    // Nav
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      greeting: "Hi, 👋",
      name: "I'm Rafa.",
      role: "Software Engineer Graduate",
      getInTouch: "Get in touch",
      viewCV: "View CV",
      downloadCV: "Download CV"
    },
    
    about: {
      title: "About Me",
      greeting: "Hello, I'm Rafael Antunes.",
      p1: "I'm a <strong>Computer Science and Engineering</strong> graduate from ISEC - Coimbra, specializing in Networks and Systems Administration. I recently completed a <strong>curricular internship in DevOps</strong>, working with CI/CD pipelines, Kubernetes and cloud-native infrastructure.",
      p2: "I'm now looking for my first professional opportunity as a <strong>Software Engineer</strong> - open to different areas, from DevOps and cloud infrastructure to security and networking. I'm also curious about <strong>AI and Data Science</strong>, and eager to explore new fields to discover where my interests truly lie.",
      p3: "Outside of academics, I enjoy <strong>gaming</strong>, <strong>reading</strong>, <strong>traveling</strong>, <strong>watching movies</strong> and <strong>playing sports</strong>. I enjoy <strong>roller hockey</strong> and <strong>distance running</strong>, which have taught me discipline, resilience and teamwork.",
      p4: "I look for challenges where I can combine <strong>creativity</strong> and <strong>logic</strong> to build solutions with real impact."
    },
    education: {
      title: "Education",
      course: "Bachelor's Degree in <strong>Computer Science and Engineering</strong>",
      spec: "Specialization in <strong>Networks and Systems Administration</strong>"
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I've worked with."
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Some of the projects I've been working on recently.",
      viewGithub: "View Code on GitHub",
      projects: [
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
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Interested in reaching out? Pick whichever works best for you:"
    }
  },
  
    
  pt: {
    // Nav
    nav: {
      home: "Início",
      about: "Sobre",
      education: "Educação",
      skills: "Competências",
      portfolio: "Portfólio",
      contact: "Contacto"
    },
    // Hero Section
    hero: {
      greeting: "Olá, 👋",
      name: "Sou o Rafa.",
      role: "Finalista de Engenharia Informática",
      getInTouch: "Contacta-me",
      viewCV: "Ver CV",
      downloadCV: "Transferir CV"
    },
    about: {
      title: "Sobre Mim",
      greeting: "Olá, sou o Rafael Antunes.",
      p1: "Sou recém-licenciado em <strong>Engenharia Informática</strong> pelo ISEC - Coimbra, especializado em Redes e Administração de Sistemas. Terminei recentemente um <strong>estágio curricular em DevOps</strong>, trabalhando com pipelines CI/CD, Kubernetes e infraestrutura cloud-native.",
      p2: "Procuro agora a minha primeira oportunidade profissional como <strong>Engenheiro de Software</strong>, estou aberto a diferentes áreas, desde DevOps e infraestrutura cloud até à segurança e redes. Tenho também curiosidade por <strong>Inteligência Artificial e Data Science</strong>, e vontade de explorar novas áreas para descobrir onde residem os meus verdadeiros interesses.",
      p3: "Fora da vida académica, gosto de <strong>jogar</strong>, <strong>ler</strong>, <strong>viajar</strong>, <strong>ver filmes</strong> e <strong>praticar desporto</strong>. Gosto de <strong>hóquei em patins</strong> e <strong>corrida de longa distância</strong>, desportos que me ensinaram disciplina, resiliência e trabalho de equipa.",
      p4: "Procuro desafios onde possa aliar <strong>criatividade</strong> e <strong>lógica</strong> para construir soluções com impacto real."
    },
    education: {
      title: "Educação",
      course: "Licenciatura em <strong>Engenharia Informática</strong>",
      spec: "Especialização em <strong>Redes e Administração de Sistemas</strong>"
    },
    skills: {
      title: "Competências",
      subtitle: "Tecnologias e ferramentas com que tenho trabalhado."
    },
    portfolio: {
      title: "Portfólio",
      subtitle: "Alguns dos projetos que desenvolvi recentemente.",
      viewGithub: "Ver Código no GitHub",
      projects: [
        {
          title: "LusoFly",
          description: "Website full-stack concebido para a presença online e promoção de uma escola de aviação. Apresenta uma interface moderna e atrativa construída com Next.js/React e um backend em Python/Django para gerir conteúdo e interações dinâmicas.",
          techStack: ["Next.js", "React", "Django", "Python", "Tailwind CSS"],
          github: "https://github.com/Rafael43Antunes/lusofly-web",
        },
        {
          title: "Folder Generator",
          description: "Utilitário desktop que automatiza a organização de ficheiros para fotografia desportiva. Extrai dados estruturados de PDFs oficiais (ordens de partida) e gera instantaneamente a árvore de diretórios por categoria e atleta de forma assíncrona.",
          techStack: ["Python", "CustomTkinter", "pdfplumber", "Multithreading"], 
          github: "https://github.com/Rafael43Antunes/folder-generator",
        }
      ]
    },
    contact: {
      title: "Contacto",
      subtitle: "Interessado em falar comigo? Escolhe a opção que preferires:"
    }
  }

  
};