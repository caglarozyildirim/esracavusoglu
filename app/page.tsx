'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section - Manjit Style */}
      <section className="min-h-screen flex items-center" style={{ paddingTop: '72px' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Column */}
            <div>
              <h1 className="font-josefin text-black mb-8" 
                  style={{ 
                    fontSize: 'clamp(2.75rem, 6.6vw, 5.5rem)', 
                    fontWeight: 200,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em'
                  }}>
                <span style={{ color: '#E63946' }}>Dr. Esra Çavuşoğlu, PhD</span>
              </h1>
              
              <p className="font-josefin text-gray-600 mb-8"
                 style={{ fontSize: '1.65rem', lineHeight: 1.5, fontWeight: 300 }}>
                Sağlık Savunucusu | Girişimci | Danışman | Biohacker
              </p>
              
              
              <Link href="/iletisim" 
                    className="inline-block font-josefin text-black hover:text-gray-600 transition-all"
                    style={{ 
                      fontSize: '0.825rem', 
                      fontWeight: 200, 
                      letterSpacing: '0.2em', 
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #000',
                      paddingBottom: '4px'
                    }}>
              </Link>
            </div>
            
            {/* Image Column */}
            <div className="relative w-full">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/_ELD3437ddd.jpg"
                  alt="Dr. Esra Çavuşoğlu"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Service Areas from Business Page */}
      <section className="bg-gray-50" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-black mb-8 text-center"
                style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Size Nasıl Destek Olabilirim?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                     style={{ border: '2px solid #F1515C', borderRadius: '50%' }}>
                  <svg className="w-8 h-8" fill="none" stroke="#F1515C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-josefin text-black mb-4"
                    style={{ fontSize: '1.65rem', fontWeight: 300 }}>
                  Danışmanlık
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.045rem', lineHeight: 1.7 }}>
                  Bağımlılık tedavi programı tasarımı, longevity klinikleri için model oluşturma.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                     style={{ border: '2px solid #F1515C', borderRadius: '50%' }}>
                  <svg className="w-8 h-8" fill="none" stroke="#F1515C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-josefin text-black mb-4"
                    style={{ fontSize: '1.65rem', fontWeight: 300 }}>
                  Klinik Danışmanlık
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.045rem', lineHeight: 1.7 }}>
                  Rehabilitasyon merkezleri için klinik gözetim ve program geliştirme.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                     style={{ border: '2px solid #F1515C', borderRadius: '50%' }}>
                  <svg className="w-8 h-8" fill="none" stroke="#F1515C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-josefin text-black mb-4"
                    style={{ fontSize: '1.65rem', fontWeight: 300 }}>
                  İş Birlikleri
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.045rem', lineHeight: 1.7 }}>
                  Ayık Kafa Podcast ve Longevilab aracılığıyla markalar ve kurumlarla ortak projeler geliştirme.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                     style={{ border: '2px solid #F1515C', borderRadius: '50%' }}>
                  <svg className="w-8 h-8" fill="none" stroke="#F1515C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="font-josefin text-black mb-4"
                    style={{ fontSize: '1.65rem', fontWeight: 300 }}>
                  Konuşmacı
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.045rem', lineHeight: 1.7 }}>
                  Konferanslar, paneller ve şirket etkinliklerinde bağımlılık, sağlıklı yaşam, longevity ve biohacking üzerine konuşmalar.
                </p>
              </div>
            </div>

            {/* CTA Link */}
            <div className="text-center mt-12">
              <Link href="/iletisim"
                    className="inline-block font-josefin text-[#F1515C] hover:text-[#d13e49] transition-all"
                    style={{
                      fontSize: '1.375rem',
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                      borderBottom: '2px solid #F1515C',
                      paddingBottom: '6px'
                    }}>
                Gelin Konuşalım
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-black text-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto text-center">
            <blockquote className="font-josefin italic"
                        style={{ fontSize: 'clamp(1.65rem, 3.3vw, 2.75rem)', lineHeight: 1.4 }}>
              "İyileşme bir varış noktası değil, sürekli bir yolculuktur."
            </blockquote>
            <p className="font-josefin mt-8 text-white/80" style={{ fontSize: '1.1rem', letterSpacing: '0.1em' }}>
              — DR. ESRA ÇAVUŞOĞLU
            </p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Column */}
              <div>
              <p className="font-josefin text-gray-600 mb-6"
                 style={{ fontSize: '1.54rem', lineHeight: 1.7, fontWeight: 200 }}>
                Ben Dr. Esra Çavuşoğlu — klinik psikolog, girişimci, uluslararası konuşmacı ve Türkiye'nin ilk biohacker'ıyım.
              </p>
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.375rem', lineHeight: 1.7 }}>
                30 yıla yakın iş deneyimim ve liderlik ile yaşam tarzımı dönüştüren kişisel yolculuğum sayesinde,
                girişimlerin netlik, yaratıcılık ve sürdürülebilirlikle büyümesine destek oluyorum. Aynı zamanda
                güçlü bir beden, güçlü bir zihin ve güçlü bir iş kurma konusunda öğrendiklerimi — ve hâlâ
                öğrenmeye devam ettiklerimi — paylaşıyorum.
              </p>
              </div>

              {/* Image Column */}
              <div className="relative w-full">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/_ELD3728ddd.jpg"
                    alt="Dr. Esra Çavuşoğlu"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basında Biz Section */}
      <section className="bg-white" style={{ padding: '3.3vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-black mb-12 text-center"
                style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Basında Biz
            </h2>
            <p className="font-josefin text-gray-600 text-center max-w-[900px] mx-auto mb-16"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              Televizyon programları, röportajlar ve medya görünümlerim
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Hülya Avşar ile Yaşamaya Dair */}
              <div>
                <div className="aspect-video mb-4">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/u1mpREalTQI"
                    title="Hülya Avşar ile Yaşamaya Dair"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                  </iframe>
                </div>
                <h3 className="font-josefin text-black mb-2" style={{ fontSize: '1.65rem', fontWeight: 300 }}>
                  Hülya Avşar ile Yaşamaya Dair
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Bağımlılık ve iyileşme yolculuğum üzerine samimi bir sohbet.
                </p>
              </div>

              {/* Özlem Gürses ile Hayatın Renkleri */}
              <div>
                <div className="aspect-video mb-4">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/NzO1KDknMjk"
                    title="Özlem Gürses ile Hayatın Renkleri"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                  </iframe>
                </div>
                <h3 className="font-josefin text-black mb-2" style={{ fontSize: '1.65rem', fontWeight: 300 }}>
                  Özlem Gürses ile Hayatın Renkleri
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Sağlıklı yaşam ve biyohacking üzerine ilham verici bir söyleşi.
                </p>
              </div>
            </div>

            {/* Logo Slider */}
            <div className="border-t pt-12 mt-12">
                <div className="overflow-hidden">
                  <div className="flex items-center justify-center gap-12 md:gap-20">
                    {/* Sober Magazine Logo */}
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/sober.svg"
                        alt="Sober Magazine"
                        width={120}
                        height={50}
                        className="opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </div>

                    {/* L'Officiel Türkiye Logo */}
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/lofficiel.svg"
                        alt="L'Officiel Türkiye"
                        width={150}
                        height={50}
                        className="opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </div>

                    {/* Sabah Gazetesi Logo */}
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/sabah.svg"
                        alt="Sabah Gazetesi"
                        width={120}
                        height={50}
                        className="opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
}