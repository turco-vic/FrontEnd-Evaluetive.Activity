import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto ({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
    title: "Classes!",
    icons: {
    icon: "/icons/favicon.ico",
  },
    description: "Projeto Avaliativo da disciplina de Front-End",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${font.variable}`}>{children}</body>
    </html>
  );
}
