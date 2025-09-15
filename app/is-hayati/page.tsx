'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function IsHayatiPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black text-white min-h-[70vh] flex items-center" style={{ paddingTop: '72px' }}>
        <div className="w-full px-[4vw] py-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="font-josefin text-white" 
                    style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                      fontWeight: 200,
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em'
                    }}>
                  Sağlıkta Vizyon. <span style={{ color: '#F1515C' }}>Stratejide Fark.</span>
                </h1>
                <p className="font-josefin text-white/80 mt-8 max-w-3xl"
                   style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
                  Uluslararası deneyimimle; bağımlılık tedavi programları tasarladım, 
                  rehabilitasyon merkezlerinin kuruluşunda görev aldım, süpervizörlük yaptım 
                  ve sağlık kurumları ile hükümetlerle iş birliği yürüttüm.
                </p>
                <p className="font-josefin text-white/80 mt-4 max-w-3xl"
                   style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 200 }}>
                  Türkiye'de standart hale gelen Rehabilitasyon Modeli'nin tasarımcısı ve 
                  uygulayacısı olarak, bağımlılık tedavisinde kalıcı çözümler geliştirdim.
                </p>
              </div>
              
              <div className="relative h-[500px]">
                <Image
                  src="/images/esracavusoglu-ishayati.jpg"
                  alt="Dr. Esra Çavuşoğlu - İş Hayatı"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white" style={{ padding: '3.3vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-black mb-8 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Size Nasıl Destek Olabilirim?
            </h2>
            
            <p className="font-josefin text-gray-600 text-center max-w-[900px] mx-auto mb-16"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              Uzmanlığım; bağımlılık tedavisi, sağlıklı yaşam, longevity ve biohacking üzerine 
              bireylere, kurumlara ve şirketlere rehberlik etmek. İster kliniklere danışmanlık 
              sağlarken, ister markalarla iş birliği yaparken, ister uluslararası sahnelerde 
              konuşmacı olarak yer alırken amacım her zaman bilgiyle değer yaratmak ve 
              dönüşüme ilham olmak.
            </p>
            
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
                    style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Danışmanlık
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
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
                    style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Klinik Danışmanlık
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
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
                    style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  İş Birlikleri
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
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
                    style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Konuşmacı
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Konferanslar, paneller ve şirket etkinliklerinde bağımlılık, sağlıklı yaşam, longevity ve biohacking üzerine konuşmalar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Vision */}
      <section className="bg-gray-50" style={{ padding: '3.3vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-black mb-16 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Deneyim & Vizyon
            </h2>
            
            <div className="max-w-[900px] mx-auto">
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-4 mt-2"></span>
                  <span className="font-josefin text-gray-700" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                    Türkiye Rehabilitasyon Modeli'ni tasarladım ve uyguladım; bugün ülke genelinde standart kabul ediliyor.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-4 mt-2"></span>
                  <span className="font-josefin text-gray-700" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                    Gaziantep Oya Bahadır Yüksel Rehabilitasyon Merkezi'nde üst düzey danışman ve Operasyon Başkan Yardımcısı olarak çalıştım.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-4 mt-2"></span>
                  <span className="font-josefin text-gray-700" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                    Yale Üniversitesi Tıp Fakültesi Klinik Danışma Kurulu'nda yer aldım ve Yale Denetim Programı'nda Uluslararası Gelişim Danışmanı oldum.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-4 mt-2"></span>
                  <span className="font-josefin text-gray-700" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                    2016'da Viyana'da Birleşmiş Milletler Uyuşturucu ve Suç Ofisi (UNODC) etkinliğinde moderatörlük, 2013'te Singapur APBAM Konferansı'nda panelistlik yaptım.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-4 mt-2"></span>
                  <span className="font-josefin text-gray-700" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                    Çağdaş Bağımlılık Çalışmaları Derneği'ni (ÇABAÇAD) kurdum.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-4 mt-2"></span>
                  <span className="font-josefin text-gray-700" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                    Türkiye'de bağımlılık tedavisi üzerine yazdığım makaleler Başbakanlık tarafından onurlandırıldı.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-4 mt-2"></span>
                  <span className="font-josefin text-gray-700" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                    Ayık Kafa Podcast ve Longevilab ile sağlıklı yaşam, longevity, bağımlılık ve biohacking alanlarında içerikler üretiyor ve farkındalık yaratıyorum.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-4 mt-2"></span>
                  <span className="font-josefin text-gray-700" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                    Avrupa'nın önde gelen biohacker'larından biri olarak koruyucu sağlığa yeni bir vizyon kazandırdım.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-white" style={{ padding: '3.3vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-black mb-16 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Kimlerle Çalışıyorum
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center" 
                     style={{ border: '2px solid #F1515C', borderRadius: '50%' }}>
                  <svg className="w-10 h-10" fill="none" stroke="#F1515C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-josefin text-black mb-3" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Bireyler
                </h3>
                <p className="font-josefin text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Bağımlılık tedavisi, sağlıklı yaşam ve longevity yolculuğunda kişisel rehberlik arayan herkes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center" 
                     style={{ border: '2px solid #F1515C', borderRadius: '50%' }}>
                  <svg className="w-10 h-10" fill="none" stroke="#F1515C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-josefin text-black mb-3" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Şirketler ve Kurumlar
                </h3>
                <p className="font-josefin text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Çalışan sağlığı, bağımlılıkla mücadele, performans, sağlık ve yaşam dengesi üzerine danışmanlık veya konuşmacı desteği isteyen organizasyonlar.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center" 
                     style={{ border: '2px solid #F1515C', borderRadius: '50%' }}>
                  <svg className="w-10 h-10" fill="none" stroke="#F1515C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-josefin text-black mb-3" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Sağlık Profesyonelleri ve Klinikler
                </h3>
                <p className="font-josefin text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Bağımlılık tedavi programı tasarımı, rehabilitasyon merkezi kurulumu ve klinik danışmanlık desteği arayan uzmanlar ve merkezler.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center" 
                     style={{ border: '2px solid #F1515C', borderRadius: '50%' }}>
                  <svg className="w-10 h-10" fill="none" stroke="#F1515C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-josefin text-black mb-3" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Markalar ve Medya
                </h3>
                <p className="font-josefin text-gray-600" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Ayık Kafa Podcast ve Longevilab aracılığıyla toplumsal farkındalık ve sağlık temalı projelerde iş birliği yapmak isteyen markalar ve medya kuruluşları.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-josefin text-white mb-8" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              "Birlikte çalışalım. Değerli ve anlamlı projeler için yola çıkıyorsanız, gelin konuşalım."
            </h2>
            <p className="font-josefin text-white/80 mb-12"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              Uluslararası deneyimimle bireylere, şirketlere ve kurumlara rehberlik ediyor; 
              bilgiyi stratejiye, stratejiyi de somut etkiye dönüştürüyorum.
            </p>
            <Link href="/iletisim" 
                  className="inline-block font-josefin text-white hover:text-gray-300 transition-all"
                  style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 300, 
                    letterSpacing: '0.2em', 
                    textTransform: 'uppercase',
                    borderBottom: '1px solid #fff',
                    paddingBottom: '4px'
                  }}>
              İŞ BİRLİĞİ İÇİN BENİMLE İLETİŞİME GEÇİN
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}