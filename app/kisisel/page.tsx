'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

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
                <h1 className="font-playfair text-white" 
                    style={{ 
                      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                      fontWeight: 200,
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em'
                    }}>
                  Kişisel Gelişim & <span style={{ color: '#F1515C' }}>Biyohacking.</span>
                </h1>
                <p className="font-playfair text-white/80 mt-8 max-w-3xl"
                   style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
                  18 yıllık ayıklık yolculuğum ve Longevilab'da uygulandığım 
                  en güncel biyohacking protokolleri ile sağlıklı yaşam.
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
            
            {/* Ayik Kafa Podcast */}
            <div className="mb-20">
              <h2 className="font-playfair text-black mb-8" 
                  style={{ fontSize: '2.5rem', fontWeight: 200, letterSpacing: '-0.02em' }}>
                Ayık Kafa Podcast
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <p className="font-playfair text-gray-600 mb-6"
                     style={{ fontSize: '1.25rem', lineHeight: 1.8, fontWeight: 200 }}>
                    Her hafta yeni bir bölümle, bağımlılık hastalığı, iyileşme yolculuğu, 
                    biyohacking ve uzun ömür üzerine konuşuyorum. 100'den fazla bölümde, 
                    hem kendi deneyimlerimi hem de alanında uzman konukların bilgilerini paylaşıyorum.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-black rounded-full mr-3"></span>
                      <span className="font-playfair text-gray-700" style={{ fontSize: '1.09rem' }}>
                        Haftalık yayınlar
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-black rounded-full mr-3"></span>
                      <span className="font-playfair text-gray-700" style={{ fontSize: '1.09rem' }}>
                        100+ bölüm arşivi
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-1 h-1 bg-black rounded-full mr-3"></span>
                      <span className="font-playfair text-gray-700" style={{ fontSize: '1.09rem' }}>
                        Uzman konuklar
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  {/* Empty space for layout balance */}
                </div>
              </div>
            </div>

            {/* Longevilab */}
            <div className="mb-20">
              <h2 className="font-playfair text-black mb-8" 
                  style={{ fontSize: '2.5rem', fontWeight: 200, letterSpacing: '-0.02em' }}>
                Longevilab - Uzun Ömür Kliniği
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="p-8" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <h3 className="font-playfair text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                    Gen Testleri
                  </h3>
                  <p className="font-playfair text-gray-600" style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
                    Kişiselleştirilmiş sağlık optimizasyonu için genetik analizler.
                  </p>
                </div>
                <div className="p-8" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <h3 className="font-playfair text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                    NAD+ Terapileri
                  </h3>
                  <p className="font-playfair text-gray-600" style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
                    Hücresel enerji üretimi ve yaşlanma karşıtı protokoller.
                  </p>
                </div>
                <div className="p-8" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <h3 className="font-playfair text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                    Peptid Protokolleri
                  </h3>
                  <p className="font-playfair text-gray-600" style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
                    Performans artışı ve iyileşme hızlandırma programları.
                  </p>
                </div>
              </div>
            </div>

            {/* 18 Yillik Ayiklik */}
            <div className="bg-black text-white p-12 -mx-[4vw]">
              <div className="max-w-[800px] mx-auto text-center">
                <h2 className="font-playfair text-white mb-8" 
                    style={{ fontSize: '2.5rem', fontWeight: 200, letterSpacing: '-0.02em' }}>
                  "18 yıldır ayığım."
                </h2>
                <p className="font-playfair text-white/80"
                   style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
                  Bu yolculuk bana öğretti ki, gerçek güç zayıflıklarımızı kabul edip 
                  onları gücümüze dönüştürmekte yatıyor. Bugün, bu deneyimi başkalarının 
                  iyileşme yolculuğunda rehber olmak için kullanıyorum.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}