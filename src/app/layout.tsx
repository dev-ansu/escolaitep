import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITEP",
  description: "Instituto de Tecnologia e Ensino Profissionalizante",
  keywords: ['escola', 'cursos', 'cursos profissionalizantes', 'cursos fortaleza', 'cursos ceará', 'curso profissionalizante', 'ensino', 'educação'],
  openGraph:{
    title:"ITEP - Instituto de Tecnologia e Ensino profissionalizante",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpeg`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
