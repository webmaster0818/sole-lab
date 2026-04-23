import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ソールラボ | ダイエットインソール徹底比較",
    template: "%s | ソールラボ",
  },
  description:
    "ダイエットインソール徹底比較。ピットソール・ランウェイキュアソール・スリムアップインソールの口コミ・効果・料金を比較。",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "ソールラボ",
      url: "https://sole-laboratory.com",
      description:
        "ダイエットインソール徹底比較。ピットソール・ランウェイキュアソール・スリムアップインソールの口コミ・効果・料金を比較。",
    },
    {
      "@type": "Organization",
      name: "ソールラボ",
      url: "https://sole-laboratory.com",
      logo: "https://sole-laboratory.com/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="text-center py-1 text-[10px] text-gray-400 bg-gray-50 border-b border-gray-100">PRを含みます</div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
