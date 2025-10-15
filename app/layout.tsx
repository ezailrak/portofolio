import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirindra Rakotomanga - Engineering Manager & Fullstack Developer",
  description:
    "Mirindra Rakotomanga, Ingénieur fullstack devenu Engineering Manager basé à Antananarivo, Madagascar. Je traduis des besoins métiers en plateformes évolutives et automatisées.",
  keywords: [
    "Mirindra Rakotomanga",
    "Engineering Manager",
    "Fullstack Developer",
    "Madagascar",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Architecture logicielle",
    "IA appliquée",
  ],
  authors: [{ name: "Mirindra Rakotomanga" }],
  openGraph: {
    title: "Mirindra Rakotomanga - Engineering Manager & Fullstack Developer",
    description:
      "Ingénieur fullstack devenu Engineering Manager, je traduis des besoins métiers en plateformes évolutives et automatisées.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirindra Rakotomanga - Engineering Manager & Fullstack Developer",
    description:
      "Ingénieur fullstack devenu Engineering Manager basé à Madagascar, spécialisé en architecture logicielle et IA appliquée.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
