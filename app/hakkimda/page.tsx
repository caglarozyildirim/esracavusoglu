'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HakkimdaPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section - Manjit Style */}
      <section className="min-h-[70vh] flex items-center" style={{ paddingTop: '72px' }}>
        <div className="w-full px-[4vw] py-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="font-playfair text-black mb-8" 
                    style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                      fontWeight: 200,
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em'
                    }}>
                  <span style={{ color: '#E63946' }}>Bağımlılıktan</span>
                  <br />
                  <span style={{ fontWeight: 300 }}>İyileşmeye Uzanan Köprü.</span>
                </h1>
                
                <p className="font-playfair text-gray-600 mb-6"
                   style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 200 }}>
                  18 yıldır ayık, Yale mezunu, CASAC-T sertifikalı bağımlılık uzmanıyım. 
                  Kendi iyileşme yolculuğumu başkalarının dönüşümüne rehberlik etmek için kullanıyorum.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="font-playfair" style={{ fontSize: '0.875rem' }}>
                    📍 İstanbul, Türkiye
                  </div>
                  <div className="font-playfair" style={{ fontSize: '0.875rem' }}>
                    🎓 Yale University
                  </div>
                  <div className="font-playfair" style={{ fontSize: '0.875rem' }}>
                    ✓ CASAC-T Sertifikalı
                  </div>
                </div>
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

      {/* Story Section */}
      <section className="bg-gray-50" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-playfair text-black mb-12 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Benim Hikayem
            </h2>
              
            <div className="space-y-6">
              <p className="font-playfair text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                Yale Üniversitesi'nden psikoloji dalında mezun olduktan sonra, hayatım 
                beklenmedik bir dönüş aldı. Kendi bağımlılık mücadelem, bugün binlerce 
                insana umut olan bir iyileşme hikayesine dönüştü.
              </p>
              
              <p className="font-playfair text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                18 yıl önce başlayan ayıklık yolculuğum, bana öğretti ki gerçek güç, 
                zayıflıklarımızı kabul edip onları gücümüze dönüştürmekte yatıyor. 
                Bu deneyim, danışanlarıma sunduğum empatik ve bilimsel yaklaşımın temelini oluşturuyor.
              </p>
              
              <p className="font-playfair text-gray-600"
                 style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                ÇABAÇAD'ı kurarak Türkiye'de bağımlılık tedavisine yenilikçi yaklaşımlar getirdim. 
                Longevilab ile biyohacking ve uzun ömür protokollerini Türkiye'ye tanıttım. 
                Ayık Kafa Podcast'i ile binlerce kişiye ilham verdim.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Achievements Grid */}
      <section className="bg-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-playfair text-black mb-12 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Başarılar & Kilometre Taşları
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-playfair text-5xl mb-4" style={{ fontWeight: 200 }}>18+</div>
                <h3 className="font-playfair text-xl mb-2" style={{ fontWeight: 300 }}>Yıllık Ayıklık</h3>
                <p className="font-playfair text-gray-600 text-sm">Kendi iyileşme yolculuğum</p>
              </div>
              
              <div className="text-center">
                <div className="font-playfair text-5xl mb-4" style={{ fontWeight: 200 }}>2</div>
                <h3 className="font-playfair text-xl mb-2" style={{ fontWeight: 300 }}>Kurulan Şirket</h3>
                <p className="font-playfair text-gray-600 text-sm">ÇABAÇAD & Longevilab</p>
              </div>
              
              <div className="text-center">
                <div className="font-playfair text-5xl mb-4" style={{ fontWeight: 200 }}>500+</div>
                <h3 className="font-playfair text-xl mb-2" style={{ fontWeight: 300 }}>Danışan</h3>
                <p className="font-playfair text-gray-600 text-sm">İyileşme yolculuğuna tanıklık</p>
              </div>
              
              <div className="text-center">
                <div className="font-playfair text-5xl mb-4" style={{ fontWeight: 200 }}>100+</div>
                <h3 className="font-playfair text-xl mb-2" style={{ fontWeight: 300 }}>Podcast Bölümü</h3>
                <p className="font-playfair text-gray-600 text-sm">Ayık Kafa Podcast</p>
              </div>
              
              <div className="text-center">
                <div className="font-playfair text-5xl mb-4" style={{ fontWeight: 200 }}>50+</div>
                <h3 className="font-playfair text-xl mb-2" style={{ fontWeight: 300 }}>Seminer</h3>
                <p className="font-playfair text-gray-600 text-sm">Konuşmacı ve eğitmen</p>
              </div>
              
              <div className="text-center">
                <div className="font-playfair text-5xl mb-4" style={{ fontWeight: 200 }}>15+</div>
                <h3 className="font-playfair text-xl mb-2" style={{ fontWeight: 300 }}>Yıllık Deneyim</h3>
                <p className="font-playfair text-gray-600 text-sm">Bağımlılık terapisi alanında</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black text-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-playfair text-white mb-12 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Değerlerim
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-playfair mb-4" style={{ fontSize: '1.625rem', fontWeight: 300, color: '#E63946' }}>Empati</h3>
                <p className="font-playfair text-white/80 text-sm" style={{ lineHeight: 1.8 }}>
                  Her danışanın hikayesi benzersizdir. Yargısız, güvenli bir alan yaratırım.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-playfair mb-4" style={{ fontSize: '1.625rem', fontWeight: 300, color: '#E63946' }}>Bilimsellik</h3>
                <p className="font-playfair text-white/80 text-sm" style={{ lineHeight: 1.8 }}>
                  Kanıta dayalı yöntemlerle, en güncel tedavi protokollerini uygularım.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-playfair mb-4" style={{ fontSize: '1.625rem', fontWeight: 300, color: '#E63946' }}>Umut</h3>
                <p className="font-playfair text-white/80 text-sm" style={{ lineHeight: 1.8 }}>
                  İyileşme mümkündür. Her yeni gün, yeni bir başlangıç fırsatıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-playfair text-black mb-8" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Birlikte İyileşelim
            </h2>
            <p className="font-playfair text-gray-600 mb-12"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              İyileşme yolculuğunuzda yanınızda olmak için buradayım.
            </p>
            <Link href="/iletisim" 
                  className="inline-block font-playfair text-black hover:text-gray-600 transition-all"
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
      </section>

      <Footer />
    </>
  );
}