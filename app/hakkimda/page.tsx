'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HakkimdaPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center" style={{ paddingTop: '72px' }}>
        <div className="w-full px-[4vw] py-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="font-josefin text-black mb-8" 
                    style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                      fontWeight: 200,
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em'
                    }}>
                  Deneyim. İş Zekası.<br />
                  <span style={{ color: '#E63946' }}>Sağlıkta ve Uzun Yaşamda Yeni Bir Çağ.</span>
                </h1>
                
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 200 }}>
                  Dr. Esra Çavuşoğlu, PhD — Bağımlılık tedavisi odaklı klinik psikolog, 
                  danışman ve Avrupa'nın önde gelen biohacker'larından.
                </p>
              </div>
              
              <div className="relative h-[500px]">
                <Image
                  src="/images/esracavusoglu-hakkimda.jpg"
                  alt="Dr. Esra Çavuşoğlu"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="bg-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-josefin text-black mb-12" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Profesyonel Yolculuğum
            </h2>
              
            <div className="space-y-6">
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Ben Dr. Esra Çavuşoğlu, PhD, bağımlılık tedavisi odaklı bir klinik psikoloğum, 
                uluslararası konuşmacı ve Türkiye'nin ilk biohacker'ıyım. Yaptığım çalışmalarla 
                Türkiye'nin ilk biohacker'ı unvanına sahip oldum ve bugün Avrupa'nın önde gelen 
                biohacker'larından biri olarak gösteriliyorum.
              </p>
              
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Klinik psikoloji, fonksiyonel tıp, nörobilim ve biohacking'i bir araya getirerek 
                hem bağımlılık tedavisine hem de uzun, sağlıklı ve bilinçli yaşama dair yeni bir 
                yaklaşım geliştirdim. Yaratıcısı olduğum Ayık Kafa YouTube kanalımdaki podcast'lerim, 
                koruyucu sağlık konusunda ülkemize yeni bir bakış açısı kazandırdı.
              </p>
              
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                ABD'de ve uluslararası alanda eğitim aldım, Yale Üniversitesi Tıp Fakültesi Klinik 
                Danışma Kurulu'nda görev yaptım ve Yale Denetim Programı'nda Uluslararası Gelişim 
                Danışmanı olarak çalıştım. Viyana'da Birleşmiş Milletler Uyuşturucu ve Suç Ofisi 
                (UNODC) etkinliğinde moderatör, Singapur'daki Asya Pasifik Davranışsal ve Bağımlılık 
                Tıbbı Konferansı'nda (APBAM) panelist olarak uluslararası sahnelerde yer aldım.
              </p>
              
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Türkiye'de bağımlılık tedavisinde bir ilk olan Türkiye Rehabilitasyon Modeli'ni 
                tasarladım ve uyguladım. Gaziantep Oya Bahadır Yüksel Rehabilitasyon Merkezi'nde 
                üst düzey danışman olarak görev yaptım. Ayrıca Çağdaş Bağımlılık Çalışmaları 
                Derneği'ni (ÇABAÇAD) kurarak, bağımlılık biliminin yaygınlaşmasına ve yeni tedavi 
                yaklaşımlarının gelişmesine öncülük ediyorum.
              </p>
              
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Longevilab ve Ayık Kafa'da ürettiğim içerikleri klinik bağımlılık uzmanlığım, 
                fonksiyonel tıp, nörobilim ve biohacking yaklaşımı üzerine kuruyorum; podcastlerimde 
                konuklarımla bu alanları ele alarak bağımlılık, uzun yaşam, sağlıklı beslenme, 
                zihinsel performans ve yaşam kalitesini artırmaya yönelik en güncel bilgileri 
                paylaşıyor, izleyicilerin daha sağlıklı, bilinçli ve uzun bir yaşama adım atmasına 
                yardımcı oluyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Transformation */}
      <section className="bg-gray-50" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-josefin text-black mb-12" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Kişisel Dönüşümüm
            </h2>
              
            <div className="space-y-6">
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Ama bütün bunlar hikayemin tamamını anlatmıyor. Kendi bağımlılık mücadelem hayatımı 
                değiştirdi; sağlığı, iyileşmeyi ve dönüşümü anlamamı sağladı. Fonksiyonel tıp, 
                nörobilim ve biohacking sayesinde yalnızca sağlığımı değil, hayata bakışımı da 
                yeniden inşa ettim.
              </p>
              
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Bu deneyim bana benzersiz bir bakış açısı kazandırdı: Bağımlılık bir hastalıktır, 
                ama iyileşebilir. Misyonum, insanlara değişimin mümkün olduğunu göstermek ve onlara 
                bilim, empati ve deneyimle rehberlik etmek.
              </p>
              
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Bugün öğrendiklerimi sadece kliniklerde değil; konferanslarda, podcastlerde ve 
                yazılarımla da paylaşıyorum. Amacım, her bireyin kendi potansiyelini keşfetmesine 
                yardımcı olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-black text-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-white mb-12 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Misyonum ve Değerlerim
            </h2>
            
            <div className="max-w-[900px] mx-auto space-y-8 mb-16">
              <p className="font-josefin text-white/90 text-center"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Misyonum üç temel alana odaklanıyor:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" 
                     style={{ border: '2px solid #E63946', borderRadius: '12px' }}>
                  <svg className="w-8 h-8" fill="none" stroke="#E63946" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-josefin mb-4" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Bağımlılık Tedavisi
                </h3>
                <p className="font-josefin text-white/80" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Bağımlılık tedavisi odaklı klinik psikoloji uzmanlığım ve bilimsel yöntemlerle 
                  bağımlılıkla mücadele eden bireyleri tedavi ederek, iyileşme yolculuklarına 
                  rehberlik ediyorum.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" 
                     style={{ border: '2px solid #E63946', borderRadius: '12px' }}>
                  <svg className="w-8 h-8" fill="none" stroke="#E63946" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="font-josefin mb-4" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Ayık Kafa Podcast
                </h3>
                <p className="font-josefin text-white/80" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Ayık Kafa podcast'im aracılığıyla; bağımlılıktan longevity ve sağlıklı yaşama, 
                  fonksiyonel tıptan biohacking'e, estetik uygulamalardan yenilikçi tedavilere kadar 
                  pek çok alanda, dünyaca tanınmış bilim insanları ve doktorlarla sohbetler 
                  gerçekleştiriyor, toplumsal fark yaratıyorum.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" 
                     style={{ border: '2px solid #E63946', borderRadius: '12px' }}>
                  <svg className="w-8 h-8" fill="none" stroke="#E63946" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-josefin mb-4" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Konuşmacı & Danışman
                </h3>
                <p className="font-josefin text-white/80" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Konuşmacı ve danışman olarak; bağımlılık, sağlıklı yaşam, longevity ve biohacking 
                  konularında bireylere ve şirketlere rehberlik ediyor, performanslarını ve yaşam 
                  kalitelerini artırmalarına destek oluyorum.
                </p>
              </div>
            </div>
            
            <div className="max-w-[900px] mx-auto mt-16">
              <p className="font-josefin text-white/90 text-center"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Bilginin dönüştürücü gücüne inanıyorum. İster Ayık Kafa podcast'inde düşüncelerimi 
                paylaşırken, ister uluslararası sahnelerde konuşmacı olarak yer alırken, ister 
                danışmanlık verirken; odağım her zaman bilgiyi eyleme dönüştürmek.
              </p>
              
              <p className="font-josefin text-white/90 text-center mt-6"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Sağlık, uzun yaşam ve insan potansiyeli üzerine yenilikçi yaklaşımları desteklemeye 
                tutkuyla bağlıyım. Platformlarımı, iyi olma hali, güçlenme ve dönüşüm üzerine ilham 
                veren sohbetler için kullanıyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Area */}
      <section className="bg-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-josefin text-black mb-12" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Etki Alanım
            </h2>
              
            <div className="space-y-6">
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Kariyerim boyunca hükümetlerle, sivil toplum kuruluşlarıyla ve özel kurumlarla 
                çalıştım. Bağımlılık tedavi modelleri tasarladım, kliniklerin kuruluş süreçlerini 
                yönettim ve süpervizörlük yaptım.
              </p>
              
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Amacım, kanıta dayalı yaklaşımları küresel uzmanlık ve yerel ihtiyaçlarla 
                birleştirerek etkili, sürdürülebilir ve dönüştürücü çözümler yaratmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Can I Help */}
      <section className="bg-gray-50" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-black mb-12 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Size Nasıl Destek Olabilirim?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.25rem', fontWeight: 300 }}>
                  Longevity Klinikleri
                </h3>
                <p className="font-josefin text-gray-600 text-sm" style={{ lineHeight: 1.8 }}>
                  Model oluşturma ve program tasarımı
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.25rem', fontWeight: 300 }}>
                  Bağımlılık Tedavisi
                </h3>
                <p className="font-josefin text-gray-600 text-sm" style={{ lineHeight: 1.8 }}>
                  Program tasarımı ve süpervizörlük
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.25rem', fontWeight: 300 }}>
                  Kurumsal Çözümler
                </h3>
                <p className="font-josefin text-gray-600 text-sm" style={{ lineHeight: 1.8 }}>
                  Uluslararası uzmanlarla özel tasarım
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.25rem', fontWeight: 300 }}>
                  Konuşmacı
                </h3>
                <p className="font-josefin text-gray-600 text-sm" style={{ lineHeight: 1.8 }}>
                  Konferans ve etkinliklerde ilham verici içerikler
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="font-josefin text-gray-600 mb-8"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Benim yaklaşımım çok net: Birlikte üreteceğimiz projeler ve anlamlı iş birlikleri.
              </p>
              <Link href="/iletisim" 
                    className="inline-block font-josefin text-black hover:text-gray-600 transition-all"
                    style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 300, 
                      letterSpacing: '0.2em', 
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #000',
                      paddingBottom: '4px'
                    }}>
                GELİN KONUŞALIM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-black mb-12 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Son Projeler
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 300 }}>
                  Longevilab
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Uzmanlardan, bilim insanlarından ve doktorlardan oluşan bir danışma kurulunun 
                  katkılarıyla; longevity, biohacking, bağımlılık ve yaşam temalarında içerikler 
                  sunan bir platform.
                </p>
              </div>
              
              <div>
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.75rem', fontWeight: 300 }}>
                  Ayık Kafa Podcast
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Bağımlılık, sağlık, fonksiyonel tıp, nörobilim ve biohacking üzerine bilimsel 
                  temelli, samimi ve ilham verici sohbetler. Her bölümde alanında uzman konuklarla 
                  güncel ve uygulanabilir bilgileri izleyiciyle buluşturuyorum.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-gray-50">
              <p className="font-josefin text-gray-700 text-center"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Ayık Kafa, yalnızca bağımlılık üzerine değil, aynı zamanda toplumun her kesimine 
                hitap eden bir koruyucu sağlık ve iyi yaşam platformu. İnsanların hayatlarına 
                doğrudan dokunan içerikleriyle farkındalık yaratıyor, ilham veriyor ve dönüşüm sağlıyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-black text-white text-center" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-josefin text-white mb-8" 
                style={{ fontSize: '2.5rem', fontWeight: 200, letterSpacing: '-0.02em' }}>
              "Gerçek zenginlik sağlıktır"
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}