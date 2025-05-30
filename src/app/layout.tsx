import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXTMAKE Indonesia - 未来をつくる、インドネシアのものづくり人材へ",
  description:
    "未来の製造・技術・ITを支える若者たちの育成と、地域産業の成長を支援するプロジェクト。サクラネシア財団、インドネシア大学、STARUPが連携した革新的な人材育成プログラム。",
  keywords: "インドネシア, IT人材育成, 製造業, DX教育, 産学連携, NEXTMAKE",
  openGraph: {
    title: "NEXTMAKE Indonesia - 未来をつくる、インドネシアのものづくり人材へ",
    description:
      "未来の製造・技術・ITを支える若者たちの育成と、地域産業の成長を支援するプロジェクト",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXTMAKE Indonesia",
    description: "未来をつくる、インドネシアのものづくり人材へ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
