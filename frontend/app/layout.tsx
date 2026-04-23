import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passeport Professionnel MVP",
  description:
    "MVP de formation professionnelle : profil d’apprentissage, indicateurs interprétables et recommandations personnalisées.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
