import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allan Somensi",
  description: "Site pessoal de portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
