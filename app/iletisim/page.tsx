'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IletisimPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black text-white min-h-[40vh] flex items-center" style={{ paddingTop: '72px' }}>
        <div className="w-full px-[4vw] py-20">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="font-josefin text-white" 
                style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                  fontWeight: 200,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}>
              Birlikte <span style={{ color: '#F1515C' }}>Çalışalım.</span>
            </h1>
            <p className="font-josefin text-white/80 mt-8 max-w-3xl"
               style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
              Eğer bir girişimci, startup, yatırımcı, medya kuruluşu veya misyon odaklı bir bireyseniz,
              sağlık, eğitim, teknoloji ve wellness alanında birlikte çalışmayı çok isterim.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white" style={{ padding: '3.3vmax 0' }}>
        <div className="w-full px-[4vw]">
          <div className="max-w-[900px] mx-auto">
            
            {/* Contact Form */}
            <form className="space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-josefin text-black block mb-2"
                         style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Ad *
                  </label>
                  <input type="text" 
                         required
                         className="w-full font-josefin border-b border-black/20 pb-2 focus:border-black transition-colors outline-none"
                         style={{ fontSize: '1rem' }}
                         placeholder="Adınız" />
                </div>
                <div>
                  <label className="font-josefin text-black block mb-2"
                         style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Soyad *
                  </label>
                  <input type="text" 
                         required
                         className="w-full font-josefin border-b border-black/20 pb-2 focus:border-black transition-colors outline-none"
                         style={{ fontSize: '1rem' }}
                         placeholder="Soyadınız" />
                </div>
              </div>
              
              {/* Email */}
              <div>
                <label className="font-josefin text-black block mb-2"
                       style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  E-posta *
                </label>
                <input type="email" 
                       required
                       className="w-full font-josefin border-b border-black/20 pb-2 focus:border-black transition-colors outline-none"
                       style={{ fontSize: '1rem' }}
                       placeholder="ornek@email.com" />
              </div>
              
              {/* Connection Purpose */}
              <div>
                <label className="font-josefin text-black block mb-4"
                       style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Bağlantı Amacınız *
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="font-josefin text-gray-700" style={{ fontSize: '0.95rem' }}>
                      Danışmanlık veya terapi
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="font-josefin text-gray-700" style={{ fontSize: '0.95rem' }}>
                      Kurumsal işbirliği
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="font-josefin text-gray-700" style={{ fontSize: '0.95rem' }}>
                      Konuşma veya podcast daveti
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="font-josefin text-gray-700" style={{ fontSize: '0.95rem' }}>
                      Eğitim ve seminer talebi
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="font-josefin text-gray-700" style={{ fontSize: '0.95rem' }}>
                      Diğer
                    </span>
                  </label>
                </div>
              </div>
              
              {/* Message */}
              <div>
                <label className="font-josefin text-black block mb-2"
                       style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Mesajınız *
                </label>
                <textarea required
                          rows={6}
                          className="w-full font-josefin border border-black/20 p-4 focus:border-black transition-colors outline-none resize-none"
                          style={{ fontSize: '1rem' }}
                          placeholder="Mesajınızı buraya yazın..." />
              </div>
              
              {/* File Upload */}
              <div>
                <label className="font-josefin text-black block mb-2"
                       style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Dosya Ekle (Opsiyonel)
                </label>
                <input type="file" 
                       multiple
                       accept=".pdf,.doc,.docx,.jpg,.png"
                       className="font-josefin text-gray-600"
                       style={{ fontSize: '0.875rem' }} />
                <p className="font-josefin text-gray-500 mt-2" style={{ fontSize: '0.75rem' }}>
                  En fazla 2 dosya yükleyebilirsiniz
                </p>
              </div>
              
              {/* Submit Button */}
              <div className="pt-8">
                <button type="submit"
                        className="font-josefin text-black hover:text-gray-600 transition-all"
                        style={{ 
                          fontSize: '0.75rem',
                          fontWeight: 300,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          borderBottom: '1px solid #000',
                          paddingBottom: '4px'
                        }}>
                  GÖNDER
                </button>
              </div>
            </form>
            
            {/* Social Links */}
            <div className="mt-20 pt-20 border-t border-black/10">
              <div className="text-center">
                <h3 className="font-josefin text-black mb-8"
                    style={{ fontSize: '1.5rem', fontWeight: 200 }}>
                  Sosyal Medyada Bağlanalım
                </h3>
                <div className="flex justify-center space-x-12">
                  <a href="https://www.instagram.com/esracavusoglu/" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex flex-col items-center text-gray-600 hover:text-black transition-colors">
                    <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                    <span className="font-josefin" style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Instagram
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/esra-m-cavusoglu-phd-casac-cac-77548021/" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex flex-col items-center text-gray-600 hover:text-black transition-colors">
                    <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="font-josefin" style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Media Appearances */}
            <div className="mt-20 pt-20 border-t border-black/10">
              <h2 className="font-josefin text-black mb-12 text-center" 
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 200, letterSpacing: '-0.02em' }}>
                Basında Ben
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                <div className="text-center">
                  <p className="font-josefin text-gray-600 mb-4" style={{ fontSize: '1.09rem' }}>
                    <strong>Hülya Avşar ile Yaşamaya Dair</strong>
                  </p>
                  <a href="https://www.youtube.com/watch?v=example1" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="font-josefin text-black hover:text-gray-600 transition-colors"
                     style={{ fontSize: '0.875rem', textDecoration: 'underline' }}>
                    Programı İzle
                  </a>
                </div>
                <div className="text-center">
                  <p className="font-josefin text-gray-600 mb-4" style={{ fontSize: '1.09rem' }}>
                    <strong>Özlem Gürses ile Hayatın Renkleri</strong>
                  </p>
                  <a href="https://www.youtube.com/watch?v=example2" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="font-josefin text-black hover:text-gray-600 transition-colors"
                     style={{ fontSize: '0.875rem', textDecoration: 'underline' }}>
                    Programı İzle
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 pt-20 border-t border-black/10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-josefin text-black mb-8" 
                    style={{ fontSize: '2.5rem', fontWeight: 200, letterSpacing: '-0.02em' }}>
                  "Her iyileşme hikayesi bir umut ışığıdır."
                </h2>
                <p className="font-josefin text-gray-600 mb-12"
                   style={{ fontSize: '1.25rem', lineHeight: 1.7, fontWeight: 200 }}>
                  Sizin veya sevdiğiniz birinin iyileşme yolculuğunda yanınızda olmak için buradayım.
                </p>
                <a href="mailto:hello@esracavusoglu.com" 
                   className="inline-block font-josefin text-black hover:text-gray-600 transition-all"
                   style={{ 
                     fontSize: '0.75rem', 
                     fontWeight: 300, 
                     letterSpacing: '0.2em', 
                     textTransform: 'uppercase',
                     borderBottom: '1px solid #000',
                     paddingBottom: '4px'
                   }}>
                  E-POSTA GÖNDER
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}