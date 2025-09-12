'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function IsHayatiPage() {
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
                  <span style={{ color: '#E63946' }}>Bağımlılıktan Kurtulmanın</span>
                  <br />
                  <span style={{ fontWeight: 300 }}>Bilimsel Yolu.</span>
                </h1>
                
                <p className="font-playfair text-gray-600 mb-8 max-w-3xl"
                   style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 200 }}>
                  Yale metodolojisi ve 18 yıllık deneyimimle, bağımlılık tedavisinde 
                  kanıta dayalı, kültürel olarak duyarlı çözümler sunuyorum.
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

      {/* Services Overview */}
      <section className="bg-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-playfair text-black mb-16 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Hizmetlerim
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-gray-200">
              <div className="bg-white p-12">
                <div className="text-4xl mb-6">🧠</div>
                <h3 className="font-playfair text-black mb-4" 
                    style={{ fontSize: '1.75rem', fontWeight: 300 }}>
                  Bireysel Terapi
                </h3>
                <p className="font-playfair text-gray-600 mb-6"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Yale protokolleriyle kişiselleştirilmiş bağımlılık terapisi. 
                  Travma odaklı, bilişsel-davranışçı yaklaşımlarla bütüncül tedavi.
                </p>
                <ul className="space-y-2">
                  <li className="font-playfair text-gray-700 text-sm">• Bağımlılık Terapisi</li>
                  <li className="font-playfair text-gray-700 text-sm">• Travma Terapisi</li>
                  <li className="font-playfair text-gray-700 text-sm">• Aile Danışmanlığı</li>
                  <li className="font-playfair text-gray-700 text-sm">• Online Seanslar</li>
                </ul>
              </div>
              
              <div className="bg-white p-12">
                <div className="text-4xl mb-6">🏥</div>
                <h3 className="font-playfair text-black mb-4" 
                    style={{ fontSize: '1.75rem', fontWeight: 300 }}>
                  Kurumsal Danışmanlık
                </h3>
                <p className="font-playfair text-gray-600 mb-6"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Rehabilitasyon merkezleri için program geliştirme ve süpervizyon. 
                  Bilimsel standartlarda tedavi protokolleri oluşturma.
                </p>
                <ul className="space-y-2">
                  <li className="font-playfair text-gray-700 text-sm">• Program Tasarımı</li>
                  <li className="font-playfair text-gray-700 text-sm">• Ekip Eğitimi</li>
                  <li className="font-playfair text-gray-700 text-sm">• Süpervizyon</li>
                  <li className="font-playfair text-gray-700 text-sm">• Kalite Standartları</li>
                </ul>
              </div>
              
              <div className="bg-white p-12">
                <div className="text-4xl mb-6">🎓</div>
                <h3 className="font-playfair text-black mb-4" 
                    style={{ fontSize: '1.75rem', fontWeight: 300 }}>
                  Eğitim & Seminerler
                </h3>
                <p className="font-playfair text-gray-600 mb-6"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Profesyoneller ve aileler için bağımlılık farkındalığı eğitimleri. 
                  Yale deneyimimle zenginleştirilmiş içerikler.
                </p>
                <ul className="space-y-2">
                  <li className="font-playfair text-gray-700 text-sm">• Profesyonel Eğitimler</li>
                  <li className="font-playfair text-gray-700 text-sm">• Aile Seminerleri</li>
                  <li className="font-playfair text-gray-700 text-sm">• Okul Programları</li>
                  <li className="font-playfair text-gray-700 text-sm">• Online Webinarlar</li>
                </ul>
              </div>
              
              <div className="bg-white p-12">
                <div className="text-4xl mb-6">🔬</div>
                <h3 className="font-playfair text-black mb-4" 
                    style={{ fontSize: '1.75rem', fontWeight: 300 }}>
                  Biyohacking Protokolleri
                </h3>
                <p className="font-playfair text-gray-600 mb-6"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Longevilab'da uyguladığımız en güncel biyohacking ve uzun ömür protokolleri. 
                  NAD+ terapileri, peptid protokolleri ve genetik optimizasyon.
                </p>
                <ul className="space-y-2">
                  <li className="font-playfair text-gray-700 text-sm">• NAD+ Terapileri</li>
                  <li className="font-playfair text-gray-700 text-sm">• Peptid Protokolleri</li>
                  <li className="font-playfair text-gray-700 text-sm">• Gen Testleri</li>
                  <li className="font-playfair text-gray-700 text-sm">• Performans Optimizasyonu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="bg-gray-50" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-playfair text-black mb-16 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Profesyonel Yolculuğum
            </h2>
            
            <div className="max-w-[900px] mx-auto">
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="font-playfair text-gray-500 text-sm" style={{ minWidth: '100px' }}>
                    2022 - Günümüz
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-black mb-2" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                      Longevilab
                    </h3>
                    <p className="font-playfair text-gray-600 mb-2" style={{ fontSize: '1rem' }}>
                      Kurucu & CEO
                    </p>
                    <p className="font-playfair text-gray-600" style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
                      Türkiye'nin ilk biyohacking ve uzun ömür kliniği. En güncel longevity 
                      protokollerini Türkiye'ye getirerek, optimal sağlık ve performans alanında öncü çalışmalar.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-8">
                  <div className="font-playfair text-gray-500 text-sm" style={{ minWidth: '100px' }}>
                    2018 - Günümüz
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-black mb-2" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                      ÇABAÇAD
                    </h3>
                    <p className="font-playfair text-gray-600 mb-2" style={{ fontSize: '1rem' }}>
                      Kurucu & Başkan
                    </p>
                    <p className="font-playfair text-gray-600" style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
                      Çocuk ve Aile Bağımlılıkla Mücadele Derneği. 500'den fazla aileye 
                      ücretsiz danışmanlık ve eğitim desteği.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-8">
                  <div className="font-playfair text-gray-500 text-sm" style={{ minWidth: '100px' }}>
                    2013 - 2018
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-black mb-2" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                      Özel Pratik
                    </h3>
                    <p className="font-playfair text-gray-600 mb-2" style={{ fontSize: '1rem' }}>
                      Bağımlılık Terapisti
                    </p>
                    <p className="font-playfair text-gray-600" style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
                      New York ve İstanbul'da özel danışmanlık. Bireysel ve grup terapileri 
                      ile yüzlerce kişinin iyileşme yolculuğuna tanıklık.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-8">
                  <div className="font-playfair text-gray-500 text-sm" style={{ minWidth: '100px' }}>
                    2007 - 2012
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-black mb-2" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                      Yale Üniversitesi
                    </h3>
                    <p className="font-playfair text-gray-600 mb-2" style={{ fontSize: '1rem' }}>
                      Araştırma Görevlisi
                    </p>
                    <p className="font-playfair text-gray-600" style={{ fontSize: '0.875rem', lineHeight: 1.8 }}>
                      Bağımlılık nörobiyolojisi üzerine araştırmalar. Klinik protokol 
                      geliştirme ve kanıta dayalı tedavi yaklaşımları.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white" style={{ padding: '5vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-playfair text-6xl mb-4" style={{ fontWeight: 200 }}>500+</div>
                <p className="font-playfair text-white/80 text-sm">Tedavi Edilen Danışan</p>
              </div>
              <div>
                <div className="font-playfair text-6xl mb-4" style={{ fontWeight: 200 }}>50+</div>
                <p className="font-playfair text-white/80 text-sm">Kurum Danışmanlığı</p>
              </div>
              <div>
                <div className="font-playfair text-6xl mb-4" style={{ fontWeight: 200 }}>100+</div>
                <p className="font-playfair text-white/80 text-sm">Eğitim & Seminer</p>
              </div>
              <div>
                <div className="font-playfair text-6xl mb-4" style={{ fontWeight: 200 }}>15+</div>
                <p className="font-playfair text-white/80 text-sm">Yıllık Deneyim</p>
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
              Profesyonel Destek İçin
            </h2>
            <p className="font-playfair text-gray-600 mb-12"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              Bireysel terapi, kurumsal danışmanlık veya eğitim programları için benimle iletişime geçin.
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