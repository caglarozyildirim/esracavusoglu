import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-josefin',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Esra Çavuşoğlu | Psikoloji Doktoru, Bağımlılık Terapisti",
  description: "Psikoloji doktoru ve New York sertifikalı bağımlılık terapisti. Yale deneyimi ile Türkiye Rehabilitasyon Modeli'ni geliştirdim. ÇABAÇAD ve Longevilab kurucusu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={josefin.variable}>
      <body className={`${josefin.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}