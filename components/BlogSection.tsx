import Link from 'next/link';

export default function BlogSection() {
  const blogPosts = [
    {
      title: 'Bağımlılık Hastalığı ve Yeniden İcat Etmenin Gücü',
      excerpt: 'Yale deneyimimin ışığında Türkiye\'ye özgü rehabilitasyon modelinin geliştirilmesi ve 500+ gencin hayatına dokunma hikayesi.',
      date: 'Mart 15, 2024',
      readTime: '5 dk okuma',
      category: 'Terapi',
      href: '/blog'
    },
    {
      title: 'Biyohacking ile Uzun Ömür İçin Sağlık Protokolleri',
      excerpt: 'Longevilab\'da uyguladığımız en güncel biyohacking yöntemleri ve uzun ömür için bilimsel yaklaşımlar.',
      date: 'Mart 10, 2024',
      readTime: '7 dk okuma',
      category: 'Sağlık',
      href: '/blog'
    },
    {
      title: '18 Yıllık Ayıklık: Bilimsel Yaklaşım ve Umut',
      excerpt: 'Kendi ayıklık yolculuğumdan öğrendiklerim ve bağımlılıkla mücadelede sürdürülebilir başarının anahtarları.',
      date: 'Mart 5, 2024',
      readTime: '6 dk okuma',
      category: 'Kişisel',
      href: '/blog'
    }
  ];

  return (
    <section className="bg-white" style={{ padding: '3.3vmax 0' }}>
      <div className="w-full px-[4vw]">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-black" 
                style={{ 
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                  fontWeight: 200,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem'
                }}>
              Son <span style={{ color: '#E63946' }}>Yazılarım</span>
            </h2>
            <p className="font-playfair text-gray-600 max-w-3xl mx-auto"
               style={{ 
                 fontSize: '1.25rem', 
                 lineHeight: 1.7,
                 fontWeight: 200
               }}>
              Bağımlılık terapisi, biyohacking ve uzun ömür üzerine düşünceler, 
              deneyimler ve bilimsel yaklaşımlar.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[11px] mb-12">
            {blogPosts.map((post, index) => (
              <article key={index} 
                       className="bg-white group hover:bg-gray-50 transition-all duration-300"
                       style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gray-100">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-playfair text-gray-400"
                          style={{ fontSize: '3rem', fontWeight: 200 }}>
                      {post.category.charAt(0)}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Category & Meta */}
                  <div className="flex items-center mb-4">
                    <span className="font-playfair text-black/60"
                          style={{ 
                            fontSize: '0.75rem',
                            fontWeight: 300,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase'
                          }}>
                      {post.category}
                    </span>
                    <span className="mx-3 text-black/30">•</span>
                    <span className="font-playfair text-black/60"
                          style={{ fontSize: '0.875rem', fontWeight: 300 }}>
                      {post.date}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-playfair text-black mb-4 group-hover:text-black/80 transition-colors">
                    <Link href={post.href} 
                          style={{ 
                            fontSize: '1.5rem',
                            fontWeight: 300,
                            lineHeight: 1.3,
                            letterSpacing: '-0.01em'
                          }}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="font-playfair text-gray-600 mb-6"
                     style={{ 
                       fontSize: '1rem',
                       lineHeight: 1.7,
                       fontWeight: 300
                     }}>
                    {post.excerpt}
                  </p>
                  
                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <span className="font-playfair text-gray-500"
                          style={{ fontSize: '0.875rem', fontWeight: 300 }}>
                      {post.readTime}
                    </span>
                    <Link 
                      href={post.href}
                      className="font-playfair text-black hover:text-black/60 transition-colors inline-flex items-center"
                      style={{ 
                        fontSize: '0.75rem',
                        fontWeight: 300,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase'
                      }}
                    >
                      Devamını Oku
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-block font-playfair text-black hover:text-black/60 transition-all"
              style={{ 
                fontSize: '0.75rem',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                borderBottom: '1px solid #000',
                paddingBottom: '4px'
              }}
            >
              TÜM YAZILAR
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}