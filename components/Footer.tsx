import Image from "next/image";

const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fernanda-antunees/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/mfantuness/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    label: "E-mail",
    href: "mailto:fernanda.aacontato@gmail.com",
    value: "fernanda.aacontato@gmail.com",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-rose-900 bg-rose-950 px-4 py-8 text-rose-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-rose-200">Fernanda Antunes © {new Date().getFullYear()}</p>
        <nav className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "E-mail" ? "_self" : "_blank"}
              rel={link.label === "E-mail" ? undefined : "noreferrer"}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-rose-300/30 bg-rose-900/40 px-4 py-2 font-medium text-rose-100 transition hover:border-rose-200/70 hover:bg-rose-800/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-2 focus:ring-offset-rose-950"
            >
              {link.icon ? (
                <Image src={link.icon} alt="" width={18} height={18} />
              ) : (
                <svg
                  aria-hidden="true"
                  className="size-[18px] text-rose-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 6 6.23 5.01a2 2 0 0 0 2.54 0L19.5 6"
                  />
                </svg>
              )}
              <span className={link.value ? "break-all" : ""}>
                {link.value ?? link.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
