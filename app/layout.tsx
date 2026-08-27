import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Fernanda Antunes | Portfolio",
  description:
    "Portfolio profissional placeholder para desenvolvedora de tecnologia.",
  openGraph: {
    title: "Fernanda Antunes | Portfolio",
    description:
      "Portfolio profissional placeholder para desenvolvedora de tecnologia.",
    images: [
      {
        url: "/placeholders/og-image-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Imagem Open Graph placeholder do portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
