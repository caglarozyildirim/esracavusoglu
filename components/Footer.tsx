import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="w-full px-[4vw]" style={{ paddingTop: '3.3vmax', paddingBottom: '3.3vmax' }}>
        <div className="max-w-[1400px] mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="font-josefin text-white inline-block mb-8"
                    style={{ fontSize: '1.71875rem', fontWeight: 200, letterSpacing: '-0.02em' }}>
                <span style={{ color: '#E63946' }}>Esra Çavuşoğlu.</span>
              </Link>
              
              <p className="font-josefin text-white/80 mb-8 max-w-lg"
                 style={{ fontSize: '1.375rem', lineHeight: 1.7, fontWeight: 200 }}>
                Klinik psikolog, girişimci, uluslararası konuşmacı ve Türkiye'nin ilk biohacker'ı.
              </p>
              
              
              {/* Social Links */}
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/esra-m-cavusoglu-phd-casac-cac-77548021/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/esracavusoglu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div>
              <h3 className="font-josefin text-white/60 mb-6"
                  style={{ fontSize: '1.03125rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Sayfalar
              </h3>
              <ul className="space-y-3">
                <li><Link href="/" className="font-josefin text-white/80 hover:text-white transition-colors" 
                         style={{ fontSize: '1.203125rem', fontWeight: 200 }}>ANA SAYFA</Link></li>
                <li><Link href="/hakkimda" className="font-josefin text-white/80 hover:text-white transition-colors" 
                         style={{ fontSize: '1.203125rem', fontWeight: 200 }}>HAKKIMDA</Link></li>
                <li><Link href="/is-hayati" className="font-josefin text-white/80 hover:text-white transition-colors" 
                         style={{ fontSize: '1.203125rem', fontWeight: 200 }}>İŞ HAYATI</Link></li>
                <li><Link href="/kisisel" className="font-josefin text-white/80 hover:text-white transition-colors" 
                         style={{ fontSize: '1.203125rem', fontWeight: 200 }}>KİŞİSEL</Link></li>
                <li><a href="https://www.longevilab.com/k/izle"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="font-josefin text-white/80 hover:text-white transition-colors"
                       style={{ fontSize: '1.203125rem', fontWeight: 200 }}>AYIK KAFA</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-josefin text-white/60 mb-6"
                  style={{ fontSize: '1.03125rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                İletişim
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@esracavusoglu.com" className="font-josefin text-white/80 hover:text-white transition-colors"
                     style={{ fontSize: '1.203125rem', fontWeight: 200 }}>
                    hello@esracavusoglu.com
                  </a>
                </li>
                <li>
                  <span className="font-josefin text-white/80" style={{ fontSize: '1.203125rem', fontWeight: 200 }}>
                    İstanbul, Türkiye
                  </span>
                </li>
                <li>
                  <Link href="/iletisim" className="font-josefin text-white/80 hover:text-white transition-colors"
                        style={{ fontSize: '1.203125rem', fontWeight: 200 }}>
                    İletişim Formu
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-josefin text-white/60" style={{ fontSize: '1.03125rem', fontWeight: 200 }}>
                © {new Date().getFullYear()} Esra Çavuşoğlu. Tüm hakları saklıdır.
              </p>
              <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                <Link href="/gizlilik-politikasi" className="font-josefin text-white/60 hover:text-white transition-colors"
                      style={{ fontSize: '1.03125rem', fontWeight: 200 }}>
                  Kişisel Veri Politikası
                </Link>
                <Link href="/cerez-politikasi" className="font-josefin text-white/60 hover:text-white transition-colors"
                      style={{ fontSize: '1.03125rem', fontWeight: 200 }}>
                  Çerez Politikası
                </Link>
                <Link href="/aydinlatma-metni" className="font-josefin text-white/60 hover:text-white transition-colors"
                      style={{ fontSize: '1.03125rem', fontWeight: 200 }}>
                  Aydınlatma Metni
                </Link>
                <Link href="/acik-riza-onay-formu" className="font-josefin text-white/60 hover:text-white transition-colors"
                      style={{ fontSize: '1.03125rem', fontWeight: 200 }}>
                  Açık Rıza Onay Formu
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}