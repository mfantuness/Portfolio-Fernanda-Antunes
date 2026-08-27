export type TechnologyCategory =
  | "Linguagens de Programação"
  | "Frameworks"
  | "Testes"
  | "Database"
  | "Infra e Ferramentas";

export type Technology = {
  name: string;
  level?: string;
  iconUrl: string;
  category: TechnologyCategory;
};

export type TechnologyMuralItem = {
  name: string;
  iconUrl: string;
  className: string;
};

export type Project = {
  name: string;
  imageDirectory: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
};
