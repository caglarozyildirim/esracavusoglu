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
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
                    fontWeight: 200,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em'
                  }}>
                <span style={{ color: '#E63946' }}>Dr. Esra Çavuşoğlu, PhD</span>
              </h1>
              
              <p className="font-josefin text-gray-600 mb-8"
                 style={{ fontSize: '1.5rem', lineHeight: 1.5, fontWeight: 300 }}>
                Sağlık Savunucusu | Girişimci | Danışman | Biohacker
              </p>
              
              <p className="font-josefin text-gray-600 mb-12"
                 style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 200 }}>
                Bağımlılık tedavisi odaklı klinik psikolog, Avrupa'nın önde gelen biohacker'larından, 
                Yale Üniversitesi mezunu ve Türkiye Rehabilitasyon Modeli'nin tasarımcısıyım.
              </p>
              
              <Link href="/iletisim" 
                    className="inline-block font-josefin text-black hover:text-gray-600 transition-all"
                    style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 200, 
                      letterSpacing: '0.2em', 
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #000',
                      paddingBottom: '4px'
                    }}>
                HADİ İLETİŞİME GEÇELİM
              </Link>
            </div>
            
            {/* Image Column */}
            <div className="relative h-[600px] lg:h-[700px]">
              <Image
                src="/images/esracavusoglu.jpg"
                alt="Dr. Esra Çavuşoğlu"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Updated with Manjit Style */}
      <section className="bg-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[11px]">
              
              <Link href="/is-hayati" className="group block bg-white hover:bg-gray-50 transition-all duration-300"
                    style={{ 
                      border: '1px solid rgba(0,0,0,0.08)',
                      padding: '2.5rem 2rem'
                    }}>
                {/* Icon */}
                <div className="mb-6 text-black/60 group-hover:text-black transition-colors">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-josefin text-black" 
                      style={{ 
                        fontSize: '1.6rem', 
                        fontWeight: 300,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em'
                      }}>
                    Psikoloji & Terapi
                  </h3>
                  <p className="font-josefin text-gray-600" 
                     style={{ 
                       fontSize: '1rem', 
                       lineHeight: 1.7,
                       fontWeight: 300
                     }}>
                    Bağımlılık terapisi, klinik danışmanlık ve psikolojik destek hizmetleri. Türkiye Rehabilitasyon Modeli'nin tasarımcısı.
                  </p>
                </div>
                
                {/* Learn More Link */}
                <div className="flex items-center mt-6 text-black/60 group-hover:text-black transition-colors">
                  <span className="font-josefin" 
                        style={{ 
                          fontSize: '0.9rem', 
                          fontWeight: 300,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase'
                        }}>
                    DAHA FAZLA
                  </span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              
              <Link href="/kisisel" className="group block bg-white hover:bg-gray-50 transition-all duration-300"
                    style={{ 
                      border: '1px solid rgba(0,0,0,0.08)',
                      padding: '2.5rem 2rem'
                    }}>
                {/* Icon */}
                <div className="mb-6 text-black/60 group-hover:text-black transition-colors">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-josefin text-black" 
                      style={{ 
                        fontSize: '1.6rem', 
                        fontWeight: 300,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em'
                      }}>
                    Biyohacking & Longevilab
                  </h3>
                  <p className="font-josefin text-gray-600" 
                     style={{ 
                       fontSize: '1rem', 
                       lineHeight: 1.7,
                       fontWeight: 300
                     }}>
                    Uzun ömür ve biyohacking alanında en yeni protokoller. Longevilab kurucusu olarak sağlıklı yaşam koçluğu.
                  </p>
                </div>
                
                {/* Learn More Link */}
                <div className="flex items-center mt-6 text-black/60 group-hover:text-black transition-colors">
                  <span className="font-josefin" 
                        style={{ 
                          fontSize: '0.9rem', 
                          fontWeight: 300,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase'
                        }}>
                    DAHA FAZLA
                  </span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              
              <Link href="/blog" className="group block bg-white hover:bg-gray-50 transition-all duration-300"
                    style={{ 
                      border: '1px solid rgba(0,0,0,0.08)',
                      padding: '2.5rem 2rem'
                    }}>
                {/* Icon */}
                <div className="mb-6 text-black/60 group-hover:text-black transition-colors">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-josefin text-black" 
                      style={{ 
                        fontSize: '1.6rem', 
                        fontWeight: 300,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em'
                      }}>
                    Ayık Kafa Podcast
                  </h3>
                  <p className="font-josefin text-gray-600" 
                     style={{ 
                       fontSize: '1rem', 
                       lineHeight: 1.7,
                       fontWeight: 300
                     }}>
                    Bağımlılık hastalığı, biyohacking ve uzun ömür üzerine haftalık podcast yayınları. 18 yıllık ayık yaşam deneyimi.
                  </p>
                </div>
                
                {/* Learn More Link */}
                <div className="flex items-center mt-6 text-black/60 group-hover:text-black transition-colors">
                  <span className="font-josefin" 
                        style={{ 
                          fontSize: '0.9rem', 
                          fontWeight: 300,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase'
                        }}>
                    DAHA FAZLA
                  </span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              
              <Link href="/iletisim" className="group block bg-white hover:bg-gray-50 transition-all duration-300"
                    style={{ 
                      border: '1px solid rgba(0,0,0,0.08)',
                      padding: '2.5rem 2rem'
                    }}>
                {/* Icon */}
                <div className="mb-6 text-black/60 group-hover:text-black transition-colors">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-josefin text-black" 
                      style={{ 
                        fontSize: '1.6rem', 
                        fontWeight: 300,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em'
                      }}>
                    Eğitim & Danışmanlık
                  </h3>
                  <p className="font-josefin text-gray-600" 
                     style={{ 
                       fontSize: '1rem', 
                       lineHeight: 1.7,
                       fontWeight: 300
                     }}>
                    ÇABAÇAD kurucusu olarak bağımlılıkla mücadele eğitimleri. Yale Tıp Fakültesi'nde uluslararası danışmanlık.
                  </p>
                </div>
                
                {/* Learn More Link */}
                <div className="flex items-center mt-6 text-black/60 group-hover:text-black transition-colors">
                  <span className="font-josefin" 
                        style={{ 
                          fontSize: '0.9rem', 
                          fontWeight: 300,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase'
                        }}>
                    DAHA FAZLA
                  </span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
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
                        style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1.4 }}>
              "İyileşme bir varış noktası değil, sürekli bir yolculuktur."
            </blockquote>
            <p className="font-josefin mt-8 text-white/80" style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>
              — DR. ESRA ÇAVUŞOĞLU
            </p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-josefin text-black mb-8" 
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
                18 Yıldır Ayık, Yale Mezunu, CASAC-T Sertifikalı
              </h2>
              <p className="font-josefin text-gray-600 mb-6"
                 style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 200 }}>
                Yale Üniversitesi'nden mezun olduktan sonra, kendi iyileşme yolculuğumu 
                başkalarının dönüşümüne rehberlik etmek için kullandım.
              </p>
              <p className="font-josefin text-gray-600 mb-8"
                 style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                ÇABAÇAD'ı kurarak Türkiye'de bağımlılık tedavisine yenilikçi yaklaşımlar getirdim. 
                Longevilab ile biyohacking ve uzun ömür protokollerini Türkiye'ye tanıttım.
              </p>
              <Link href="/hakkimda" 
                    className="inline-block font-josefin text-black hover:text-gray-600 transition-all"
                    style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 200, 
                      letterSpacing: '0.2em', 
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #000',
                      paddingBottom: '4px'
                    }}>
                DAHA FAZLA ÖĞREN
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 text-center">
                <div className="font-josefin text-4xl mb-2" style={{ fontWeight: 200 }}>18+</div>
                <p className="font-josefin text-sm text-gray-600">Yıllık Ayıklık</p>
              </div>
              <div className="bg-white p-8 text-center">
                <div className="font-josefin text-4xl mb-2" style={{ fontWeight: 200 }}>500+</div>
                <p className="font-josefin text-sm text-gray-600">Danışan</p>
              </div>
              <div className="bg-white p-8 text-center">
                <div className="font-josefin text-4xl mb-2" style={{ fontWeight: 200 }}>100+</div>
                <p className="font-josefin text-sm text-gray-600">Podcast Bölümü</p>
              </div>
              <div className="bg-white p-8 text-center">
                <div className="font-josefin text-4xl mb-2" style={{ fontWeight: 200 }}>2</div>
                <p className="font-josefin text-sm text-gray-600">Kurulan Şirket</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}