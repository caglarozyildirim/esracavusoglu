'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
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
                  Yayınlar & <span style={{ color: '#F1515C' }}>İçerikler.</span>
                </h1>
                <p className="font-josefin text-white/80 mt-8 max-w-3xl"
                   style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
                  Ayık Kafa Podcast, Longevilab içerikleri ve medya görünümlerim
                </p>
              </div>
              
              <div className="relative h-[500px]">
                <Image
                  src="/images/esra-cavusoglu-profile.jpg"
                  alt="Dr. Esra Çavuşoğlu - Blog"
                  fill
                  className="object-cover object-center rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ayık Kafa Podcast Section */}
      <section className="bg-white" style={{ padding: '3.3vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-black mb-12 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Ayık Kafa Podcast
            </h2>
            <p className="font-josefin text-gray-600 text-center max-w-[900px] mx-auto mb-16"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              Her hafta yeni bir bölümle, bağımlılık hastalığı, iyileşme yolculuğu, biyohacking ve 
              uzun ömür üzerine dünyaca tanınmış bilim insanları ve doktorlarla sohbetler.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <svg className="w-48 h-48" viewBox="0 0 24 24" fill="#1DB954">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  100+ Bölüm
                </h3>
                <p className="font-josefin text-gray-600 mb-6"
                   style={{ fontSize: '1.125rem', lineHeight: 1.8, fontWeight: 200 }}>
                  Bağımlılıktan longevity'e, fonksiyonel tıptan biohacking'e, estetik uygulamalardan 
                  yenilikçi tedavilere kadar pek çok alanda içerikler.
                </p>
                <div>
                  <a href="https://open.spotify.com/show/ayikkafa" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-block font-josefin text-black hover:text-gray-600 transition-all"
                     style={{ 
                       fontSize: '0.75rem', 
                       fontWeight: 300, 
                       letterSpacing: '0.2em', 
                       textTransform: 'uppercase',
                       borderBottom: '1px solid #000',
                       paddingBottom: '4px'
                     }}>
                    SPOTIFY'DA DİNLE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Longevilab Section */}
      <section className="bg-gray-50" style={{ padding: '3.3vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-black mb-12 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Longevilab İçerikleri
            </h2>
            <p className="font-josefin text-gray-600 text-center max-w-[900px] mx-auto mb-16"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              Türkiye'nin ilk biyohacking ve uzun ömür kliniği Longevilab'dan en güncel 
              sağlık, longevity ve performans optimizasyonu içerikleri.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  NAD+ Protokolleri
                </h3>
                <p className="font-josefin text-gray-600 mb-6"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Hücresel enerji üretimi ve yaşlanma karşıtı tedaviler hakkında detaylı bilgiler.
                </p>
                <Link href="/iletisim" 
                      className="font-josefin text-black hover:text-gray-600 transition-all"
                      style={{ fontSize: '0.875rem', textDecoration: 'underline' }}>
                  Daha Fazla Bilgi →
                </Link>
              </div>
              
              <div className="bg-white p-8">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Peptid Terapileri
                </h3>
                <p className="font-josefin text-gray-600 mb-6"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Performans artışı ve iyileşme hızlandırma protokolleri üzerine yazılar.
                </p>
                <Link href="/iletisim" 
                      className="font-josefin text-black hover:text-gray-600 transition-all"
                      style={{ fontSize: '0.875rem', textDecoration: 'underline' }}>
                  Daha Fazla Bilgi →
                </Link>
              </div>
              
              <div className="bg-white p-8">
                <h3 className="font-josefin text-black mb-4" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Genetik Analizler
                </h3>
                <p className="font-josefin text-gray-600 mb-6"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Kişiselleştirilmiş sağlık optimizasyonu için gen testleri ve epigenetik.
                </p>
                <Link href="/iletisim" 
                      className="font-josefin text-black hover:text-gray-600 transition-all"
                      style={{ fontSize: '0.875rem', textDecoration: 'underline' }}>
                  Daha Fazla Bilgi →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basında Ben Section */}
      <section className="bg-white" style={{ padding: '3.3vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-josefin text-black mb-12 text-center" 
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
              Basında Ben
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
                <h3 className="font-josefin text-black mb-2" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Hülya Avşar ile Yaşamaya Dair
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
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
                <h3 className="font-josefin text-black mb-2" style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                  Özlem Gürses ile Hayatın Renkleri
                </h3>
                <p className="font-josefin text-gray-600"
                   style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  Sağlıklı yaşam ve biyohacking üzerine ilham verici bir söyleşi.
                </p>
              </div>
            </div>
            
            {/* Diğer Medya Görünümleri */}
            <div className="border-t pt-12">
              <h3 className="font-josefin text-black mb-8 text-center" 
                  style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                Diğer Yayınlar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <a href="https://gazeteoksijen.com/muzik/podcast-onerileri-247410" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="font-josefin text-black hover:text-gray-600 transition-all block mb-2"
                     style={{ fontSize: '1.125rem', fontWeight: 300 }}>
                    Oksijen Gazetesi
                  </a>
                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '0.875rem' }}>
                    Podcast Önerileri Röportajı
                  </p>
                </div>
                
                <div className="text-center">
                  <span className="font-josefin text-black block mb-2"
                        style={{ fontSize: '1.125rem', fontWeight: 300 }}>
                    L'Officiel Türkiye
                  </span>
                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '0.875rem' }}>
                    Sağlık ve Yaşam Röportajı
                  </p>
                </div>
                
                <div className="text-center">
                  <span className="font-josefin text-black block mb-2"
                        style={{ fontSize: '1.125rem', fontWeight: 300 }}>
                    Sober Magazine
                  </span>
                  <p className="font-josefin text-gray-600"
                     style={{ fontSize: '0.875rem' }}>
                    İyileşme Hikayeleri
                  </p>
                </div>
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
              "Bilgi paylaştıkça değer kazanır."
            </h2>
            <p className="font-josefin text-white/80 mb-12"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              İçeriklerim size ilham verdiyse, birlikte daha fazlasını yaratalım.
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
              İŞBİRLİĞİ İÇİN İLETİŞİME GEÇİN
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}