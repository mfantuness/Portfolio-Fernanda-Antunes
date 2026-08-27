import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

const educationItems = [
  {
    course: "Licenciatura em Computação",
    institution: "Universidade Federal Rural de Pernambuco (UFRPE)",
    status: "Em andamento",
  },
  {
    course: "Técnico em Análise e Desenvolvimento de Sistemas",
    institution: "SENAI",
    status: "Concluído",
  },
];

export function AboutEducation() {
  return (
    <section id="sobre" className="section-fade px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Sobre"
          title="Perfil profissional"
          description="Conheça um pouco da minha trajetória, experiências e formação na área de tecnologia."
        />

        <div className="mb-8 overflow-hidden rounded-3xl border border-rose-200 bg-slate-50 shadow-lg shadow-rose-950/10">
          <div className="grid lg:grid-cols-[180px_1fr]">
            <div className="flex items-center border-b border-rose-300 bg-rose-200 px-5 py-4 lg:border-b-0 lg:border-r lg:border-rose-300">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-950">
                Educação
              </p>
            </div>

            <div className="grid divide-y divide-rose-200 md:grid-cols-2 md:divide-x md:divide-y-0">
              {educationItems.map((item) => (
                <div key={item.course} className="px-5 py-4 sm:px-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold leading-6 text-slate-950">
                        {item.course}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.institution}
                      </p>
                    </div>
                    <span className="inline-flex w-fit shrink-0 rounded-full border border-rose-300 bg-rose-100 px-3 py-1 text-xs font-bold text-rose-900">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-3xl border border-rose-100 bg-slate-50 p-3 shadow-xl shadow-rose-950/5">
            <Image
              src="/placeholders/Foto_perfil2.jpg"
              alt="Foto de perfil"
              width={760}
              height={620}
              className="aspect-[5/4] w-full rounded-2xl object-cover"
            />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-slate-950/5 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
              Sobre mim
            </h3>

            <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
              <p>
                Minha trajetória na tecnologia começou ainda no ensino médio,
                quando tive meu primeiro contato com a área por meio do curso
                técnico. Foi nesse período que descobri meu interesse por
                desenvolvimento e pelas diferentes possibilidades que a
                tecnologia oferece.
              </p>

              <p>
                Atualmente, sou estudante da <strong>UFRPE</strong> e venho
                ampliando meus conhecimentos por meio da graduação e de
                experiências profissionais. Já atuei como{" "}
                <strong>
                  Analista de Projetos na Seed a bit Tecnologia (Empresa Júnior)
                </strong>
                , além de ter experiência como{" "}
                <strong>
                  estagiária de Tecnologia da Informação no Conselho Regional de
                  Farmácia de Pernambuco (CRF-PE)
                </strong>
                , onde tive contato com desenvolvimento de sistemas, automações,
                dados, suporte e infraestrutura.
              </p>

              <p>
                Cada experiência tem contribuído para minha formação e para
                definir os caminhos que quero seguir na área. Sou movida pela
                curiosidade e pelo desejo de aprender, buscando constantemente
                transformar conhecimento em soluções e me especializar cada vez
                mais em tecnologia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
