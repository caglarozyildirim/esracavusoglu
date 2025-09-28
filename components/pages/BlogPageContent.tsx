import Link from 'next/link';
import PageHeroSlider from '../PageHeroSlider';

export default function BlogPageContent() {
  const blogSlides = [
    {
      title: "Düşünceler.\nDeneyimler.\nPerspektifler.",
      subtitle: "Bağımlılık, sağlık, girişimcilik ve yaşam üzerine yazılarım. Bilimsel araştırmalar ve kişisel deneyimlerimin kesiştiği noktada."
    },
    {
      title: "Bilim.\nDeneyim.\nUmut.",
      subtitle: "Ayıklık yolculuğumda öğrendiklerimi ve profesyonel deneyimlerimi paylaşıyorum."
    }
  ];

  const blogPosts = [
    {
      title: 'Bağımlılıkta İyileşme Sürecinin Gerçekleri',
      excerpt: 'Bağımlılık tedavisinde bilimsel yaklaşımlar ve kişisel deneyimlerimle iyileşme sürecinin gerçeklerini anlatıyorum.',
      date: 'Mart 15, 2024',
      category: 'Bağımlılık',
      readTime: '8 dk okuma'
    },
    {
      title: 'Yale Deneyimim: Uluslararası Sağlık Politikaları',
      excerpt: 'Yale Tıp Fakültesi\'ndeki çalışmalarım ve uluslararası sağlık politikalarına katkılarım.',
      date: 'Mart 10, 2024',
      category: 'Sağlık',
      readTime: '6 dk okuma'
    },
    {
      title: 'Türkiye Rehabilitasyon Modeli: Başarı Hikayesi',
      excerpt: 'Gaziantep\'te geliştirdiğimiz rehabilitasyon modelinin Türkiye standardı haline gelme hikayesi.',
      date: 'Mart 5, 2024',
      category: 'Rehabilitasyon',
      readTime: '7 dk okuma'
    },
    {
      title: 'Gençlerin Hayatını Değiştirmek',
      excerpt: 'Bağımlılıktan kurtulan gençlerin hikayelerinden çıkardığımız dersler ve öğrendiklerimiz.',
      date: 'Şubat 28, 2024',
      category: 'Başarı Hikayeleri',
      readTime: '9 dk okuma'
    },
    {
      title: 'ÇABAÇAD ve Longevilab: Vizyon ve Misyon',
      excerpt: 'Kurduğum organizasyonların arkasındaki vizyon ve Türkiye\'de bağımlılık bilimi alanına katkıları.',
      date: 'Şubat 22, 2024',
      category: 'Girişimcilik',
      readTime: '5 dk okuma'
    },
    {
      title: 'Biyohacking ve Uzun Yaşam: Bilimsel Yaklaşım',
      excerpt: 'Longevilab ile geliştirdiğimiz biyohacking yaklaşımları ve uzun yaşam stratejileri.',
      date: 'Şubat 15, 2024',
      category: 'Sağlık',
      readTime: '10 dk okuma'
    }
  ];

  return (
    <>
      <PageHeroSlider 
        slides={blogSlides}
        ctaText="YAZILARIMI OKU"
        ctaLink="#blog-posts"
      />
      
      <main className="bg-manjit" id="blog-posts">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-crimson font-normal text-center mb-16 text-white">En Son Yazılarım</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-taupe-dark bg-opacity-50 rounded-lg overflow-hidden hover:bg-opacity-70 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-crimson font-normal text-manjit-coral uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs font-crimson text-manjit-coral">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-crimson font-normal mb-3 text-white leading-tight">
                      <Link href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`} className="hover:text-manjit-coral transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-manjit-coral font-crimson text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-crimson text-manjit-coral">
                        {post.date}
                      </span>
                      <Link 
                        href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                        className="text-xs font-crimson font-normal text-white hover:text-manjit-coral transition-colors uppercase tracking-wide"
                      >
                        Devamını Oku →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/iletisim"
                className="cta-button inline-flex items-center justify-center font-crimson"
              >
                TÜM YAZILAR İÇİN İLETİŞİM
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}