import type { Technology } from "@/types/portfolio";

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const technologies: Technology[] = [
  {
    name: "Python",
    iconUrl: devicon("python"),
    category: "Linguagens de Programação",
  },
  {
    name: "Java",
    iconUrl: devicon("java"),
    category: "Linguagens de Programação",
  },
  {
    name: "JavaScript",
    iconUrl: devicon("javascript"),
    category: "Linguagens de Programação",
  },
  {
    name: "C",
    iconUrl: devicon("c"),
    category: "Linguagens de Programação",
  },
  {
    name: "TypeScript",
    iconUrl: devicon("typescript"),
    category: "Linguagens de Programação",
  },
  {
    name: "FastAPI",
    iconUrl: devicon("fastapi"),
    category: "Frameworks",
  },
  {
    name: "Next.js",
    iconUrl: devicon("nextjs"),
    category: "Frameworks",
  },
  {
    name: "React",
    iconUrl: devicon("react"),
    category: "Frameworks",
  },
  {
    name: "Tailwind CSS",
    iconUrl: devicon("tailwindcss"),
    category: "Frameworks",
  },
  {
    name: "JUnit",
    iconUrl: devicon("junit"),
    category: "Testes",
  },
  {
    name: "MongoDB",
    iconUrl: devicon("mongodb"),
    category: "Database",
  },
  {
    name: "MySQL",
    iconUrl: devicon("mysql"),
    category: "Database",
  },
  {
    name: "PostgreSQL",
    iconUrl: devicon("postgresql"),
    category: "Database",
  },
  {
    name: "SQL",
    iconUrl: devicon("azuresqldatabase"),
    category: "Database",
  },
  {
    name: "Git",
    iconUrl: devicon("git"),
    category: "Infra e Ferramentas",
  },
  {
    name: "GitHub",
    iconUrl: devicon("github"),
    category: "Infra e Ferramentas",
  },
  {
    name: "GitHub Actions",
    iconUrl: devicon("githubactions"),
    category: "Infra e Ferramentas",
  },
  {
    name: "Docker",
    iconUrl: devicon("docker"),
    category: "Infra e Ferramentas",
  },
  {
    name: "Postman",
    iconUrl: devicon("postman"),
    category: "Infra e Ferramentas",
  },
];
