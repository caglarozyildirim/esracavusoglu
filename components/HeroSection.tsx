'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-black min-h-screen flex items-center" style={{ paddingTop: '72px' }}>
      <div className="w-full px-[4vw] py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-12">
            {/* Main Heading */}
            <h1 className="font-josefin text-white" 
                style={{ 
                  fontSize: 'clamp(2.75rem, 5.5vw, 4.95rem)', 
                  fontWeight: 200,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}>
              <span style={{ color: '#E63946' }}>Esra Çavuşoğlu.</span>
              <br />
              Psikoloji Doktoru, Bağımlılık Terapisti,
              <br />
              Danışman &amp; Sağlık Savunucusu.
            </h1>

            {/* Description */}
            <div className="max-w-4xl">
              <p className="font-josefin text-white/80 sqsrte-large" 
                 style={{ 
                   fontSize: '1.375rem', 
                   lineHeight: 1.7,
                   fontWeight: 200
                 }}>
                Ben <span style={{ color: '#E63946' }}>Dr. Esra Çavuşoğlu</span> — Yale Üniversitesi'nde eğitim almış, 
                New York sertifikalı bağımlılık terapisti ve <strong style={{ color: '#E63946' }}>sağlık, eğitim ve teknoloji</strong> kesişiminde çalışan bir girişimci.
              </p>
              <p className="font-josefin text-white/80 sqsrte-large mt-6" 
                 style={{ 
                   fontSize: '1.375rem', 
                   lineHeight: 1.7,
                   fontWeight: 200
                 }}>
                Türkiye'ye özgü rehabilitasyon modeli geliştirerek, dayanıklılık, yaratıcılık ve bilimsel yaklaşımla
                bağımlılıkla mücadelede yeni yollar açıyorum.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Link 
                href="/iletisim"
                className="inline-block font-josefin text-white hover:text-white/70 transition-all"
                style={{ 
                  fontSize: '0.825rem', 
                  fontWeight: 300, 
                  letterSpacing: '0.2em', 
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #fff',
                  paddingBottom: '4px'
                }}
              >
                İLETİŞİM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}