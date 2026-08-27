import Image from "next/image";
import { technologies } from "@/data/technologies";
import type { TechnologyCategory } from "@/types/portfolio";
import { SectionHeader } from "@/components/SectionHeader";

const categories: TechnologyCategory[] = [
  "Linguagens de Programação",
  "Frameworks",
  "Testes",
  "Database",
  "Infra e Ferramentas",
];

export function Technologies() {
  return (
    <section
      id="tecnologias"
      className="section-fade relative isolate overflow-hidden border-y border-rose-100 bg-[#f7f3f5] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.12] blur-[1.5px]"
      >
        <div className="grid grid-cols-4 gap-x-12 gap-y-16 p-8 sm:grid-cols-6 lg:grid-cols-8">
          {technologies.map((technology, index) => (
            <Image
              key={`${technology.name}-${index}`}
              src={technology.iconUrl}
              alt=""
              width={52}
              height={52}
              className={`h-10 w-10 object-contain sm:h-12 sm:w-12 ${
                index % 3 === 0 ? "translate-y-5" : index % 3 === 1 ? "-translate-y-3" : "translate-y-1"
              }`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Tecnologias"
          title=" Tecnologias Utilizadas"
          description="Tecnologias e ferramentas já utilizadas por mim em algum projeto ou experiência. Em níveis iniciante ou intermediário, mas com contato e experiência prática com essas tecnologias, organizadas por categoria."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-3xl border border-slate-200 bg-slate-100/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50 hover:shadow-xl hover:shadow-rose-950/5"
            >
              <h3 className="text-base font-semibold text-slate-950">
                {category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {technologies
                  .filter((technology) => technology.category === category)
                  .map((technology) => (
                    <span
                      key={`${technology.category}-${technology.name}`}
                      className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-800"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-rose-50">
                        <Image
                          src={technology.iconUrl}
                          alt=""
                          width={16}
                          height={16}
                          className="object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span>
                        {technology.name}
                        {technology.level ? (
                          <span className="ml-1 text-xs text-slate-500">
                            ({technology.level})
                          </span>
                        ) : null}
                      </span>
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
