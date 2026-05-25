import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minetti Fútbol | Torneo Municipal de Menores 2026",
  description: "Fixture, resultados, tablas y gestión del Torneo Municipal de Fútbol de Menores 2026.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
