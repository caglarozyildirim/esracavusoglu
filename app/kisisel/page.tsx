'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function KisiselPage() {
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
                  Sağlık. Yaşam. <span style={{ color: '#F1515C' }}>Yenilenme.</span>
                </h1>
                <p className="font-josefin text-white/80 mt-8 max-w-3xl"
                   style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
                  Bağımlılıktan Biohacking'e: Yolculuğum ve Misyonumun Temeli
                </p>
                <p className="font-josefin text-white/60 mt-4 max-w-3xl"
                   style={{ fontSize: '1rem', lineHeight: 1.7, fontWeight: 200 }}>
                  İş yolculuğum hep bir amaçla şekillendi, ama asıl değişimi getiren kişisel 
                  yolculuğum oldu. Sağlık için mücadele etmeyi, sistemi sorgulamayı, ailem için 
                  savunucu olmayı ve hem güçle hem de zarafetle yol göstermeyi öğrendim.
                </p>
              </div>
              
              <div className="relative h-[500px]">
                <Image
                  src="/images/esracavusoglu-kisisel.jpg"
                  alt="Dr. Esra Çavuşoğlu - Kişisel"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-white" style={{ padding: '3.3vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Neden Sağlık Benim Misyonum Oldu */}
            <div className="mb-20">
              <p className="font-josefin text-gray-600 text-center mb-4"
                 style={{ fontSize: '1rem', fontWeight: 300 }}>
                Her bölümde sorum şu: <span style={{ color: '#F1515C' }}>Daha iyi bir yaşam nasıl mümkün?</span>
              </p>
              <h2 className="font-josefin text-black mb-12 text-center" 
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
                Neden Sağlık Benim Misyonum Oldu?
              </h2>
              <div className="max-w-[900px] mx-auto">
                <p className="font-josefin text-gray-600 mb-8"
                   style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 200 }}>
                  Bağımlılıkla kendi mücadelem hayatımı değiştiren dönüm noktasıydı. İyileşme sürecim, 
                  sadece kişisel bir dönüşüm değil, aynı zamanda mesleki yolculuğumun da temelini attı. 
                  Bu nedenle bağımlılık üzerine doktora yaptım, klinik psikolog olarak bu alanda 
                  uzmanlaştım ve yıllardır bireylerin iyileşme yolculuklarına eşlik ediyorum.
                </p>
                <p className="font-josefin text-gray-600 mb-8"
                   style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                  Ama misyonum yalnızca tedaviyle sınırlı değil. Daha sağlıklı, daha uzun ve daha 
                  bilinçli bir yaşam için bilimin ışığında yeni yolları keşfetmeye tutkuyla bağlıyım. 
                  İşte bu yüzden Ayık Kafa YouTube kanalımı hayata geçirdim.
                </p>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                  Ayık Kafa podcast'lerimde dünyanın farklı yerlerinden bilim insanlarını, doktorları 
                  ve uzmanları konuk ederek; bağımlılıktan longevity'e, fonksiyonel tıptan biohacking'e, 
                  estetik uygulamalardan yenilikçi tedavilere kadar birçok konuyu ele alıyoruz. 
                  Tek amacım, insanlara doğru bilgiyi ulaştırmak ve yaşam kalitelerini artıracak 
                  ilhamı vermek.
                </p>
                <p className="font-josefin text-black mt-12 text-center"
                   style={{ fontSize: '1.5rem', lineHeight: 1.6, fontWeight: 300 }}>
                  Her bölümde sorum şu: <span style={{ color: '#F1515C' }}>Daha iyi bir yaşam nasıl mümkün?</span>
                </p>
              </div>
            </div>

            {/* Aile Bağları ve Hayatın Anlamı */}
            <div className="mb-20 bg-gray-50 py-16" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', paddingLeft: 'calc(50vw - 50%)', paddingRight: 'calc(50vw - 50%)' }}>
              <div className="max-w-[900px] mx-auto">
                <h2 className="font-josefin text-black mb-12 text-center" 
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
                  Aile Bağları ve Hayatın Anlamı
                </h2>
                <p className="font-josefin text-gray-600 mb-4"
                   style={{ fontSize: '1rem', lineHeight: 1.6, fontWeight: 200 }}>
                  Hayatın iniş çıkışları bana, güçlü bağların iyileştirici gücünü öğretti.
                </p>
                <p className="font-josefin text-gray-600 mb-8"
                   style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                  Ben bir teyze ve hala olduğum için, yeğenlerimle kurduğum bağ bana yeni nesillere 
                  aktarılacak bir ilham ve sorumluluk duygusu kazandırıyor. Tabii aynı zamanda 
                  köpeklerim Köfte ve Disco bana koşulsuz sevgiyi, sadakati ve şimdiki anda yaşamayı 
                  hatırlatıyor. Onlar benim için sadece dost değil, hayat yolculuğumun renkleri.
                </p>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                  Tüm bu deneyimler, ailem, sevdiklerim hem kendi yolculuğumda güçlü kalmamı ve 
                  hayata sıkı sıkıya bağlanmamı sağladı. Ve tabii başkaları için faydalı olma 
                  misyonumu daha da derinleştirdi.
                </p>
                <p className="font-josefin text-black mt-8 text-center"
                   style={{ fontSize: '1rem', lineHeight: 1.6, fontWeight: 300 }}>
                  Hedefim mi? Sadece kendi hayatımda değil, başkalarının hayatında da iyileşmenin ve gelişmenin bir yol
                  <br />haritasını paylaşmak.
                </p>
              </div>
            </div>

            {/* Felsefem & Yaklaşımlarım */}
            <div className="mb-20">
              <h2 className="font-josefin text-black mb-16 text-center" 
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
                Felsefem & Yaklaşımlarım
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1200px] mx-auto">
                <div>
                  <h3 className="font-josefin text-black mb-4" 
                      style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                    Hayatın Ölçüsü Süre Değil, Sağlıktır
                  </h3>
                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                    Benim için mesele yalnızca uzun yaşamak değil; iyi, bilinçli ve kaliteli yaşamak. 
                    Panik yerine önlem almak, yorgunluk yerine enerjiyle dolu olmak.
                  </p>
                </div>
                <div>
                  <h3 className="font-josefin text-black mb-4" 
                      style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                    Gerçek Sorumluluk
                  </h3>
                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                    İnsanların kendi sağlıklarının ve iyileşme süreçlerinin savunucusu olabilmeleri 
                    için onları doğru bilgi ve yöntemlerle donatmaya inanıyorum. Amaç her zaman 
                    bireyi güçlendirmek.
                  </p>
                </div>
                <div>
                  <h3 className="font-josefin text-black mb-4" 
                      style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                    Bilim ile Hayatın Dengesi
                  </h3>
                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                    Veri, klinik deneyim ve bilimsel yöntemleri konuşurken kendimi ne kadar rahat 
                    hissediyorsam; sezgi, yaşam enerjisi ve dönüşüm üzerine konuşurken de o kadar 
                    rahat hissediyorum.
                  </p>
                </div>
              </div>
            </div>

            {/* 10 Yıl Sonra */}
            <div className="mb-20 bg-black text-white py-16" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', paddingLeft: 'calc(50vw - 50%)', paddingRight: 'calc(50vw - 50%)' }}>
              <div className="max-w-[900px] mx-auto text-center">
                <h2 className="font-josefin text-white mb-8" 
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
                  10 Yıl Sonra...
                </h2>
                <p className="font-josefin text-white/90"
                   style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 200 }}>
                  Sağlık alanında büyük bir dönüşümün eşiğindeyiz. Yapay zekadan yeni tanı 
                  yöntemlerine, fonksiyonel tıptan rejeneratif yaklaşımlara kadar her şey değişiyor. 
                  Ben de bağımlılık, longevity ve sağlıklı yaşam alanlarında bu geleceğin 
                  şekillenmesine katkı sunmaya kararlıyım.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-20">
              <div className="max-w-[900px] mx-auto text-center">
                <blockquote className="font-josefin text-gray-700"
                            style={{ fontSize: '1.5rem', lineHeight: 1.8, fontWeight: 200, fontStyle: 'italic' }}>
                  "Burada öğüt vermek için değil, paylaşmak için varım. Eğer hikayem size daha iyi 
                  sorular sordurur, içgüdülerinize güvenmenize yardımcı olur ve kendi sağlığınıza 
                  bir adım daha yaklaşmanızı sağlarsa; bu benim için yeterli."
                </blockquote>
              </div>
            </div>

            {/* Birlikte Çalışalım */}
            <div className="mb-20 bg-gray-50 py-16" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', paddingLeft: 'calc(50vw - 50%)', paddingRight: 'calc(50vw - 50%)' }}>
              <div className="max-w-[900px] mx-auto text-center">
                <h2 className="font-josefin text-black mb-8" 
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
                  Birlikte Çalışalım
                </h2>
                <p className="font-josefin text-gray-600 mb-8"
                   style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 200 }}>
                  Amacı olan bir şey inşa ediyorsanız, sağlıklı yaşam yolculuğunda ilerliyorsanız 
                  ya da iş birliği fırsatlarını keşfetmek istiyorsanız sizinle tanışmayı çok isterim.
                </p>
                <p className="font-josefin text-gray-600 mb-8"
                   style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                  Bağımlılık, sağlıklı yaşam, longevity ve biohacking alanlarında; bireylerle, 
                  şirketlerle, sağlık merkezleriyle ve markalarla çalışıyorum.
                </p>
                <p className="font-josefin text-gray-600 mb-12"
                   style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                  Burada gördükleriniz size ilham verdiyse, konuşmaya başlayalım. Bilgim, deneyimim 
                  ve vizyonumla katkı sunabileceğim ya da sadece hikayelerimi paylaşarak faydalı 
                  olabileceğim her fırsata açığım.
                </p>
                <p className="font-josefin text-black mb-12"
                   style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 300 }}>
                  Konuşmacı olarak etkinliklerinizde, danışmanlık projelerinde ya da ortak 
                  iş birliklerinde buluşalım.
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
                  HADİ İLETİŞİME GEÇELİM
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}