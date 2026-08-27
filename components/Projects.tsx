import fs from "node:fs";
import path from "node:path";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCarousel } from "@/components/ProjectCarousel";

const getProjectImages = (project: (typeof projects)[number]) => {
  const directory = path.join(process.cwd(), "public", project.imageDirectory);
  if (!fs.existsSync(directory)) {
    return [project.image];
  }

  return fs
    .readdirSync(directory)
    .filter((fileName) =>
      /\.(avif|gif|jpeg|jpg|png|svg|webp)$/i.test(fileName),
    )
    .sort((firstFile, secondFile) =>
      firstFile.localeCompare(secondFile, undefined, { numeric: true }),
    )
    .map((fileName) => `/${project.imageDirectory}/${fileName}`);
};

const projectImages = projects.map(getProjectImages);

function renderDescription(description: string) {
  return description.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${part}-${index}`} className="font-semibold text-slate-950">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

export function Projects() {
  return (
    <section
      id="projetos"
      className="section-fade px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Projetos"
          title="Projetos em destaque"
          description="Cards alimentados por data/projects.ts com imagem, descricao, tecnologias e links editaveis."
        />

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-lg shadow-slate-950/5 transition hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-950/10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
            >
              <ProjectCarousel images={projectImages[index]} projectName={project.name} />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-slate-950">
                  {project.name}
                </h3>
                <p className="mt-3 min-h-28 text-sm leading-7 text-slate-600">
                  {renderDescription(project.description)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology, index) => (
                    <span
                      key={`${project.name}-${technology}-${index}`}
                      className="rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-800"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-rose-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2"
                  >
                    Site
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
