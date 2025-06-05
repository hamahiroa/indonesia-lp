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
  title: "AI Indonesia - つくるを未来につなぐ、インドネシアの人づくり",
  description:
    "インドネシアでの「人づくり」「技術者育成」を支える新しい産業人材支援プロジェクト。サクラネシア財団、インドネシア大学、STARUPが連携した革新的な人材育成プログラム。",
  keywords:
    "インドネシア, AI, 人材育成, ものづくり教育, 産学連携, AI Indonesia",
  openGraph: {
    title: "AI Indonesia - つくるを未来につなぐ、インドネシアの人づくり",
    description:
      "インドネシアでの「人づくり」「技術者育成」を支える新しい産業人材支援プロジェクト",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Indonesia",
    description: "つくるを未来につなぐ、インドネシアの人づくり",
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
