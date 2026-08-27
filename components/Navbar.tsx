import { MobileMenu } from "@/components/MobileMenu";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/80 bg-slate-50/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="group inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-rose-700 text-sm font-bold text-white shadow-lg shadow-rose-900/15 transition group-hover:bg-rose-800">
            FA
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
            Fernanda Antunes
          </span>
        </a>

        <nav className="hidden items-center gap-2 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-rose-50 hover:text-rose-800"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
