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
                      fontSize: 'clamp(2.75rem, 5.5vw, 4.4rem)', 
                      fontWeight: 200,
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em'
                    }}>
                  Deneyim. İş Zekası.<br />
                  <span style={{ color: '#E63946' }}>Sağlıkta ve Uzun Yaşamda Yeni Bir Çağ.</span>
                </h1>
                
                <p className="font-josefin text-black"
                   style={{ fontSize: '1.485rem', lineHeight: 1.7, fontWeight: 200 }}>
                  Dr. Esra Çavuşoğlu, PhD — Bağımlılık tedavisi odaklı klinik psikolog,
                  danışman ve Avrupa'nın önde gelen biohacker'larından.
                </p>
              </div>
              
              <div className="relative w-full">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/_ELD5529dddw.jpg"
                    alt="Dr. Esra Çavuşoğlu"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-black text-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-white mb-12 text-center"
                style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Misyonum ve Değerlerim
            </h2>

            <div className="max-w-[900px] mx-auto space-y-8 mb-16">
              <p className="font-josefin text-white/90 text-center"
                 style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
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
                <h3 className="font-josefin mb-4" style={{ fontSize: '1.65rem', fontWeight: 300 }}>
                  Bağımlılık Tedavisi
                </h3>
                <p className="font-josefin text-white/80" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
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
                <h3 className="font-josefin mb-4" style={{ fontSize: '1.65rem', fontWeight: 300 }}>
                  Ayık Kafa Podcast
                </h3>
                <p className="font-josefin text-white/80" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
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
                <h3 className="font-josefin mb-4" style={{ fontSize: '1.65rem', fontWeight: 300 }}>
                  Konuşmacı & Danışman
                </h3>
                <p className="font-josefin text-white/80" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Konuşmacı ve danışman olarak; bağımlılık, sağlıklı yaşam, longevity ve biohacking
                  konularında bireylere ve şirketlere rehberlik ediyor, performanslarını ve yaşam
                  kalitelerini artırmalarına destek oluyorum.
                </p>
              </div>
            </div>

            <div className="max-w-[900px] mx-auto mt-16">
              <p className="font-josefin text-white/90 text-center"
                 style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
                Bilginin dönüştürücü gücüne inanıyorum. İster Ayık Kafa podcast'inde düşüncelerimi
                paylaşırken, ister uluslararası sahnelerde konuşmacı olarak yer alırken, ister
                danışmanlık verirken; odağım her zaman bilgiyi eyleme dönüştürmek.
              </p>

              <p className="font-josefin text-white/90 text-center mt-6"
                 style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
                Sağlık, uzun yaşam ve insan potansiyeli üzerine yenilikçi yaklaşımları desteklemeye
                tutkuyla bağlıyım. Platformlarımı, iyi olma hali, güçlenme ve dönüşüm üzerine ilham
                veren sohbetler için kullanıyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="bg-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Column */}
              <div>
                <h2 className="font-josefin text-black mb-12"
                    style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
                  Profesyonel Yolculuğum
                </h2>

                <div className="space-y-6">
                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
                    Ben Dr. Esra Çavuşoğlu, PhD. İflah olmaz bir girişimciyim; aynı zamanda bağımlılık tedavisi alanında uzman
                    bir klinik psikolog, uluslararası konuşmacı ve Türkiye'nin ilk biohacker'ıyım. Avrupa'nın önde gelen
                    biohacker'larından biri olarak kabul ediliyorum ve klinik psikoloji, fonksiyonel tıp, nörobilim ve
                    biohacking'i yenilikçi bir yaklaşımla bir araya getiriyorum. Bu bütüncül bakış açım sayesinde hem
                    bağımlılıklarla mücadeleye hem de sağlıklı ve uzun bir yaşamın nasıl mümkün olabileceğine dair farklı
                    bir vizyon sunuyorum.
                  </p>

                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
                    Girişimci yönüm, yalnızca sağlık alanında değil, farklı sektörlerde de kendini gösterdi. Türkiye'nin ilk
                    konsept restoranı Lounge'ı ve dünyanın ilk elektro kas stimülasyonu (EMS) grup fitness konsepti olan
                    Shock Therapy'yi hayata geçirdim. Akademik alandaki yolculuğum ise Yale Üniversitesi'ndeki görevlerim ve
                    Birleşmiş Milletler'deki konuşmalarımla uluslararası platformlara taşındı.
                  </p>

                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
                    Türkiye'de bir ilk olan bağımlılık tedavisi modelini tasarladım, bu alandaki derneği kurdum ve
                    "Ayık Kafa" YouTube kanalım aracılığıyla koruyucu sağlık bilincini daha geniş kitlelerle paylaşıyorum.
                  </p>
                </div>
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

      {/* Personal Transformation */}
      <section className="bg-gray-50" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image Column */}
              <div className="relative w-full">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/_ELD3177ddd.jpg"
                    alt="Dr. Esra Çavuşoğlu"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div>
                <h2 className="font-josefin text-black mb-12"
                    style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
                  Kişisel Dönüşümüm
                </h2>

                <div className="space-y-6">
                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
                    Ama bütün bunlar hikayemin tamamını anlatmıyor. Kendi bağımlılık mücadelem hayatımı
                    değiştirdi; sağlığı, iyileşmeyi ve dönüşümü anlamamı sağladı. Fonksiyonel tıp,
                    nörobilim ve biohacking sayesinde yalnızca sağlığımı değil, hayata bakışımı da
                    yeniden inşa ettim.
                  </p>

                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
                    Bu deneyim bana benzersiz bir bakış açısı kazandırdı: Bağımlılık bir hastalıktır,
                    ama iyileşebilir. Misyonum, insanlara değişimin mümkün olduğunu göstermek ve onlara
                    bilim, empati ve deneyimle rehberlik etmek.
                  </p>

                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
                    Bugün öğrendiklerimi sadece kliniklerde değil; konferanslarda, podcastlerde ve
                    yazılarımla da paylaşıyorum. Amacım, her bireyin kendi potansiyelini keşfetmesine
                    yardımcı olmak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Area */}
      <section className="bg-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-josefin text-black mb-12"
                style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Etki Alanım
            </h2>

            <div className="space-y-6">
              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
                Kariyerim boyunca hükümetlerle, sivil toplum kuruluşlarıyla ve özel kurumlarla
                çalıştım. Bağımlılık tedavi modelleri tasarladım, kliniklerin kuruluş süreçlerini
                yönettim ve süpervizörlük yaptım.
              </p>

              <p className="font-josefin text-gray-600"
                 style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
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
                style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Size Nasıl Destek Olabilirim?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.375rem', fontWeight: 300 }}>
                  Longevity Klinikleri
                </h3>
                <p className="font-josefin text-gray-600 text-sm" style={{ lineHeight: 1.8 }}>
                  Model oluşturma ve program tasarımı
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.375rem', fontWeight: 300 }}>
                  Bağımlılık Tedavisi
                </h3>
                <p className="font-josefin text-gray-600 text-sm" style={{ lineHeight: 1.8 }}>
                  Program tasarımı ve süpervizörlük
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.375rem', fontWeight: 300 }}>
                  Kurumsal Çözümler
                </h3>
                <p className="font-josefin text-gray-600 text-sm" style={{ lineHeight: 1.8 }}>
                  Uluslararası uzmanlarla özel tasarım
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.375rem', fontWeight: 300 }}>
                  Konuşmacı
                </h3>
                <p className="font-josefin text-gray-600 text-sm" style={{ lineHeight: 1.8 }}>
                  Konferans ve etkinliklerde ilham verici içerikler
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="font-josefin mb-8"
                 style={{ fontSize: '1.485rem', lineHeight: 1.8, fontWeight: 600, color: '#E63946' }}>
                Benim yaklaşımım çok net: Birlikte üreteceğimiz projeler ve anlamlı iş birlikleri.
              </p>
              <Link href="/iletisim" 
                    className="inline-block font-josefin text-black hover:text-gray-600 transition-all"
                    style={{ 
                      fontSize: '0.825rem', 
                      fontWeight: 300, 
                      letterSpacing: '0.2em', 
                      textTransform: 'uppercase',
                      borderBottom: '1px solid #000',
                      paddingBottom: '4px'
                    }}>
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
                style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Son Projeler
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.925rem', fontWeight: 300 }}>
                  Longevilab
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Uzmanlardan, bilim insanlarından ve doktorlardan oluşan bir danışma kurulunun 
                  katkılarıyla; longevity, biohacking, bağımlılık ve yaşam temalarında içerikler 
                  sunan bir platform.
                </p>
              </div>
              
              <div>
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.925rem', fontWeight: 300 }}>
                  Ayık Kafa Podcast
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Bağımlılık, sağlık, fonksiyonel tıp, nörobilim ve biohacking üzerine bilimsel 
                  temelli, samimi ve ilham verici sohbetler. Her bölümde alanında uzman konuklarla 
                  güncel ve uygulanabilir bilgileri izleyiciyle buluşturuyorum.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.925rem', fontWeight: 300 }}>
                  Konferanslar
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Konuşmacı olarak çeşitli ulusal ve uluslararası konferanslara katılıyorum. Nisan ayında gerçekleşecek,
                  kadın odaklı bir günlük longevity konferansı da bu alandaki en güncel projelerimden biri olacak.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gray-50">
              <p className="font-josefin text-black text-center"
                 style={{ fontSize: '1.2375rem', lineHeight: 1.8, fontWeight: 200 }}>
                Ayık Kafa, yalnızca bağımlılık üzerine değil, aynı zamanda toplumun her kesimine
                hitap eden bir koruyucu sağlık ve iyi yaşam platformu. İnsanların hayatlarına
                doğrudan dokunan içerikleriyle farkındalık yaratıyor, ilham veriyor ve dönüşüm sağlıyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black" style={{ padding: '4vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="font-josefin text-white mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Gelin Konuşalım
            </h2>
            <p className="font-josefin text-white/80 mb-8 max-w-[700px] mx-auto"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              Projeleriniz, iş birlikleriniz ve danışmanlık talepleriniz için benimle iletişime geçin.
            </p>
            <Link href="/iletisim"
                  className="inline-block font-josefin text-white hover:opacity-90 transition-opacity"
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    backgroundColor: '#E63946',
                    padding: '16px 40px',
                    borderRadius: '4px'
                  }}>
              İLETİŞİME GEÇ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}