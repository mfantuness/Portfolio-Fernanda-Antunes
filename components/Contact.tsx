import Image from "next/image";

const contactItems = [
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

export function Contact() {
  return (
    <section id="contato" className="section-fade px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-rose-800 bg-rose-800 px-6 py-12 text-white shadow-2xl shadow-rose-950/20 sm:px-10 lg:px-14">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Contato
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "E-mail" ? "_self" : "_blank"}
              rel={item.label === "E-mail" ? undefined : "noreferrer"}
              className="flex min-h-16 items-center gap-3 rounded-2xl border border-rose-200/30 bg-rose-950/35 px-4 py-4 text-sm font-medium text-rose-50 transition hover:border-rose-200/70 hover:bg-rose-950/55 hover:text-white"
            >
              {item.icon ? (
                <Image src={item.icon} alt="" width={24} height={24} />
              ) : (
                <svg
                  aria-hidden="true"
                  className="size-6 text-rose-200"
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
              <span className={item.value ? "break-all" : ""}>
                {item.value ?? item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
