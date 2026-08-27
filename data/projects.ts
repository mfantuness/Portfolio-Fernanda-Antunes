import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    name: "Psicologos Nordeste",
    imageDirectory: "projeto4",
    description:
      "Sistema desenvolvido para cadastro e gerenciamento de psicólogos, permitindo aos usuários encontrar profissionais, consultar informações e realizar o agendamento de consultas. A plataforma também conta com integração com o PagSeguro para processamento de pagamentos. Desenvolvido com Next.js, React, Tailwind CSS, NestJS e PostgreSQL.",
    image: "/projeto4/psicologos1.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "NestJS", "PostgreSQL"],
    demoUrl: "https://www.psicologosnonordeste.com.br/",
    codeUrl: "#",
  },
  {
    name: "Academia Pernambucana de Medicina Veterinária",
    imageDirectory: "projeto1",
    description:
      "Projeto de site institucional para a **Academia Pernambucana de Medicina Veterinária**, com objetivo de apresentar a instituição, seus eventos e publicações. Desenvolvido com **Next.js**, **Tailwind CSS**, **TypeScript** e **Supabase**.",
    image: "/placeholders/project-placeholder-1.svg",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase"],
    demoUrl: "https://apmv.org.br/",
    codeUrl: "#",
  },
  {
    name: "Ruralize",
    imageDirectory: "projeto2",
    description:
      "O **Ruralize** é uma plataforma desenvolvida para a comunidade acadêmica da **UFRPE**, com foco em facilitar a interação entre estudantes e promover o compartilhamento de informações, eventos e oportunidades dentro da universidade. O projeto utiliza **Next.js, React, TypeScript, Tailwind CSS, FastAPI, Python e MongoDB**, integrando frontend e backend para oferecer uma experiência completa aos usuários.",
    image: "/placeholders/project-placeholder-2.svg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "MongoDB"],
    demoUrl: "https://ruralize-ufrpe.vercel.app",
    codeUrl: "#",
  },
  {
    name: "Tatiana Roxo",
    imageDirectory: "projeto5",
    description:
      "Site institucional desenvolvido para a advogada Tatiana Roxo, com o objetivo de apresentar sua trajetória profissional, áreas de atuação, serviços e trabalhos realizados. O projeto foi desenvolvido com Next.js, React, Tailwind CSS e TypeScript, priorizando uma apresentação profissional, moderna e responsiva.",
    image: "/projeto5/tatiroxo1.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://tatianaroxo.com.br/",
    codeUrl: "#",
  },
  {
    name: "Nano Insights",
    imageDirectory: "projeto3",
    description:
      "Site institucional desenvolvido para a Nano Insights, startup vinculada à comunidade da UFRPE, com o objetivo de apresentar a empresa, suas soluções e sua atuação no mercado. Desenvolvido utilizando Next.js, React, Tailwind CSS e TypeScript, com foco em uma experiência moderna, intuitiva e responsiva.",
    image: "/projeto3/nano1.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://www.nanoinsights.com.br/",
    codeUrl: "#",
  },
];
