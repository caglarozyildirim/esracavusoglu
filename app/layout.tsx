import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
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
    <html lang="tr" className={playfair.variable}>
      <body className={`${playfair.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}