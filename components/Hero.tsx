import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="section-fade relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-800 shadow-sm">
            Desenvolvedora
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            <span className="text-rose-800">Maria Fernanda Antunes</span>
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium text-slate-800">
            
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Técnica em Análise e Desenvolvimento de Sistemas e estudante de Computação pela UFRPE, com foco em desenvolvimento de software, bancos de dados e análise de dados. Desenvolvo soluções eficientes, funcionais e bem estruturadas para diferentes necessidades.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-900/15 transition hover:-translate-y-0.5 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-rose-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
          <div className="absolute -inset-10 -rotate-6 rounded-[42%_58%_63%_37%/45%_38%_62%_55%] bg-gradient-to-br from-rose-200/80 via-rose-300/65 to-rose-700/45 blur-[1px]" />
          <div className="absolute -bottom-8 -left-8 h-32 w-40 rotate-12 rounded-[62%_38%_45%_55%/43%_58%_42%_57%] bg-rose-800/30 blur-sm" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-rose-200 bg-slate-50 p-3 shadow-2xl shadow-rose-950/10">
            <Image
              src="/placeholders/Foto_perfil3.JPEG"
              alt="Foto DE PERFIL"
              width={560}
              height={680}
              priority
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
