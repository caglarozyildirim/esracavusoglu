import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: 'Psikoloji & Terapi',
      description: 'Bağımlılık terapisi, klinik danışmanlık ve psikolojik destek hizmetleri. Türkiye Rehabilitasyon Modeli\'nin tasarımcısı.',
      href: '/is-hayati',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Biyohacking & Longevilab',
      description: 'Uzun ömür ve biyohacking alanında en yeni protokoller. Longevilab kurucusu olarak sağlıklı yaşam koçluğu.',
      href: '/kisisel',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Ayık Kafa Podcast',
      description: 'Bağımlılık hastalığı, biyohacking ve uzun ömür üzerine haftalık podcast yayınları. 18 yıllık ayık yaşam deneyimi.',
      href: '/blog',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: 'Eğitim & Danışmanlık',
      description: 'ÇABAÇAD kurucusu olarak bağımlılıkla mücadele eğitimleri. Yale Tıp Fakültesi\'nde uluslararası danışmanlık.',
      href: '/iletisim',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white" style={{ padding: '3.3vmax 0' }}>
      <div className="w-full px-[4vw]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[11px]">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                className="group block bg-white hover:bg-gray-50 transition-all duration-300"
                style={{ 
                  border: '1px solid rgba(0,0,0,0.08)',
                  padding: '2.5rem 2rem'
                }}
              >
                {/* Icon */}
                <div className="mb-6 text-black/60 group-hover:text-black transition-colors">
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-playfair text-black" 
                      style={{ 
                        fontSize: '1.6rem', 
                        fontWeight: 300,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em'
                      }}>
                    {service.title}
                  </h3>
                  <p className="font-playfair text-gray-600" 
                     style={{ 
                       fontSize: '1rem', 
                       lineHeight: 1.7,
                       fontWeight: 300
                     }}>
                    {service.description}
                  </p>
                </div>
                
                {/* Learn More Link */}
                <div className="flex items-center mt-6 text-black/60 group-hover:text-black transition-colors">
                  <span className="font-playfair" 
                        style={{ 
                          fontSize: '0.9rem', 
                          fontWeight: 300,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase'
                        }}>
                    DAHA FAZLA
                  </span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}